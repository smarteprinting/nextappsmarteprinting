const CACHE_KEY = 'setupFlowSettingsCache';

const PESSIMISTIC = {
  showHeader: false,
  showLogo: false,
  allowModelSearch: false,
  showInstallationFailed: false,
  showCompleteSetup: false,
  /** Default on: brand cards → model search unless admin turns off. */
  allowSelectYourBrandFlow: true,
};

function coerceBool(value, fallback) {
  if (value === undefined || value === null) return fallback;
  if (typeof value === 'boolean') return value;
  if (typeof value === 'string') return value === 'true' || value === '1';
  return Boolean(value);
}

/** Match backend: default true; only false / "false" / 0 turn off brand → model-search flow. */
function allowBrandFlowFromValue(v) {
  if (v === false || v === 'false' || v === 0 || v === '0') return false;
  if (v === true || v === 'true' || v === 1 || v === '1') return true;
  return true;
}

/** Last-known setup visibility from a prior session (sync read). */
export function readSetupSettingsCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (raw) {
      const o = JSON.parse(raw);
      if (o && typeof o === 'object') {
        return {
          showHeader: coerceBool(o.showHeader, false),
          showLogo: coerceBool(o.showLogo, false),
          allowModelSearch: coerceBool(o.allowModelSearch, false),
          showInstallationFailed: coerceBool(o.showInstallationFailed, false),
          showCompleteSetup: coerceBool(o.showCompleteSetup, false),
          allowSelectYourBrandFlow: allowBrandFlowFromValue(o.allowSelectYourBrandFlow),
        };
      }
    }
  } catch {
    /* ignore */
  }
  try {
    const si = localStorage.getItem('showInstallationFailed');
    const sc = localStorage.getItem('showCompleteSetup');
    if (si !== null || sc !== null) {
      return {
        ...PESSIMISTIC,
        allowSelectYourBrandFlow: true,
        showInstallationFailed: si === null ? false : si === 'true',
        showCompleteSetup: sc === null ? false : sc === 'true',
      };
    }
  } catch {
    /* ignore */
  }
  return null;
}

/** First paint: cached server values, or all false until GET completes. */
export function getInitialSetupVisibility() {
  return readSetupSettingsCache() ?? { ...PESSIMISTIC };
}

/** Persist after GET/POST so refresh matches server without a visible flash. */
export function writeSetupSettingsCache(settings) {
  if (!settings || typeof settings !== 'object') return;
  const payload = {
    showHeader: Boolean(settings.showHeader),
    showLogo: Boolean(settings.showLogo),
    allowModelSearch: settings.allowModelSearch !== false,
    showInstallationFailed: settings.showInstallationFailed !== false,
    showCompleteSetup: settings.showCompleteSetup !== false,
    allowSelectYourBrandFlow: allowBrandFlowFromValue(settings.allowSelectYourBrandFlow),
  };
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(payload));
    localStorage.setItem('showInstallationFailed', String(payload.showInstallationFailed));
    localStorage.setItem('showCompleteSetup', String(payload.showCompleteSetup));
  } catch {
    /* ignore */
  }
}
