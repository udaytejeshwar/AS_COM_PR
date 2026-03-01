import { useEffect } from 'react';

interface StructuredDataProps {
  /** One or more schema.org JSON-LD objects */
  schemas: Record<string, unknown> | Record<string, unknown>[];
}

/**
 * Injects one or more JSON-LD <script> blocks into <head>.
 * Each schema gets its own <script> tag (recommended by Google).
 * All tags are removed when the component unmounts (route change).
 */
const StructuredData = ({ schemas }: StructuredDataProps) => {
  useEffect(() => {
    const schemaArray = Array.isArray(schemas) ? schemas : [schemas];
    const injectedScripts: HTMLScriptElement[] = [];

    schemaArray.forEach((schema) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-schema', 'true'); // marker for cleanup
      script.textContent = JSON.stringify(schema, null, 0);
      document.head.appendChild(script);
      injectedScripts.push(script);
    });

    return () => {
      injectedScripts.forEach((script) => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      });
    };
  }, [schemas]);

  return null;
};

export default StructuredData;
