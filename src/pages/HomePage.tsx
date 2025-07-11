import { Link } from 'react-router-dom';
import { ChevronRight, Clock, Award, PenTool as Tool, Settings } from 'lucide-react';
import SpindleMatcher from '../components/tools/SpindleMatcher';
import DownloadBrochure from '../components/shared/DownloadBrochure';

const HomePage = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-primary-500 text-white">
        <div 
          className="absolute inset-0 bg-black opacity-50 z-0"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/3846517/pexels-photo-3846517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'multiply'
          }}
        ></div>
        
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-slide-in">
              Precision Electro Spindles <br />for Industrial Excellence
            </h1>
            <p className="text-xl mb-8 text-gray-200 max-w-2xl">
              Industry-leading Electro spindles engineered for precision, power, and reliability across wood, stone, aluminum, and composite applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-500 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-blue-500 transition-colors duration-200"
              >
                Explore Products
                <ChevronRight className="ml-2 -mr-1 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors duration-200"
              >
                Contact Sales
              </Link>
              <DownloadBrochure />
            </div>
          </div>
        </div>
      </section>

      {/* Spindle Matcher Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-primary-500 mb-4">Find Your Perfect Match</h2>
            <p className="text-gray-600">
              Use our intelligent spindle matching tool to find the ideal replacement for your current spindle.
            </p>
          </div>
          <SpindleMatcher className="max-w-4xl mx-auto" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary-500 mb-4">Why Choose SpindleTech</h2>
            <p className="text-gray-600">
              Our electro spindles are designed with precision engineering and advanced technology to ensure maximum performance and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary-500 mb-3">Long Service Life</h3>
              <p className="text-gray-600">
                Premium components and precision engineering ensure our spindles deliver exceptional durability and longevity in demanding operating conditions.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary-500 mb-3">Superior Performance</h3>
              <p className="text-gray-600">
                Achieve optimal cutting speeds, precision, and surface finishes across all materials with our advanced spindle technology.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mb-6">
                <Tool className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary-500 mb-3">Versatile Applications</h3>
              <p className="text-gray-600">
                Our diverse range of spindles are optimized for specific materials including wood, stone, aluminum, and composites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Families */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary-500 mb-4">Our Product Families</h2>
            <p className="text-gray-600">
              Explore our comprehensive range of electro spindles designed for various applications and requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="h-64 bg-gray-200 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="ER Series Spindles" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-primary-500 mb-3">ER Series</h3>
                <p className="text-gray-600 mb-4">
                  Our ER series features versatile collet-based tool holding systems, ideal for a wide range of applications from general machining to specialized tasks.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center text-gray-600">
                    <ChevronRight className="w-4 h-4 text-primary-500 mr-2" />
                    Available in ER25, ER32, and ER40 collet sizes
                  </li>
                  <li className="flex items-center text-gray-600">
                    <ChevronRight className="w-4 h-4 text-primary-500 mr-2" />
                    Power ranges from 5.5kW to 12kW
                  </li>
                  <li className="flex items-center text-gray-600">
                    <ChevronRight className="w-4 h-4 text-primary-500 mr-2" />
                    Speeds up to 30,000 RPM
                  </li>
                </ul>
                <Link
                  to="/products?family=ER"
                  className="inline-flex items-center text-accent-blue-500 hover:text-accent-blue-700 font-medium"
                >
                  View ER Series
                  <ChevronRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="h-64 bg-gray-200 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/210158/pexels-photo-210158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="HSK Series Spindles" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-primary-500 mb-3">HSK Series</h3>
                <p className="text-gray-600 mb-4">
                  Our HSK series offers hollow taper shank tool interfaces for superior rigidity and precision in high-demand applications.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center text-gray-600">
                    <ChevronRight className="w-4 h-4 text-primary-500 mr-2" />
                    Available in HSK-E50, HSK-F63, and HSK-A63 interfaces
                  </li>
                  <li className="flex items-center text-gray-600">
                    <ChevronRight className="w-4 h-4 text-primary-500 mr-2" />
                    Power ranges from 7.5kW to 18kW
                  </li>
                  <li className="flex items-center text-gray-600">
                    <ChevronRight className="w-4 h-4 text-primary-500 mr-2" />
                    Advanced features for demanding applications
                  </li>
                </ul>
                <Link
                  to="/products?family=HSK"
                  className="inline-flex items-center text-accent-blue-500 hover:text-accent-blue-700 font-medium"
                >
                  View HSK Series
                  <ChevronRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="h-64 bg-gray-200 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3846517/pexels-photo-3846517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="ATC Series Spindles" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-primary-500 mb-3">ATC Series</h3>
                <p className="text-gray-600 mb-4">
                  Our ATC series features automatic tool change capabilities with ISO tool holders, designed for high-productivity manufacturing environments.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center text-gray-600">
                    <ChevronRight className="w-4 h-4 text-primary-500 mr-2" />
                    Available in ISO30 and ISO40 interfaces
                  </li>
                  <li className="flex items-center text-gray-600">
                    <ChevronRight className="w-4 h-4 text-primary-500 mr-2" />
                    Power ranges from 9kW to 12kW
                  </li>
                  <li className="flex items-center text-gray-600">
                    <ChevronRight className="w-4 h-4 text-primary-500 mr-2" />
                    Automatic tool change system
                  </li>
                </ul>
                <Link
                  to="/products?family=ATC"
                  className="inline-flex items-center text-accent-blue-500 hover:text-accent-blue-700 font-medium"
                >
                  View ATC Series
                  <ChevronRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="h-64 bg-gray-200 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2526105/pexels-photo-2526105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Blade Series Spindles" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-primary-500 mb-3">Blade Series</h3>
                <p className="text-gray-600 mb-4">
                  Our Blade series offers specialized spindles for cutting applications, delivering high torque at lower speeds for sawing and slicing operations.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center text-gray-600">
                    <ChevronRight className="w-4 h-4 text-primary-500 mr-2" />
                    High-torque blade mounting system
                  </li>
                  <li className="flex items-center text-gray-600">
                    <ChevronRight className="w-4 h-4 text-primary-500 mr-2" />
                    Power ranges from 8kW to 15kW
                  </li>
                  <li className="flex items-center text-gray-600">
                    <ChevronRight className="w-4 h-4 text-primary-500 mr-2" />
                    Optimized for cutting applications
                  </li>
                </ul>
                <Link
                  to="/products?family=Blade"
                  className="inline-flex items-center text-accent-blue-500 hover:text-accent-blue-700 font-medium"
                >
                  View Blade Series
                  <ChevronRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary-500 mb-4">Application Solutions</h2>
            <p className="text-gray-600">
              Our spindles are designed for specific material applications with optimized performance characteristics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/products?application=Wood" className="group">
              <div className="rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl bg-white h-full">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/3095497/pexels-photo-3095497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Wood Processing" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-primary-500 mb-2 group-hover:text-accent-blue-500 transition-colors duration-300">Wood</h3>
                  <p className="text-gray-600 text-sm">
                    High-speed spindles for precision woodworking, furniture manufacturing, and cabinetry.
                  </p>
                </div>
              </div>
            </Link>

            <Link to="/products?application=Stone" className="group">
              <div className="rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl bg-white h-full">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/2086170/pexels-photo-2086170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Stone Processing" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-primary-500 mb-2 group-hover:text-accent-blue-500 transition-colors duration-300">Stone</h3>
                  <p className="text-gray-600 text-sm">
                    Robust spindles for marble, granite, and natural stone cutting, shaping, and polishing.
                  </p>
                </div>
              </div>
            </Link>

            <Link to="/products?application=Aluminum" className="group">
              <div className="rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl bg-white h-full">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/2381463/pexels-photo-2381463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Aluminum Processing" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-primary-500 mb-2 group-hover:text-accent-blue-500 transition-colors duration-300">Aluminum</h3>
                  <p className="text-gray-600 text-sm">
                    High-performance spindles for aluminum fabrication, aerospace components, and automotive parts.
                  </p>
                </div>
              </div>
            </Link>

            <Link to="/products?application=Composites" className="group">
              <div className="rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl bg-white h-full">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/5247207/pexels-photo-5247207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Composite Processing" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-primary-500 mb-2 group-hover:text-accent-blue-500 transition-colors duration-300">Composites</h3>
                  <p className="text-gray-600 text-sm">
                    Specialized spindles for carbon fiber, fiberglass, and advanced composite materials.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-8 lg:mb-0">
              <h2 className="text-3xl font-bold mb-4">Ready to elevate your machining capabilities?</h2>
              <p className="text-primary-100 max-w-2xl">
                Contact our expert team today to discuss your specific requirements and find the perfect spindle solution for your application.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-500 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors duration-200"
              >
                Explore Products
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
