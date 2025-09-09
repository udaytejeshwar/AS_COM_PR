import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl h-full flex flex-col">
      <div className="relative h-56 bg-gray-200 overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-2 left-2 bg-primary-500 text-white text-xs px-2 py-1 rounded">
          {product.family === 'M' ? 'AM' : product.family === 'Q' ? 'AQ' : product.family === 'A' ? 'AA' : 'AM'} Series
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold text-primary-500 mb-2">{product.name}</h3>
        
        <div className="mb-4 flex flex-wrap gap-1">
          {product.applications.map((app) => (
            <span 
              key={app} 
              className="text-xs px-2 py-1 rounded bg-primary-50 text-primary-500"
            >
              {app}
            </span>
          ))}
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div>
            <p className="text-gray-500">Power</p>
            <p className="font-medium">{product.power} kW</p>
          </div>
          <div>
            <p className="text-gray-500">Speed Range</p>
            <p className="font-medium">{product.minSpeed.toLocaleString()} - {product.maxSpeed.toLocaleString()} RPM</p>
          </div>
          <div>
            <p className="text-gray-500">Torque</p>
            <p className="font-medium">{product.torque} Nm</p>
          </div>
          <div>
            <p className="text-gray-500">Nominal Speed</p>
            <p className="font-medium">{product.nominalSpeed} RPM</p>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{product.description}</p>
        
        <Link
          to={`/products/${product.id}`}
          className="mt-auto inline-flex items-center text-accent-blue-500 hover:text-accent-blue-700 font-medium"
        >
          View Details
          <ChevronRight className="ml-1 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
