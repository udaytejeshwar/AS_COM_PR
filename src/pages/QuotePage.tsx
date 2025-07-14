import { useSearchParams } from 'react-router-dom';
import { getProductById } from '../data/products';
import QuoteForm from '../components/forms/QuoteForm';

const QuotePage = () => {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get('product');
  const product = productId ? getProductById(productId) : undefined;

  return (
    <div className="animate-fade-in">
      <section 
        className="relative text-white overflow-hidden -mt-16"
        style={{
          background: 'radial-gradient(circle, #4d5d6d 0%, #000000 100%)'
        }}
      >
        <div className="container mx-auto px-4 pt-40 pb-24 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Request a Quote</h1>
          <p className="text-primary-100 max-w-3xl">
            Fill out the form below and our team will provide you with a detailed quote tailored to your requirements.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <QuoteForm 
              productId={product?.id}
              productName={product?.name}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotePage;
