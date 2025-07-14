import { Link } from 'react-router-dom';
import { ChevronRight, Shield, Zap, BarChart, Microscope, Award, Star } from 'lucide-react';

const PremiumLinePage = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section 
        className="relative text-white overflow-hidden -mt-16"
        style={{
          background: 'radial-gradient(circle, #4d5d6d 0%, #000000 100%)'
        }}
      >
        
        <div className="container mx-auto px-4 pt-40 pb-24 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-slide-in">
              Premium Line: <br />Engineering Excellence
            </h1>
            <p className="text-xl mb-8 text-gray-200 max-w-2xl">
              Experience unparalleled performance with our Premium Line electro spindles, engineered for the most demanding applications where precision and reliability are paramount.
            </p>
            <Link
              to="/products?line=Premium"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-500 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-blue-500 transition-colors duration-200"
            >
              Explore Premium Products
              <ChevronRight className="ml-2 -mr-1 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary-500 mb-4">The Premium Advantage</h2>
            <p className="text-gray-600">
              Our Premium Line represents the pinnacle of spindle technology, incorporating advanced features and superior engineering for unmatched performance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary-500 mb-3">Enhanced Durability</h3>
              <p className="text-gray-600">
                Premium ceramic hybrid bearings and specialized coatings ensure extended service life and superior performance under extreme conditions.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary-500 mb-3">Advanced Cooling</h3>
              <p className="text-gray-600">
                Innovative dual-circuit cooling system maintains optimal temperature even during continuous high-speed operation.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mb-6">
                <BarChart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary-500 mb-3">Superior Precision</h3>
              <p className="text-gray-600">
                Ultra-precise machining and assembly processes result in exceptional runout characteristics and dimensional accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Development */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-500 mb-6">Research & Development</h2>
              <p className="text-gray-600 mb-8">
                Our Premium Line is the result of extensive research and development, combining decades of engineering expertise with cutting-edge technology.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Microscope className="h-6 w-6 text-accent-blue-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-primary-500">Advanced Testing Facilities</h3>
                    <p className="text-gray-600">State-of-the-art laboratories equipped with precision measurement and testing equipment.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Award className="h-6 w-6 text-accent-blue-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-primary-500">Quality Certification</h3>
                    <p className="text-gray-600">ISO 9001:2015 certified manufacturing processes with comprehensive quality control.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Star className="h-6 w-6 text-accent-blue-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-primary-500">Industry Expertise</h3>
                    <p className="text-gray-600">Collaboration with leading manufacturers and research institutions worldwide.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 lg:mt-0">
              <img 
                src="https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Research and Development"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Premium Support */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary-500 mb-4">Premium Support</h2>
            <p className="text-gray-600">
              Our Premium Line comes with dedicated technical support and comprehensive service packages to ensure optimal performance throughout the product lifecycle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-primary-500 mb-2">24/7 Technical Support</h3>
              <p className="text-gray-600">
                Round-the-clock access to our expert technical support team.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-primary-500 mb-2">Extended Warranty</h3>
              <p className="text-gray-600">
                Comprehensive warranty coverage with optional extensions.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-primary-500 mb-2">Preventive Maintenance</h3>
              <p className="text-gray-600">
                Scheduled maintenance services to prevent downtime.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-primary-500 mb-2">Performance Analysis</h3>
              <p className="text-gray-600">
                Regular performance monitoring and optimization services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-8 lg:mb-0">
              <h2 className="text-3xl font-bold mb-4">Ready to upgrade to Premium?</h2>
              <p className="text-primary-100 max-w-2xl">
                Contact our specialists to discuss how our Premium Line can enhance your manufacturing capabilities.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products?line=Premium"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-500 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors duration-200"
              >
                View Premium Products
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors duration-200"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PremiumLinePage;
