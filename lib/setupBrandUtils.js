/** Canonical printer brand keys used in routes and config objects. */
const CANONICAL_BRANDS = ['HP', 'Brother', 'EPSON', 'Canon'];

/**
 * Map a URL :brand segment to the canonical key (case-insensitive).
 * @param {string | undefined} slug
 * @returns {string | null}
 */
export function normalizeSetupBrand(slug) {
  if (slug == null || slug === '') return null;
  const s = String(slug).trim();
  const match = CANONICAL_BRANDS.find((b) => b.toLowerCase() === s.toLowerCase());
  return match || s;
}
