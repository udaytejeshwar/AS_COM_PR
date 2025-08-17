import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Settings } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Check if we're on a product detail page
  const isProductDetailPage = /^\/products\/[^\/]+$/.test(location.pathname);

  // Force scrolled state on product detail pages for visibility
  const headerIsScrolled = isScrolled || isProductDetailPage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  };

  const toggleDropdown = (dropdown: string) => {
    if (dropdown === 'products' || dropdown === 'applications') {
      setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
      setActiveSubDropdown(null); // Close any sub-dropdown when switching main
    } else {
      setActiveSubDropdown(activeSubDropdown === dropdown ? null : dropdown);
    }
  };

  const toggleSubDropdown = (dropdown: string) => {
    setActiveSubDropdown(activeSubDropdown === dropdown ? null : dropdown);
  };


  const navLinkClass = ({ isActive }: { isActive: boolean }) => {
    const baseClasses = 'flex items-center px-3 py-2 transform transition-all duration-200 hover:scale-105';
    const textColor = headerIsScrolled
      ? (isActive 
          ? 'text-gray-900 font-medium scale-105' 
          : 'text-gray-700 hover:text-gray-900')
      : (isActive
          ? 'text-white font-medium scale-105'
          : 'text-white hover:text-white');
    
    return `${baseClasses} ${textColor}`;
  };

  const dropdownButtonClass = headerIsScrolled
    ? 'flex items-center px-3 py-2 text-gray-700 hover:text-gray-900 transform transition-all duration-200 hover:scale-105'
    : 'flex items-center px-3 py-2 text-white hover:text-white transform transition-all duration-200 hover:scale-105';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        headerIsScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center" onClick={closeMenu}>
              <img 
                src="/ARKRIDGE-LOGO.png"
                alt="ARK SPINDLES Logo" 
                className={`h-14 w-auto transition-all duration-300 ${
                  headerIsScrolled ? 'filter invert' : ''
                }`}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink to="/" className={navLinkClass} end>
              Home
            </NavLink>
            
            {/* Products Dropdown */}
            <div className="relative"
            onMouseEnter={() => setActiveDropdown('products')}
            onMouseLeave={() => setActiveDropdown(null)}>
              <NavLink to="/products" className={navLinkClass}>
                Products
                <ChevronDown className={`ml-1 w-4 h-4 transform transition-transform duration-200 ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
              </NavLink>
              {activeDropdown === 'products' && (
                <div className="absolute left-0 top-full mt-1 w-48 bg-white shadow-lg rounded-md overflow-visible z-50">
                  <Link
                    to="/products?family=M"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-500"
                    onClick={closeMenu}
                  >
                    MTC
                  </Link>
                  <Link
                    to="/products?family=Q"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-500"
                    onClick={closeMenu}
                  >
                    QTC
                  </Link>
                  <Link
                    to="/products?family=A"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-500"
                    onClick={closeMenu}
                  >
                    ATC
                  </Link>
                  <Link
                    to="/products?toolHolderTypeCategory=ER"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-500"
                    onClick={closeMenu}
                  >
                    ER Tool Holders
                  </Link>
                  <Link
                    to="/products?toolHolderTypeCategory=HSK"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-500"
                    onClick={closeMenu}
                  >
                    HSK Tool Holders
                  </Link>
                  <Link
                    to="/products?toolHolderTypeCategory=ISO"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-500"
                    onClick={closeMenu}
                  >
                    ISO Tool Holders
                  </Link>
                </div>
              )}
            </div>

            <NavLink to="/premium" className={navLinkClass}>
              Premium Line
            </NavLink>
            
            <NavLink to="/accessories" className={navLinkClass}>
              Accessories
            </NavLink>
            
            {/* Applications Dropdown */}
            <div className="relative"
            onMouseEnter={() => setActiveDropdown('applications')}
            onMouseLeave={() => setActiveDropdown(null)}>
              <button
                className={dropdownButtonClass}
              >
                Applications
                <ChevronDown className={`ml-1 w-4 h-4 transform transition-transform duration-200 ${activeDropdown === 'applications' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'applications' && (
                <div className="absolute left-0 top-full mt-1 w-48 bg-white shadow-lg rounded-md overflow-hidden z-50">
                  <Link
                    to="/products?application=Wood"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-500"
                    onClick={closeMenu}
                  >
                    Wood
                  </Link>
                  <Link
                    to="/products?application=Stone"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-500"
                    onClick={closeMenu}
                  >
                    Stone
                  </Link>
                  <Link
                    to="/products?application=Aluminum"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-500"
                    onClick={closeMenu}
                  >
                    Aluminum
                  </Link>
                  <Link
                    to="/products?application=Composites"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-500"
                    onClick={closeMenu}
                  >
                    Composites
                  </Link>
                  <Link
                    to="/products?application=Plastic"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-500"
                    onClick={closeMenu}
                  >
                    Plastic
                  </Link>
                  <Link
                    to="/products?application=Glass"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-500"
                    onClick={closeMenu}
                  >
                    Glass
                  </Link>
                </div>
              )}
            </div>
            
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>

          <div className="hidden md:block">
            <Link
              to="/quote"
              className={`inline-flex items-center justify-center px-4 py-2 border-2 font-semibold rounded-lg transition-all duration-300 ${
                headerIsScrolled
                  ? 'border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white'
                  : 'border-white text-white hover:bg-white hover:text-primary-500'
              }`}
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent-blue-500 ${
                headerIsScrolled
                  ? 'text-primary-400 hover:text-primary-500 hover:bg-gray-100'
                  : 'text-white hover:text-white hover:bg-white/10'
              }`}
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden shadow-lg animate-fade-in ${
          headerIsScrolled ? 'bg-white' : 'bg-black/90 backdrop-blur-sm'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 max-h-[calc(100vh-88px)] overflow-y-auto">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                  headerIsScrolled
                    ? (isActive
                        ? 'bg-primary-50 text-primary-500'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-primary-500')
                    : (isActive
                        ? 'bg-white/20 text-white'
                        : 'text-white hover:bg-white/10 hover:text-white')
                }`
              }
              onClick={closeMenu}
              end
            >
              Home
            </NavLink>
            
            <NavLink
              to="/products?family=M"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                  headerIsScrolled
                    ? (isActive
                        ? 'bg-primary-50 text-primary-500'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-primary-500')
                    : (isActive
                        ? 'bg-white/20 text-white'
                        : 'text-white hover:bg-white/10 hover:text-white')
                }`
              }
              onClick={closeMenu}
            >
              MTC
            </NavLink>
            <NavLink
              to="/products?family=Q"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                  headerIsScrolled
                    ? (isActive
                        ? 'bg-primary-50 text-primary-500'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-primary-500')
                    : (isActive
                        ? 'bg-white/20 text-white'
                        : 'text-white hover:bg-white/10 hover:text-white')
                }`
              }
              onClick={closeMenu}
            >
              QTC
            </NavLink>
            <NavLink
              to="/products?family=A"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                  headerIsScrolled
                    ? (isActive
                        ? 'bg-primary-50 text-primary-500'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-primary-500')
                    : (isActive
                        ? 'bg-white/20 text-white'
                        : 'text-white hover:bg-white/10 hover:text-white')
                }`
              }
              onClick={closeMenu}
            >
              ATC
            </NavLink>

            <NavLink
              to="/premium"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                  headerIsScrolled
                    ? (isActive
                        ? 'bg-primary-50 text-primary-500'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-primary-500')
                    : (isActive
                        ? 'bg-white/20 text-white'
                        : 'text-white hover:bg-white/10 hover:text-white')
                }`
              }
              onClick={closeMenu}
            >
              Premium Line
            </NavLink>

            <NavLink
              to="/accessories"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                  headerIsScrolled
                    ? (isActive
                        ? 'bg-primary-50 text-primary-500'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-primary-500')
                    : (isActive
                        ? 'bg-white/20 text-white'
                        : 'text-white hover:bg-white/10 hover:text-white')
                }`
              }
              onClick={closeMenu}
            >
              Accessories
            </NavLink>
            
            {/* Applications Section */}
            <div className={`px-3 py-2 font-medium ${
              headerIsScrolled ? 'text-gray-700' : 'text-white'
            }`}>
              Applications
            </div>
            <Link
              to="/products?application=Wood"
              className={`block pl-6 pr-3 py-2 text-base font-medium transition-all duration-200 ${
                headerIsScrolled
                  ? 'text-gray-700 hover:bg-gray-50 hover:text-primary-500'
                  : 'text-white hover:bg-white/10 hover:text-white'
              }`}
              onClick={closeMenu}
            >
              Wood
            </Link>
            <Link
              to="/products?application=Stone"
              className={`block pl-6 pr-3 py-2 text-base font-medium transition-all duration-200 ${
                headerIsScrolled
                  ? 'text-gray-700 hover:bg-gray-50 hover:text-primary-500'
                  : 'text-white hover:bg-white/10 hover:text-white'
              }`}
              onClick={closeMenu}
            >
              Stone
            </Link>
            <Link
              to="/products?application=Aluminum"
              className={`block pl-6 pr-3 py-2 text-base font-medium transition-all duration-200 ${
                headerIsScrolled
                  ? 'text-gray-700 hover:bg-gray-50 hover:text-primary-500'
                  : 'text-white hover:bg-white/10 hover:text-white'
              }`}
              onClick={closeMenu}
            >
              Aluminum
            </Link>
            <Link
              to="/products?application=Composites"
              className={`block pl-6 pr-3 py-2 text-base font-medium transition-all duration-200 ${
                headerIsScrolled
                  ? 'text-gray-700 hover:bg-gray-50 hover:text-primary-500'
                  : 'text-white hover:bg-white/10 hover:text-white'
              }`}
              onClick={closeMenu}
            >
              Composites
            </Link>
            <Link
              to="/products?application=Plastic"
              className={`block pl-6 pr-3 py-2 text-base font-medium transition-all duration-200 ${
                headerIsScrolled
                  ? 'text-gray-700 hover:bg-gray-50 hover:text-primary-500'
                  : 'text-white hover:bg-white/10 hover:text-white'
              }`}
              onClick={closeMenu}
            >
              Plastic
            </Link>
            <Link
              to="/products?application=Glass"
              className={`block pl-6 pr-3 py-2 text-base font-medium transition-all duration-200 ${
                headerIsScrolled
                  ? 'text-gray-700 hover:bg-gray-50 hover:text-primary-500'
                  : 'text-white hover:bg-white/10 hover:text-white'
              }`}
              onClick={closeMenu}
            >
              Glass
            </Link>
            
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                  headerIsScrolled
                    ? (isActive
                        ? 'bg-primary-50 text-primary-500'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-primary-500')
                    : (isActive
                        ? 'bg-white/20 text-white'
                        : 'text-white hover:bg-white/10 hover:text-white')
                }`
              }
              onClick={closeMenu}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                  headerIsScrolled
                    ? (isActive
                        ? 'bg-primary-50 text-primary-500'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-primary-500')
                    : (isActive
                        ? 'bg-white/20 text-white'
                        : 'text-white hover:bg-white/10 hover:text-white')
                }`
              }
              onClick={closeMenu}
            >
              Contact
            </NavLink>
            <Link
              to="/quote"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                headerIsScrolled
                  ? 'text-white bg-primary-500 hover:bg-primary-600'
                  : 'text-primary-500 bg-white hover:bg-gray-100'
              }`}
              onClick={closeMenu}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
