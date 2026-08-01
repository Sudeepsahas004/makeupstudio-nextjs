/**
 * JsonLd — injects a JSON-LD <script> tag into the page <head>.
 * Pass any valid schema.org object (or array of objects) via the `schema` prop.
 *
 * Usage:
 *   <JsonLd schema={{ "@context": "https://schema.org", "@type": "WebSite", ... }} />
 */
export default function JsonLd({ schema }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
