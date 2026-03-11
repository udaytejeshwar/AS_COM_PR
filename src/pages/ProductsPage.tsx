import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';
import ProductCard from '../components/products/ProductCard';
import ProductFilter from '../components/products/ProductFilter';
import DownloadBrochure from '../components/shared/DownloadBrochure';
import StructuredData from '../components/shared/StructuredData';
import { products, getFilterLimits } from '../data/products';
import { FilterOptions, Product, Application, ProductFamily, ToolHolder, ToolHolderTypeCategory } from '../types';
import useSEO from '../hooks/useSEO';
import { SEO } from '../config/seo';
import { buildProductListSchema } from '../config/schemas';
import { getPrimaryProductImage } from '../utils/productImages';

// Full product list schema — stable, built once
const PRODUCT_LIST_SCHEMA = buildProductListSchema(
  products.map(p => ({ id: p.id, name: p.name, description: p.description, imageUrl: getPrimaryProductImage(p).url }))
);

const getFiltersFromSearchParams = (searchParams: URLSearchParams): FilterOptions => {
  const familyParam = searchParams.get('family');
  const toolHolderTypeCategoryParam = searchParams.get('toolHolderTypeCategory');
  const applicationParam = searchParams.get('application');
  const toolHolderParam = searchParams.get('toolHolder') as ToolHolder | null;
  const lineParam = searchParams.get('line');

  return {
    //Use the below 3 lines when you need to include ATC and blade along with aother applications
    // family: (familyParam && ['M', 'Q', 'A', 'B'].includes(familyParam)) ? familyParam as ProductFamily : 'All',
    // toolHolderTypeCategory: (toolHolderTypeCategoryParam && ['ER', 'HSK', 'ISO'].includes(toolHolderTypeCategoryParam)) ? toolHolderTypeCategoryParam as ToolHolderTypeCategory : 'All',
    // application: (applicationParam && ['Wood', 'Stone', 'Aluminum', 'Composites', 'Plastic', 'Glass'].includes(applicationParam)) ? applicationParam as Application : 'All',
    family: (familyParam && ['M', 'Q'].includes(familyParam)) ? familyParam as ProductFamily : 'All',
    toolHolderTypeCategory: (toolHolderTypeCategoryParam && ['ER', 'HSK'].includes(toolHolderTypeCategoryParam)) ? toolHolderTypeCategoryParam as ToolHolderTypeCategory : 'All',
    application: (applicationParam && ['Wood', 'Stone', 'Aluminum', 'Composites', 'Plastic', 'Glass'].includes(applicationParam)) ? applicationParam as Application : 'All',
    toolHolder: toolHolderParam || 'All',
    line: (lineParam && ['Standard', 'Premium'].includes(lineParam)) ? lineParam as 'Standard' | 'Premium' : 'All',
    minPower: searchParams.get('minPower') ? Number(searchParams.get('minPower')) : null,
    maxPower: searchParams.get('maxPower') ? Number(searchParams.get('maxPower')) : null,
    minSpeed: searchParams.get('minSpeed') ? Number(searchParams.get('minSpeed')) : null,
    maxSpeed: searchParams.get('maxSpeed') ? Number(searchParams.get('maxSpeed')) : null,
    minTorque: searchParams.get('minTorque') ? Number(searchParams.get('minTorque')) : null,
    maxTorque: searchParams.get('maxTorque') ? Number(searchParams.get('maxTorque')) : null,
  };
};

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [showFilters, setShowFilters] = useState(false);

  useSEO(SEO.products);

  const limits = getFilterLimits();
  const powerRange: [number, number] = [limits.minPower, limits.maxPower];
  const speedRange: [number, number] = [limits.minSpeed, limits.maxSpeed];
  const torqueRange: [number, number] = [limits.minTorque, limits.maxTorque];

  const [filters, setFilters] = useState<FilterOptions>(() => getFiltersFromSearchParams(searchParams));

  useEffect(() => {
    const nextFilters = getFiltersFromSearchParams(searchParams);
    setFilters(prev => JSON.stringify(prev) === JSON.stringify(nextFilters) ? prev : nextFilters);
  }, [searchParams]);

  useEffect(() => {
    const newParams = new URLSearchParams();
    if (filters.family !== 'All') newParams.set('family', filters.family);
    if (filters.toolHolderTypeCategory !== 'All') newParams.set('toolHolderTypeCategory', filters.toolHolderTypeCategory);
    if (filters.application !== 'All') newParams.set('application', filters.application);
    if (filters.toolHolder !== 'All') newParams.set('toolHolder', filters.toolHolder);
    if (filters.line !== 'All') newParams.set('line', filters.line);
    if (filters.minPower !== null) newParams.set('minPower', filters.minPower.toString());
    if (filters.maxPower !== null) newParams.set('maxPower', filters.maxPower.toString());
    if (filters.minSpeed !== null) newParams.set('minSpeed', filters.minSpeed.toString());
    if (filters.maxSpeed !== null) newParams.set('maxSpeed', filters.maxSpeed.toString());
    if (filters.minTorque !== null) newParams.set('minTorque', filters.minTorque.toString());
    if (filters.maxTorque !== null) newParams.set('maxTorque', filters.maxTorque.toString());
    if (newParams.toString() !== searchParams.toString()) {
      setSearchParams(newParams, { replace: true });
    }
  }, [filters, searchParams, setSearchParams]);

  useEffect(() => {
    let result = [...products];
    if (searchTerm) {
      const s = searchTerm.toLowerCase();
      result = result.filter(p => p.name.toLowerCase().includes(s) || p.description.toLowerCase().includes(s));
    }
    if (filters.family !== 'All') result = result.filter(p => p.family === filters.family);
    if (filters.toolHolderTypeCategory !== 'All') result = result.filter(p => p.toolHolderTypeCategory === filters.toolHolderTypeCategory);
    if (filters.toolHolder !== 'All') result = result.filter(p => p.toolHolder === filters.toolHolder);
    if (filters.application !== 'All') result = result.filter(p => p.applications.includes(filters.application as Application));
    if (filters.minPower !== null) result = result.filter(p => p.power >= filters.minPower!);
    if (filters.maxPower !== null) result = result.filter(p => p.power <= filters.maxPower!);
    if (filters.minSpeed !== null) result = result.filter(p => p.minSpeed >= filters.minSpeed!);
    if (filters.maxSpeed !== null) result = result.filter(p => p.maxSpeed <= filters.maxSpeed!);
    if (filters.minTorque !== null) result = result.filter(p => p.torque >= filters.minTorque!);
    if (filters.maxTorque !== null) result = result.filter(p => p.torque <= filters.maxTorque!);
    setFilteredProducts(result);
  }, [searchTerm, filters]);

  return (
    <div className="animate-fade-in">
      <StructuredData schemas={PRODUCT_LIST_SCHEMA} />

      <section className="relative text-white overflow-hidden -mt-16" style={{ background: 'radial-gradient(circle, #4d5d6d 0%, #000000 100%)' }}>
        <div className="container mx-auto px-4 pt-40 pb-24 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Electro Spindles</h1>
              <p className="text-primary-100 max-w-3xl">Explore our comprehensive range of high-performance electro spindles designed for various materials and applications.</p>
            </div>
            <DownloadBrochure />
          </div>
        </div>
      </section>

      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="relative flex-grow max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input type="text" placeholder="Search spindles..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-accent-blue-500 focus:border-accent-blue-500 sm:text-sm" />
            </div>
            <button onClick={() => setShowFilters(!showFilters)} className="lg:hidden inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <Filter className="mr-2 h-5 w-5 text-gray-400" />{showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
            <div className="hidden md:flex items-center text-sm text-gray-500">
              <span>{filteredProducts.length} products found</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-20 z-10">
              <ProductFilter filters={filters} onFilterChange={setFilters} powerRange={powerRange} speedRange={speedRange} torqueRange={torqueRange} />
            </div>
          </div>
          {showFilters && (
            <div className="lg:hidden mb-6">
              <ProductFilter filters={filters} onFilterChange={setFilters} powerRange={powerRange} speedRange={speedRange} torqueRange={torqueRange} />
            </div>
          )}
          <div className="lg:col-span-3">
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-500 mb-4">Try adjusting your search or filter criteria.</p>
                <button onClick={() => { setSearchTerm(''); setFilters({ family: 'All', toolHolderTypeCategory: 'All', line: 'All', minPower: null, maxPower: null, minSpeed: null, maxSpeed: null, minTorque: null, maxTorque: null, toolHolder: 'All', application: 'All' }); }}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600">
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (<ProductCard key={product.id} product={product} />))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
