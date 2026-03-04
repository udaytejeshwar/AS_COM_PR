// Submission endpoint configuration
// Default values can be overridden by Vite env vars in .env/.env.local.

export const GOOGLE_SHEETS_CONFIG = {
  // Replace with your submission webhook URL
  // Example: Google Apps Script web app URL
  SCRIPT_URL: 'https://your-submission-webhook-url',

  // Optional: Different URLs for different form types
  QUOTE_FORM_URL: 'https://your-quote-submission-webhook-url',
  CONTACT_FORM_URL: 'https://your-contact-submission-webhook-url',
};

// Environment-specific configuration
export const getGoogleSheetsUrl = (formType: 'quote' | 'contact'): string => {
  const baseUrl = import.meta.env.VITE_GOOGLE_SHEETS_URL || GOOGLE_SHEETS_CONFIG.SCRIPT_URL;
  const quoteUrl = import.meta.env.VITE_QUOTE_FORM_URL || GOOGLE_SHEETS_CONFIG.QUOTE_FORM_URL;
  const contactUrl = import.meta.env.VITE_CONTACT_FORM_URL || GOOGLE_SHEETS_CONFIG.CONTACT_FORM_URL;

  if (formType === 'quote' && quoteUrl && quoteUrl !== GOOGLE_SHEETS_CONFIG.SCRIPT_URL) {
    return quoteUrl;
  }

  if (formType === 'contact' && contactUrl && contactUrl !== GOOGLE_SHEETS_CONFIG.SCRIPT_URL) {
    return contactUrl;
  }

  return baseUrl;
};
