import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';
import ProductCard from '../components/products/ProductCard';
import ProductFilter from '../components/products/ProductFilter';
import DownloadBrochure from '../components/shared/DownloadBrochure';
import { products, getFilterLimits } from '../data/products';
import { FilterOptions, Product, Application, ProductFamily, ToolHolder, ToolHolderTypeCategory } from '../types';

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [showFilters, setShowFilters] = useState(false);
  
  // Get filter ranges
  const limits = getFilterLimits();
  const powerRange: [number, number] = [limits.minPower, limits.maxPower];
  const speedRange: [number, number] = [limits.minSpeed, limits.maxSpeed];
  const torqueRange: [number, number] = [limits.minTorque, limits.maxTorque];
  
  // Set up filters based on URL parameters
  const [filters, setFilters] = useState<FilterOptions>({
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

  // Initialize filters from URL on load
  useEffect(() => {
    const familyParam = searchParams.get('family');
    const toolHolderTypeCategoryParam = searchParams.get('toolHolderTypeCategory');
    const applicationParam = searchParams.get('application');
    const toolHolderParam = searchParams.get('toolHolder') as ToolHolder | null;
    const minPowerParam = searchParams.get('minPower');
    const maxPowerParam = searchParams.get('maxPower');
    const minSpeedParam = searchParams.get('minSpeed');
    const maxSpeedParam = searchParams.get('maxSpeed');
    const minTorqueParam = searchParams.get('minTorque');
    const maxTorqueParam = searchParams.get('maxTorque');
    const lineParam = searchParams.get('line');
    
    setFilters(prev => ({
      ...prev,
      family: (familyParam && ['M', 'Q', 'A'].includes(familyParam)) ? familyParam as ProductFamily : 'All',
      toolHolderTypeCategory: (toolHolderTypeCategoryParam && ['ER', 'HSK', 'ISO'].includes(toolHolderTypeCategoryParam)) ? toolHolderTypeCategoryParam as ToolHolderTypeCategory : 'All',
      application: (applicationParam && ['Wood', 'Stone', 'Aluminum', 'Composites'].includes(applicationParam)) ? applicationParam as Application : 'All',
      toolHolder: toolHolderParam || 'All',
      line: (lineParam && ['Standard', 'Premium'].includes(lineParam)) ? lineParam as 'Standard' | 'Premium' : 'All',
      minPower: minPowerParam ? Number(minPowerParam) : null,
      maxPower: maxPowerParam ? Number(maxPowerParam) : null,
      minSpeed: minSpeedParam ? Number(minSpeedParam) : null,
      maxSpeed: maxSpeedParam ? Number(maxSpeedParam) : null,
      minTorque: minTorqueParam ? Number(minTorqueParam) : null,
      maxTorque: maxTorqueParam ? Number(maxTorqueParam) : null,
    }));
  }, [searchParams]);

  // Update URL when filters change
  useEffect(() => {
    const newParams = new URLSearchParams();
    
    if (filters.family !== 'All') {
      newParams.set('family', filters.family);
    }
    
    if (filters.toolHolderTypeCategory !== 'All') {
      newParams.set('toolHolderTypeCategory', filters.toolHolderTypeCategory);
    }
    
    if (filters.application !== 'All') {
      newParams.set('application', filters.application);
    }

    if (filters.toolHolder !== 'All') {
      newParams.set('toolHolder', filters.toolHolder);
    }
    
    if (filters.line !== 'All') {
      newParams.set('line', filters.line);
    }
    
    if (filters.minPower !== null) {
      newParams.set('minPower', filters.minPower.toString());
    }
    
    if (filters.maxPower !== null) {
      newParams.set('maxPower', filters.maxPower.toString());
    }
    
    if (filters.minSpeed !== null) {
      newParams.set('minSpeed', filters.minSpeed.toString());
    }
    
    if (filters.maxSpeed !== null) {
      newParams.set('maxSpeed', filters.maxSpeed.toString());
    }
    
    if (filters.minTorque !== null) {
      newParams.set('minTorque', filters.minTorque.toString());
    }
    
    if (filters.maxTorque !== null) {
      newParams.set('maxTorque', filters.maxTorque.toString());
    }
    
    setSearchParams(newParams, { replace: true });
  }, [filters, setSearchParams]);

  // Apply filters and search
  useEffect(() => {
    let result = [...products];
    
    // Apply search term
    if (searchTerm) {
      const lowercaseSearch = searchTerm.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(lowercaseSearch) || 
        product.description.toLowerCase().includes(lowercaseSearch)
      );
    }
    
    // Apply product family filter
    if (filters.family !== 'All') {
      result = result.filter(product => product.family === filters.family);
    }
    
    // Apply tool holder type category filter
    if (filters.toolHolderTypeCategory !== 'All') {
      result = result.filter(product => product.toolHolderTypeCategory === filters.toolHolderTypeCategory);
    }
    
    // Apply tool holder filter
    if (filters.toolHolder !== 'All') {
      result = result.filter(product => product.toolHolder === filters.toolHolder);
    }
    
    // Apply application filter
    if (filters.application !== 'All') {
      result = result.filter(product => 
        product.applications.includes(filters.application as Application)
      );
    }
    
    // Apply power range filter
    if (filters.minPower !== null) {
      result = result.filter(product => product.power >= filters.minPower!);
    }
    if (filters.maxPower !== null) {
      result = result.filter(product => product.power <= filters.maxPower!);
    }
    
    // Apply speed range filter
    if (filters.minSpeed !== null) {
      result = result.filter(product => product.minSpeed >= filters.minSpeed!);
    }
    if (filters.maxSpeed !== null) {
      result = result.filter(product => product.maxSpeed <= filters.maxSpeed!);
    }
    
    // Apply torque filter
    if (filters.minTorque !== null) {
      result = result.filter(product => product.torque >= filters.minTorque!);
    }
    if (filters.maxTorque !== null) {
      result = result.filter(product => product.torque <= filters.maxTorque!);
    }
    
    setFilteredProducts(result);
  }, [searchTerm, filters]);

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section 
        className="relative text-white overflow-hidden -mt-16"
        style={{
          background: 'radial-gradient(circle, #4d5d6d 0%, #000000 100%)'
        }}
      >
        <div className="container mx-auto px-4 pt-40 pb-24 sm:px-6 lg:px-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">Electro Spindles</h1>
              <p className="text-primary-100 max-w-3xl">
                Explore our comprehensive range of high-performance electro spindles designed for various materials and applications.
              </p>
            </div>
            <DownloadBrochure />
          </div>
        </div>
      </section>
      
      {/* Search and Filter Controls */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="relative flex-grow max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search spindles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-accent-blue-500 focus:border-accent-blue-500 sm:text-sm"
              />
            </div>
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-blue-500"
            >
              <Filter className="mr-2 h-5 w-5 text-gray-400" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
            
            <div className="hidden sm:flex items-center text-sm text-gray-500">
              <span>{filteredProducts.length} products found</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Products and Filters */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Filters - Desktop (Sticky) */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-20 z-10">
              <ProductFilter 
                filters={filters}
                onFilterChange={setFilters}
                powerRange={powerRange}
                speedRange={speedRange}
                torqueRange={torqueRange}
              />
            </div>
          </div>
          
          {/* Filters - Mobile */}
          {showFilters && (
            <div className="lg:hidden mb-6">
              <ProductFilter 
                filters={filters}
                onFilterChange={setFilters}
                powerRange={powerRange}
                speedRange={speedRange}
                torqueRange={torqueRange}
              />
            </div>
          )}
          
          {/* Products */}
          <div className="lg:col-span-3">
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-500 mb-4">
                  Try adjusting your search or filter criteria to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setFilters({
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
                  }}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-blue-500"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
