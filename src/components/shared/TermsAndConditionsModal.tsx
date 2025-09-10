import { X } from 'lucide-react';

interface TermsAndConditionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsAndConditionsModal = ({ isOpen, onClose }: TermsAndConditionsModalProps) => {
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
                Terms and Conditions
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

              <h4 className="text-lg font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h4>
              <p className="text-gray-700 mb-4">
                By accessing and using ARK SPINDLES website and services, you accept and agree to be bound 
                by the terms and provision of this agreement. If you do not agree to abide by the above, 
                please do not use this service.
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-3">2. Products and Services</h4>
              <p className="text-gray-700 mb-4">
                ARK SPINDLES provides precision engineered electro spindles and related accessories. 
                All product specifications, descriptions, and pricing are subject to change without notice. 
                We reserve the right to discontinue any product at any time.
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-3">3. Pricing and Payment</h4>
              <p className="text-gray-700 mb-4">
                All prices are quoted in the applicable currency and are subject to change without notice. 
                Payment terms will be specified in individual quotations and purchase agreements. 
                We reserve the right to refuse or cancel orders at our discretion.
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-3">4. Warranty and Liability</h4>
              <p className="text-gray-700 mb-4">
                Our products are covered by manufacturer warranty as specified in individual product 
                documentation. We make no other warranties, express or implied, including but not limited 
                to warranties of merchantability or fitness for a particular purpose.
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-3">5. Intellectual Property</h4>
              <p className="text-gray-700 mb-4">
                All content on this website, including but not limited to text, graphics, logos, images, 
                and software, is the property of ARK SPINDLES and is protected by copyright and other 
                intellectual property laws.
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-3">6. Use of Website</h4>
              <p className="text-gray-700 mb-4">
                You may use our website for lawful purposes only. You agree not to use the website:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                <li>In any way that violates any applicable law or regulation</li>
                <li>To transmit or procure the sending of any unsolicited advertising or promotional material</li>
                <li>To impersonate or attempt to impersonate the company or its employees</li>
                <li>To engage in any other conduct that restricts or inhibits anyone's use of the website</li>
              </ul>

              <h4 className="text-lg font-semibold text-gray-900 mb-3">7. Limitation of Liability</h4>
              <p className="text-gray-700 mb-4">
                In no event shall ARK SPINDLES be liable for any indirect, incidental, special, 
                consequential, or punitive damages, including without limitation, loss of profits, 
                data, use, goodwill, or other intangible losses.
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-3">8. Indemnification</h4>
              <p className="text-gray-700 mb-4">
                You agree to defend, indemnify, and hold harmless ARK SPINDLES from and against any 
                claims, damages, obligations, losses, liabilities, costs, or debt arising from your 
                use of the website or violation of these terms.
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-3">9. Governing Law</h4>
              <p className="text-gray-700 mb-4">
                These terms and conditions are governed by and construed in accordance with the laws 
                of Italy, and you irrevocably submit to the exclusive jurisdiction of the courts in 
                that state or location.
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-3">10. Changes to Terms</h4>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these terms at any time. Changes will be effective 
                immediately upon posting on the website. Your continued use of the website after 
                changes constitutes acceptance of the new terms.
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-3">11. Contact Information</h4>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <div className="text-gray-700 mb-4">
                <p>ARK SPINDLES</p>
                <p>1234 Industrial Avenue</p>
                <p>Tech Park, Milan, Italy</p>
                <p>Email: legal@arkspindles.com</p>
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

export default TermsAndConditionsModal;
