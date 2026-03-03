import { Product, ProductImageAsset, ProductImageType } from '../types';
import { getProductRoleImagePath } from '../config/imagePaths';

const IMAGEKIT_URL_ENDPOINT = (import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT || '').replace(/\/$/, '');

const IMAGEKIT_PRESETS = {
  card: ['tr:w-480,h-360,c-maintain_ratio,q-auto,f-auto'],
  productMain: ['tr:w-1200,h-900,c-at_max,q-auto,f-auto'],
  thumbnail: ['tr:w-160,h-120,c-fill,q-auto,f-auto'],
} as const;

export type ImagekitPreset = keyof typeof IMAGEKIT_PRESETS;

const buildFallbackAlt = (productName: string, type: ProductImageType) => {
  if (type === 'spindle') return `${productName} CNC spindle motor - front view`;
  if (type === 'drawing') return `${productName} spindle technical drawing with dimensions`;
  return `${productName} spindle performance graph (power/torque vs RPM)`;
};

const toAbsoluteImageUrl = (url: string) => {
  if (/^https?:\/\//.test(url)) return url;
  if (!IMAGEKIT_URL_ENDPOINT) return url;
  return `${IMAGEKIT_URL_ENDPOINT}${url.startsWith('/') ? url : `/${url}`}`;
};

export const getImagekitUrl = (url: string, preset?: ImagekitPreset) => {
  const normalized = toAbsoluteImageUrl(url);
  if (!IMAGEKIT_URL_ENDPOINT || !preset) return normalized;

  const transforms = IMAGEKIT_PRESETS[preset].join(',');
  const separator = normalized.includes('?') ? '&' : '?';
  return `${normalized}${separator}${transforms}`;
};

export const getProductImageSet = (product: Product): Record<ProductImageType, ProductImageAsset> => {
  const spindle = product.images?.spindle ?? {
    type: 'spindle',
    url: product.imageUrl,
    alt: buildFallbackAlt(product.name, 'spindle'),
    width: 1200,
    height: 900,
  };

  const drawing = product.images?.drawing ?? {
    type: 'drawing',
    url: product.additionalImageUrls?.[0] ?? getProductRoleImagePath(product.id, 'drawing'),
    alt: buildFallbackAlt(product.name, 'drawing'),
    width: 1200,
    height: 900,
  };

  const graph = product.images?.graph ?? {
    type: 'graph',
    url: product.additionalImageUrls?.[1] ?? getProductRoleImagePath(product.id, 'graph'),
    alt: buildFallbackAlt(product.name, 'graph'),
    width: 1200,
    height: 900,
  };

  return { spindle, drawing, graph };
};

export const getPrimaryProductImage = (product: Product) => getProductImageSet(product).spindle;
