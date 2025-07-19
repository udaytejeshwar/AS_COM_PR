// Google Sheets integration utility functions
// This file contains helper functions for working with Google Apps Script

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

/**
 * Submit form data to Google Sheets via Apps Script
 * @param data - The form data to submit
 * @param scriptUrl - Your Google Apps Script web app URL
 * @returns Promise that resolves when submission is complete
 */
export const submitToGoogleSheets = async (
  data: FormSubmission,
  scriptUrl: string
): Promise<void> => {
  try {
    const response = await fetch(scriptUrl, {
      method: 'POST',
      mode: 'no-cors', // Required for Google Apps Script
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    // Note: With no-cors mode, we can't access the response
    // The request will succeed if it reaches the server
    console.log('Form submitted successfully to Google Sheets');
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    throw new Error('Failed to submit form data');
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
