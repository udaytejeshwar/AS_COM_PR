// Submission endpoint configuration
// Default values can be overridden by Vite env vars in .env/.env.local.

export const GOOGLE_SHEETS_CONFIG = {
    // Optional hardcoded fallback URL (leave empty to require env vars)
  SCRIPT_URL: '',

  // Optional: Different URLs for different form types
  QUOTE_FORM_URL: '',
  CONTACT_FORM_URL: '',
};

// Environment-specific configuration
export const getGoogleSheetsUrl = (formType: 'quote' | 'contact'): string => {
  const baseUrl =
    import.meta.env.VITE_GOOGLE_SHEETS_URL ||
    import.meta.env.VITE_EXCEL_SUBMISSION_URL ||
    GOOGLE_SHEETS_CONFIG.SCRIPT_URL;
  const quoteUrl =
    import.meta.env.VITE_QUOTE_FORM_URL ||
    import.meta.env.VITE_EXCEL_QUOTE_SUBMISSION_URL ||
    GOOGLE_SHEETS_CONFIG.QUOTE_FORM_URL;
  const contactUrl =
    import.meta.env.VITE_CONTACT_FORM_URL ||
    import.meta.env.VITE_EXCEL_CONTACT_SUBMISSION_URL ||
    GOOGLE_SHEETS_CONFIG.CONTACT_FORM_URL;

  if (formType === 'quote' && quoteUrl) {
    return quoteUrl;
  }

  if (formType === 'contact' && contactUrl) {
    return contactUrl;
  }

  return baseUrl;
};
