import { Link } from 'react-router-dom';
import { Shield, Zap, BarChart, Microscope, Award, Star } from 'lucide-react';

const PremiumLinePage = () => {
  return (
    <div className="animate-fade-in">

      {/* Hero Section */}
      <section
        className="relative text-white overflow-hidden -mt-16"
        style={{
          background: 'radial-gradient(circle, #e16a6a 0%, #000000 100%)'
        }}
      >
        <div className="flex justify-center items-center h-[500px] sm:h-[600px] lg:h-[700px]">
          <div className="text-center animate-fade-in">
            <div className="border border-white px-8 py-6 mb-8">
              <h1 className="text-white tracking-[0.3em] text-4xl sm:text-5xl font-light">
                T I T A N Series<sup className="text-sm align-top ml-1">®</sup>
              </h1>
            </div>
            <p className="text-white/80 text-base font-light tracking-[0.05em] leading-relaxed max-w-2xl mx-auto">
              Where precision meets power. Engineering excellence redefined.<br />
              The ultimate expression of spindle technology for demanding applications.
            </p>
          </div>
        </div>
      </section>

      {/* Premium Advantage with Storytelling and ROI */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl font-light text-primary-600 mb-6">
              Engineered for Those Who Demand the Best
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              The TITAN Premium Line is our most advanced <Link to="/products?line=Premium" className="text-primary-600 hover:text-primary-700 underline decoration-1 underline-offset-2">electrospindle series</Link>, crafted from decades of engineering expertise and refined with cutting-edge technology. Designed to deliver unmatched precision, reliability, and performance, these spindles guarantee you a competitive edge with reduced downtime, longer tool life, and consistent machining quality. Explore our full <Link to="/products" className="text-primary-600 hover:text-primary-700 underline decoration-1 underline-offset-2">product catalog</Link> to find the perfect spindle for your application.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="bg-gray-50 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div 
  className="mb-6 w-14 h-14 rounded-full flex items-center justify-center text-white" 
  style={{ background: 'radial-gradient(circle, #e16a6a 0%, #000000 100%)' }}
>
  <Shield className="w-7 h-7" />
</div>

              <h3 className="text-2xl font-semibold text-primary-700 mb-4">
                Ultra-Precision Shaft Balancing
              </h3>
              <p className="text-gray-600 mb-4">
                High-precision dynamic balancing across operating RPMs reduces vibration by up to 90%, improving surface finish quality and extending spindle and tool life by up to 40%.
              </p>
              <p className="font-semibold text-primary-600">Benefit:</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Smoother cuts and less wear on tools</li>
                <li>Minimized machine vibrations for longer equipment life</li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div 
  className="mb-6 w-14 h-14 rounded-full flex items-center justify-center text-white" 
  style={{ background: 'radial-gradient(circle, #e16a6a 0%, #000000 100%)' }}
>
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold text-primary-700 mb-4">
                Integrated Smart Sensors
              </h3>
              <p className="text-gray-600 mb-4">
                Embedded temperature, vibration, and load sensors continuously track spindle health, providing real-time data to operators and enabling early detection of potential issues.
              </p>
              <p className="font-semibold text-primary-600">Benefit:</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Prevent unexpected downtime with alerts</li>
                <li>Optimize maintenance scheduling, saving time and cost</li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div 
  className="mb-6 w-14 h-14 rounded-full flex items-center justify-center text-white" 
  style={{ background: 'radial-gradient(circle, #e16a6a 0%, #000000 100%)' }}
>
                <BarChart className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold text-primary-700 mb-4">
                AI-Driven Performance Monitoring
              </h3>
              <p className="text-gray-600 mb-4">
                A simple yet intelligent AI system continuously learns your spindle's unique operating signature, automatically detecting performance deviations and sending maintenance alerts to keep your production running smoothly.
              </p>
              <p className="font-semibold text-primary-600">Benefit:</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Proactive maintenance to avoid costly downtime</li>
                <li>Maximized spindle lifespan and productivity</li>
              </ul>
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
          Our <Link to="/products?line=Premium" className="text-primary-600 hover:text-primary-700 underline decoration-1 underline-offset-2">Premium Line electrospindles</Link> are engineered with rigorous research and development protocols, leveraging the latest industry innovations and precision engineering methods to guarantee superior performance and reliability. Learn more about our <Link to="/about" className="text-primary-600 hover:text-primary-700 underline decoration-1 underline-offset-2">company and engineering philosophy</Link>.
        </p>

        <div className="space-y-6">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <Microscope className="h-6 w-6 text-accent-red-500" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-primary-500">Advanced Testing Facilities</h3>
              <p className="text-gray-600">Utilizing state-of-the-art laboratories equipped with precision measurement and testing equipment to ensure every spindle meets exacting standards.</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0">
              <Award className="h-6 w-6 text-accent-red-500" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-primary-500">Certified Quality Processes</h3>
              <p className="text-gray-600">Manufactured under ISO 9001:2015 certified quality management systems, ensuring consistent excellence and thorough quality control.</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0">
              <Star className="h-6 w-6 text-accent-red-500" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-primary-500">Industry Collaboration</h3>
              <p className="text-gray-600">Partnering with leading manufacturers and research institutions worldwide to continuously incorporate best practices and innovation.</p>
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
              Our Premium Line comes with dedicated <Link to="/contact" className="text-primary-600 hover:text-primary-700 underline decoration-1 underline-offset-2">technical support</Link> and comprehensive service packages to ensure optimal performance throughout the product lifecycle.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-primary-500 mb-2">Commissioning & maintenance support</h3>
              <p className="text-gray-600">Comprehensive spindle lifecycle support.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-primary-500 mb-2">Extended Warranty</h3>
              <p className="text-gray-600">Comprehensive warranty coverage with optional extensions.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-primary-500 mb-2">Preventive Maintenance</h3>
              <p className="text-gray-600">Scheduled maintenance services to prevent downtime.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-primary-500 mb-2">Performance Analysis</h3>
              <p className="text-gray-600">Regular performance monitoring and optimization services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-16 text-white"
        style={{
          background: 'radial-gradient(circle, #e16a6a 0%, #000000 100%)'
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-8 lg:mb-0">
              <h2 className="text-3xl font-bold mb-4 text-white">Ready to upgrade to Premium?</h2>
              <p className="text-gray-200 max-w-2xl">
                Contact our specialists to discuss how our Premium Line can enhance your manufacturing capabilities.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products?line=Premium"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors duration-200"
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
