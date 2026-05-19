/** Base URL for setup admin API (must end with `/api`). Used by App, settings UI, and setup pages. */
export function getAdminApiBase() {
  const rawBase = (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api').replace(/\/+$/, '');
  return rawBase.endsWith('/api') ? rawBase : `${rawBase}/api`;
}
