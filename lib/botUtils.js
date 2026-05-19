/**
 * Simple utility to detect if the current requester is a search engine bot
 * or an advertisement crawler (like Google Ads bot).
 */
export function isBot() {
  if (typeof window === 'undefined' || !navigator.userAgent) {
    return false;
  }

  const userAgent = navigator.userAgent.toLowerCase();

  const botPatterns = [
    'googlebot',
    'adsbot-google',
    'mediapartners-google',
    'google-ads-creatives-preview',
    'bingbot',
    'yandexbot',
    'baiduspider',
    'facebookexternalhit',
    'twitterbot',
    'rogerbot',
    'linkedinbot',
    'embedly',
    'quora link preview',
    'showyoubot',
    'outbrain',
    'pinterest/0.',
    'developers.google.com/+/web/snippet',
    'slackbot',
    'vkshare',
    'w3c_validator',
    'redditbot',
    'applebot',
    'whatsapp',
    'flipboard',
    'tumblr',
    'bitlybot',
    'skypeuripreview',
    'nuzzel',
    'discordbot',
    'google page speed',
    'qwantify',
    'pinterestbot',
    'bitrix link preview',
    'xing-content-proxy',
    'lighthouse',
    'gtmetrix',
    'pingdom'
  ];

  return botPatterns.some(pattern => userAgent.includes(pattern));
}
