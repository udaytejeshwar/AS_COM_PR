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
    <div className="flex flex-col items-center text-center">
      <div className="space-y-8 max-w-4xl">
        <div className="space-y-4">
          <h1 className="text-4xl lg:text-6xl font-light leading-tight tracking-[0.3em] uppercase">
  ARK SPINDLES
</h1>
          <p className="text-base lg:text-1xl text-gray-200 font-sans tracking-[0.3em]">
            Precision that powers Performance
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
        
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">  
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed font-sans tracking-[0.05em]">
              Advanced electro-spindle technology delivering uncompromising precision and performance for demanding CNC routing applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "High Speed Performance",
                description: "Engineered for sustained operation at speeds up to 30,000 RPM with superior power density and thermal management for continuous production cycles.",
                specs: "Up to 30,000 RPM",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Shield,
                title: "Precision Engineering",
                description: "Sub-micron runout tolerances and advanced dynamic balancing ensure exceptional surface finishes and dimensional accuracy in wood, aluminum, and composite materials.",
                specs: "Sub-micron runout",
                gradient: "from-emerald-500 to-teal-500"
              },
              {
                icon: Award,
                title: "Technical Innovation",
                description: "State-of-the-art bearing systems, optimized cooling channels, and advanced motor control technology for maximum reliability and performance consistency.",
                specs: "Advanced bearing systems",
                gradient: "from-purple-500 to-violet-500"
              },
              {
                icon: Users,
                title: "Engineering Support",
                description: "Comprehensive technical support with application-specific optimization, tooling recommendations, and machining parameter development for your processes.",
                specs: "Expert technical support",
                gradient: "from-orange-500 to-red-500"
              }
            ].map((feature, index) => (
              <div key={index} className="group relative">
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full">
                  {/* Clean icon container */}
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{
                      backgroundColor: '#4d5d6d'
                    }}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-thin text-gray-900 mb-4 font-sans tracking-[0.1em]">
                    {feature.title}
                  </h3>
                  
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-sm font-semibold" style={{
                      backgroundColor: '#f8f9fa',
                      color: '#4d5d6d',
                      border: '1px solid #e9ecef'
                    }}>
                      {feature.specs}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
         
        </div>
      </section>

      {/* Product Families Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-extralight text-gray-900 mb-4 font-sans tracking-[0.1em]">
              Precision Platforms
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed font-sans tracking-[0.05em]">
              Tailored spindle systems engineered for distinct materials, methods, and performance demands — from high-speed contouring in wood to heavy-duty milling in stone and aluminum.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                family: 'M',
                title: 'MTC',
                description: 'Manual tool change spindles offering reliable performance for standard machining operations.',
                features: ['Manual tool change', 'Robust construction', 'Cost-effective solution', 'Wide speed range'],
                image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600'
              },
              {
                family: 'Q',
                title: 'QTC',
                description: 'Quick tool change spindles for enhanced productivity and reduced downtime.',
                features: ['Quick tool change', 'High precision', 'Increased productivity', 'Advanced cooling'],
                image: 'https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=600'
              },
              {
                family: 'A',
                title: 'ATC',
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
                      {product.family === 'M' ? 'AM' : product.family === 'Q' ? 'AQ' : 'AA'} Series
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
      <section className="py-20 bg-white" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-extralight text-gray-900 mb-4 font-sans tracking-[0.1em]">
              Find Your Perfect Spindle
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed font-sans tracking-[0.05em]">
              Use our intelligent matching tool to find compatible spindle replacements based on your current specifications.
            </p>
          </div>
          <SpindleMatcher />
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-extralight text-gray-900 mb-4 font-sans tracking-[0.1em]">
              Applications & Industries
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed font-sans tracking-[0.05em]">
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
                <h3 className="text-xl font-semibold mb-2 text-gray-300 group-hover:text-gray-900 transition-colors duration-300">
                  {application.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{application.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center animate-fade-in">
          <div>
            <h2 className="text-3xl lg:text-4xl font-extralight text-gray-900 mb-4 font-sans tracking-[0.1em]">
              Need a Custom Project?
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed font-sans tracking-[0.05em]">
              Tailored spindle systems engineered for distinct materials, methods, and performance demands — from high-speed contouring in wood to heavy-duty milling in stone and aluminum. Each platform reflects a systems-level approach to machining excellence.
            </p>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed font-sans tracking-[0.05em]">
              For unique requirements, we offer fully custom spindle solutions — co-engineered to match your exacting performance and integration needs.
            </p>
          </div>
          <div className="text-center lg:text-left">
            <h3 className="text-3xl lg:text-2xl font-extralight text-gray-900 mb-4 font-sans tracking-[0.1em]">
              Contact Us for Custom Solutions
            </h3>
            <p className="text-base text-gray-600 max-w-1xl mx-auto leading-relaxed font-sans tracking-[0.05em]">
              Our experts are ready to discuss your specific project and co-engineer the perfect spindle solution.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent-blue-500 text-white font-semibold rounded-lg hover:bg-accent-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contact Our Experts
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
