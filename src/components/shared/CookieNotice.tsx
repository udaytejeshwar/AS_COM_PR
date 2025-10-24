import { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

interface CookieNoticeProps {
  onLearnMore: () => void;
}

const CookieNotice = ({ onLearnMore }: CookieNoticeProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    const consentTimestamp = localStorage.getItem('cookieConsentTimestamp');

    if (!cookieConsent || !consentTimestamp) {
      setTimeout(() => setIsVisible(true), 1000);
      return;
    }

    const oneYearInMs = 365 * 24 * 60 * 60 * 1000;
    const consentAge = Date.now() - parseInt(consentTimestamp, 10);

    if (consentAge > oneYearInMs) {
      localStorage.removeItem('cookieConsent');
      localStorage.removeItem('cookieConsentTimestamp');
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookieConsentTimestamp', Date.now().toString());
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      <div
        className="border-t border-gray-800 shadow-2xl"
        style={{
          background: 'radial-gradient(circle, #4d5d6d 0%, #000000 100%)'
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3 flex-1">
              <Cookie className="w-6 h-6 text-gray-300 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <p className="text-white text-sm sm:text-base leading-relaxed font-sans tracking-[0.02em]">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
                  By clicking "Accept", you consent to our use of cookies.
                  <button
                    onClick={onLearnMore}
                    className="text-gray-200 hover:text-white underline underline-offset-2 ml-1 transition-colors font-normal"
                  >
                    Learn More
                  </button>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={handleAccept}
                className="flex-1 sm:flex-initial px-6 py-2.5 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                style={{
                  background: 'radial-gradient(circle, #4d5d6d 0%, #2A3138 100%)'
                }}
              >
                Accept
              </button>
              <button
                onClick={handleClose}
                className="p-2.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                aria-label="Close cookie notice"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieNotice;
