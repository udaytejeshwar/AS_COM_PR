import { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Settings } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isApplicationsDropdownOpen, setIsApplicationsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownCloseTimeout = useRef<number | null>(null);
  const location = useLocation();

  // Check if we're on a product detail page
  const isProductDetailPage = /^\/products\/[^\/]+$/.test(location.pathname);

  // Force scrolled state on product detail pages for visibility
  const headerIsScrolled = isScrolled || isProductDetailPage || isProductsDropdownOpen || isApplicationsDropdownOpen;

  // Check if any dropdown is open
  const isDropdownOpen = isProductsDropdownOpen || isApplicationsDropdownOpen;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (dropdownCloseTimeout.current) {
        clearTimeout(dropdownCloseTimeout.current);
      }
    };
  }, []);

  const handleDropdownOpen = (dropdownType: 'products' | 'applications') => {
    if (dropdownCloseTimeout.current) {
      clearTimeout(dropdownCloseTimeout.current);
      dropdownCloseTimeout.current = null;
    }
    setIsProductsDropdownOpen(dropdownType === 'products');
    setIsApplicationsDropdownOpen(dropdownType === 'applications');
  };

  const handleDropdownClose = () => {
    dropdownCloseTimeout.current = window.setTimeout(() => {
      setIsProductsDropdownOpen(false);
      setIsApplicationsDropdownOpen(false);
    }, 150); // Small delay to allow moving mouse from trigger to overlay
  };

  const handleOverlayMouseEnter = () => {
    if (dropdownCloseTimeout.current) {
      clearTimeout(dropdownCloseTimeout.current);
      dropdownCloseTimeout.current = null;
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsProductsDropdownOpen(false);
    setIsApplicationsDropdownOpen(false);
    if (dropdownCloseTimeout.current) {
      clearTimeout(dropdownCloseTimeout.current);
      dropdownCloseTimeout.current = null;
    }
  };

  const closeDropdown = () => {
    setIsProductsDropdownOpen(false);
    setIsApplicationsDropdownOpen(false);
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

  // Product dropdown items with descriptions
  const productItems = [
    {
      to: "/products?family=M",
      title: "MTC Spindles",
      description: "Reliable performance for machining operations with manual tool changes",
      image: "https://images.pexels.com/photos/2526105/pexels-photo-2526105.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      to: "/products?family=Q",
      title: "QTC Spindles",
      description: "Enhanced productivity with rapid tool changes for reduced downtime",
      image: "https://images.pexels.com/photos/3822927/pexels-photo-3822927.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      to: "/products?family=A",
      title: "ATC Spindles",
      description: "Maximum efficiency for automated production environments",
      image: "https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      to: "/products?family=B",
      title: "Blade Tech Spindles",
      description: "Advanced blade technology for precision cutting applications",
      image: "https://images.pexels.com/photos/3846517/pexels-photo-3846517.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      to: "/products?toolHolderTypeCategory=ER",
      title: "ER Spindles",
      description: "Versatile collet system for wide range of tool diameters",
      image: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      to: "/products?toolHolderTypeCategory=HSK",
      title: "HSK Spindles",
      description: "High-precision interface for superior runout control",
      image: "https://images.pexels.com/photos/210158/pexels-photo-210158.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      to: "/products?toolHolderTypeCategory=ISO",
      title: "ISO Spindles",
      description: "Universal compatibility with standard ISO tool interfaces",
      image: "https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  // Application dropdown items with descriptions
  const applicationItems = [
    {
      to: "/products?application=Wood",
      title: "Wood Processing",
      description: "Furniture, cabinetry, and architectural millwork applications",
      image: "https://images.pexels.com/photos/175709/pexels-photo-175709.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      to: "/products?application=Stone",
      title: "Stone & Marble",
      description: "Natural and engineered stone cutting and shaping",
      image: "https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      to: "/products?application=Aluminum",
      title: "Aluminum Machining",
      description: "High-speed machining for aerospace and automotive components",
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      to: "/products?application=Composites",
      title: "Composite Materials",
      description: "Advanced composites for aerospace and marine applications",
      image: "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      to: "/products?application=Plastic",
      title: "Plastic Processing",
      description: "Precision machining of engineering plastics",
      image: "https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      to: "/products?application=Glass",
      title: "Glass Engraving",
      description: "High-precision engraving and cutting of glass materials",
      image: "https://images.pexels.com/photos/1029624/pexels-photo-1029624.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <>
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
            
            {/* Products Dropdown Trigger */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownOpen('products')}
              onMouseLeave={handleDropdownClose}
            >
              <Link 
                to="/products" 
                className={`flex items-center px-3 py-2 transform transition-all duration-200 hover:scale-105 ${
                  headerIsScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-white'
                } ${isProductsDropdownOpen ? 'font-medium scale-105' : ''}`}
              >
                Products
                <ChevronDown className={`ml-1 w-4 h-4 transform transition-transform duration-200 ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
              </Link>
            </div>

            {/* Applications Dropdown Trigger */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownOpen('applications')}
              onMouseLeave={handleDropdownClose}
            >
              <button
                className={`flex items-center px-3 py-2 transform transition-all duration-200 hover:scale-105 ${
                  headerIsScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-white'
                } ${isApplicationsDropdownOpen ? 'font-medium scale-105' : ''}`}
              >
                Applications
                <ChevronDown className={`ml-1 w-4 h-4 transform transition-transform duration-200 ${isApplicationsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <NavLink to="/premium" className={navLinkClass}>
              Premium Line
            </NavLink>

            <NavLink to="/accessories" className={navLinkClass}>
              Accessories
            </NavLink>
            
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
                headerIsScrolled && !isDropdownOpen
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
                headerIsScrolled && !isDropdownOpen
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
        <div className={`md:hidden shadow-lg animate-fade-in fixed inset-x-0 top-[80px] z-50 ${
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
              Manual tool change spindles
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
              Quick tool change spindles
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
              Automatic tool change spindles
            </NavLink>
            <NavLink
              to="/products?family=B"
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
              Blade tech spindles
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

      {/* Full-Width Dropdown Overlay */}
      {isDropdownOpen && (
        <div 
          className="hidden md:block fixed inset-x-0 top-[80px] bg-white shadow-xl border-t border-gray-200 z-40 animate-fade-in"
          onMouseEnter={handleOverlayMouseEnter}
          onMouseLeave={handleDropdownClose}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {isProductsDropdownOpen && (
              <div>
                <h3 className="text-1xl font-light text-primary-2000 mb-8 text-center font-sans tracking-[0.05em] leading-relaxed">
                  Explore our recision spindle systems built for high-performance machining
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
                  {productItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.to}
                      className="group block relative h-48 rounded-lg overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
                      onClick={closeDropdown}
                    >
                      {/* Background Image */}
                      <div className="absolute inset-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                      </div>
                      
                      {/* Inclined Content Area */}
                      <div className="absolute inset-0 flex items-end">
                        <div 
                          className="w-full h-32 transform -skew-x-12 origin-bottom-left transition-all duration-500 group-hover:h-36 clip-curved"
                          style={{ background: 'linear-gradient(135deg, rgba(77, 93, 109, 0.95) 0%, rgba(0, 0, 0, 0.95) 100%)' }}
                        >
                          <div className="transform skew-x-12 p-6 h-full flex flex-col justify-center">
                            <h4 className="text-lg font-semibold text-white group-hover:text-gray-100 mb-2 transition-colors duration-300">
                              {item.title}
                            </h4>
                            <p className="text-sm text-gray-200 group-hover:text-gray-300 leading-relaxed transition-colors duration-300">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {isApplicationsDropdownOpen && (
              <div>
                <h3 className="text-1xl font-light text-primary-2000 mb-8 text-center font-sans tracking-[0.05em] leading-relaxed">
                  Explore our high performance spindles based on your applications & industries
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                  {applicationItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.to}
                      className="group block relative h-48 rounded-lg overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
                      onClick={closeDropdown}
                    >
                      {/* Background Image */}
                      <div className="absolute inset-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                      </div>
                      
                      {/* Inclined Content Area */}
                      <div className="absolute inset-0 flex items-end">
                        <div 
                          className="w-full h-32 transform -skew-x-12 origin-bottom-left transition-all duration-500 group-hover:h-36 clip-curved"
                          style={{ background: 'linear-gradient(135deg, rgba(77, 93, 109, 0.95) 0%, rgba(0, 0, 0, 0.95) 100%)' }}
                        >
                          <div className="transform skew-x-12 p-6 h-full flex flex-col justify-center">
                            <h4 className="text-lg font-semibold text-white group-hover:text-gray-100 mb-2 transition-colors duration-300">
                              {item.title}
                            </h4>
                            <p className="text-sm text-gray-200 group-hover:text-gray-300 leading-relaxed transition-colors duration-300">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
