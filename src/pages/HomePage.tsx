import { useState } from 'react';
import { ArrowRight, Zap, Shield, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import SpindleMatcher from '../components/tools/SpindleMatcher';

const HomePage = () => {
  const [hoveredApplication, setHoveredApplication] = useState<number | null>(null);

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
  ARK SPINDLES<sup className="text-sm align-top ml-1">®</sup>
</h1>
          <p className="text-base lg:text-1xl text-gray-200 font-sans tracking-[0.3em]">
            Precision that powers Performance
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/products"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent-black-500 text-white font-semibold rounded-lg hover:bg-accent-black-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
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
              Advanced electro-spindle technology delivering uncompromising precision and performance for demanding <Link to="/products" className="text-primary-600 hover:text-primary-700 underline decoration-1 underline-offset-2">CNC routing applications</Link>.
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
                description: "High-efficiency motor architecture with optimized rotor-stator design delivers superior torque density, smooth acceleration, and stable performance across the speed range.",
                specs: "Optimized design",
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
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mb-6">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-light text-gray-900 mb-4 font-sans tracking-[0.1em]">
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
              Tailored spindle systems engineered for distinct materials, methods, and performance demands — from <Link to="/products?application=Wood" className="text-primary-600 hover:text-primary-700 underline decoration-1 underline-offset-2">high-speed contouring in wood</Link> to heavy-duty milling in <Link to="/products?application=Stone" className="text-primary-600 hover:text-primary-700 underline decoration-1 underline-offset-2">stone</Link> and <Link to="/products?application=Aluminum" className="text-primary-600 hover:text-primary-700 underline decoration-1 underline-offset-2">aluminum</Link>.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                family: 'M',
                title: 'MTC spindles',
                description: 'Manual tool change spindles offering reliable performance for standard machining operations.',
                features: ['Manual tool change', 'Robust construction', 'Cost-effective solution', 'Wide speed range'],
                image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600'
              },
              {
                family: 'Q',
                title: 'QTC spindles',
                description: 'Quick tool change spindles for enhanced productivity and reduced downtime.',
                features: ['Quick tool change', 'High precision', 'Increased productivity', 'Advanced cooling'],
                image: 'https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=600'
              },
              {
                family: 'A',
                title: 'ATC spindles',
                description: 'Automatic tool change spindles for maximum efficiency in automated production environments.',
                features: ['Automatic tool change', 'Maximum efficiency', 'Automated operation', 'Premium performance'],
                image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600'
              },
              {
                family: 'B',
                title: 'Blade Tech spindles',
                description: 'Advanced blade technology spindles for precision cutting and specialized applications.',
                features: ['Blade mounting interface', 'High-speed cutting', 'Precision alignment', 'Advanced cooling'],
                image: 'https://images.pexels.com/photos/3846517/pexels-photo-3846517.jpeg?auto=compress&cs=tinysrgb&w=600'
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
                    <h3 className="text-2xl font-light font-sans text-gray-900">{product.title}</h3>
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                      {product.family === 'M' ? 'AM' : product.family === 'Q' ? 'AQ' : product.family === 'A' ? 'AA' : 'AM'} Series
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                  <ul className="space-y-2 mb-8">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-accent-gray-800 rounded-full mr-3"></div>
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
              Find a Replacement for your Existing Spindle
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed font-sans tracking-[0.05em]">
              Use our intelligent matching tool to find compatible <Link to="/products" className="text-primary-600 hover:text-primary-700 underline decoration-1 underline-offset-2">spindle replacements</Link> based on your current specifications.
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
              Our <Link to="/products" className="text-primary-600 hover:text-primary-700 underline decoration-1 underline-offset-2">precision spindles</Link> excel across diverse materials and industries, delivering consistent results in demanding applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Wood Processing",
                description: "Furniture, cabinetry, and architectural millwork with superior surface finishes.",
                image: "https://images.pexels.com/photos/175709/pexels-photo-175709.jpeg?auto=compress&cs=tinysrgb&w=400",
                detailedDescription: [
                  "Hardwood machining (Oak, Maple, Cherry)",
                  "Softwood processing (Pine, Cedar, Fir)",
                  "Engineered wood products (Plywood, MDF, OSB)",
                  "Laminated materials and veneers",
                  "Complex 3D carving and profiling"
                ]
              },
              {
                title: "Stone & Marble",
                description: "Precision cutting and shaping of natural and engineered stone materials.",
                image: "https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=400",
                detailedDescription: [
                  "Natural stone (Granite, Marble, Limestone)",
                  "Engineered quartz and composite stones",
                  "Ceramic and porcelain tiles",
                  "Architectural stone elements",
                  "Countertop fabrication and edge profiling"
                ]
              },
              {
                title: "Aluminum Machining",
                description: "High-speed machining of aluminum components for aerospace and automotive.",
                image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400",
                detailedDescription: [
                  "6061 and 7075 aluminum alloys",
                  "Aerospace component manufacturing",
                  "Automotive parts and heat sinks",
                  "Architectural aluminum profiles",
                  "High-speed milling and drilling operations"
                ]
              },
              {
                title: "Composite Materials",
                description: "Advanced composites for aerospace, marine, and high-performance applications.",
                image: "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=400",
                detailedDescription: [
                  "Carbon fiber reinforced plastics (CFRP)",
                  "Glass fiber composites (GFRP)",
                  "Honeycomb sandwich structures",
                  "Prepreg and wet-lay materials",
                  "Aerospace and marine applications"
                ]
              },
              {
                title: "Plastic Processing",
                description: "Precision machining of thermoplastics and engineering plastics for industrial components.",
                image: "https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=400",
                detailedDescription: [
                  "Engineering plastics (PEEK, POM, Nylon)",
                  "Thermoplastics (ABS, PC, PMMA)",
                  "High-performance polymers",
                  "Medical grade plastics",
                  "Precision prototype development"
                ]
              },
              {
                title: "Glass Engraving",
                description: "High-precision engraving and cutting of glass materials for decorative and functional applications.",
                image: "https://images.pexels.com/photos/1029624/pexels-photo-1029624.jpeg?auto=compress&cs=tinysrgb&w=400",
                detailedDescription: [
                  "Tempered and laminated glass",
                  "Decorative glass engraving",
                  "Optical glass components",
                  "Architectural glass panels",
                  "Precision edge polishing"
                ]
              }
            ].map((application, index) => (
              <div
                key={index}
                className="relative group cursor-pointer bg-white rounded-lg shadow-md overflow-visible transition-all duration-300 hover:shadow-xl hover:z-50"
                onMouseEnter={() => setHoveredApplication(index)}
                onMouseLeave={() => setHoveredApplication(null)}
              >
                <div className="overflow-hidden rounded-t-lg">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={application.image}
                      alt={application.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                      {application.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{application.description}</p>
                  </div>
                </div>

                {/* Expanded overlay content */}
                <div
                  className={`absolute left-0 right-0 top-full bg-white rounded-b-lg shadow-2xl transition-all duration-300 ${
                    hoveredApplication === index
                      ? 'opacity-100 translate-y-0 pointer-events-auto'
                      : 'opacity-0 -translate-y-2 pointer-events-none'
                  }`}
                  style={{ zIndex: 60 }}
                >
                  <div className="border-t border-gray-200 p-6">
                    <h4 className="text-sm font-semibold text-primary-500 mb-3">Specialized Applications:</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      {application.detailedDescription.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
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
              Tailored <Link to="/products" className="text-primary-600 hover:text-primary-700 underline decoration-1 underline-offset-2">spindle systems</Link> engineered for distinct materials, methods, and performance demands — from high-speed contouring in wood to heavy-duty milling in stone and aluminum. Each platform reflects a systems-level approach to machining excellence.
            </p>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed font-sans tracking-[0.05em]">
              For unique requirements, we offer fully <Link to="/premium" className="text-primary-600 hover:text-primary-700 underline decoration-1 underline-offset-2">custom spindle solutions</Link> — co-engineered to match your exacting performance and integration needs.
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
  className="mt-6 inline-flex items-center justify-center px-6 py-3 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
  style={{ background: 'radial-gradient(circle, #4d5d6d 0%, #000000 100%)' }}
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
