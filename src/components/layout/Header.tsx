import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Settings } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative px-3 py-2 transition-colors duration-200 hover:text-accent-blue-400 ${
      isActive ? 'text-accent-blue-500 font-medium' : 'text-gray-700'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center" onClick={closeMenu}>
              <Settings className="w-8 h-8 text-primary-500" />
              <span className="ml-2 text-xl font-bold text-primary-500">
                SpindleTech
              </span>
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
              <button 
                className="flex items-center px-3 py-2 text-gray-700 hover:text-accent-blue-400 transition-colors duration-200" 
              >
                Products
                <ChevronDown className={`ml-1 w-4 h-4 transform transition-transform duration-200 ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'products' && (
                <div className="absolute left-0 top-full mt-1 w-48 bg-white shadow-lg rounded-md overflow-visible z-50">
                  <Link
                    to="/products?family=M"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-500"
                    onClick={closeMenu}
                  >
                    AM series
                  </Link>
                  <Link
                    to="/products?family=H"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-500"
                    onClick={closeMenu}
                  >
                    AQ series
                  </Link>
                  <Link
                    to="/products?family=A"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-500"
                    onClick={closeMenu}
                  >
                    AA series
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
                  <Link
                    to="/products"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-500"
                    onClick={closeMenu}
                  >
                    View All Products
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
                className="flex items-center px-3 py-2 text-gray-700 hover:text-accent-blue-400 transition-colors duration-200"
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
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-blue-500 transition-colors duration-200"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary-400 hover:text-primary-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent-blue-500"
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
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? 'bg-primary-50 text-primary-500'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-primary-500'
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
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? 'bg-primary-50 text-primary-500'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-primary-500'
                }`
              }
              onClick={closeMenu}
            >
              AM series
            </NavLink>
            <NavLink
              to="/products?family=H"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? 'bg-primary-50 text-primary-500'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-primary-500'
                }`
              }
              onClick={closeMenu}
            >
              AQ series
            </NavLink>
            <NavLink
              to="/products?family=A"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? 'bg-primary-50 text-primary-500'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-primary-500'
                }`
              }
              onClick={closeMenu}
            >
              AA series
            </NavLink>

            <NavLink
              to="/premium"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? 'bg-primary-50 text-primary-500'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-primary-500'
                }`
              }
              onClick={closeMenu}
            >
              Premium Line
            </NavLink>

            <NavLink
              to="/accessories"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? 'bg-primary-50 text-primary-500'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-primary-500'
                }`
              }
              onClick={closeMenu}
            >
              Accessories
            </NavLink>
            
            {/* Applications Section */}
            <div className="px-3 py-2 font-medium text-gray-700">
              Applications
            </div>
            <Link
              to="/products?application=Wood"
              className="block pl-6 pr-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-500"
              onClick={closeMenu}
            >
              Wood
            </Link>
            <Link
              to="/products?application=Stone"
              className="block pl-6 pr-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-500"
              onClick={closeMenu}
            >
              Stone
            </Link>
            <Link
              to="/products?application=Aluminum"
              className="block pl-6 pr-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-500"
              onClick={closeMenu}
            >
              Aluminum
            </Link>
            <Link
              to="/products?application=Composites"
              className="block pl-6 pr-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-500"
              onClick={closeMenu}
            >
              Composites
            </Link>
            
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? 'bg-primary-50 text-primary-500'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-primary-500'
                }`
              }
              onClick={closeMenu}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? 'bg-primary-50 text-primary-500'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-primary-500'
                }`
              }
              onClick={closeMenu}
            >
              Contact
            </NavLink>
            <Link
              to="/quote"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-primary-500 hover:bg-primary-600"
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
