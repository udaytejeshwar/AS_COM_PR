// Form submission utility functions
// Works with any webhook endpoint (Google Apps Script, Power Automate, etc.)

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

  return /^https?:\/\//i.test(value) && !looksLikePlaceholder;
};

const isGoogleAppsScriptUrl = (url: string): boolean =>
  /script\.google(?:usercontent)?\.com/i.test(url);

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
  const configured = isConfiguredWebhookUrl(scriptUrl);

  if (!configured) {
    const message =
      'Form endpoint is not configured. Set VITE_GOOGLE_SHEETS_URL (and optionally per-form URLs) in .env.';

    if (import.meta.env.DEV) {
      console.warn(`${message} Skipping network call in development mode.`);
      return;
    }

    throw new Error(message);
  }

  const googleAppsScriptEndpoint = isGoogleAppsScriptUrl(scriptUrl);

  if (googleAppsScriptEndpoint && !/\/exec(?:\?|$)/.test(scriptUrl)) {
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
    console.log('Form submission request sent');
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
  if (data.type === 'quote') {
    return !!(
      data.firstName &&
      data.lastName &&
      data.company &&
      data.email &&
      data.application
    );
  } else if (data.type === 'contact') {
    return !!(
      data.name &&
      data.email &&
      data.subject &&
      data.message
    );
  }
  return false;
};

/**
 * Format form data for Google Sheets
 * @param data - The form data to format
 * @returns Formatted data object
 */
export const formatForGoogleSheets = (data: FormSubmission): Record<string, any> => {
  const baseData = {
    timestamp: data.timestamp,
    type: data.type,
  };

  if (data.type === 'quote') {
    return {
      ...baseData,
      firstName: data.firstName,
      lastName: data.lastName,
      fullName: `${data.firstName} ${data.lastName}`,
      company: data.company,
      email: data.email,
      phone: data.phone || '',
      productId: data.productId || '',
      productName: data.productName || '',
      quantity: data.quantity,
      application: data.application,
      message: data.message || '',
    };
  } else {
    return {
      ...baseData,
      name: data.name,
      email: data.email,
      phone: data.phone || '',
      subject: data.subject,
      message: data.message,
    };
  }
};
