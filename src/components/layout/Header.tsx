import { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Settings } from 'lucide-react';
import { getProductImagePath, getApplicationImagePath, getLogoPath } from '../../config/imagePaths';

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
      image: getProductImagePath('1', 'ES-9000 ER32', 'main')
    },
    {
      to: "/products?family=Q",
      title: "QTC Spindles",
      description: "Enhanced productivity with rapid tool changes for reduced downtime",
      image: getProductImagePath('2', 'ES-12000 ER40', 'main')
    },
    {
      to: "/products?family=A",
      title: "ATC Spindles",
      description: "Maximum efficiency for automated production environments",
      image: getProductImagePath('7', 'ATC-9000 ISO30', 'main')
    },
    {
      to: "/products?family=B",
      title: "Blade Tech Spindles",
      description: "Advanced blade technology for precision cutting applications",
      image: getProductImagePath('9', 'BT-6000 ER25', 'main')
    },
    {
      to: "/products?toolHolderTypeCategory=ER",
      title: "ER Spindles",
      description: "Versatile collet system for wide range of tool diameters",
      image: getProductImagePath('1', 'ES-9000 ER32', 1)
    },
    {
      to: "/products?toolHolderTypeCategory=HSK",
      title: "HSK Spindles",
      description: "High-precision interface for superior runout control",
      image: getProductImagePath('3', 'ES-7500 HSK-F63', 'main')
    },
    {
      to: "/products?toolHolderTypeCategory=ISO",
      title: "ISO Spindles",
      description: "Universal compatibility with standard ISO tool interfaces",
      image: getProductImagePath('7', 'ATC-9000 ISO30', 1)
    }
  ];

  // Application dropdown items with descriptions
  const applicationItems = [
    {
      to: "/products?application=Wood",
      title: "Wood Processing",
      description: "Furniture, cabinetry, and architectural millwork applications",
      image: getApplicationImagePath('wood-processing.jpg')
    },
    {
      to: "/products?application=Stone",
      title: "Stone & Marble",
      description: "Natural and engineered stone cutting and shaping",
      image: getApplicationImagePath('stone-marble.jpg')
    },
    {
      to: "/products?application=Aluminum",
      title: "Aluminum Machining",
      description: "High-speed machining for aerospace and automotive components",
      image: getApplicationImagePath('aluminum-machining.jpg')
    },
    {
      to: "/products?application=Composites",
      title: "Composite Materials",
      description: "Advanced composites for aerospace and marine applications",
      image: getApplicationImagePath('composite-materials.jpg')
    },
    {
      to: "/products?application=Plastic",
      title: "Plastic Processing",
      description: "Precision machining of engineering plastics",
      image: getApplicationImagePath('plastic-processing.jpg')
    },
    {
      to: "/products?application=Glass",
      title: "Glass Engraving",
      description: "High-precision engraving and cutting of glass materials",
      image: getApplicationImagePath('glass-engraving.jpg')
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
                src={getLogoPath('ARKRIDGE-LOGO.png')}
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

      {/* Backdrop */}
      {isDropdownOpen && (
        <div
          className="hidden md:block fixed inset-0 top-[80px] bg-black/20 backdrop-blur-sm z-30 animate-fade-in"
          onMouseEnter={handleOverlayMouseEnter}
          onMouseLeave={handleDropdownClose}
        />
      )}

      {/* Contained Dropdown Menu */}
      {isDropdownOpen && (
        <div
          className="hidden md:block fixed left-1/2 -translate-x-1/2 top-[80px] z-40 animate-fade-in"
          onMouseEnter={handleOverlayMouseEnter}
          onMouseLeave={handleDropdownClose}
        >
          <div className="bg-white shadow-xl rounded-xl border border-gray-200 max-h-[70vh] lg:max-h-[65vh] xl:max-h-[60vh] overflow-y-auto scrollbar-thin w-[90vw] max-w-[1200px] mx-auto"
            style={{
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}
          >
          <div className="px-4 sm:px-6 lg:px-8 py-6">
            {isProductsDropdownOpen && (
              <div>
                <h3 className="text-base font-light text-primary-2000 mb-6 text-center font-sans tracking-[0.05em] leading-relaxed">
                  Explore our precision spindle systems built for high-performance machining
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
                  {productItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.to}
                      className="group block relative h-40 rounded-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
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
                          className="w-full h-28 transform -skew-x-12 origin-bottom-left transition-all duration-300 group-hover:h-32 clip-curved"
                          style={{ background: 'linear-gradient(135deg, rgba(77, 93, 109, 0.95) 0%, rgba(0, 0, 0, 0.95) 100%)' }}
                        >
                          <div className="transform skew-x-12 p-4 h-full flex flex-col justify-center">
                            <h4 className="text-base font-semibold text-white group-hover:text-gray-100 mb-1 transition-colors duration-300">
                              {item.title}
                            </h4>
                            <p className="text-xs text-gray-200 group-hover:text-gray-300 leading-relaxed transition-colors duration-300">
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
                <h3 className="text-base font-light text-primary-2000 mb-6 text-center font-sans tracking-[0.05em] leading-relaxed">
                  Explore our high performance spindles based on your applications & industries
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                  {applicationItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.to}
                      className="group block relative h-40 rounded-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
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
                          className="w-full h-28 transform -skew-x-12 origin-bottom-left transition-all duration-300 group-hover:h-32 clip-curved"
                          style={{ background: 'linear-gradient(135deg, rgba(77, 93, 109, 0.95) 0%, rgba(0, 0, 0, 0.95) 100%)' }}
                        >
                          <div className="transform skew-x-12 p-4 h-full flex flex-col justify-center">
                            <h4 className="text-base font-semibold text-white group-hover:text-gray-100 mb-1 transition-colors duration-300">
                              {item.title}
                            </h4>
                            <p className="text-xs text-gray-200 group-hover:text-gray-300 leading-relaxed transition-colors duration-300">
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
        </div>
      )}
    </>
  );
};

export default Header;
