import { useState } from 'react';
import { accessories } from '../data/accessories';
import { AccessoryCategory } from '../types';
import { Download } from 'lucide-react';
import DownloadBrochure from '../components/shared/DownloadBrochure';

const AccessoriesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<AccessoryCategory | 'All'>('All');

  const categories: AccessoryCategory[] = ['Cooling', 'Tool Holders', 'VFD', 'Collets', 'Tools'];
  
  const filteredAccessories = selectedCategory === 'All' 
    ? accessories 
    : accessories.filter(acc => acc.category === selectedCategory);

  const handleImageDownload = (imageUrl: string, name: string) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `${name.toLowerCase().replace(/\s+/g, '-')}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section 
        className="relative text-white overflow-hidden -mt-16"
        style={{
          background: 'radial-gradient(circle, #4d5d6d 0%, #000000 100%)'
        }}
      >
        
        <div className="container mx-auto px-4 pt-40 pb-24 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-slide-in">
                Spindle Accessories
              </h1>
              <p className="text-xl mb-8 text-gray-200 max-w-2xl">
                Enhance your spindle's performance with our range of high-quality accessories and tools.
              </p>
            </div>
            <DownloadBrochure />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === 'All'
                  ? 'bg-primary-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Accessories Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAccessories.map((accessory) => (
              <div key={accessory.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64 bg-gray-200 overflow-hidden group">
                  <img
                    src={accessory.imageUrl}
                    alt={accessory.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <button
                    onClick={() => handleImageDownload(accessory.imageUrl, accessory.name)}
                    className="absolute bottom-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    title="Download Image"
                  >
                    <Download className="w-5 h-5 text-primary-500" />
                  </button>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary-500 mb-2">{accessory.name}</h3>
                      <span className="inline-block bg-primary-50 text-primary-500 px-3 py-1 rounded-full text-sm font-medium">
                        {accessory.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{accessory.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {accessory.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Specifications:</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {Object.entries(accessory.specifications).slice(0, 4).map(([key, value]) => (
                        <div key={key}>
                          <span className="text-gray-500">{key}:</span>
                          <span className="text-gray-900 ml-1">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccessoriesPage;
