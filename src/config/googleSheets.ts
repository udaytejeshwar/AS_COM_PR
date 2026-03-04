// Submission endpoint configuration
// For Microsoft 365 + Excel, use a Power Automate HTTP-trigger URL.
// You can still use Google Apps Script URLs if needed.

export const GOOGLE_SHEETS_CONFIG = {
  // Replace with your submission webhook URL
  // Example: a Power Automate "When an HTTP request is received" URL
  SCRIPT_URL: 'https://your-submission-webhook-url',
  
  // Optional: Different URLs for different form types if you use separate flows
  QUOTE_FORM_URL: 'https://your-quote-submission-webhook-url',
  CONTACT_FORM_URL: 'https://your-contact-submission-webhook-url',
};

// Environment-specific configuration
export const getGoogleSheetsUrl = (formType: 'quote' | 'contact'): string => {
  // Prefer Microsoft 365/Excel endpoint env vars when present
  const excelBaseUrl = import.meta.env.VITE_EXCEL_SUBMISSION_URL;
  const excelQuoteUrl = import.meta.env.VITE_EXCEL_QUOTE_SUBMISSION_URL;
  const excelContactUrl = import.meta.env.VITE_EXCEL_CONTACT_SUBMISSION_URL;

  if (formType === 'quote' && excelQuoteUrl) {
    return excelQuoteUrl;
  }

  if (formType === 'contact' && excelContactUrl) {
    return excelContactUrl;
  }

  if (excelBaseUrl) {
    return excelBaseUrl;
  }

  // Backward-compatible Google Sheets endpoint env var
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
