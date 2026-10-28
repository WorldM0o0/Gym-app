/**
 * © 2026 Julian – Alle Rechte vorbehalten.
 * Siehe LICENSE für Nutzungsbedingungen.
 */

/**
 * ⚠️ DAUERHAFTE PFLICHT-REGEL FÜR KI-ENTWICKLER (MANDATORY AI DEVELOPER RULE):
 * Bei JEDER künftigen Code-Änderung an dieser App musst du unaufgefordert und automatisch:
 * 1. Die Versionsnummer (`APP_VERSION` hier, `Rr`/`APP_VERSION` in `public/assets/index-DjUS4W3P.js`,
 *    `package.json`, `index.html`, `public/app.html` sowie `CACHE_NAME` in `public/sw.js`) um eins hochzählen!
 * 2. Die neuen Änderungen sofort zweisprachig auf Deutsch UND Englisch in `public/changelog.json`
 *    sowie in `INLINE_CHANGELOG` (`public/assets/index-DjUS4W3P.js`) unter "Was ist neu?" eintragen!
 */
export const APP_VERSION = '13.12.0';
const ALLOWED_TABS = new Set(['training', 'verlauf', 'ernaehrung', 'einstellungen']);
const APP_ENTRY_MODULE = '/assets/index-DjUS4W3P.js';

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

  // Purge any older Service Worker caches so updated /assets/*.js modules load fresh immediately
  const mountEntry = () => {
    if (!document.querySelector(`script[data-gym-entry="${APP_ENTRY_MODULE}"]`)) {
      const script = document.createElement('script');
      script.type = 'module';
      script.crossOrigin = '';
      script.src = APP_ENTRY_MODULE;
      script.setAttribute('data-gym-entry', APP_ENTRY_MODULE);
      script.onerror = (err) => {
        console.error('Fehler beim Laden der Gym App:', err);
      };
      document.head.appendChild(script);
    }
  };

  try {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .getRegistrations()
        .then((regs) => regs.forEach((r) => r.update().catch(() => {})))
        .catch(() => {});
    }
    const cacheCleanPromise =
      'caches' in window
        ? window.caches
            .keys()
            .then((keys) =>
              Promise.all(
                keys
                  .filter((k) => !k.endsWith('v13-12-0'))
                  .map((k) => window.caches.delete(k).catch(() => false))
              )
            )
            .catch(() => {})
        : Promise.resolve();

    const reloadAssetsPromise = Promise.all([
      fetch('/assets/index-DjUS4W3P.js', { cache: 'reload' }).catch(() => {}),
      fetch('/assets/gymBuddy.js', { cache: 'reload' }).catch(() => {}),
      fetch('/assets/gymBuddy.js?v=13.12.0', { cache: 'reload' }).catch(() => {}),
      fetch('/assets/SettingsScreen-DEAqAtbV.js', { cache: 'reload' }).catch(() => {}),
      fetch('/assets/backupExport-ByV0wFPi.js', { cache: 'reload' }).catch(() => {}),
    ]);

    Promise.all([cacheCleanPromise, reloadAssetsPromise]).finally(mountEntry);
    return;
  } catch {
    // Fallback to immediate mount
  }

  mountEntry();
}

export default bootGymApp;
