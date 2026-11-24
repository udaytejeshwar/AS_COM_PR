import { chromium } from '@playwright/test';
import { mkdir, writeFile } from 'node:fs/promises';

const browser = await chromium.launch();
const results = [];
try {
  for (const viewport of [{ width: 1440, height: 900 }, { width: 390, height: 844 }]) {
    const context = await browser.newContext({ viewport, reducedMotion: 'reduce' });
    await context.addInitScript(() => {
      localStorage.setItem('cookieConsent', 'accepted');
      localStorage.setItem('cookieConsentTimestamp', String(Date.now()));
    });
    await context.route('**/*', route => route.request().method() === 'POST' ? route.abort() : route.continue());
    for (const [name, path] of [['home','/'], ['products','/products'], ['product','/products/1'], ['contact','/contact'], ['quote','/quote']]) {
      const page = await context.newPage();
      const prefix = 'visual-comparison/' + viewport.width + '/' + name;
      await mkdir(prefix, { recursive: true });
      const shots = [];
      for (const [label, port] of [['main',4174], ['cleanup',4173]]) {
        await page.goto('http://127.0.0.1:' + port + path, { waitUntil: 'domcontentloaded' });
        await page.locator('main h1').first().waitFor({ state: 'visible' });
        await page.evaluate(async () => { await document.fonts.ready; });
        await page.waitForTimeout(name === 'home' ? 6500 : 1000);
        const shot = await page.screenshot({ path: prefix + '/' + label + '.png', fullPage: true, animations: 'disabled' });
        shots.push(shot);
      }
      results.push({ page: name, width: viewport.width, identical: shots[0].equals(shots[1]) });
      await page.close();
    }
    await context.close();
  }
  await writeFile('visual-comparison/results.json', JSON.stringify(results, null, 2));
} finally { await browser.close(); }
