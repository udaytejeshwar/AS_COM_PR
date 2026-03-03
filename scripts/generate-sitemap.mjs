import { writeFileSync, mkdirSync, readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

const BASE_URL = 'https://arkspindles.com';
const TODAY = new Date().toISOString().split('T')[0];

const STATIC_ROUTES = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/products', changefreq: 'weekly', priority: '0.9' },
  { path: '/accessories', changefreq: 'monthly', priority: '0.7' },
  { path: '/about', changefreq: 'monthly', priority: '0.6' },
  { path: '/contact', changefreq: 'monthly', priority: '0.6' },
  { path: '/quote', changefreq: 'monthly', priority: '0.5' },
  { path: '/premium', changefreq: 'monthly', priority: '0.7' },
];

const FILTERED_ROUTES = [
  { path: '/products?family=M', changefreq: 'weekly', priority: '0.8' },
  { path: '/products?family=Q', changefreq: 'weekly', priority: '0.8' },
  { path: '/products?toolHolderTypeCategory=ER', changefreq: 'weekly', priority: '0.7' },
  { path: '/products?toolHolderTypeCategory=HSK', changefreq: 'weekly', priority: '0.7' },
  { path: '/products?application=Wood', changefreq: 'weekly', priority: '0.8' },
  { path: '/products?application=Stone', changefreq: 'weekly', priority: '0.8' },
  { path: '/products?application=Aluminum', changefreq: 'weekly', priority: '0.8' },
  { path: '/products?application=Composites', changefreq: 'weekly', priority: '0.7' },
  { path: '/products?application=Plastic', changefreq: 'weekly', priority: '0.7' },
  { path: '/products?application=Glass', changefreq: 'weekly', priority: '0.7' },
];

const readProductIds = () => {
  const productFile = readFileSync(resolve(ROOT, 'src/data/products.ts'), 'utf-8');
  const matches = [...productFile.matchAll(/\bid:\s*'([^']+)'/g)];
  return [...new Set(matches.map((match) => match[1]))];
};

const getImageTags = (productId) => [
  `/images/products/spindles/${productId}/spindle.jpg`,
  `/images/products/spindles/${productId}/drawing.jpg`,
  `/images/products/spindles/${productId}/graph.jpg`,
].map((path) => `\n    <image:image><image:loc>${BASE_URL}${path}</image:loc></image:image>`).join('');

const PRODUCT_ROUTES = readProductIds().map((id) => ({
  path: `/products/${id}`,
  changefreq: 'monthly',
  priority: '0.8',
  images: getImageTags(id),
}));

const allRoutes = [...STATIC_ROUTES, ...FILTERED_ROUTES, ...PRODUCT_ROUTES];

const urlEntries = allRoutes
  .map(({ path, changefreq, priority, images = '' }) => {
    const encodedPath = path.replace(/&/g, '&amp;');
    return `  <url>\n    <loc>${BASE_URL}${encodedPath}</loc>\n    <lastmod>${TODAY}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>${images}\n  </url>`;
  })
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
    http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

${urlEntries}

</urlset>`;

const outDir = resolve(ROOT, 'public');
mkdirSync(outDir, { recursive: true });
const outPath = resolve(outDir, 'sitemap.xml');
writeFileSync(outPath, xml, 'utf-8');

console.log(`✅ sitemap.xml generated with ${allRoutes.length} URLs → ${outPath}`);
