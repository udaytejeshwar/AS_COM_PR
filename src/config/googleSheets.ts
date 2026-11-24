// Per-form endpoints override the shared Google Apps Script endpoint.
export const getGoogleSheetsUrl = (formType: 'quote' | 'contact'): string => {
  const override = formType === 'quote'
    ? import.meta.env.VITE_QUOTE_FORM_URL
    : import.meta.env.VITE_CONTACT_FORM_URL;

  return override || import.meta.env.VITE_GOOGLE_SHEETS_URL || '';
};
