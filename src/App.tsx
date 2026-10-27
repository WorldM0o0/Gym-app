/**
 * © 2026 Julian – Alle Rechte vorbehalten.
 * Siehe LICENSE für Nutzungsbedingungen.
 */

const ALLOWED_TABS = new Set(['training', 'verlauf', 'ernaehrung', 'einstellungen']);
const APP_ENTRY_MODULE = '/assets/index-DjUS4W3P.js?v=13.8.14';

let booted = false;

export function bootGymApp(): void {
  if (booted || typeof window === 'undefined') return;
  booted = true;

  // Map ?tab= query parameter (e.g. from PWA shortcuts) directly to hash route
  try {
    const params = new URLSearchParams(window.location.search);
    const tab = params.get('tab')?.replace(/^\//, '').toLowerCase();
    if (tab && ALLOWED_TABS.has(tab) && !window.location.hash) {
      window.location.hash = `#/${tab}`;
    }
  } catch {
    // Ignore URL parsing issues
  }

  // Capture PWA install prompt events on the main window
  const win = window as Window & { __gymDeferredPrompt?: Event | null };
  window.addEventListener('beforeinstallprompt', (e: Event) => {
    e.preventDefault();
    win.__gymDeferredPrompt = e;
    window.dispatchEvent(new CustomEvent('gym-pwa-prompt-ready'));
  });
  window.addEventListener('appinstalled', () => {
    win.__gymDeferredPrompt = null;
    window.dispatchEvent(new CustomEvent('gym-pwa-installed'));
  });

  // Sync theme-color meta tag and body background whenever --color-surface changes
  const syncSurfaceColor = () => {
    const rootEl = document.documentElement;
    const surface =
      rootEl.style.getPropertyValue('--color-surface').trim() ||
      getComputedStyle(rootEl).getPropertyValue('--color-surface').trim() ||
      '#111214';
    rootEl.style.setProperty('--app-surface', surface);
    if (document.body) {
      document.body.style.backgroundColor = surface;
    }
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    if (themeMeta) {
      themeMeta.setAttribute('content', surface);
    }
  };

  syncSurfaceColor();
  const observer = new MutationObserver(syncSurfaceColor);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['style', 'class'],
  });

  // Mount the main application bundle directly into #root (no iframe, no duplicate React root)
  import(/* @vite-ignore */ APP_ENTRY_MODULE).catch((err) => {
    console.error('Fehler beim Laden der Gym App:', err);
  });
}

export default bootGymApp;
