import { Link } from 'react-router-dom';
import { ChevronRight, Users, History, Target, Award, Globe2, Rocket } from 'lucide-react';

const AboutPage = () => {
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
              About SpindleTech
            </h1>
            <p className="text-xl mb-8 text-gray-200 max-w-2xl">
              Leading the industry in precision electro spindle technology since 1995, delivering innovation and excellence to manufacturers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-10 lg:mb-0">
              <img 
                src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="SpindleTech History"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary-500 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in Milan, Italy, SpindleTech emerged from a vision to revolutionize the manufacturing industry through advanced spindle technology. What began as a small engineering workshop has grown into a global leader in high-precision electro spindles.
              </p>
              <p className="text-gray-600 mb-6">
                Our journey has been marked by continuous innovation, unwavering commitment to quality, and a deep understanding of our customers' needs. Today, we serve industries across the globe, from woodworking to aerospace.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500 mb-2">30+</div>
                  <div className="text-gray-600">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500 mb-2">50+</div>
                  <div className="text-gray-600">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500 mb-2">100k+</div>
                  <div className="text-gray-600">Spindles Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500 mb-2">24/7</div>
                  <div className="text-gray-600">Technical Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-primary-500 mb-4">Our Values</h2>
            <p className="text-gray-600">
              Our core values guide everything we do, from product development to customer service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary-500 mb-3">Precision</h3>
              <p className="text-gray-600">
                We maintain the highest standards of precision in every spindle we manufacture, ensuring optimal performance and reliability.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mb-6">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary-500 mb-3">Innovation</h3>
              <p className="text-gray-600">
                Our commitment to continuous innovation drives us to develop cutting-edge solutions that advance manufacturing capabilities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary-500 mb-3">Partnership</h3>
              <p className="text-gray-600">
                We build lasting relationships with our customers, working together to achieve manufacturing excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-500 mb-6">Global Presence</h2>
              <p className="text-gray-600 mb-6">
                With headquarters in Milan and offices across Europe, Asia, and the Americas, we provide local support with global expertise. Our distribution network ensures quick delivery and responsive service worldwide.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Globe2 className="w-6 h-6 text-primary-500 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Global Network</h3>
                    <p className="text-gray-600">Offices and service centers in strategic locations worldwide</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <History className="w-6 h-6 text-primary-500 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">24/7 Support</h3>
                    <p className="text-gray-600">Round-the-clock technical assistance in multiple languages</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="w-6 h-6 text-primary-500 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Certified Excellence</h3>
                    <p className="text-gray-600">ISO 9001:2015 certified facilities and processes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <img 
                src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Global Operations"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-8 lg:mb-0">
              <h2 className="text-3xl font-bold mb-4">Ready to elevate your manufacturing?</h2>
              <p className="text-primary-100 max-w-2xl">
                Join the thousands of manufacturers who trust SpindleTech for their precision machining needs.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-500 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors duration-200"
              >
                Explore Products
                <ChevronRight className="ml-2 -mr-1 w-5 h-5" />
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

export default AboutPage;
