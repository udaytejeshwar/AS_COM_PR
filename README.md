# Aspindlesv1

## Documentation

- [Image Management Guide](./IMAGE_MANAGEMENT.md)
- [ImageKit + SEO Implementation Plan](./IMAGEKIT_SEO_PLAN.md)

## Form submissions (Excel / Microsoft 365)

This project can submit quote/contact form data to a webhook endpoint. For Microsoft 365, use a
Power Automate flow with **When an HTTP request is received** trigger and write rows to an
Excel Online table.

### 1) Add your local environment values

Create a `.env` file in the project root (same folder as `package.json`) and add one of these:

- `VITE_EXCEL_SUBMISSION_URL` (single endpoint for both forms)
- `VITE_EXCEL_QUOTE_SUBMISSION_URL` (quote-specific endpoint)
- `VITE_EXCEL_CONTACT_SUBMISSION_URL` (contact-specific endpoint)

If Excel-specific env vars are not set, the app falls back to `VITE_GOOGLE_SHEETS_URL`.

> After editing `.env`, restart your dev server so Vite reloads environment variables.

### 2) Example `.env` values

```env
# Single Power Automate endpoint for both forms
VITE_EXCEL_SUBMISSION_URL=https://prod-00.westus.logic.azure.com:443/workflows/<flow-id>/triggers/manual/paths/invoke?api-version=2016-10-01&sp=<signature>

# OR use separate flows per form
# VITE_EXCEL_QUOTE_SUBMISSION_URL=https://prod-00.westus.logic.azure.com:443/workflows/<quote-flow-id>/triggers/manual/paths/invoke?api-version=2016-10-01&sp=<signature>
# VITE_EXCEL_CONTACT_SUBMISSION_URL=https://prod-00.westus.logic.azure.com:443/workflows/<contact-flow-id>/triggers/manual/paths/invoke?api-version=2016-10-01&sp=<signature>
```

### 3) Sanity check steps

1. Start app (`npm run dev`) and submit one Contact form with marker text like `SANITY-CONTACT-001`.
2. Submit one Quote form with marker text like `SANITY-QUOTE-001`.
3. In Power Automate, confirm both runs succeeded.
4. In Excel Online table, confirm both rows are added and include your marker text.

Note: the frontend sends requests with `mode: 'no-cors'`, so browser-level success indicates the
request was sent, but Power Automate/Excel is the source of truth for final success.
