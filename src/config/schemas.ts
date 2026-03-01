/**
 * Schema.org JSON-LD builder functions.
 *
 * Each function returns a plain object — pass it (or an array of them)
 * to the <StructuredData> component.
 *
 * Validated against: https://validator.schema.org/
 * Google Rich Results reference: https://developers.google.com/search/docs/appearance/structured-data
 */

const BASE_URL = 'https://arkspindles.com';
const LOGO_URL = `${BASE_URL}/images/logos/ARKRIDGE-LOGO.png`;

// ─────────────────────────────────────────────────────────────────────────────
// Shared address used by LocalBusiness schemas
// ─────────────────────────────────────────────────────────────────────────────
const POSTAL_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: 'Plot 28, Gachibowli',
  addressLocality: 'Hyderabad',
  addressRegion: 'Telangana',
  postalCode: '500032',
  addressCountry: 'IN',
};

// ─────────────────────────────────────────────────────────────────────────────
// Organization — used on homepage
// Tells Google: who you are, where you are, what your brand looks like
// ─────────────────────────────────────────────────────────────────────────────
export const buildOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: 'ARK SPINDLES',
  alternateName: 'ArkSpindles',
  url: BASE_URL,
  logo: {
    '@type': 'ImageObject',
    url: LOGO_URL,
    width: 400,
    height: 120,
  },
  description:
    'ARK SPINDLES is a precision CNC electro spindle manufacturer based in Hyderabad, India. We produce high-performance spindles for wood, stone, aluminum, composites, plastic, and glass machining.',
  foundingLocation: 'Hyderabad, India',
  address: POSTAL_ADDRESS,
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91-630-918-5996',
      contactType: 'sales',
      availableLanguage: ['English', 'Hindi', 'Telugu'],
      areaServed: 'IN',
    },
    {
      '@type': 'ContactPoint',
      telephone: '+91-702-265-5669',
      contactType: 'technical support',
      availableLanguage: ['English', 'Hindi', 'Telugu'],
      areaServed: 'IN',
    },
  ],
  email: 'sales@arkspindles.com',
  sameAs: [
    'https://www.linkedin.com/company/arkspindles',
    'https://www.facebook.com/arkspindles',
  ],
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Product',
        name: 'CNC Electro Spindles',
        description: 'Precision engineered electro spindles for CNC routers and machining centers',
      },
    },
  ],
});

// ─────────────────────────────────────────────────────────────────────────────
// WebSite — used on homepage
// Enables Google Sitelinks Search Box in SERPs
// ─────────────────────────────────────────────────────────────────────────────
export const buildWebSiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  url: BASE_URL,
  name: 'ARK SPINDLES',
  description: 'Precision CNC electro spindle manufacturer in Hyderabad, India',
  publisher: {
    '@id': `${BASE_URL}/#organization`,
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE_URL}/products?search={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
  inLanguage: 'en-IN',
});

// ─────────────────────────────────────────────────────────────────────────────
// LocalBusiness — used on About and Contact pages
// Enables Google Business Panel and Maps integration
// ─────────────────────────────────────────────────────────────────────────────
export const buildLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'Manufacturer'],
  '@id': `${BASE_URL}/#localbusiness`,
  name: 'ARK SPINDLES',
  image: LOGO_URL,
  url: BASE_URL,
  telephone: '+91-630-918-5996',
  email: 'sales@arkspindles.com',
  address: POSTAL_ADDRESS,
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 17.441,
    longitude: 78.3482,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Bank Transfer, Cheque',
  description:
    'ARK SPINDLES manufactures precision CNC electro spindles in Hyderabad, India. Products include MTC and QTC series spindles with ER32, ER40, HSK-F63, HSK-E50, and HSK-A63 tool holders for wood, stone, aluminum, and composite machining.',
  knowsAbout: [
    'CNC Electro Spindles',
    'Precision Engineering',
    'CNC Router Spindles',
    'Wood Machining',
    'Stone Machining',
    'Aluminum Machining',
    'Composite Machining',
  ],
  hasMap: 'https://maps.google.com/?q=Gachibowli,Hyderabad,Telangana',
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
});

// ─────────────────────────────────────────────────────────────────────────────
// Product — used on individual product detail pages
// Enables Google Shopping / rich product cards in SERPs
// ─────────────────────────────────────────────────────────────────────────────
export interface ProductSchemaInput {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  additionalImageUrls?: string[];
  power: number;
  powerS6?: number;
  maxSpeed: number;
  minSpeed: number;
  nominalSpeed: number;
  torque: number;
  torqueS6?: number;
  toolHolder: string;
  applications: string[];
  family: string;
  line: string;
  voltage: string;
  technicalSpecs: {
    runout: string;
    bearingType: string;
    coolingSystem: string;
    protectionClass: string;
    weight: number;
  };
  deliveryTime: string;
}

