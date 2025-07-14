import { ArrowRight, Zap, Shield, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import SpindleMatcher from '../components/tools/SpindleMatcher';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
  className="relative text-white overflow-hidden -mt-16"
  style={{
    background: 'radial-gradient(circle, #4d5d6d 0%, #000000 100%)'
  }}
>
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24 lg:pb-32">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            Precision Spindles for
            <span className="block text-accent-blue-300">Industrial Excellence</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed">
            Advanced spindle technology engineered for wood, stone, aluminum, and composite machining applications.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/products"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent-blue-500 text-white font-semibold rounded-lg hover:bg-accent-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Explore Products
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link
            to="/quote"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-300"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Spindles?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Engineered for precision, built for durability, designed for performance across diverse industrial applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "High Performance",
                description: "Superior power-to-weight ratio with speeds up to 30,000 RPM for maximum efficiency."
              },
              {
                icon: Shield,
                title: "Built to Last",
                description: "Robust construction with premium materials ensures long-lasting reliability in demanding environments."
              },
              {
                icon: Award,
                title: "Precision Engineering",
                description: "Tight tolerances and advanced balancing deliver exceptional surface finishes and dimensional accuracy."
              },
              {
                icon: Users,
                title: "Expert Support",
                description: "Comprehensive technical support and application expertise to optimize your machining processes."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Families Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Product Families
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive spindle solutions designed for specific machining requirements and applications.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                family: 'M',
                title: 'AM Series',
                description: 'Manual tool change spindles offering reliable performance for standard machining operations.',
                features: ['Manual tool change', 'Robust construction', 'Cost-effective solution', 'Wide speed range'],
                image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600'
              },
              {
                family: 'Q',
                title: 'AQ Series',
                description: 'Quick tool change spindles for enhanced productivity and reduced downtime.',
                features: ['Quick tool change', 'High precision', 'Increased productivity', 'Advanced cooling'],
                image: 'https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=600'
              },
              {
                family: 'A',
                title: 'AA Series',
                description: 'Automatic tool change spindles for maximum efficiency in automated production environments.',
                features: ['Automatic tool change', 'Maximum efficiency', 'Automated operation', 'Premium performance'],
                image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600'
              }
            ].map((product, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{product.title}</h3>
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                      {product.family} Series
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                  <ul className="space-y-2 mb-8">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-accent-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/products?family=${product.family}`}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-300"
                  >
                    View Products
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spindle Matcher Tool */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Find Your Perfect Spindle
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Use our intelligent matching tool to find compatible spindle replacements based on your current specifications.
            </p>
          </div>
          <SpindleMatcher />
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Applications & Industries
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our spindles excel across diverse materials and industries, delivering consistent results in demanding applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Wood Processing",
                description: "Furniture, cabinetry, and architectural millwork with superior surface finishes.",
                image: "https://images.pexels.com/photos/175709/pexels-photo-175709.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              {
                title: "Stone & Marble",
                description: "Precision cutting and shaping of natural and engineered stone materials.",
                image: "https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              {
                title: "Aluminum Machining",
                description: "High-speed machining of aluminum components for aerospace and automotive.",
                image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              {
                title: "Composite Materials",
                description: "Advanced composites for aerospace, marine, and high-performance applications.",
                image: "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=400"
              }
            ].map((application, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-square overflow-hidden rounded-lg mb-4">
                  <img
                    src={application.image}
                    alt={application.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent-blue-300 transition-colors">
                  {application.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{application.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Enhance Your Machining Capabilities?
          </h2>
          <p className="text-xl text-primary-100 mb-8 leading-relaxed">
            Contact our experts to find the perfect spindle solution for your specific application requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quote"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent-blue-500 text-white font-semibold rounded-lg hover:bg-accent-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Request Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
