import { useEffect, useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Check, ChevronRight, Ruler, Settings, Thermometer, Shield, Scale, Download, ArrowLeft, X } from 'lucide-react';
import { getProductById, products } from '../data/products';
import { accessories } from '../data/accessories';
import { Product, ProductImageType } from '../types';
import DownloadBrochure from '../components/shared/DownloadBrochure';
import StructuredData from '../components/shared/StructuredData';
import useSEO from '../hooks/useSEO';
import { buildProductSEO } from '../config/seo';
import { buildProductSchema, buildBreadcrumbSchema } from '../config/schemas';
import { getImagekitUrl, getProductImageSet } from '../utils/productImages';
import { getApplicationTagClass } from '../utils/applicationTagStyles';

const IMAGE_ROLE_LABEL: Record<ProductImageType, string> = {
  spindle: 'Spindle',
  drawing: 'Technical Drawing',
  graph: 'Performance Graph',
};

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedRole, setSelectedRole] = useState<ProductImageType>('spindle');
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const recommendedAccessories = useMemo(() => {
    if (!product) return [];

    const matchedAccessories = accessories.filter((accessory) => {
      if (accessory.category === 'Cooling') return true;
      if (accessory.category === 'VFD' && (product.power >= 3 || product.voltage.includes('380'))) return true;
      if ((accessory.category === 'Collets' || accessory.category === 'Tools') && product.toolHolder.startsWith('ER')) return true;
      if (accessory.category === 'Tool Holders' && (product.toolHolder.startsWith('HSK') || product.toolHolder.startsWith('ISO'))) return true;

      return false;
    });

    return matchedAccessories.slice(0, 3);
  }, [product]);

  const seoData = product
    ? buildProductSEO(product)
    : { title: 'CNC Electro Spindle | ARK SPINDLES India', description: 'Precision CNC electro spindle by ARK SPINDLES, manufactured in Hyderabad, India.', keywords: 'electro spindle India, CNC spindle', canonicalUrl: `/products/${id ?? ''}` };

  useSEO(seoData);

  const schemas = useMemo(() => {
    if (!product) return [];
    return [
      buildProductSchema(product),
      buildBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Products', url: '/products' },
        { name: product.name, url: `/products/${product.id}` },
      ]),
    ];
  }, [product]);

  const imageSet = product ? getProductImageSet(product) : null;
  const selectedImage = imageSet ? imageSet[selectedRole] : null;

  const handleImageDownload = (imageUrl: string, productName: string, role: ProductImageType) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `${productName.toLowerCase().replace(/\s+/g, '-')}-${role}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    if (!id) { navigate('/products'); return; }
    const fetchedProduct = getProductById(id);
    if (fetchedProduct) {
      setProduct(fetchedProduct);
      setSelectedRole('spindle');
      const related = products.filter(p => p.id !== fetchedProduct.id && (p.family === fetchedProduct.family || p.applications.some(app => fetchedProduct.applications.includes(app)))).slice(0, 3);
      setRelatedProducts(related);
    } else {
      navigate('/products');
    }
    setLoading(false);
  }, [id, navigate]);

  useEffect(() => {
    if (!isImageModalOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsImageModalOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isImageModalOpen]);

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

  if (!product || !imageSet || !selectedImage) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Product not found</h2>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Link to="/products" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600">
            <ChevronLeft className="mr-2 h-5 w-5" /> Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in pt-4">
      {schemas.length > 0 && <StructuredData schemas={schemas} />}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 min-w-0">
              <li><Link to="/" className="text-sm text-gray-500 hover:text-gray-700">Home</Link></li>
              <li className="flex items-center"><ChevronRight className="w-4 h-4 text-gray-400" /><Link to="/products" className="ml-2 text-sm text-gray-500 hover:text-gray-700">Products</Link></li>
              <li className="flex items-center min-w-0"><ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" /><span className="ml-2 text-sm font-medium text-gray-900 truncate" aria-current="page">{product.name}</span></li>
            </ol>
          </nav>

          <button onClick={() => navigate(-1)} className="inline-flex items-center text-sm text-gray-600 hover:text-primary-500 transition-colors duration-200 whitespace-nowrap">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Products
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          <div className="mb-8 lg:mb-0">
            <div className="bg-white rounded-lg overflow-hidden shadow-md mb-4 relative group">
              <button
                type="button"
                onClick={() => setIsImageModalOpen(true)}
                className="w-full text-left"
                aria-label="Open full size product image"
              >
                <img src={getImagekitUrl(selectedImage.url, 'productMain')} alt={selectedImage.alt} width={selectedImage.width} height={selectedImage.height} className="w-full h-64 sm:h-80 lg:h-96 object-cover object-center cursor-zoom-in" fetchPriority={selectedRole === 'spindle' ? 'high' : 'auto'} />
              </button>
              <button onClick={() => handleImageDownload(selectedImage.url, product.name, selectedRole)} className="absolute bottom-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" title="Download Image">
                <Download className="w-5 h-5 text-primary-500" />
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2" role="tablist" aria-label="Product image categories">
              {(Object.keys(imageSet) as ProductImageType[]).map((role) => (
                <button key={role} role="tab" aria-selected={selectedRole === role} onClick={() => setSelectedRole(role)} className={`border-2 rounded-md overflow-hidden transition-all duration-200 ${selectedRole === role ? 'border-accent-blue-500 ring-2 ring-accent-blue-200' : 'border-gray-200 hover:border-gray-300'}`}>
                  <img src={getImagekitUrl(imageSet[role].url, 'thumbnail')} alt={imageSet[role].alt} className="w-full h-20 object-cover" loading="lazy" width={imageSet[role].width} height={imageSet[role].height} />
                  <span className="block text-xs py-1 px-2 bg-white text-gray-700">{IMAGE_ROLE_LABEL[role]}</span>
                </button>
              ))}
            </div>

            <div className="mt-8">
              <h2 className="text-lg font-semibold text-primary-500 mb-4">Key Features</h2>
              <ul className="space-y-2">{product.features.map((feature, index) => (<li key={index} className="flex items-start"><Check className="w-5 h-5 text-success-500 flex-shrink-0 mr-2 mt-0.5" /><span>{feature}</span></li>))}</ul>
            </div>
          </div>

          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
              <h1 className="text-2xl sm:text-3xl font-bold text-primary-500">{product.name}</h1>
              <div className="flex flex-col sm:flex-row gap-3">
                <DownloadBrochure />
                <button onClick={() => navigate(`/quote?product=${encodeURIComponent(product.id)}`)} className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-blue-500 transition-colors">Request Quote</button>
              </div>
            </div>
            <div className="flex items-center flex-wrap gap-2 mb-4">
              <span className="text-sm font-medium bg-primary-500 text-white px-2 py-1 rounded">{product.family === 'M' ? 'AM' : product.family === 'Q' ? 'AQ' : product.family === 'A' ? 'AA' : 'AM'} Series</span>
              <span className="text-sm font-medium bg-white text-primary-600 border border-primary-100 px-2 py-1 rounded">{product.toolHolder}</span>
              {product.line === 'Premium' && <span className="text-sm font-medium bg-accent-blue-500 text-white px-2 py-1 rounded">{product.line}</span>}
              {product.applications.map(app => (<span key={app} className={`text-sm font-medium px-2 py-1 rounded ${getApplicationTagClass(app)}`}>{app}</span>))}
            </div>
            <p className="text-gray-700 mb-6">{product.description}</p>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h2 className="text-lg font-semibold text-primary-500 mb-4">Specifications</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4">
                <div><span className="text-sm text-gray-500">Power</span><p className="font-medium">{product.power} kW (S1)</p>{product.powerS6 && <p className="text-sm text-gray-800 mt-1">{product.powerS6} kW (S6-40%)</p>}</div>
                <div><span className="text-sm text-gray-500">Torque</span><p className="font-medium">{product.torque} Nm (S1)</p>{product.torqueS6 && <p className="text-sm text-gray-800 mt-1">{product.torqueS6} Nm (S6-40%)</p>}</div>
                <div><span className="text-sm text-gray-500">Nominal Speed</span><p className="font-medium">{product.nominalSpeed.toLocaleString()} RPM</p></div>
                <div><span className="text-sm text-gray-500">Max Speed</span><p className="font-medium">{product.maxSpeed.toLocaleString()} RPM</p></div>
                <div><span className="text-sm text-gray-500">Voltage</span><p className="font-medium">{product.voltage}</p></div>
                <div><span className="text-sm text-gray-500">Tool Holder</span><p className="font-medium">{product.toolHolder}</p></div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-lg font-semibold text-primary-500 mb-4">Technical Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[{ icon: Settings, label: 'Insulation Class', value: product.technicalSpecs.insulationClass },{ icon: Thermometer, label: 'Cooling System', value: product.technicalSpecs.coolingSystem },{ icon: Shield, label: 'Protection Class', value: product.technicalSpecs.protectionClass },{ icon: Scale, label: 'Weight', value: `${product.technicalSpecs.weight} kg` },{ icon: Settings, label: 'Duty Cycle', value: product.technicalSpecs.dutyCycle },{ icon: Ruler, label: 'Body Diameter', value: `Width: ${product.technicalSpecs.bodyDiameter.width} mm / Height: ${product.technicalSpecs.bodyDiameter.height} mm / Length: ${product.technicalSpecs.bodyDiameter.length} mm` }].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start"><Icon className="w-5 h-5 text-primary-500 mt-1 mr-3" /><div><p className="text-sm font-medium text-gray-900">{label}</p><p className="text-sm text-gray-600">{value}</p></div></div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
              <Link to="/contact" className="inline-flex items-center px-6 py-3 border border-primary-500 text-base font-medium rounded-md text-primary-500 bg-white hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors">Technical Support</Link>
            </div>
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-primary-500 mb-8">Related Products</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map(rp => (
                <div key={rp.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
                  <div className="h-48 bg-gray-200 overflow-hidden"><img src={getImagekitUrl(getProductImageSet(rp).spindle.url, 'card')} alt={getProductImageSet(rp).spindle.alt} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" /></div>
                  <div className="p-4"><h3 className="font-semibold text-primary-500 mb-2">{rp.name}</h3><p className="text-sm text-gray-600 mb-4 line-clamp-2">{rp.description}</p><Link to={`/products/${rp.id}`} className="text-sm font-medium text-accent-blue-500 hover:text-accent-blue-700 inline-flex items-center">View Details <ChevronRight className="ml-1 w-4 h-4" /></Link></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {recommendedAccessories.length > 0 && (
        <div className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <h2 className="text-2xl font-bold text-primary-500">Recommended Accessories</h2>
              <Link to="/accessories" className="text-sm font-medium text-accent-blue-500 hover:text-accent-blue-700 inline-flex items-center">
                View All Accessories <ChevronRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendedAccessories.map((accessory) => (
                <div key={accessory.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
                  <div className="h-48 bg-gray-200 overflow-hidden">
                    <img
                      src={getImagekitUrl(accessory.imageUrl, 'card')}
                      alt={`${accessory.name} accessory`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-primary-500 mb-2">{accessory.name}</h3>
                    <span className="inline-block bg-primary-50 text-primary-500 px-2 py-1 rounded-full text-xs font-medium mb-3">{accessory.category}</span>
                    <p className="text-sm text-gray-600 line-clamp-2">{accessory.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {isImageModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 px-4 py-6 sm:p-8 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label={`${product.name} image preview`}
          onClick={() => setIsImageModalOpen(false)}
        >
          <div className="relative max-w-5xl w-full" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setIsImageModalOpen(false)}
              className="absolute -top-3 -right-3 sm:top-3 sm:right-3 bg-white text-gray-700 hover:text-primary-500 p-2 rounded-full shadow-md"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={getImagekitUrl(selectedImage.url, 'productMain')}
              alt={selectedImage.alt}
              width={selectedImage.width}
              height={selectedImage.height}
              className="w-full max-h-[85vh] object-contain rounded-lg bg-white"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