export const buildProductSchema = (product: ProductSchemaInput) => {
  const series =
    product.family === 'M' ? 'MTC' :
    product.family === 'Q' ? 'QTC' :
    product.family === 'A' ? 'ATC' : 'AM';

  const images = [
    `${BASE_URL}${product.imageUrl}`,
    ...(product.additionalImageUrls ?? []).map(url => `${BASE_URL}${url}`),
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${BASE_URL}/products/${product.id}`,
    name: product.name,
    description: product.description,
    image: images,
    brand: {
      '@type': 'Brand',
      name: 'ARK SPINDLES',
    },
    manufacturer: {
      '@id': `${BASE_URL}/#organization`,
    },
    category: `CNC Electro Spindles > ${series} Series`,
    model: product.name,
    sku: product.id,
    url: `${BASE_URL}/products/${product.id}`,
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Power (S1)', value: `${product.power} kW`, unitCode: 'KWT' },
      ...(product.powerS6 ? [{ '@type': 'PropertyValue', name: 'Power (S6-40%)', value: `${product.powerS6} kW`, unitCode: 'KWT' }] : []),
      { '@type': 'PropertyValue', name: 'Max Speed', value: `${product.maxSpeed} RPM` },
      { '@type': 'PropertyValue', name: 'Min Speed', value: `${product.minSpeed} RPM` },
      { '@type': 'PropertyValue', name: 'Nominal Speed', value: `${product.nominalSpeed} RPM` },
      { '@type': 'PropertyValue', name: 'Torque (S1)', value: `${product.torque} Nm` },
      ...(product.torqueS6 ? [{ '@type': 'PropertyValue', name: 'Torque (S6-40%)', value: `${product.torqueS6} Nm` }] : []),
      { '@type': 'PropertyValue', name: 'Tool Holder', value: product.toolHolder },
      { '@type': 'PropertyValue', name: 'Voltage', value: product.voltage },
      { '@type': 'PropertyValue', name: 'Runout', value: product.technicalSpecs.runout },
      { '@type': 'PropertyValue', name: 'Bearing Type', value: product.technicalSpecs.bearingType },
      { '@type': 'PropertyValue', name: 'Cooling System', value: product.technicalSpecs.coolingSystem },
      { '@type': 'PropertyValue', name: 'Protection Class', value: product.technicalSpecs.protectionClass },
      { '@type': 'PropertyValue', name: 'Weight', value: `${product.technicalSpecs.weight} kg`, unitCode: 'KGM' },
      { '@type': 'PropertyValue', name: 'Product Line', value: product.line },
      { '@type': 'PropertyValue', name: 'Series', value: series },
      { '@type': 'PropertyValue', name: 'Applications', value: product.applications.join(', ') },
    ],
    offers: {
      '@type': 'Offer',
      url: `${BASE_URL}/products/${product.id}`,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      seller: {
        '@id': `${BASE_URL}/#organization`,
      },
      deliveryLeadTime: {
        '@type': 'QuantitativeValue',
        name: product.deliveryTime,
      },
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'INR',
        description: 'Contact for pricing',
      },
    },
  };
};

// ─────────────────────────────────────────────────────────────────────────────
// BreadcrumbList — used on product detail pages
// Enables breadcrumb display in Google search results
// ─────────────────────────────────────────────────────────────────────────────
export const buildBreadcrumbSchema = (
  crumbs: { name: string; url: string }[]
) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: `${BASE_URL}${crumb.url}`,
  })),
});

// ─────────────────────────────────────────────────────────────────────────────
// ItemList — used on /products page
// Tells Google about the collection of products on a listing page
// ─────────────────────────────────────────────────────────────────────────────
export const buildProductListSchema = (
  items: { id: string; name: string; description: string; imageUrl: string }[]
) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'ARK SPINDLES — CNC Electro Spindles',
  description: 'Full range of precision CNC electro spindles by ARK SPINDLES, manufactured in Hyderabad, India',
  url: `${BASE_URL}/products`,
  numberOfItems: items.length,
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    url: `${BASE_URL}/products/${item.id}`,
    name: item.name,
    image: `${BASE_URL}${item.imageUrl}`,
    description: item.description,
  })),
});
