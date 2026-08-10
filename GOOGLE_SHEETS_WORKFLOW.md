# Google Sheets workflow for Quote + Contact submissions

This guide shows how to build a Google Apps Script webhook that accepts form submissions from this app and stores them in Google Sheets.

## 1) Create your Google Sheet

Create a spreadsheet with either:

- **Option A (recommended): one shared tab** named `Submissions`
- **Option B:** two tabs named `Quote` and `Contact`

For Option A (`Submissions`), add this header row in row 1:

`timestamp | type | firstName | lastName | name | company | email | phone | subject | productId | productName | quantity | application | message`

## 2) Create the Apps Script project

1. Open [script.google.com](https://script.google.com/).
2. Create a new project.
3. Replace `Code.gs` with the script below.
4. Set `SPREADSHEET_ID` to your sheet ID (from the spreadsheet URL).
5. Save the project.

## 3) Script you can paste

```javascript
const SPREADSHEET_ID = 'PASTE_YOUR_SPREADSHEET_ID';
const SHARED_TAB = 'Submissions';
const QUOTE_TAB = 'Quote';
const CONTACT_TAB = 'Contact';

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse({ ok: false, error: 'Missing request body' });
    }

    const payload = JSON.parse(e.postData.contents);

    if (!payload.type || (payload.type !== 'quote' && payload.type !== 'contact')) {
      return jsonResponse({ ok: false, error: 'Invalid type' });
    }

    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);

    // Use shared tab if it exists; otherwise fallback to per-type tabs.
    const shared = ss.getSheetByName(SHARED_TAB);
    if (shared) {
      appendToSharedSheet(shared, payload);
    } else {
      const targetName = payload.type === 'quote' ? QUOTE_TAB : CONTACT_TAB;
      let target = ss.getSheetByName(targetName);
      if (!target) {
        target = ss.insertSheet(targetName);
        writePerTypeHeader(target, payload.type);
      }
      appendToPerTypeSheet(target, payload);
    }

    return jsonResponse({ ok: true });
  } catch (err) {
    return jsonResponse({ ok: false, error: String(err) });
  }
}

function appendToSharedSheet(sheet, payload) {
  ensureSharedHeader(sheet);

  const row = [
    payload.timestamp || new Date().toISOString(),
    payload.type || '',
    payload.firstName || '',
    payload.lastName || '',
    payload.name || '',
    payload.company || '',
    payload.email || '',
    payload.phone || '',
    payload.subject || '',
    payload.productId || '',
    payload.productName || '',
    payload.quantity || '',
    payload.application || '',
    payload.message || ''
  ];

  sheet.appendRow(row);
}

function appendToPerTypeSheet(sheet, payload) {
  if (payload.type === 'quote') {
    const row = [
      payload.timestamp || new Date().toISOString(),
      payload.firstName || '',
      payload.lastName || '',
      payload.company || '',
      payload.email || '',
      payload.phone || '',
      payload.productId || '',
      payload.productName || '',
      payload.quantity || '',
      payload.application || '',
      payload.message || ''
    ];
    sheet.appendRow(row);
    return;
  }

  const row = [
    payload.timestamp || new Date().toISOString(),
    payload.name || '',
    payload.email || '',
    payload.phone || '',
    payload.subject || '',
    payload.message || ''
  ];
  sheet.appendRow(row);
}

function ensureSharedHeader(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      'timestamp',
      'type',
      'firstName',
      'lastName',
      'name',
      'company',
      'email',
      'phone',
      'subject',
      'productId',
      'productName',
      'quantity',
      'application',
      'message'
    ]);
  }
}

function writePerTypeHeader(sheet, type) {
  if (sheet.getLastRow() > 0) return;

  if (type === 'quote') {
    sheet.appendRow([
      'timestamp',
      'firstName',
      'lastName',
      'company',
      'email',
      'phone',
      'productId',
      'productName',
      'quantity',
      'application',
      'message'
    ]);
  } else {
    sheet.appendRow(['timestamp', 'name', 'email', 'phone', 'subject', 'message']);
  }
}

function jsonResponse(body) {
  return ContentService
    .createTextOutput(JSON.stringify(body))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## 4) Deploy as web app and copy URL

1. In Apps Script: **Deploy → New deployment**.
2. Select type: **Web app**.
3. Execute as: your account.
4. Who has access: **Anyone** (or `Anyone with the link` if available in your workspace policy).
5. Click **Deploy** and copy the Web app URL ending in `/exec`.

## 5) Connect URL to this project

In project root create/edit `.env`:

```env
VITE_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

Optional per-form URLs:

```env
VITE_QUOTE_FORM_URL=https://script.google.com/macros/s/YOUR_QUOTE_SCRIPT_ID/exec
VITE_CONTACT_FORM_URL=https://script.google.com/macros/s/YOUR_CONTACT_SCRIPT_ID/exec
```

Restart the dev server after editing `.env`.

## 6) Sanity check

1. Submit one contact form with message `SANITY-CONTACT-001`.
2. Submit one quote form with message `SANITY-QUOTE-001`.
3. Verify rows appear in the target sheet/tab(s).

If rows do not appear:
- verify deployed URL ends in `/exec`
- verify `SPREADSHEET_ID` is correct
- redeploy after script changes
- check Apps Script **Executions** logs for errors
