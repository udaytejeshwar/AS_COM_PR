import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';
import ProductCard from '../components/products/ProductCard';
import ProductFilter from '../components/products/ProductFilter';
import DownloadBrochure from '../components/shared/DownloadBrochure';
import StructuredData from '../components/shared/StructuredData';
import { products } from '../data/products';
import { FilterOptions, Application, ProductFamily, ToolHolder, ToolHolderTypeCategory } from '../types';
import useSEO from '../hooks/useSEO';
import { SEO } from '../config/seo';
import { buildProductListSchema } from '../config/schemas';
import { getPrimaryProductImage } from '../utils/productImages';

// Full product list schema — stable, built once
const PRODUCT_LIST_SCHEMA = buildProductListSchema(
  products.map(p => ({ id: p.id, name: p.name, description: p.description, imageUrl: getPrimaryProductImage(p).url }))
);

const readNumber = (params: URLSearchParams, key: string): number | null => {
  const raw = params.get(key);
  if (raw === null || raw.trim() === '') return null;
  const value = Number(raw);
  return Number.isFinite(value) && value >= 0 ? value : null;
};

const getFiltersFromSearchParams = (params: URLSearchParams): FilterOptions => {
  const family = params.get('family');
  const category = params.get('toolHolderTypeCategory');
  const application = params.get('application');
  const holder = params.get('toolHolder');
  const line = params.get('line');

  return {
    family: products.some(p => p.family === family) ? family as ProductFamily : 'All',
    toolHolderTypeCategory: products.some(p => p.toolHolderTypeCategory === category) ? category as ToolHolderTypeCategory : 'All',
    application: application && ['Wood', 'Stone', 'Aluminum', 'Composites', 'Plastic', 'Glass'].includes(application) ? application as Application : 'All',
    toolHolder: products.some(p => p.toolHolder === holder) ? holder as ToolHolder : 'All',
    line: line === 'Standard' || line === 'Premium' ? line : 'All',
    minPower: readNumber(params, 'minPower'),
    maxPower: readNumber(params, 'maxPower'),
    minSpeed: readNumber(params, 'minSpeed'),
    maxSpeed: readNumber(params, 'maxSpeed'),
    minTorque: readNumber(params, 'minTorque'),
    maxTorque: readNumber(params, 'maxTorque'),
  };
};

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get('search') ?? '';
  const [showFilters, setShowFilters] = useState(false);

  useSEO(SEO.products);

  const filters = useMemo(() => getFiltersFromSearchParams(searchParams), [searchParams]);

  const setSearchTerm = (value: string) => {
    setSearchParams(previous => {
      const next = new URLSearchParams(previous);
      if (value) next.set('search', value);
      else next.delete('search');
      return next;
    }, { replace: true });
  };

  const setFilters = (nextFilters: FilterOptions) => {
    setSearchParams(previous => {
      const next = new URLSearchParams(previous);
      Object.entries(nextFilters).forEach(([key, value]) => {
        if (value === null || value === 'All') next.delete(key);
        else next.set(key, String(value));
      });
      return next;
    }, { replace: true });
  };

  const filteredProducts = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();
    return products.filter(p => {
      if (search && !p.name.toLowerCase().includes(search) && !p.description.toLowerCase().includes(search)) return false;
      if (filters.family !== 'All' && p.family !== filters.family) return false;
      if (filters.toolHolderTypeCategory !== 'All' && p.toolHolderTypeCategory !== filters.toolHolderTypeCategory) return false;
      if (filters.toolHolder !== 'All' && p.toolHolder !== filters.toolHolder) return false;
      if (filters.application !== 'All' && !p.applications.includes(filters.application)) return false;
      if (filters.line !== 'All' && p.line !== filters.line) return false;
      if (filters.minPower !== null && p.power < filters.minPower) return false;
      if (filters.maxPower !== null && p.power > filters.maxPower) return false;
      if (filters.minSpeed !== null && p.minSpeed < filters.minSpeed) return false;
      if (filters.maxSpeed !== null && p.maxSpeed > filters.maxSpeed) return false;
      if (filters.minTorque !== null && p.torque < filters.minTorque) return false;
      if (filters.maxTorque !== null && p.torque > filters.maxTorque) return false;
      return true;
    });
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
              <ProductFilter filters={filters} onFilterChange={setFilters} />
            </div>
          </div>
          {showFilters && (
            <div className="lg:hidden mb-6">
              <ProductFilter filters={filters} onFilterChange={setFilters} />
            </div>
          )}
          <div className="lg:col-span-3">
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-500 mb-4">Try adjusting your search or filter criteria.</p>
                <button onClick={() => { setSearchParams(new URLSearchParams(), { replace: true }); }}
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
