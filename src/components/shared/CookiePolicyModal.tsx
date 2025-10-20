import { X, Cookie, Info, Settings, Globe } from 'lucide-react';

interface CookiePolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CookiePolicyModal = ({ isOpen, onClose }: CookiePolicyModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          onClick={onClose}
        ></div>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Cookie className="w-8 h-8 text-amber-500" />
                <h3 className="text-2xl font-bold text-primary-500">
                  Cookie Policy
                </h3>
              </div>
              <button
                onClick={onClose}
                className="bg-white rounded-md text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 max-h-[70vh] overflow-y-auto">
            <div className="prose prose-sm max-w-none">
              <p className="text-gray-600 mb-6">
                <strong>Last updated:</strong> {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Info className="w-5 h-5 text-primary-500" />
                  What Are Cookies?
                </h4>
                <p className="text-gray-700 mb-3">
                  Cookies are small text files that are placed on your computer or mobile device when you visit a website.
                  They are widely used to make websites work more efficiently and provide a better user experience.
                </p>
                <p className="text-gray-700 mb-3">
                  Cookies help us understand how you use our website, remember your preferences, and improve your overall experience.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-primary-500" />
                  Types of Cookies We Use
                </h4>

                <div className="mb-4">
                  <h5 className="font-semibold text-gray-800 mb-2">1. Essential Cookies (Required)</h5>
                  <p className="text-gray-700 mb-2">
                    These cookies are necessary for the website to function properly. They enable basic features like page navigation,
                    access to secure areas, and form submissions. The website cannot function properly without these cookies.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Session management</li>
                    <li>Security and authentication</li>
                    <li>Cookie consent preferences</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h5 className="font-semibold text-gray-800 mb-2">2. Performance Cookies (Optional)</h5>
                  <p className="text-gray-700 mb-2">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                    This helps us improve the website's functionality and user experience.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Website analytics and traffic analysis</li>
                    <li>Page performance monitoring</li>
                    <li>Error tracking and diagnostics</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h5 className="font-semibold text-gray-800 mb-2">3. Functional Cookies (Optional)</h5>
                  <p className="text-gray-700 mb-2">
                    These cookies enable enhanced functionality and personalization, such as remembering your preferences,
                    language settings, and region selection.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Language and regional preferences</li>
                    <li>User interface customization</li>
                    <li>Product filters and search preferences</li>
                  </ul>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary-500" />
                  Third-Party Cookies
                </h4>
                <p className="text-gray-700 mb-3">
                  We may use third-party services that set cookies on our website to provide analytics and improve our services.
                  These third parties have their own privacy policies governing their use of cookies.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">How to Control Cookies</h4>
                <p className="text-gray-700 mb-3">
                  You can control and manage cookies in various ways. Please note that removing or blocking cookies may impact
                  your user experience and some features of our website may not function properly.
                </p>

                <h5 className="font-semibold text-gray-800 mb-2 mt-4">Browser Settings</h5>
                <p className="text-gray-700 mb-2">
                  Most browsers allow you to control cookies through their settings. Here's how to manage cookies in popular browsers:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 mb-3">
                  <li><strong>Google Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                  <li><strong>Mozilla Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                  <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                  <li><strong>Microsoft Edge:</strong> Settings → Privacy, search, and services → Cookies and site permissions</li>
                </ul>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mt-4">
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> If you disable cookies, some features of our website may not work as intended,
                    and your user experience may be limited.
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Cookie Duration</h4>
                <p className="text-gray-700 mb-3">
                  Cookies may be stored on your device for different periods:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                  <li><strong>Persistent Cookies:</strong> Remain on your device for a set period or until manually deleted</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Updates to This Policy</h4>
                <p className="text-gray-700 mb-3">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for legal,
                  operational, or regulatory reasons. The "Last updated" date at the top of this policy indicates when it was last revised.
                </p>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Contact Us</h4>
                <p className="text-gray-700 mb-3">
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg text-gray-700">
                  <p className="font-semibold">ARK SPINDLES</p>
                  <p>1234 Industrial Avenue</p>
                  <p>Tech Park, Milan, Italy</p>
                  <p className="mt-2">Email: privacy@arkspindles.com</p>
                  <p>Phone: +1 (234) 567-890</p>
                </div>
              </div>
            </div>
          </div>

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

export default CookiePolicyModal;
