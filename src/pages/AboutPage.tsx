import { Link } from 'react-router-dom';
import { ChevronRight, Users, History, Target, Award, Globe as Globe2, Rocket, Crosshair, Zap, Gauge } from 'lucide-react';
import Breadcrumbs from '../components/shared/Breadcrumbs';

const AboutPage = () => {
  return (
    <div className="animate-fade-in">
      <Breadcrumbs items={[{ label: 'About' }]} />

      {/* Hero Section */}
      <section 
        className="relative text-white overflow-hidden -mt-16"
        style={{
          background: 'radial-gradient(circle, #4d5d6d 0%, #000000 100%)'
        }}
      >
        <div className="container mx-auto px-4 pt-40 pb-24 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-4xl lg:text-5xl font-light font sans tracking-[0.2em] mb-6 leading-tight animate-slide-in">
              ARK SPINDLES
            </h1>
            <p className="text-xl mb-8 text-gray-200 max-w-2xl">
              Precision. Built in India. Engineered for the World.
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
                alt="Ark Spindles Factory"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary-500 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                ARK SPINDLES was founded with a clear ambition: to build India's most respected <Link to="/products" className="text-primary-600 hover:text-primary-700 underline decoration-1 underline-offset-2">precision engineered electrospindles</Link>, that power the future of industrial automation.
              </p>
              <p className="text-gray-600 mb-6">
                We're building for today's applications with tomorrow's tech — where precision, efficiency, and localized innovation will define the winners of global manufacturing. Explore our <Link to="/premium" className="text-primary-600 hover:text-primary-700 underline decoration-1 underline-offset-2">premium line</Link> to see our latest innovations.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500 mb-2">100%</div>
                  <div className="text-gray-600">Engineered in India</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500 mb-2">R&D</div>
                  <div className="text-gray-600">Driven by Engineering Science</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500 mb-2">Modular</div>
                  <div className="text-gray-600">Customizable Spindle Platforms</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500 mb-2">Foundation</div>
                  <div className="text-gray-600">Built to Power Precision Machines</div>
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
            <h2 className="text-3xl font-bold text-primary-500 mb-4">Our Design Tenets</h2>
            <p className="text-gray-600">
              As an engineering-first company, our design tenets are guided by clarity of thought, responsibility to our craft, and a commitment to building technologies that endure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mb-6">
                <Crosshair className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary-500 mb-3">Precision</h3>
              <p className="text-gray-600">
                We believe precision is not just a metric — it’s a mindset. From micron-level tolerances to thermal deformation analysis, every spindle is engineered with obsessive attention to dimensional integrity, dynamic balance, and long-term stability. Precision enables consistency, reliability, and control in every cut.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary-500 mb-3">Power</h3>
              <p className="text-gray-600">
                Behind every SpindleTech system is a deep understanding of force, motion, and mechanical strength. Whether it’s torque delivery at low RPM or sustained performance at high speeds, we engineer our spindles for optimal power-to-weight ratios, rigid rotor systems, and superior thermal dissipation — all tailored to real-world cutting loads.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mb-6">
                <Gauge className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary-500 mb-3">Performance</h3>
              <p className="text-gray-600">
                Performance is where theory meets reality. It’s not just about speed or horsepower, but how a spindle behaves over time — under stress, during long production cycles, and in varied environments. Our spindles are built for repeatability, efficiency, and durability — delivering measurable results where it matters: on the shop floor.
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
              <h2 className="text-3xl font-bold text-primary-500 mb-6">Expanding Globally</h2>
              <p className="text-gray-600 mb-6">
                While proudly rooted in India, our <Link to="/products" className="text-primary-600 hover:text-primary-700 underline decoration-1 underline-offset-2">spindles</Link> are finding their way into machines around the world. We're building a global reputation for engineering clarity, competitive pricing, and exceptional <Link to="/contact" className="text-primary-600 hover:text-primary-700 underline decoration-1 underline-offset-2">after-sales support</Link>.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Globe2 className="w-6 h-6 text-primary-500 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Trusted by OEMs</h3>
                    <p className="text-gray-600">Serving machine builders in <Link to="/products?application=Wood" className="text-primary-600 hover:text-primary-700 underline decoration-1 underline-offset-2">woodworking</Link>, <Link to="/products?application=Stone" className="text-primary-600 hover:text-primary-700 underline decoration-1 underline-offset-2">stone</Link>, <Link to="/products?application=Aluminum" className="text-primary-600 hover:text-primary-700 underline decoration-1 underline-offset-2">aluminum</Link>, and more</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <History className="w-6 h-6 text-primary-500 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Always Improving</h3>
                    <p className="text-gray-600">We evolve through data, testing, and deep field feedback</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="w-6 h-6 text-primary-500 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Engineered for Longevity</h3>
                    <p className="text-gray-600">Designed to perform reliably over thousands of cutting hours</p>
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
              <h2 className="text-3xl font-bold mb-4">Join Our Precision Revolution</h2>
              <p className="text-primary-100 max-w-2xl">
                Whether you're building a machine or an entire factory line, Ark Spindles is ready to support your growth with reliable, precise, and scalable spindle systems.
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
