// Form submission utility functions
// Supports Google Apps Script and other compatible HTTPS webhook endpoints.

export interface QuoteFormSubmission {
  type: 'quote';
  timestamp: string;
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  productId: string;
  productName: string;
  quantity: number;
  application: string;
  message: string;
}

export interface ContactFormSubmission {
  type: 'contact';
  timestamp: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export type FormSubmission = QuoteFormSubmission | ContactFormSubmission;

const isConfiguredWebhookUrl = (url: string): boolean => {
  const value = (url || '').trim();
  if (!value) return false;

  const looksLikePlaceholder =
    value.includes('YOUR_SCRIPT_ID') ||
    value.includes('YOUR_QUOTE_SCRIPT_ID') ||
    value.includes('YOUR_CONTACT_SCRIPT_ID') ||
    value.includes('your-submission-webhook-url') ||
    value.includes('your-quote-submission-webhook-url') ||
    value.includes('your-contact-submission-webhook-url');

  if (looksLikePlaceholder) return false;
  try {
    const endpoint = new URL(value);
    return endpoint.protocol === 'https:' || (endpoint.protocol === 'http:' && ['localhost', '127.0.0.1'].includes(endpoint.hostname));
  } catch {
    return false;
  }
};

const isGoogleAppsScriptUrl = (url: string): boolean =>
  ['script.google.com', 'script.googleusercontent.com'].includes(new URL(url).hostname);

const buildGoogleAppsScriptBody = (data: FormSubmission): URLSearchParams => {
  const params = new URLSearchParams();

  // Include both a JSON payload and flattened fields for compatibility with different Apps Script handlers.
  params.set('payload', JSON.stringify(data));
  Object.entries(data).forEach(([key, value]) => {
    params.set(key, String(value ?? ''));
  });

  return params;
};

/**
 * Submit form data to a webhook endpoint
 * @param data - The form data to submit
 * @param scriptUrl - Your submission endpoint URL
 * @returns Promise that resolves when submission is complete
 */
export const submitToGoogleSheets = async (
  data: FormSubmission,
  scriptUrl: string
): Promise<void> => {
  scriptUrl = scriptUrl.trim();
  const configured = isConfiguredWebhookUrl(scriptUrl);

  if (!configured) {
    const message =
      'Form endpoint is not configured. Set VITE_GOOGLE_SHEETS_URL (and optionally per-form URLs) in .env.';

    throw new Error(message);
  }

  const googleAppsScriptEndpoint = isGoogleAppsScriptUrl(scriptUrl);

  if (googleAppsScriptEndpoint && !new URL(scriptUrl).pathname.endsWith('/exec')) {
    throw new Error('Google Apps Script URL must be the deployed Web App /exec endpoint.');
  }

  try {
    const response = await fetch(scriptUrl, {
      method: 'POST',
      mode: googleAppsScriptEndpoint ? 'no-cors' : 'cors',
      headers: {
        'Content-Type': googleAppsScriptEndpoint
          ? 'application/x-www-form-urlencoded;charset=UTF-8'
          : 'application/json',
      },
      body: googleAppsScriptEndpoint
        ? buildGoogleAppsScriptBody(data).toString()
        : JSON.stringify(data),
    });

    // For non-no-cors endpoints we can validate the status code.
    if (!googleAppsScriptEndpoint && !response.ok) {
      throw new Error(`Submission endpoint returned HTTP ${response.status}`);
    }

    // Note: With no-cors mode, response is opaque and cannot be inspected.
  } catch (error) {
    console.error('Error submitting form data:', error);
    throw new Error('Failed to submit form data. Check your endpoint URL, deployment access, and Apps Script sheet permissions.');
  }
};

/**
 * Validate form data before submission
 * @param data - The form data to validate
 * @returns boolean indicating if data is valid
 */
export const validateFormData = (data: FormSubmission): boolean => {
  const hasText = (value: string) => value.trim().length > 0;
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim());
  if (!validEmail) return false;

  if (data.type === 'quote') {
    return [data.firstName, data.lastName, data.company, data.application].every(hasText) &&
      Number.isInteger(data.quantity) && data.quantity >= 1;
  }

  return [data.name, data.subject, data.message].every(hasText);
};
