import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import DownloadBrochure from '../components/shared/DownloadBrochure';
import { getGoogleSheetsUrl } from '../config/googleSheets';
import { submitToGoogleSheets, validateFormData } from '../utils/googleSheets';
import StructuredData from '../components/shared/StructuredData';
import { buildLocalBusinessSchema } from '../config/schemas';
import useSEO from '../hooks/useSEO';
import { SEO } from '../config/seo';

const LOCAL_BUSINESS_SCHEMA = buildLocalBusinessSchema();

const ContactPage = () => {
  useSEO(SEO.contact);


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    const submissionData = { type: 'contact' as const, timestamp: new Date().toISOString(), ...formData };
    if (!validateFormData(submissionData)) { setSubmitStatus('error'); setIsSubmitting(false); return; }
    try {
      const scriptUrl = getGoogleSheetsUrl('contact');
      await submitToGoogleSheets(submissionData, scriptUrl);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="animate-fade-in">
      <StructuredData schemas={LOCAL_BUSINESS_SCHEMA} />
      <section className="relative text-white overflow-hidden -mt-16" style={{ background: 'radial-gradient(circle, #4d5d6d 0%, #000000 100%)' }}>
        <div className="container mx-auto px-4 pt-40 pb-24 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-light mb-4 sm:mb-6 leading-tight animate-slide-in">Contact Us</h1>
              <p className="text-base sm:text-xl mb-6 sm:mb-8 text-gray-200 max-w-2xl">Get in touch with our team for expert support, product inquiries, or technical assistance.</p>
            </div>
            <DownloadBrochure />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="text-2xl font-bold text-primary-500 mb-8">Get in Touch</h2>
              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Visit Us</h3>
                    <p className="text-gray-600 mt-1">Plot 28, Gachibowli<br />Hyderabad 500032<br />India</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Call Us</h3>
                    <p className="text-gray-600 mt-1">+91 630-918-5996<br />+91 702-265-5669</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
                    <p className="text-gray-600 mt-1">sales@arkspindles.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600 mt-1">Monday – Friday: 9:00 AM – 6:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <div className="bg-white rounded-lg shadow-lg p-5 sm:p-8">
                <h2 className="text-2xl font-bold text-primary-500 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name *</label>
                    <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent-blue-500 focus:ring focus:ring-accent-blue-200 focus:ring-opacity-50" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address *</label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent-blue-500 focus:ring focus:ring-accent-blue-200 focus:ring-opacity-50" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent-blue-500 focus:ring focus:ring-accent-blue-200 focus:ring-opacity-50" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject *</label>
                    <input type="text" id="subject" name="subject" required value={formData.subject} onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent-blue-500 focus:ring focus:ring-accent-blue-200 focus:ring-opacity-50" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message *</label>
                    <textarea id="message" name="message" rows={4} required value={formData.message} onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent-blue-500 focus:ring focus:ring-accent-blue-200 focus:ring-opacity-50" />
                  </div>

                  {submitStatus === 'success' && (
                    <div className="bg-success-50 text-success-700 p-4 rounded-lg">Your message has been sent successfully. We'll get back to you soon.</div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="bg-error-50 text-error-700 p-4 rounded-lg">There was an error sending your message. Please try again.</div>
                  )}

                  <button type="submit" disabled={isSubmitting}
                    className="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-blue-500 disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSubmitting ? 'Sending...' : (<>Send Message<Send className="ml-2 h-5 w-5" /></>)}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
