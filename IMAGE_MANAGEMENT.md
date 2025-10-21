# Image Management Guide

This document describes how images are organized and managed in the ARK SPINDLES website.

## Directory Structure

All images are stored in the `/public/images` directory with the following subdirectories:

```
public/
└── images/
    ├── products/
    │   └── spindles/          # Product spindle images
    ├── accessories/            # Accessory product images
    ├── site/                   # General website images (about, banners, etc.)
    ├── applications/           # Application showcase images
    └── logos/                  # Company logos and branding
```

## Naming Conventions

### Product Images

Product images follow the pattern: `{product-id}-{product-name}-{variant}.jpg`

**Examples:**
- Main image: `1-es-9000-er32-main.jpg`
- Additional images: `1-es-9000-er32-01.jpg`, `1-es-9000-er32-02.jpg`, `1-es-9000-er32-03.jpg`

**Rules:**
- Product ID and name are combined for clarity
- Product names are converted to lowercase with hyphens
- Special characters and spaces are removed
- Main image uses `-main` suffix
- Additional images use zero-padded numbers (`-01`, `-02`, etc.)

### Accessory Images

Accessory images follow the same pattern: `{accessory-id}-{accessory-name}-{variant}.jpg`

**Examples:**
- `fan-dc-1-high-performance-dc-cooling-fan-main.jpg`
- `er32-set-er32-collet-set-main.jpg`

### Site Images

Site images use descriptive names based on their purpose:

**Examples:**
- `factory-facility.jpg`
- `global-operations.jpg`
- `premium-research-development.jpg`

### Application Images

Application images are named by their category:

**Examples:**
- `wood-processing.jpg`
- `stone-marble.jpg`
- `aluminum-machining.jpg`
- `composite-materials.jpg`
- `plastic-processing.jpg`
- `glass-engraving.jpg`

### Logo Images

Logo images retain their original names:

**Examples:**
- `ARKRIDGE-LOGO.png`
- `ARKRIDGE-LOGO-1.png`

## Helper Functions

The project includes helper functions in `/src/utils/imageHelpers.ts` to generate image paths dynamically:

### `getProductImagePath(productId, productName, variant)`
Generates the path for a product image.

```typescript
// Usage examples:
getProductImagePath('1', 'ES-9000 ER32', 'main')
// Returns: '/images/products/spindles/1-es-9000-er32-main.jpg'

getProductImagePath('1', 'ES-9000 ER32', 1)
// Returns: '/images/products/spindles/1-es-9000-er32-01.jpg'
```

### `getAccessoryImagePath(accessoryId, accessoryName, variant)`
Generates the path for an accessory image.

```typescript
// Usage example:
getAccessoryImagePath('fan-dc-1', 'High-Performance DC Cooling Fan', 'main')
// Returns: '/images/accessories/fan-dc-1-high-performance-dc-cooling-fan-main.jpg'
```

### `getSiteImagePath(imageName)`
Generates the path for site images.

```typescript
// Usage example:
getSiteImagePath('factory-facility.jpg')
// Returns: '/images/site/factory-facility.jpg'
```

### `getApplicationImagePath(imageName)`
Generates the path for application images.

```typescript
// Usage example:
getApplicationImagePath('wood-processing.jpg')
// Returns: '/images/applications/wood-processing.jpg'
```

### `getLogoPath(logoName)`
Generates the path for logo images.

```typescript
// Usage example:
getLogoPath('ARKRIDGE-LOGO.png')
// Returns: '/images/logos/ARKRIDGE-LOGO.png'
```

### `sanitizeNameForPath(name)`
Converts product/accessory names to URL-safe format.

```typescript
// Usage example:
sanitizeNameForPath('ES-9000 ER32')
// Returns: 'es-9000-er32'
```

## Image Specifications

### Recommended Dimensions

- **Product main images**: 1200 x 900 pixels (4:3 aspect ratio)
- **Product thumbnails**: 600 x 450 pixels (4:3 aspect ratio)
- **Site banners**: 1920 x 1080 pixels (16:9 aspect ratio)
- **Application images**: 800 x 600 pixels (4:3 aspect ratio)
- **Accessory images**: 800 x 800 pixels (1:1 aspect ratio)

### Recommended Formats

- **JPG**: For photographs and product images (use 80-90% quality)
- **PNG**: For logos and graphics requiring transparency
- **WebP**: For best compression and quality (when supported)

### Optimization

All images should be optimized before uploading:
- Compress images to reduce file size
- Use appropriate dimensions (don't upload oversized images)
- Images in `/public` are served directly by Vite without processing

## Adding New Images

### For Products

1. Name your image following the convention: `{id}-{name}-{variant}.jpg`
2. Place the image in `/public/images/products/spindles/`
3. Update the product data in `/src/data/products.ts` - the helper functions will automatically generate the correct path

### For Accessories

1. Name your image following the convention: `{id}-{name}-main.jpg`
2. Place the image in `/public/images/accessories/`
3. Update the accessory data in `/src/data/accessories.ts`

### For Site Images

1. Use a descriptive name (e.g., `hero-banner.jpg`)
2. Place the image in `/public/images/site/`
3. Reference using `getSiteImagePath('hero-banner.jpg')` in your component

### For Application Images

1. Use a category-based name (e.g., `wood-processing.jpg`)
2. Place the image in `/public/images/applications/`
3. Reference using `getApplicationImagePath('wood-processing.jpg')` in your component

## Migration from External URLs

This project previously used external Pexels URLs for images. All external URLs have been replaced with local image paths using the helper functions. To complete the migration:

1. Download or provide replacement images for each product
2. Name them according to the conventions above
3. Place them in the appropriate directories
4. The code will automatically use the correct paths

## Notes

- All image paths are relative to the `/public` directory
- Vite serves files from `/public` at the root URL
- Helper functions ensure consistent path generation across the application
- The dynamic nature of path generation makes it easy to reorganize images if needed
