# Aspindlesv1

## Documentation

- [Image Management Guide](./IMAGE_MANAGEMENT.md)
- [ImageKit + SEO Implementation Plan](./IMAGEKIT_SEO_PLAN.md)
- [Google Sheets Workflow (Apps Script + setup)](./GOOGLE_SHEETS_WORKFLOW.md)

## Form submissions (Google Sheets)

This project submits quote/contact form data to a webhook endpoint. The recommended setup is a
Google Apps Script Web App that writes rows into a Google Sheet.

### 1) Add your local environment values

Create a `.env` file in the project root (same folder as `package.json`) and set:

- `VITE_GOOGLE_SHEETS_URL` (single endpoint for both forms)
- Optional: `VITE_QUOTE_FORM_URL` and `VITE_CONTACT_FORM_URL` for separate endpoints

> After editing `.env`, restart your dev server so Vite reloads environment variables.

### 2) Example `.env` values

```env
# Single Google Apps Script Web App URL for both forms
VITE_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec

# Optional: separate endpoints per form
# VITE_QUOTE_FORM_URL=https://script.google.com/macros/s/YOUR_QUOTE_SCRIPT_ID/exec
# VITE_CONTACT_FORM_URL=https://script.google.com/macros/s/YOUR_CONTACT_SCRIPT_ID/exec
```

### 3) Where to get the Google Sheets URL (step-by-step)

1. Open [script.google.com](https://script.google.com/) and create a new Apps Script project.
2. Add a `doPost(e)` handler that parses JSON and appends to your Google Sheet.
3. Go to **Deploy → New deployment → Web app**.
4. Set access so your app can receive requests from your site (typically "Anyone" for webhook use).
5. Deploy and copy the generated **Web app URL** ending in `/exec`.
6. Paste that URL into `.env` as `VITE_GOOGLE_SHEETS_URL`.

### 4) Sanity check steps

1. Start app (`npm run dev`) and submit one Contact form with marker text like `SANITY-CONTACT-001`.
2. Submit one Quote form with marker text like `SANITY-QUOTE-001`.
3. Open your Google Sheet and confirm both rows are added with correct `type` and marker values.

Note: the frontend submits with `mode: 'no-cors'`, so browser success means the request was sent;
verify final success in your Google Sheet.


For a full step-by-step implementation (including paste-ready Apps Script code), see [Google Sheets Workflow](./GOOGLE_SHEETS_WORKFLOW.md).
