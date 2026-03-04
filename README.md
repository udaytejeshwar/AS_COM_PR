# Aspindlesv1

## Documentation

- [Image Management Guide](./IMAGE_MANAGEMENT.md)
- [ImageKit + SEO Implementation Plan](./IMAGEKIT_SEO_PLAN.md)

## Form submissions (Excel / Microsoft 365)

This project can submit quote/contact form data to a webhook endpoint. For Microsoft 365, use a
Power Automate flow with **When an HTTP request is received** trigger and write rows to an
Excel Online table.

Set one of these Vite environment variables:

- `VITE_EXCEL_SUBMISSION_URL` (single endpoint for both forms)
- `VITE_EXCEL_QUOTE_SUBMISSION_URL` (quote-specific endpoint)
- `VITE_EXCEL_CONTACT_SUBMISSION_URL` (contact-specific endpoint)

If Excel-specific env vars are not set, the app falls back to `VITE_GOOGLE_SHEETS_URL`.
