import { useState } from 'react';
import { Send } from 'lucide-react';
import { QuoteFormData } from '../../types';

interface QuoteFormProps {
  productId?: string;
  productName?: string;
}

const QuoteForm = ({ productId, productName }: QuoteFormProps) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    productId: productId || '',
    quantity: 1,
    application: '',
    message: '',
    productName: productName || '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // In a real application, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phone: '',
        productId: productId || '',
        quantity: 1,
        application: '',
        message: '',
        productName: productName || '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {productName && (
        <div className="bg-primary-50 p-4 rounded-lg">
          <p className="text-primary-700 font-medium">Requesting quote for: {productName}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent-blue-500 focus:ring-accent-blue-500"
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent-blue-500 focus:ring-accent-blue-500"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">
            Company *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent-blue-500 focus:ring-accent-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent-blue-500 focus:ring-accent-blue-500"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent-blue-500 focus:ring-accent-blue-500"
          />
        </div>

        <div>
  <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
    Product Name
  </label>
  <input
    type="text"
    id="productName"
    name="productName"
    value={formData.productName}
    onChange={handleChange}
    placeholder="Enter the product you want quote for"
    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent-blue-500 focus:ring-accent-blue-500"
  />
</div>

        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
            Quantity *
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            required
            value={formData.quantity}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent-blue-500 focus:ring-accent-blue-500"
          />
        </div>
      </div>

      <div>
        <label htmlFor="application" className="block text-sm font-medium text-gray-700">
          Application Description *
        </label>
        <input
          type="text"
          id="application"
          name="application"
          required
          value={formData.application}
          onChange={handleChange}
          placeholder="Please describe your specific application"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent-blue-500 focus:ring-accent-blue-500"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Additional Requirements
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Please provide any additional requirements or questions"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent-blue-500 focus:ring-accent-blue-500"
        />
      </div>

      {submitStatus === 'success' && (
        <div className="bg-success-50 text-success-700 p-4 rounded-lg">
          Thank you for your request. Our team will contact you shortly.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-error-50 text-error-700 p-4 rounded-lg">
          There was an error submitting your request. Please try again.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          'Submitting...'
        ) : (
          <>
            Submit Quote Request
            <Send className="ml-2 h-5 w-5" />
          </>
        )}
      </button>
    </form>
  );
};

export default QuoteForm;