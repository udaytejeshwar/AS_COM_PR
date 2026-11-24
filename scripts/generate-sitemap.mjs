import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const BASE_URL = 'https://arkspindles.com';
const escapeXml = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;');

// Read the same catalogue and image resolver used by the website, including Vite's environment configuration.
const server = await createServer({
  root: ROOT,
  configFile: false,
  mode: 'production',
  appType: 'custom',
  server: { middlewareMode: true, hmr: false },
});

try {
  const { products } = await server.ssrLoadModule('/src/data/products.ts');
  const { getImagekitUrl, getProductImageSet } = await server.ssrLoadModule('/src/utils/productImages.ts');
  const staticRoutes = ['/', '/products', '/accessories', '/about', '/contact', '/quote', '/premium'];
  const routes = [
    ...staticRoutes.map(path => ({ path, images: [] })),
    ...products.map(product => ({
      path: '/products/' + product.id,
      images: Object.values(getProductImageSet(product)).map(image =>
        new URL(getImagekitUrl(image.url), BASE_URL).href
      ),
    })),
  ];

  // Filter URLs canonicalize to /products, so they are intentionally not listed separately.
  const entries = routes.map(({ path, images }) => [
    '  <url>',
    '    <loc>' + escapeXml(new URL(path, BASE_URL).href) + '</loc>',
    ...images.map(url => '    <image:image><image:loc>' + escapeXml(url) + '</image:loc></image:image>'),
    '  </url>',
  ].join('\n')).join('\n');

  const xml = '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n' +
    entries + '\n</urlset>\n';

  const outDir = resolve(ROOT, 'public');
  mkdirSync(outDir, { recursive: true });
  writeFileSync(resolve(outDir, 'sitemap.xml'), xml, 'utf-8');
  console.log('Generated sitemap.xml with ' + routes.length + ' canonical URLs');
} finally {
  await server.close();
}
