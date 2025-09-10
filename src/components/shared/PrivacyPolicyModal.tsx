import { X } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal = ({ isOpen, onClose }: PrivacyPolicyModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div 
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          onClick={onClose}
        ></div>

        {/* Modal panel */}
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
          {/* Header */}
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-primary-500">
                Privacy Policy
              </h3>
              <button
                onClick={onClose}
                className="bg-white rounded-md text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Scrollable content */}
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 max-h-96 overflow-y-auto">
            <div className="prose prose-sm max-w-none">
              <p className="text-gray-600 mb-4">
                <strong>Last updated:</strong> January 1, 2025
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-3">1. Information We Collect</h4>
              <p className="text-gray-700 mb-4">
                We collect information you provide directly to us, such as when you create an account, 
                request a quote, contact us, or use our services. This may include your name, email address, 
                phone number, company information, and any other information you choose to provide.
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-3">2. How We Use Your Information</h4>
              <p className="text-gray-700 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, security alerts, and support messages</li>
                <li>Respond to your comments, questions, and customer service requests</li>
                <li>Communicate with you about products, services, and events</li>
              </ul>

              <h4 className="text-lg font-semibold text-gray-900 mb-3">3. Information Sharing</h4>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy. We may share your information 
                with trusted partners who assist us in operating our website and conducting our business.
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-3">4. Data Security</h4>
              <p className="text-gray-700 mb-4">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of 
                transmission over the internet is 100% secure.
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-3">5. Cookies and Tracking</h4>
              <p className="text-gray-700 mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our website. 
                You can control cookie settings through your browser preferences.
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-3">6. Your Rights</h4>
              <p className="text-gray-700 mb-4">
                You have the right to access, update, or delete your personal information. You may also 
                opt out of certain communications from us. To exercise these rights, please contact us 
                using the information provided below.
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-3">7. Changes to This Policy</h4>
              <p className="text-gray-700 mb-4">
                We may update this privacy policy from time to time. We will notify you of any changes 
                by posting the new policy on this page and updating the "Last updated" date.
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-3">8. Contact Us</h4>
              <p className="text-gray-700 mb-4">
                If you have any questions about this privacy policy, please contact us at:
              </p>
              <div className="text-gray-700 mb-4">
                <p>ARK SPINDLES</p>
                <p>1234 Industrial Avenue</p>
                <p>Tech Park, Milan, Italy</p>
                <p>Email: privacy@arkspindles.com</p>
                <p>Phone: +1 (234) 567-890</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              onClick={onClose}
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary-500 text-base font-medium text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
