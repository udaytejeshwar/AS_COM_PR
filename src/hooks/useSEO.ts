import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  noIndex?: boolean;
}

const BASE_URL = 'https://arkspindles.com';
const DEFAULT_OG_IMAGE = `${BASE_URL}/images/logos/ARKRIDGE-LOGO.png`;
const DEFAULT_TITLE = 'ARK SPINDLES | Electro Spindle Manufacturer India';

/**
 * Finds an existing meta/link element or creates a new one and appends it to <head>.
 */
const getOrCreateMeta = (selector: string, attrName: string, attrValue: string): Element => {
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  return el;
};

const getOrCreateLink = (rel: string): HTMLLinkElement => {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  return el;
};

const useSEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  noIndex = false,
}: SEOProps): void => {
  const fullTitle = title.includes('ARK SPINDLES') ? title : `${title} | ARK SPINDLES`;
  const canonical = canonicalUrl ? `${BASE_URL}${canonicalUrl}` : BASE_URL;

  useEffect(() => {
    // ── Title ────────────────────────────────────────────────────────────────
    document.title = fullTitle;

    // ── Basic meta ───────────────────────────────────────────────────────────
    getOrCreateMeta('meta[name="description"]', 'name', 'description')
      .setAttribute('content', description);

    if (keywords) {
      getOrCreateMeta('meta[name="keywords"]', 'name', 'keywords')
        .setAttribute('content', keywords);
    }

    getOrCreateMeta('meta[name="robots"]', 'name', 'robots')
      .setAttribute('content', noIndex ? 'noindex, nofollow' : 'index, follow');

    getOrCreateMeta('meta[name="author"]', 'name', 'author')
      .setAttribute('content', 'ARK SPINDLES');

    // ── Canonical ────────────────────────────────────────────────────────────
    getOrCreateLink('canonical').setAttribute('href', canonical);

    // ── Open Graph ───────────────────────────────────────────────────────────
    getOrCreateMeta('meta[property="og:title"]', 'property', 'og:title')
      .setAttribute('content', fullTitle);
    getOrCreateMeta('meta[property="og:description"]', 'property', 'og:description')
      .setAttribute('content', description);
    getOrCreateMeta('meta[property="og:type"]', 'property', 'og:type')
      .setAttribute('content', ogType);
    getOrCreateMeta('meta[property="og:url"]', 'property', 'og:url')
      .setAttribute('content', canonical);
    getOrCreateMeta('meta[property="og:image"]', 'property', 'og:image')
      .setAttribute('content', ogImage);
    getOrCreateMeta('meta[property="og:site_name"]', 'property', 'og:site_name')
      .setAttribute('content', 'ARK SPINDLES');
    getOrCreateMeta('meta[property="og:locale"]', 'property', 'og:locale')
      .setAttribute('content', 'en_IN');

    // ── Twitter Card ─────────────────────────────────────────────────────────
    getOrCreateMeta('meta[name="twitter:card"]', 'name', 'twitter:card')
      .setAttribute('content', 'summary_large_image');
    getOrCreateMeta('meta[name="twitter:title"]', 'name', 'twitter:title')
      .setAttribute('content', fullTitle);
    getOrCreateMeta('meta[name="twitter:description"]', 'name', 'twitter:description')
      .setAttribute('content', description);
    getOrCreateMeta('meta[name="twitter:image"]', 'name', 'twitter:image')
      .setAttribute('content', ogImage);

    // ── Cleanup: restore default title on unmount ─────────────────────────────
    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [fullTitle, description, keywords, canonical, ogImage, ogType, noIndex]);
};

export default useSEO;
