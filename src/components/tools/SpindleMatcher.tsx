import { useState } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { products } from '../../data/products';
import { Product, Application } from '../../types';
import { Link } from 'react-router-dom';

interface SpindleMatcherProps {
  className?: string;
}

const SpindleMatcher = ({ className = '' }: SpindleMatcherProps) => {
  const [power, setPower] = useState<number>(0);
  const [speed, setSpeed] = useState<number>(0);
  const [torque, setTorque] = useState<number>(0);
  const [application, setApplication] = useState<Application | ''>('');
  const [matches, setMatches] = useState<Product[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const findMatches = () => {
    const powerTolerance = 2; // ±2 kW
    const speedTolerance = 2000; // ±2000 RPM
    const torqueTolerance = 2; // ±2 Nm

    const matchedProducts = products.filter(product => {
      const powerMatch = Math.abs(product.power - power) <= powerTolerance;
      const speedMatch = 
        product.minSpeed <= speed + speedTolerance &&
        product.maxSpeed >= speed - speedTolerance;
      const torqueMatch = Math.abs(product.torque - torque) <= torqueTolerance;
      const applicationMatch = !application || product.applications.includes(application);

      return powerMatch && speedMatch && torqueMatch && applicationMatch;
    });

    setMatches(matchedProducts);
    setHasSearched(true);
  };

  return (
    <div className={`bg-white rounded-lg shadow-lg p-8 ${className}`}>
      <h2 className="text-2xl font-light font-sans text-primary-500 mb-6">Spindle Matcher</h2>
      <p className="text-gray-600 font-light font-sans mb-8">
        Enter your current spindle specifications to find compatible replacements from our product line.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div>
          <label htmlFor="power" className="block text-sm font-medium text-gray-700 mb-2">
            Power (kW)
          </label>
          <input
            type="number"
            id="power"
            value={power || ''}
            onChange={(e) => setPower(Number(e.target.value))}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-accent-blue-500 focus:ring focus:ring-accent-blue-200 focus:ring-opacity-50"
            placeholder="e.g., 7.5"
          />
        </div>

        <div>
          <label htmlFor="speed" className="block text-sm font-medium text-gray-700 mb-2">
            Speed (RPM)
          </label>
          <input
            type="number"
            id="speed"
            value={speed || ''}
            onChange={(e) => setSpeed(Number(e.target.value))}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-accent-blue-500 focus:ring focus:ring-accent-blue-200 focus:ring-opacity-50"
            placeholder="e.g., 24000"
          />
        </div>

        <div>
          <label htmlFor="torque" className="block text-sm font-medium text-gray-700 mb-2">
            Torque (Nm)
          </label>
          <input
            type="number"
            id="torque"
            value={torque || ''}
            onChange={(e) => setTorque(Number(e.target.value))}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-accent-blue-500 focus:ring focus:ring-accent-blue-200 focus:ring-opacity-50"
            placeholder="e.g., 5.4"
          />
        </div>

        <div>
          <label htmlFor="application" className="block text-sm font-medium text-gray-700 mb-2">
            Application
          </label>
          <select
            id="application"
            value={application}
            onChange={(e) => setApplication(e.target.value as Application | '')}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-accent-blue-500 focus:ring focus:ring-accent-blue-200 focus:ring-opacity-50"
          >
            <option value="">Any Application</option>
            <option value="Wood">Wood</option>
            <option value="Stone">Stone</option>
            <option value="Aluminum">Aluminum</option>
            <option value="Composites">Composites</option>
            <option value="Plastic">Plastic</option>
            <option value="Glass">Glass</option>
          </select>
        </div>
      </div>

      <button
        onClick={findMatches}
        className="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-blue-500 mb-8"
  style={{ background: 'radial-gradient(circle, #4d5d6d 0%, #000000 100%)' }}
      >
        <Search className="w-5 h-5 mr-2" />
        Find Matching Spindles
      </button>

      {hasSearched && (
        <div className="space-y-6">
          {matches.length > 0 ? (
            <>
              <h3 className="text-lg font-semibold text-primary-500 mb-4">
                Compatible Replacements ({matches.length})
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {matches.map((product) => (
                  <div
                    key={product.id}
                    className="bg-gray-50 rounded-lg p-6 transition-all duration-300 hover:shadow-md"
                  >
                    <h4 className="text-lg font-semibold text-primary-500 mb-2">
                      {product.name}
                    </h4>
                    <div className="text-sm text-gray-600 space-y-1 mb-4">
                      <p>Power: {product.power} kW</p>
                      <p>Speed: {product.minSpeed.toLocaleString()} - {product.maxSpeed.toLocaleString()} RPM</p>
                      <p>Torque: {product.torque} Nm</p>
                      <p>Applications: {product.applications.join(', ')}</p>
                    </div>
                    <Link
                      to={`/products/${product.id}`}
                      className="inline-flex items-center text-accent-blue-500 hover:text-accent-blue-700 font-medium"
                    >
                      View Details
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-8">
              <p className="text-lg text-gray-600 mb-4">
                No exact matches found. Contact our team for a custom solution.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-blue-500"
              >
                Contact Sales
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SpindleMatcher;
