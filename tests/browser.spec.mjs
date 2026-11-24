import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookieConsentTimestamp', String(Date.now()));
  });
  // Never send test enquiries to a real backend.
  await page.route('**/*', async route => {
    const request = route.request();
    if (request.method() === 'POST') {
      await route.fulfill({ status: 200, contentType: 'application/json', body: '{"ok":true}' });
    } else {
      await route.continue();
    }
  });
});

test('all public routes render without runtime exceptions', async ({ page }) => {
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  for (const path of ['/', '/products', '/accessories', '/about', '/contact', '/quote', '/premium', '/products/1', '/nonexistent-test-page']) {
    await page.goto(path);
    await expect(page.locator('main h1').first()).toBeVisible();
  }
  expect(errors).toEqual([]);
});

test('catalogue search, filters and reset', async ({ page }) => {
  await page.goto('/products');
  await expect(page.locator('main h1')).toHaveText('Electro Spindles');
  const search = page.getByPlaceholder('Search spindles...');
  await search.fill('AME0300-1014');
  await expect(page.getByText('AME0300-1014', { exact: true }).first()).toBeVisible();
  await search.fill('no-such-spindle-xyz');
  await expect(page.getByText('No products found')).toBeVisible();
  await page.getByText('No products found', { exact: true }).locator('..').getByRole('button', { name: 'Reset All Filters', exact: true }).click();
  await expect(search).toHaveValue('');
  await page.goto('/products?toolHolder=HSK-40');
  await expect(page.getByText('AQH0300-1005', { exact: true }).first()).toBeVisible();
  await page.goto('/products?minPower=invalid');
  await expect(page.getByText('AME0300-1014', { exact: true }).first()).toBeVisible();
});

test('every catalogue product detail renders', async ({ page }) => {
  for (let id = 1; id <= 19; id++) {
    await page.goto('/products/' + id);
    await expect(page.locator('main h1')).toHaveText(/^(AME|AQH)/);
  }
});

test('contact submission is intercepted', async ({ page }) => {
  await page.goto('/contact');
  await page.locator('#name').fill('Test Contact');
  await page.locator('#email').fill('test@example.invalid');
  await page.locator('#subject').fill('Automated test');
  await page.locator('#message').fill('Simulated enquiry only');
  const request = page.waitForRequest(r => r.method() === 'POST' && r.postData()?.includes('Simulated'));
  await page.getByRole('button', { name: 'Send Message' }).click();
  const sent = await request;
  expect(sent.postData()).toContain('test');
  await expect(page.getByText(/Your message request has been submitted/)).toBeVisible();
});

test('quote submission preserves quantity and product', async ({ page }) => {
  await page.goto('/quote?product=1');
  await page.locator('#firstName').fill('Test');
  await page.locator('#lastName').fill('Buyer');
  await page.locator('#company').fill('Test Company');
  await page.locator('#email').fill('test@example.invalid');
  await page.locator('#quantity').fill('3');
  await page.locator('#application').fill('Wood machining');
  const request = page.waitForRequest(r => r.method() === 'POST' && r.postData()?.includes('Wood'));
  await page.getByRole('button', { name: 'Submit Quote Request' }).click();
  const sent = await request;
  const params = new URLSearchParams(sent.postData());
  const payload = JSON.parse(params.get('payload') ?? sent.postData());
  expect(payload.quantity).toBe(3);
  expect(payload.productId).toBe('1');
  await expect(page.getByText(/Your quote request has been submitted/)).toBeVisible();
});

test('capture desktop or mobile preview screenshots', async ({ page }, info) => {
  for (const [name, path] of [['home','/'], ['catalogue','/products'], ['product','/products/1'], ['contact','/contact']]) {
    await page.goto(path);
    await expect(page.locator('main h1').first()).toBeVisible();
    await page.screenshot({ path: info.outputPath(name + '.png'), fullPage: true, animations: 'disabled', timeout: 30000 });
  }
});
