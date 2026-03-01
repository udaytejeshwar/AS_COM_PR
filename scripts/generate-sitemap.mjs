/**
 * generate-sitemap.mjs
 *
 * Run automatically before `vite build` via package.json:
 *   "build": "node scripts/generate-sitemap.mjs && vite build"
 *
 * Reads product IDs directly from the data file and writes
 * public/sitemap.xml so it stays in sync when products are added/removed.
 *
 * Output is copied to /dist by Vite (public/ directory is served as-is).
 */

import { writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

// â”€â”€â”€ Site config â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const BASE_URL = 'https://arkspindles.com';
const TODAY = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

// â”€â”€â”€ Static routes â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// priority: 1.0 = most important, 0.1 = least
// changefreq: how often Google should re-crawl
const STATIC_ROUTES = [
  { path: '/',            changefreq: 'weekly',  priority: '1.0' },
  { path: '/products',   changefreq: 'weekly',  priority: '0.9' },
  { path: '/accessories',changefreq: 'monthly', priority: '0.7' },
  { path: '/about',      changefreq: 'monthly', priority: '0.6' },
  { path: '/contact',    changefreq: 'monthly', priority: '0.6' },
  { path: '/quote',      changefreq: 'monthly', priority: '0.5' },
  { path: '/premium',    changefreq: 'monthly', priority: '0.7' },
];

// â”€â”€â”€ Filtered product listing pages that have SEO value â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// These give Google landing pages for each family/application search intent
const FILTERED_ROUTES = [
  // By family
  { path: '/products?family=M', changefreq: 'weekly', priority: '0.8' },
  { path: '/products?family=Q', changefreq: 'weekly', priority: '0.8' },
  // By tool holder type
  { path: '/products?toolHolderTypeCategory=ER',  changefreq: 'weekly', priority: '0.7' },
  { path: '/products?toolHolderTypeCategory=HSK', changefreq: 'weekly', priority: '0.7' },
  // By application
  { path: '/products?application=Wood',       changefreq: 'weekly', priority: '0.8' },
  { path: '/products?application=Stone',      changefreq: 'weekly', priority: '0.8' },
  { path: '/products?application=Aluminum',   changefreq: 'weekly', priority: '0.8' },
  { path: '/products?application=Composites', changefreq: 'weekly', priority: '0.7' },
  { path: '/products?application=Plastic',    changefreq: 'weekly', priority: '0.7' },
  { path: '/products?application=Glass',      changefreq: 'weekly', priority: '0.7' },
];

// â”€â”€â”€ Dynamic product routes â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// We inline product IDs here since we can't import TypeScript from a plain
// .mjs script. Keep this list in sync with src/data/products.ts.
// When you add a new product, add its id to this array.
const PRODUCT_IDS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];

const PRODUCT_ROUTES = PRODUCT_IDS.map(id => ({
  path: `/products/${id}`,
  changefreq: 'monthly',
  priority: '0.8',
}));

// â”€â”€â”€ Build XML â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const allRoutes = [...STATIC_ROUTES, ...FILTERED_ROUTES, ...PRODUCT_ROUTES];

const urlEntries = allRoutes
  .map(({ path, changefreq, priority }) => {
    // Encode query strings properly for XML
    const encodedPath = path.replace(/&/g, '&amp;');
    return `  <url>
    <loc>${BASE_URL}${encodedPath}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
    http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

${urlEntries}

</urlset>`;

// â”€â”€â”€ Write output â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const outDir = resolve(ROOT, 'public');
mkdirSync(outDir, { recursive: true });
const outPath = resolve(outDir, 'sitemap.xml');
writeFileSync(outPath, xml, 'utf-8');

console.log(`âœ… sitemap.xml generated with ${allRoutes.length} URLs â†’ ${outPath}`);
