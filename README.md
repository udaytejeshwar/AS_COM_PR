# Aspindlesv1

## Documentation

- [Image Management Guide](./IMAGE_MANAGEMENT.md)
- [ImageKit + SEO Implementation Plan](./IMAGEKIT_SEO_PLAN.md)
- [Google Sheets Workflow (Apps Script + setup)](./GOOGLE_SHEETS_WORKFLOW.md)

## Form submissions (Google Sheets)

This project submits quote/contact form data to a webhook endpoint. The recommended setup is a
Google Apps Script Web App that writes rows into a Google Sheet.

### 1) Add your local environment values

Create a `.env` file in the project root (same folder as `package.json`) and add one of these:

Create a `.env` file in the project root (same folder as `package.json`) and set:

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

### 4) Google Apps Script checklist (if sheet is not populating)

If the form shows a success state but no row appears in Sheets, verify:

1. You are using the **Web App `/exec` URL** (not the editor URL and not `/dev`).
2. The deployment access is set to **Anyone** (or "Anyone with the link").
3. The script is bound to the correct spreadsheet/tab and has edit permission.
4. After changing script code, you created a **new deployment version**.
5. The script's `doPost(e)` handler reads either:
   - `e.parameter.payload` (JSON string), or
   - the flattened fields (`name`, `email`, `subject`, etc.) sent by the frontend.

Note: Google Apps Script submissions use `no-cors`, so the browser cannot read the actual server response. Confirm writes in the Apps Script Executions log / Sheet itself.
