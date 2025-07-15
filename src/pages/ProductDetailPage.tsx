import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Check, ChevronRight, Ruler, Settings, Thermometer, Shield, Scale, Gauge, Download, FileDown } from 'lucide-react';
import { getProductById, products } from '../data/products';
import { Product } from '../types';
import DownloadBrochure from '../components/shared/DownloadBrochure';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  const handleImageDownload = (imageUrl: string, productName: string) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `${productName.toLowerCase().replace(/\s+/g, '-')}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    if (!id) {
      navigate('/products');
      return;
    }

    const fetchedProduct = getProductById(id);

    if (fetchedProduct) {
      setProduct(fetchedProduct);
      setSelectedImage(fetchedProduct.imageUrl);

      const related = products
        .filter(p =>
          p.id !== fetchedProduct.id && (
            p.family === fetchedProduct.family ||
            p.applications.some(app => fetchedProduct.applications.includes(app))
          )
        )
        .slice(0, 3);

      setRelatedProducts(related);
    } else {
      navigate('/products');
    }

    setLoading(false);
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-8 bg-gray-200 rounded w-64 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-32"></div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Product not found</h2>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Link
            to="/products"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600"
          >
            <ChevronLeft className="mr-2 h-5 w-5" />
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link to="/" className="text-sm text-gray-500 hover:text-gray-700">Home</Link>
              </li>
              <li className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <Link to="/products" className="ml-2 text-sm text-gray-500 hover:text-gray-700">Products</Link>
              </li>
              <li className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <span className="ml-2 text-sm font-medium text-gray-900" aria-current="page">
                  {product.name}
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          <div className="mb-8 lg:mb-0">
            <div className="bg-white rounded-lg overflow-hidden shadow-md mb-4 relative group">
              <img
                src={selectedImage || product.imageUrl}
                alt={product.name}
                className="w-full h-96 object-cover object-center"
              />
              <button
                onClick={() => handleImageDownload(selectedImage || product.imageUrl, product.name)}
                className="absolute bottom-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                title="Download Image"
              >
                <Download className="w-5 h-5 text-primary-500" />
              </button>
            </div>

            <div className="hidden sm:grid grid-cols-4 gap-2">
              <button
                className={`border-2 rounded-md overflow-hidden ${selectedImage === product.imageUrl ? 'border-accent-blue-500' : 'border-gray-200'
                  }`}
                onClick={() => setSelectedImage(product.imageUrl)}
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-20 object-cover"
                />
              </button>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-3xl font-bold text-primary-500">{product.name}</h1>
              <DownloadBrochure />
            </div>
            <div className="flex items-center mb-4">
              <span className="text-sm font-medium bg-primary-500 text-white px-2 py-1 rounded mr-2">
                {product.family === 'M' ? 'AM' : product.family === 'Q' ? 'AQ' : 'AA'} Series
              </span>
              <span className="text-sm font-medium bg-accent-blue-500 text-white px-2 py-1 rounded mr-2">
                {product.line}
              </span>
              {product.applications.map(app => (
                <span
                  key={app}
                  className="text-sm font-medium bg-primary-50 text-primary-500 px-2 py-1 rounded mr-2"
                >
                  {app}
                </span>
              ))}
            </div>

            <p className="text-gray-700 mb-6">{product.description}</p>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-primary-500 mb-4">Specifications</h3>
              <div className="grid grid-cols-2 gap-y-4">
                <div>
                  <span className="text-sm text-gray-500">Power</span>
                  <p className="font-medium">{product.power} kW</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Min Speed</span>
                  <p className="font-medium">{product.minSpeed.toLocaleString()} RPM</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Max Speed</span>
                  <p className="font-medium">{product.maxSpeed.toLocaleString()} RPM</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Torque</span>
                  <p className="font-medium">{product.torque} Nm</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Tool Holder</span>
                  <p className="font-medium">{product.toolHolder}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-lg font-semibold text-primary-500 mb-4">Technical Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <Gauge className="w-5 h-5 text-primary-500 mt-1 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Runout</p>
                    <p className="text-sm text-gray-600">{product.technicalSpecs.runout}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Settings className="w-5 h-5 text-primary-500 mt-1 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Bearing Type</p>
                    <p className="text-sm text-gray-600">{product.technicalSpecs.bearingType}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Thermometer className="w-5 h-5 text-primary-500 mt-1 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Cooling System</p>
                    <p className="text-sm text-gray-600">{product.technicalSpecs.coolingSystem}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="w-5 h-5 text-primary-500 mt-1 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Protection Class</p>
                    <p className="text-sm text-gray-600">{product.technicalSpecs.protectionClass}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Scale className="w-5 h-5 text-primary-500 mt-1 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Weight</p>
                    <p className="text-sm text-gray-600">{product.technicalSpecs.weight} kg</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Ruler className="w-5 h-5 text-primary-500 mt-1 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Dimensions</p>
                    <p className="text-sm text-gray-600">
                      L: {product.technicalSpecs.dimensions.length} mm<br />
                      Ø: {product.technicalSpecs.dimensions.diameter} mm
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-primary-500 mb-4">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-success-500 flex-shrink-0 mr-2 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate(`/quote?productName=${encodeURIComponent(product.name)}`)}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-blue-500 transition-colors"
              >
                Request Quote
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-primary-500 text-base font-medium rounded-md text-primary-500 bg-white hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
              >
                Technical Support
              </Link>
            </div>
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-primary-500 mb-8">Related Products</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map(relatedProduct => (
                <div
                  key={relatedProduct.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  <div className="h-48 bg-gray-200 overflow-hidden">
                    <img
                      src={relatedProduct.imageUrl}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-primary-500 mb-2">{relatedProduct.name}</h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{relatedProduct.description}</p>
                    <Link
                      to={`/products/${relatedProduct.id}`}
                      className="text-sm font-medium text-accent-blue-500 hover:text-accent-blue-700 inline-flex items-center"
                    >
                      View Details
                      <ChevronRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
