/**
 * Centralized SEO configuration for all static pages.
 * Dynamic pages (e.g. ProductDetailPage) build their SEO data
 * from product data directly.
 *
 * Keyword strategy: India domestic market — OEMs, machine builders,
 * wood/stone/aluminum industry buyers searching in English.
 */

export interface PageSEO {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
}

export const SEO: Record<string, PageSEO> = {
  home: {
    title: 'ARK SPINDLES | Electro Spindle Manufacturer India',
    description:
      'ARK SPINDLES manufactures precision CNC electro spindles in Hyderabad, India. High-performance spindles for wood, stone, aluminum, composites, and glass. Made in India, engineered for the world.',
    keywords:
      'electro spindle manufacturer India, CNC spindle India, spindle for CNC router, electrospindle Hyderabad, wood working spindle India, precision spindle manufacturer, spindle supplier India, CNC spindle Hyderabad, MTC spindle India, QTC spindle India',
    canonicalUrl: '/',
  },

  products: {
    title: 'CNC Electro Spindles for Sale | ER32 ER40 HSK | ARK SPINDLES India',
    description:
      'Browse ARK SPINDLES\' full range of ER32, ER40, HSK-F63, HSK-E50 spindles for wood, stone, aluminum, and composite machining. MTC and QTC series. Get a quote online.',
    keywords:
      'buy electro spindle India, ER32 spindle India, ER40 spindle, HSK spindle India, MTC spindle, QTC spindle, CNC spindle supplier India, spindle for router India, CNC spindle price India, wood spindle India, stone spindle India, aluminum machining spindle',
    canonicalUrl: '/products',
  },

  accessories: {
    title: 'Spindle Accessories India | Collets, VFD, Cooling Fans | ARK SPINDLES',
    description:
      'Buy spindle accessories in India — ER32 collet sets, VFD drive controllers, high-performance DC cooling fans, and ER wrench sets. Fully compatible with ARK SPINDLES products.',
    keywords:
      'spindle accessories India, ER32 collet set India, VFD drive controller India, spindle cooling fan, ER wrench set, spindle collets India, VFD for spindle India',
    canonicalUrl: '/accessories',
  },

  about: {
    title: 'About Us | Made in India Spindle Manufacturer | ARK SPINDLES Hyderabad',
    description:
      'ARK SPINDLES is a Hyderabad-based precision engineering company building India\'s best CNC electro spindles. Engineering-first design, modular platforms, and global-quality output — made in India.',
    keywords:
      'spindle manufacturer India, Made in India spindle, ARK SPINDLES Hyderabad, Indian spindle company, precision engineering India, CNC spindle company India, Hyderabad CNC manufacturer',
    canonicalUrl: '/about',
  },

  contact: {
    title: 'Contact Us | ARK SPINDLES Hyderabad | +91 630-918-5996',
    description:
      'Contact ARK SPINDLES for spindle pricing, technical support, or OEM inquiries. Office in Gachibowli, Hyderabad. Call +91 630-918-5996 or email sales@arkspindles.com.',
    keywords:
      'contact ARK SPINDLES, spindle supplier Hyderabad, spindle inquiry India, CNC spindle technical support India, ARK SPINDLES phone number, spindle OEM India',
    canonicalUrl: '/contact',
  },

  quote: {
    title: 'Request a Spindle Quote | ARK SPINDLES India',
    description:
      'Get a custom quote for ARK SPINDLES CNC electro spindles. Specify your power, speed, torque, tool holder type, and application — our team responds within 24 hours.',
    keywords:
      'spindle quote India, CNC spindle price India, buy electro spindle, spindle quotation India, electro spindle cost India',
    canonicalUrl: '/quote',
  },

  premium: {
    title: 'TITAN Premium Spindle Series | Smart CNC Spindles | ARK SPINDLES',
    description:
      'The TITAN Series — ARK SPINDLES\' premium electro spindle line featuring AI performance monitoring, integrated smart sensors, and ultra-precision dynamic balancing for demanding industrial applications.',
    keywords:
      'premium spindle India, TITAN series spindle, high performance CNC spindle India, smart spindle India, AI spindle monitoring, advanced electro spindle India',
    canonicalUrl: '/premium',
  },

  notFound: {
    title: 'Page Not Found | ARK SPINDLES',
    description: 'The page you are looking for does not exist. Return to ARK SPINDLES homepage to explore our CNC electro spindles.',
    keywords: '',
    canonicalUrl: '/',
  },
};

/**
 * Build dynamic SEO data for a product detail page.
 * Called inside ProductDetailPage once the product is loaded.
 */
export const buildProductSEO = (product: {
  id: string;
  name: string;
  description: string;
  power: number;
  maxSpeed: number;
  torque: number;
  toolHolder: string;
  applications: string[];
  family: string;
}): PageSEO => {
  const appList = product.applications.join(', ');
  const series = product.family === 'M' ? 'MTC' : product.family === 'Q' ? 'QTC' : product.family === 'A' ? 'ATC' : 'AM';

  return {
    title: `${product.name} | ${series} Series CNC Spindle | ARK SPINDLES`,
    description:
      `${product.name} — ${product.power}kW, up to ${product.maxSpeed.toLocaleString()} RPM, ${product.torque}Nm torque, ${product.toolHolder} tool holder. ` +
      `Ideal for ${appList}. Buy from ARK SPINDLES, India's precision spindle manufacturer.`,
    keywords:
      `${product.name}, ${product.toolHolder} spindle India, ${series} spindle, ` +
      `${product.power}kW spindle, ${product.applications.map(a => `${a.toLowerCase()} spindle India`).join(', ')}, ` +
      `CNC spindle India, electro spindle buy India`,
    canonicalUrl: `/products/${product.id}`,
  };
};
