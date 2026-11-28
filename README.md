# ARK Spindles website

## Development

Run `npm ci`, then `npm run dev`. Use `npm run build` for a production build and `npm run lint` for lint checks.

## Documentation

- [Image Management Guide](./IMAGE_MANAGEMENT.md)
- [ImageKit + SEO Implementation Plan](./IMAGEKIT_SEO_PLAN.md)
- [Google Sheets Workflow (Apps Script + setup)](./GOOGLE_SHEETS_WORKFLOW.md)

## Form submissions (Google Sheets)

Configure a Google Apps Script Web App that writes contact and quote submissions into Google Sheets. See `.env.example` for the environment variables. Set `VITE_GOOGLE_SHEETS_URL` for both forms, or optionally override individual forms with `VITE_QUOTE_FORM_URL` and `VITE_CONTACT_FORM_URL`. Restart Vite after changing environment variables.

### Verification

1. Submit a Contact form with marker `SANITY-CONTACT-001`.
2. Submit a Quote form with marker `SANITY-QUOTE-001`.
3. Confirm both executions and rows in Google Apps Script and Google Sheets.

### Troubleshooting

- Use the deployed Web App `/exec` URL, not `/dev` or the editor URL.
- Configure deployment access for the intended public submissions and ensure the script can write to the correct spreadsheet and tab.
- Create a new deployment version after changing script code.
- The `doPost(e)` handler can read `e.parameter.payload` (JSON) or flattened form fields.
- Google Apps Script requests use `no-cors`; an opaque browser response cannot confirm a successful spreadsheet write. Check the execution log and spreadsheet.

Vite exposes `VITE_` variables to the browser. Never put credentials or private tokens in them.

## Deployment

The GitHub Actions production deployment runs on pushes to `main`. Work on a separate branch until changes are verified.
