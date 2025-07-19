// Google Sheets configuration
// Replace these URLs with your actual Google Apps Script web app URLs

export const GOOGLE_SHEETS_CONFIG = {
  // Replace with your actual Google Apps Script web app URL
  // You'll get this URL when you deploy your Apps Script as a web app
  SCRIPT_URL: 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec',
  
  // Optional: Different URLs for different form types if you have separate scripts
  QUOTE_FORM_URL: 'https://script.google.com/macros/s/YOUR_QUOTE_SCRIPT_ID/exec',
  CONTACT_FORM_URL: 'https://script.google.com/macros/s/YOUR_CONTACT_SCRIPT_ID/exec',
};

// Environment-specific configuration
export const getGoogleSheetsUrl = (formType: 'quote' | 'contact'): string => {
  // You can use environment variables if needed
  const baseUrl = import.meta.env.VITE_GOOGLE_SHEETS_URL || GOOGLE_SHEETS_CONFIG.SCRIPT_URL;
  
  // Return specific URLs for different form types if you have them
  if (formType === 'quote' && GOOGLE_SHEETS_CONFIG.QUOTE_FORM_URL !== GOOGLE_SHEETS_CONFIG.SCRIPT_URL) {
    return GOOGLE_SHEETS_CONFIG.QUOTE_FORM_URL;
  }
  
  if (formType === 'contact' && GOOGLE_SHEETS_CONFIG.CONTACT_FORM_URL !== GOOGLE_SHEETS_CONFIG.SCRIPT_URL) {
    return GOOGLE_SHEETS_CONFIG.CONTACT_FORM_URL;
  }
  
  return baseUrl;
};
