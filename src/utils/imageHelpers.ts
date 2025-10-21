export const IMAGE_BASE_PATHS = {
  PRODUCTS: '/images/products/spindles',
  ACCESSORIES: '/images/accessories',
  SITE: '/images/site',
  APPLICATIONS: '/images/applications',
  LOGOS: '/images/logos',
} as const;

export function sanitizeNameForPath(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export function getProductImagePath(
  productId: string,
  productName: string,
  variant: 'main' | number = 'main'
): string {
  const sanitizedName = sanitizeNameForPath(productName);
  const suffix = variant === 'main' ? 'main' : String(variant).padStart(2, '0');
  return `${IMAGE_BASE_PATHS.PRODUCTS}/${productId}-${sanitizedName}-${suffix}.jpg`;
}

export function getAccessoryImagePath(
  accessoryId: string,
  accessoryName: string,
  variant: 'main' | number = 'main'
): string {
  const sanitizedName = sanitizeNameForPath(accessoryName);
  const suffix = variant === 'main' ? 'main' : String(variant).padStart(2, '0');
  return `${IMAGE_BASE_PATHS.ACCESSORIES}/${accessoryId}-${sanitizedName}-${suffix}.jpg`;
}

export function getSiteImagePath(imageName: string): string {
  return `${IMAGE_BASE_PATHS.SITE}/${imageName}`;
}

export function getApplicationImagePath(imageName: string): string {
  return `${IMAGE_BASE_PATHS.APPLICATIONS}/${imageName}`;
}

export function getLogoPath(logoName: string): string {
  return `${IMAGE_BASE_PATHS.LOGOS}/${logoName}`;
}
