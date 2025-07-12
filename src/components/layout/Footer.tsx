import { Link } from 'react-router-dom';
import { Settings, Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-500 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Settings className="w-8 h-8" />
              <span className="ml-2 text-xl font-bold">SpindleTech</span>
            </div>
            <p className="text-primary-100 mb-6">
              Precision engineered electro spindles for wood, stone, aluminum, and composite applications.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent-blue-300 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-accent-blue-300 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-accent-blue-300 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-primary-100 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-100 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?family=M" className="text-primary-100 hover:text-white transition-colors">
                  Manual Tool Change Spindles
                </Link>
              </li>
              <li>
                <Link to="/products?family=H" className="text-primary-100 hover:text-white transition-colors">
                  Quick Tool Change Spindles
                </Link>
              </li>
              <li>
                <Link to="/products?family=A" className="text-primary-100 hover:text-white transition-colors">
                  Automatic Tool Change Spindles
                </Link>
              </li>
              <li>
                <Link to="/products?toolHolderTypeCategory=ER" className="text-primary-100 hover:text-white transition-colors">
                  ER Tool Holders
                </Link>
              </li>
              <li>
                <Link to="/products?toolHolderTypeCategory=HSK" className="text-primary-100 hover:text-white transition-colors">
                  HSK Tool Holders
                </Link>
              </li>
              <li>
                <Link to="/products?toolHolderTypeCategory=ISO" className="text-primary-100 hover:text-white transition-colors">
                  ISO Tool Holders
                </Link>
              </li>
              <li>
                <Link to="/products?application=Wood" className="text-primary-100 hover:text-white transition-colors">
                  Wood Applications
                </Link>
              </li>
              <li>
                <Link to="/products?application=Stone" className="text-primary-100 hover:text-white transition-colors">
                  Stone Applications
                </Link>
              </li>
              <li>
                <Link to="/products?application=Aluminum" className="text-primary-100 hover:text-white transition-colors">
                  Aluminum Applications
                </Link>
              </li>
              <li>
                <Link to="/products?application=Composites" className="text-primary-100 hover:text-white transition-colors">
                  Composite Applications
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="w-5 h-5 mr-3 flex-shrink-0" />
                <span className="text-primary-100">
                  1234 Industrial Avenue, Tech Park, Milan, Italy
                </span>
              </li>
              <li className="flex">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-primary-100 hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                <a href="mailto:info@spindletech.com" className="text-primary-100 hover:text-white transition-colors">
                  info@spindletech.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-400 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-100 text-sm">
              &copy; {new Date().getFullYear()} SpindleTech. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-primary-100 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-100 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
