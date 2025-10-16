import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Settings, Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';
import PrivacyPolicyModal from '../shared/PrivacyPolicyModal';
import TermsAndConditionsModal from '../shared/TermsAndConditionsModal';

const Footer = () => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-primary-500 text-white pt-12 pb-6" style={{
      background: 'radial-gradient(circle, #4d5d6d 0%, #000000 100%)'
    }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-xl font-light font-sans tracking-[0.2em]">ARK SPINDLES</span>
              </div>
              <p className="text-primary-100 mb-4">
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
              <ul className="space-y-1">
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
              <h3 className="text-lg font-semibold mb-4">Products & Applications</h3>
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-1">
                <li>
                  <Link to="/products?family=M" className="text-primary-100 hover:text-white transition-colors">
                    MTC spindles
                  </Link>
                </li>
                <li>
                  <Link to="/products?family=Q" className="text-primary-100 hover:text-white transition-colors">
                    QTC spindles
                  </Link>
                </li>
                <li>
                  <Link to="/products?family=A" className="text-primary-100 hover:text-white transition-colors">
                    ATC spindles
                  </Link>
                </li>
                <li>
                  <Link to="/products?family=B" className="text-primary-100 hover:text-white transition-colors">
                    Blade Tech
                  </Link>
                </li>
                <li>
                  <Link to="/products?toolHolderTypeCategory=ER" className="text-primary-100 hover:text-white transition-colors">
                    ER spindles
                  </Link>
                </li>
                <li>
                  <Link to="/products?toolHolderTypeCategory=HSK" className="text-primary-100 hover:text-white transition-colors">
                    HSK spindles
                  </Link>
                </li>
                <li>
                  <Link to="/products?toolHolderTypeCategory=ISO" className="text-primary-100 hover:text-white transition-colors">
                    ISO spindles
                  </Link>
                </li>
                <li>
                  <Link to="/products?application=Wood" className="text-primary-100 hover:text-white transition-colors">
                    Wood 
                  </Link>
                </li>
                <li>
                  <Link to="/products?application=Stone" className="text-primary-100 hover:text-white transition-colors">
                    Stone 
                  </Link>
                </li>
                <li>
                  <Link to="/products?application=Aluminum" className="text-primary-100 hover:text-white transition-colors">
                    Aluminum 
                  </Link>
                </li>
                <li>
                  <Link to="/products?application=Composites" className="text-primary-100 hover:text-white transition-colors">
                    Composite 
                  </Link>
                </li>
                <li>
                  <Link to="/products?application=Plastic" className="text-primary-100 hover:text-white transition-colors">
                    Plastic 
                  </Link>
                </li>
                <li>
                  <Link to="/products?application=Glass" className="text-primary-100 hover:text-white transition-colors">
                    Glass 
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-primary-100">
                    1234 Industrial Avenue, Tech Park, Milan, Italy
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                  <a href="tel:+1234567890" className="text-primary-100 hover:text-white transition-colors">
                    +1 (234) 567-890
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                  <a href="mailto:info@spindletech.com" className="text-primary-100 hover:text-white transition-colors">
                    info@spindletech.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        
          <div className="border-t border-primary-400 mt-8 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-primary-100 text-sm">
                &copy; {new Date().getFullYear()} ArkSpindles. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-3 md:mt-0">
                <button 
                  onClick={() => setIsPrivacyModalOpen(true)}
                  className="text-primary-100 hover:text-white text-sm transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={() => setIsTermsModalOpen(true)}
                  className="text-primary-100 hover:text-white text-sm transition-colors cursor-pointer"
                >
                  Terms of Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <PrivacyPolicyModal 
        isOpen={isPrivacyModalOpen} 
        onClose={() => setIsPrivacyModalOpen(false)} 
      />
      <TermsAndConditionsModal 
        isOpen={isTermsModalOpen} 
        onClose={() => setIsTermsModalOpen(false)} 
      />
    </>
  );
};

export default Footer;
