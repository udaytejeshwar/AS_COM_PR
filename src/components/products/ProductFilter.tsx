import { useState, useEffect } from 'react';
import { Filter } from 'lucide-react';
import { Application, FilterOptions, ProductFamily, ToolHolder, ToolHolderTypeCategory } from '../../types';

interface ProductFilterProps {
  filters: FilterOptions;
  onFilterChange: (newFilters: FilterOptions) => void;
  powerRange: [number, number];
  speedRange: [number, number];
  torqueRange: [number, number];
}

const ProductFilter = ({ 
  filters, 
  onFilterChange, 
  powerRange, 
  speedRange, 
  torqueRange 
}: ProductFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const updateFilter = <K extends keyof FilterOptions>(key: K, value: FilterOptions[K]) => {
    onFilterChange({ ...filters, [key]: value });
  };

  const resetFilters = () => {
    onFilterChange({
      family: 'All',
      toolHolderTypeCategory: 'All',
      line: 'All',
      minPower: null,
      maxPower: null,
      minSpeed: null,
      maxSpeed: null,
      minTorque: null,
      maxTorque: null,
      toolHolder: 'All',
      application: 'All'
    });
  };

  // Close filter on larger screens when window resizes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 border-b flex justify-between items-center lg:hidden">
        <h3 className="font-medium text-primary-500">Filters</h3>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center text-sm text-gray-600 hover:text-primary-500"
        >
          <Filter className="w-4 h-4 mr-1" />
          {isOpen ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>
      
      <div className={`${isOpen ? 'block' : 'hidden'} lg:block p-4 space-y-6`}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Product Family
          </label>
          <div className="flex flex-wrap gap-2">
            {(['All', 'M', 'Q', 'A'] as const).map((family) => (
              <button
                key={family}
                type="button"
                onClick={() => updateFilter('family', family)}
                className={`px-3 py-1 text-sm rounded-full border ${
                  filters.family === family 
                    ? 'bg-primary-500 text-white border-primary-500' 
                    : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
                }`}
              >
                {family === 'M' ? 'MTC' : family === 'Q' ? 'QTC' : family === 'A' ? 'ATC' : family}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tool Holder Type
          </label>
          <div className="flex flex-wrap gap-2">
            {(['All', 'ER', 'HSK', 'ISO'] as const).map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => updateFilter('toolHolderTypeCategory', type)}
                className={`px-3 py-1 text-sm rounded-full border ${
                  filters.toolHolderTypeCategory === type
                    ? 'bg-primary-500 text-white border-primary-500'
                    : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Tool Holder Size Filter */}
        {filters.toolHolderTypeCategory !== 'All' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tool Holder Size
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => updateFilter('toolHolder', 'All')}
                className={`px-3 py-1 text-sm rounded-full border ${
                  filters.toolHolder === 'All'
                    ? 'bg-primary-500 text-white border-primary-500'
                    : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              {filters.toolHolderTypeCategory === 'ER' && (
                ['ER20', 'ER25', 'ER32', 'ER40'].map((holder) => (
                  <button
                    key={holder}
                    type="button"
                    onClick={() => updateFilter('toolHolder', holder as ToolHolder)}
                    className={`px-3 py-1 text-sm rounded-full border ${
                      filters.toolHolder === holder
                        ? 'bg-primary-500 text-white border-primary-500'
                        : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
                    }`}
                  >
                    {holder}
                  </button>
                ))
              )}
              {filters.toolHolderTypeCategory === 'HSK' && (
                ['HSK-E50', 'HSK-F63', 'HSK-A63'].map((holder) => (
                  <button
                    key={holder}
                    type="button"
                    onClick={() => updateFilter('toolHolder', holder as ToolHolder)}
                    className={`px-3 py-1 text-sm rounded-full border ${
                      filters.toolHolder === holder
                        ? 'bg-primary-500 text-white border-primary-500'
                        : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
                    }`}
                  >
                    {holder}
                  </button>
                ))
              )}
              {filters.toolHolderTypeCategory === 'ISO' && (
                ['ISO30', 'ISO40'].map((holder) => (
                  <button
                    key={holder}
                    type="button"
                    onClick={() => updateFilter('toolHolder', holder as ToolHolder)}
                    className={`px-3 py-1 text-sm rounded-full border ${
                      filters.toolHolder === holder
                        ? 'bg-primary-500 text-white border-primary-500'
                        : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
                    }`}
                  >
                    {holder}
                  </button>
                ))
              )}
            </div>
          </div>
        )}
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Application
          </label>
          <div className="flex flex-wrap gap-2">
            {(['All', 'Wood', 'Stone', 'Aluminum', 'Composites'] as const).map((app) => (
              <button
                key={app}
                type="button"
                onClick={() => updateFilter('application', app)}
                className={`px-3 py-1 text-sm rounded-full border ${
                  filters.application === app
                    ? 'bg-primary-500 text-white border-primary-500' 
                    : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
                }`}
              >
                {app}
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Power Range (kW)
          </label>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Min</label>
              <select
                value={filters.minPower?.toString() || ''}
                onChange={(e) => updateFilter('minPower', e.target.value ? Number(e.target.value) : null)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-accent-blue-300 focus:ring focus:ring-accent-blue-200 focus:ring-opacity-50 text-sm"
              >
                <option value="">Any</option>
                {Array.from({ length: Math.floor(powerRange[1] - powerRange[0]) + 1 }, (_, i) => powerRange[0] + i).map(power => (
                  <option key={power} value={power}>{power}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Max</label>
              <select
                value={filters.maxPower?.toString() || ''}
                onChange={(e) => updateFilter('maxPower', e.target.value ? Number(e.target.value) : null)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-accent-blue-300 focus:ring focus:ring-accent-blue-200 focus:ring-opacity-50 text-sm"
              >
                <option value="">Any</option>
                {Array.from({ length: Math.floor(powerRange[1] - powerRange[0]) + 1 }, (_, i) => powerRange[0] + i).map(power => (
                  <option key={power} value={power}>{power}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Speed Range (RPM)
          </label>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Min</label>
              <select
                value={filters.minSpeed?.toString() || ''}
                onChange={(e) => updateFilter('minSpeed', e.target.value ? Number(e.target.value) : null)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-accent-blue-300 focus:ring focus:ring-accent-blue-200 focus:ring-opacity-50 text-sm"
              >
                <option value="">Any</option>
                {[3000, 4000, 5000, 6000, 8000, 10000].map(speed => (
                  <option key={speed} value={speed}>{speed.toLocaleString()}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Max</label>
              <select
                value={filters.maxSpeed?.toString() || ''}
                onChange={(e) => updateFilter('maxSpeed', e.target.value ? Number(e.target.value) : null)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-accent-blue-300 focus:ring focus:ring-accent-blue-200 focus:ring-opacity-50 text-sm"
              >
                <option value="">Any</option>
                {[18000, 20000, 22000, 24000, 28000, 30000].map(speed => (
                  <option key={speed} value={speed}>{speed.toLocaleString()}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Torque (Nm)
          </label>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Min</label>
              <select
                value={filters.minTorque?.toString() || ''}
                onChange={(e) => updateFilter('minTorque', e.target.value ? Number(e.target.value) : null)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-accent-blue-300 focus:ring focus:ring-accent-blue-200 focus:ring-opacity-50 text-sm"
              >
                <option value="">Any</option>
                {[3, 5, 6, 8, 10, 12].map(torque => (
                  <option key={torque} value={torque}>{torque}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Max</label>
              <select
                value={filters.maxTorque?.toString() || ''}
                onChange={(e) => updateFilter('maxTorque', e.target.value ? Number(e.target.value) : null)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-accent-blue-300 focus:ring focus:ring-accent-blue-200 focus:ring-opacity-50 text-sm"
              >
                <option value="">Any</option>
                {[6, 8, 10, 12, 15, 20].map(torque => (
                  <option key={torque} value={torque}>{torque}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        <div>
          <button
            type="button"
            onClick={resetFilters}
            className="w-full py-2 mt-2 text-sm text-accent-blue-500 hover:text-accent-blue-700 font-medium transition-colors"
          >
            Reset All Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
