/**
 * © 2026 Julian – Alle Rechte vorbehalten.
 * Siehe LICENSE für Nutzungsbedingungen.
 */

/**
 * ⚠️ DAUERHAFTE PFLICHT-REGELN FÜR KI-ENTWICKLER (MANDATORY AI DEVELOPER RULES):
 * Bei JEDER künftigen Code-Änderung an dieser App musst du unaufgefordert und automatisch:
 * 1. Die Versionsnummer (`APP_VERSION` hier, `Rr`/`APP_VERSION` in `public/assets/index-DjUS4W3P.js`,
 *    `package.json`, `index.html`, `public/app.html` sowie `CACHE_NAME` in `public/sw.js`) um eins hochzählen!
 * 2. Die neuen Änderungen sofort zweisprachig auf Deutsch UND Englisch in `public/changelog.json`
 *    sowie in `INLINE_CHANGELOG` (`public/assets/index-DjUS4W3P.js`) unter "Was ist neu?" eintragen!
 * 3. Automatische Roadmap- & Preview-Pflege: Sobald ein Feature implementiert ist,
 *    hake es in `public/roadmap.json` ab, verschiebe es nach "shipped", halte nur offene geplante Punkte,
 *    und aktualisiere alle In-App-Vorschauen / Mockup-Screenshots passend zum Design (100 % iOS-kompatibel)!
 * 4. 100 % iOS / iPhone Kompatibilität: Volle Kompatibilität für iOS Safari & Home-Screen PWAs
 *    (`transform-box: fill-box; transform-origin: center;` bei SVGs, native SVG-Outlines statt CSS drop-shadow
 *    auf animierten Elementen, `env(safe-area-inset-*)`, `-webkit-tap-highlight-color: transparent`,
 *    `navigator.storage?.persist()` sowie `navigator.share` beim Backup-Export).
 */
export const APP_VERSION = '13.21.0';
const ALLOWED_TABS = new Set(['training', 'verlauf', 'ernaehrung', 'einstellungen']);
const APP_ENTRY_MODULE = '/assets/index-DjUS4W3P.js';
const CACHE_VERSION_SUFFIX = 'v13-21-0';
const PURGED_VERSION_STORAGE_KEY = 'gym-cache-purged-version';

interface GymWindow extends Window {
  __gymDeferredPrompt?: Event | null;
  __gymBootInitialized?: boolean;
  __gymSurfaceObserver?: MutationObserver | null;
}

let booted = false;

function fetchWithAbortTimeout(url: string, timeoutMs: number): Promise<void> {
  if (typeof fetch !== 'function') return Promise.resolve();
  const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
  const timerId =
    controller !== null ? window.setTimeout(() => controller.abort(), timeoutMs) : undefined;
  return fetch(url, {
    cache: 'reload',
    credentials: 'same-origin',
    ...(controller ? { signal: controller.signal } : {}),
  })
    .then(() => undefined)
    .catch(() => undefined)
    .finally(() => {
      if (timerId !== undefined) window.clearTimeout(timerId);
    });
}

export function bootGymApp(): void {
  if (booted || typeof window === 'undefined') return;
  booted = true;

  const win = window as GymWindow;

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

  // Register global PWA install & surface observers at most once per window lifecycle
  if (!win.__gymBootInitialized) {
    win.__gymBootInitialized = true;

    window.addEventListener('beforeinstallprompt', (e: Event) => {
      e.preventDefault();
      win.__gymDeferredPrompt = e;
      window.dispatchEvent(new CustomEvent('gym-pwa-prompt-ready'));
    });

    window.addEventListener('appinstalled', () => {
      win.__gymDeferredPrompt = null;
      window.dispatchEvent(new CustomEvent('gym-pwa-installed'));
    });

    // Coalesce surface-color DOM & meta updates via requestAnimationFrame and skip no-op writes
    let lastSurface = '';
    let rafId: number | null = null;

    const applySurfaceColor = () => {
      rafId = null;
      const rootEl = document.documentElement;
      if (!rootEl) return;
      const surface =
        rootEl.style.getPropertyValue('--color-surface').trim() ||
        getComputedStyle(rootEl).getPropertyValue('--color-surface').trim() ||
        '#111214';
      if (surface === lastSurface) return;
      lastSurface = surface;

      rootEl.style.setProperty('--app-surface', surface);
      if (document.body) {
        document.body.style.backgroundColor = surface;
      }
      const themeMeta = document.querySelector('meta[name="theme-color"]');
      if (themeMeta && themeMeta.getAttribute('content') !== surface) {
        themeMeta.setAttribute('content', surface);
      }
    };

    const scheduleSurfaceSync = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(applySurfaceColor);
    };

    applySurfaceColor();
    win.__gymSurfaceObserver?.disconnect();
    const observer = new MutationObserver(scheduleSurfaceSync);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['style', 'class'],
    });
    win.__gymSurfaceObserver = observer;
  }

  const warmSecondaryChunksInBackground = () => {
    const runWarmup = () => {
      void fetchWithAbortTimeout('/assets/gymBuddy.js', 2500);
      void fetchWithAbortTimeout('/assets/SettingsScreen-DEAqAtbV.js', 2500);
      void fetchWithAbortTimeout('/assets/backupExport-ByV0wFPi.js', 2500);
    };
    const ric = (window as Window & { requestIdleCallback?: (cb: () => void) => number })
      .requestIdleCallback;
    if (typeof ric === 'function') {
      ric(runWarmup);
    } else {
      window.setTimeout(runWarmup, 250);
    }
  };

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

    let alreadyPurgedForVersion = false;
    try {
      alreadyPurgedForVersion =
        window.localStorage.getItem(PURGED_VERSION_STORAGE_KEY) === APP_VERSION;
    } catch {
      alreadyPurgedForVersion = false;
    }

    // Fast path: if caches were already validated for this APP_VERSION, mount immediately (0ms delay)
    if (alreadyPurgedForVersion) {
      mountEntry();
      return;
    }

    const cacheCleanPromise =
      'caches' in window
        ? window.caches
            .keys()
            .then((keys) =>
              Promise.all(
                keys
                  .filter((k) => !k.endsWith(CACHE_VERSION_SUFFIX) && k !== 'gym-app-icons-v1')
                  .map((k) => window.caches.delete(k).catch(() => false))
              )
            )
            .catch(() => {})
        : Promise.resolve();

    const reloadCorePromise = Promise.all([
      fetchWithAbortTimeout(APP_ENTRY_MODULE, 1200),
      fetchWithAbortTimeout('/assets/gymBuddy.js', 1200),
    ]);

    Promise.all([cacheCleanPromise, reloadCorePromise]).finally(() => {
      try {
        window.localStorage.setItem(PURGED_VERSION_STORAGE_KEY, APP_VERSION);
      } catch {
        // Ignore storage quota errors
      }
      mountEntry();
      warmSecondaryChunksInBackground();
    });
    return;
  } catch {
    // Fallback to immediate mount
  }

  mountEntry();
}

export default bootGymApp;
