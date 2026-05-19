/** Open Jivo live chat if the widget script has loaded (same behavior as installation error page). */
export function openJivoChat() {
  if (typeof window === 'undefined') return false;

  const tryOpen = () => {
    if (window.jivo_api && typeof window.jivo_api.open === 'function') {
      window.jivo_api.open();
      return true;
    }
    return false;
  };

  if (tryOpen()) return true;

  let attempts = 0;
  const maxAttempts = 40;
  const id = window.setInterval(() => {
    attempts += 1;
    if (tryOpen()) {
      window.clearInterval(id);
      return;
    }
    if (attempts >= maxAttempts) {
      window.clearInterval(id);
      window.alert('Chat support is not available yet. Please wait a moment and try again.');
    }
  }, 250);

  return true;
}
