/**
 * ⚠️ DAUERHAFTE PFLICHT-REGELN FÜR KI-ENTWICKLER (MANDATORY AI DEVELOPER RULES):
 * Bei JEDER Code-Änderung an der App muss `CACHE_NAME` (sowie ICON/SHELL/RUNTIME_CACHE)
 * synchron mit `APP_VERSION` hochgezählt werden!
 * Zusätzlich müssen Roadmap & Previews stets automatisch synchron zum Implementierungsstand gepflegt werden!
 */
const APP_VERSION = "13.26.0";
const CACHE_NAME = "gym-app-offline-v13-26-0";
const ICON_CACHE = "gym-app-icons-v13-26-0";
const SHELL_CACHE = "gym-app-shell-v13-26-0";
const RUNTIME_CACHE = "gym-app-runtime-v13-26-0";
const OFFLINE_URL = "/index.html";
const NETWORK_TIMEOUT_MS = 3500;

const ICON_PATHS = [
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/icons/icon-maskable-512.png",
  "/favicon.ico"
];
const ICON_SET = new Set(ICON_PATHS);

const PRECACHE_ASSETS = [
  "/",
  "/index.html",
  "/app.html",
  "/manifest.webmanifest",
  "/changelog.json",
  "/roadmap.json",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/icons/icon-maskable-512.png",
  "/favicon.ico",
  "/fonts/instrument-sans-latin-400-normal.woff2",
  "/fonts/instrument-sans-latin-500-normal.woff2",
  "/fonts/instrument-sans-latin-600-normal.woff2",
  "/fonts/jetbrains-mono-latin-400-normal.woff2",
  "/fonts/jetbrains-mono-latin-500-normal.woff2",
  "/assets/CalorieResultPreview-CdmWHN24.js",
  "/assets/ExerciseManagerSheet-iibtf5KC.js",
  "/assets/FoodsView-B-SSrNtd.js",
  "/assets/HistoryHome-BqTmz6us.js",
  "/assets/IcsRangeSheet-B1kcm-nN.js",
  "/assets/InventoryView-D0Dw4OSO.js",
  "/assets/LineChart-D4ISs528.js",
  "/assets/NutritionHistoryView-DK0RV462.js",
  "/assets/NutritionHome-Bh77HPgb.js",
  "/assets/PlanGeneratorSheet-C9v7O70y.js",
  "/assets/RecipesView-CjjfivCb.js",
  "/assets/RemindersSheet-C_OqxwZX.js",
  "/assets/SettingsScreen-DEAqAtbV.js",
  "/assets/ShoppingView-D-bbKHsb.js",
  "/assets/TrainingSuggestionsSheet-DFMP7C7c.js",
  "/assets/WeightView-dOIEdzzS.js",
  "/assets/backupExport-ByV0wFPi.js",
  "/assets/de-D5J3Pm2D.js",
  "/assets/diet-uOcB1Yp0.js",
  "/assets/exerciseStats.worker-C8iCXYUh.js",
  "/assets/exercises-DjNb7zZU.js",
  "/assets/fetchWithTimeout-CbW2UsEj.js",
  "/assets/foods-CFScO8lP.js",
  "/assets/generatedPlanAssignment-CxxU_aVg.js",
  "/assets/gymBuddy.js",
  "/assets/index-Bna0_7G_.css",
  "/assets/index-DjUS4W3P.js",
  "/assets/muscleBalance-CEkIZpHD.js",
  "/assets/nutrition-DNYWydHA.js",
  "/assets/openFoodFacts-CV8rOPEQ.js",
  "/assets/rangeLabels-CadpfVAw.js",
  "/assets/suggestions-4Wt9yqCB.js",
  "/assets/trainingModes-DHgem2i-.js",
  "/assets/translateText-Bx90n9K2.js",
  "/assets/workbox-window.prod.es5-BBnX5xw4.js"
];

function isValidAssetResponse(pathname, response) {
  if (!response || !response.ok) return false;
  const ct = (response.headers.get("content-type") || "").toLowerCase();
  if (pathname.endsWith(".js")) {
    return ct.includes("javascript") || ct.includes("ecmascript");
  }
  if (pathname.endsWith(".css")) {
    return ct.includes("css");
  }
  return !ct.includes("text/html");
}

async function fetchWithTimeout(resource, options = {}, timeoutMs = NETWORK_TIMEOUT_MS) {
  if (typeof AbortController === "undefined") {
    return fetch(resource, options);
  }
  const controller = new AbortController();
  const timerId = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(resource, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timerId);
  }
}

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      await Promise.all(
        PRECACHE_ASSETS.map(async (url) => {
          try {
            const response = await fetchWithTimeout(
              url,
              { credentials: "same-origin", cache: "reload" },
              6000
            );
            if (response && response.ok) {
              await cache.put(url, response.clone());
            }
          } catch {}
        })
      );
      try {
        const iconCache = await caches.open(ICON_CACHE);
        await iconCache.addAll(ICON_PATHS);
      } catch {}
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      try {
        if (self.registration.navigationPreload) {
          await self.registration.navigationPreload.enable();
        }
      } catch {}
      try {
        const allowed = new Set([
          CACHE_NAME,
          ICON_CACHE,
          SHELL_CACHE,
          RUNTIME_CACHE,
          "gym-app-icons-v1"
        ]);
        const keys = await caches.keys();
        await Promise.all(
          keys.filter((k) => !allowed.has(k)).map((k) => caches.delete(k))
        );
      } catch {}
      await self.clients.claim();
    })()
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  // Never cache APK downloads so users always get the freshest package
  if (url.pathname.endsWith(".apk")) return;

  // 1. Custom / static icons: Cache-first
  if (ICON_SET.has(url.pathname)) {
    event.respondWith(
      (async () => {
        try {
          const customCache = await caches.open("gym-app-icons-v1");
          const customMatch = await customCache.match(url.pathname);
          if (customMatch) return customMatch;

          const cached = await caches.match(url.pathname);
          if (cached) return cached;
        } catch {}
        return fetch(event.request);
      })()
    );
    return;
  }

  // 2. Navigation / HTML requests: Network-first with bounded timeout & full offline cache fallback
  if (
    event.request.mode === "navigate" ||
    url.pathname === "/" ||
    url.pathname === "/index.html" ||
    url.pathname === "/app.html"
  ) {
    event.respondWith(
      (async () => {
        try {
          const preloadResponse = await event.preloadResponse;
          if (preloadResponse && preloadResponse.ok) {
            const preloadClone = preloadResponse.clone();
            caches
              .open(CACHE_NAME)
              .then((cache) => cache.put(url.pathname, preloadClone))
              .catch(() => {});
            return preloadResponse;
          }
          const networkResponse = await fetchWithTimeout(event.request, {}, NETWORK_TIMEOUT_MS);
          if (networkResponse && networkResponse.ok) {
            const netClone = networkResponse.clone();
            caches
              .open(CACHE_NAME)
              .then((cache) => cache.put(url.pathname, netClone))
              .catch(() => {});
            return networkResponse;
          }
        } catch {}

        const cachedResponse =
          (await caches.match(url.pathname)) ||
          (await caches.match(event.request)) ||
          (await caches.match(url.pathname === "/app.html" ? "/app.html" : OFFLINE_URL)) ||
          (await caches.match("/"));
        if (cachedResponse) return cachedResponse;
        return new Response("Offline", {
          status: 200,
          headers: { "Content-Type": "text/html; charset=utf-8" }
        });
      })()
    );
    return;
  }

  // 3. Static JS/CSS/font assets: Cache-first for immutable fonts, Network-first (bounded timeout) for JS/CSS
  const isFontAsset = url.pathname.startsWith("/fonts/") || url.pathname.endsWith(".woff2");
  const isCodeOrFontAsset =
    isFontAsset ||
    url.pathname.startsWith("/assets/") ||
    url.pathname.endsWith(".js") ||
    url.pathname.endsWith(".css");

  if (isCodeOrFontAsset) {
    event.respondWith(
      (async () => {
        if (isFontAsset) {
          try {
            const currentCache = await caches.open(CACHE_NAME);
            const cachedFont = await currentCache.match(url.pathname);
            if (cachedFont && isValidAssetResponse(url.pathname, cachedFont)) {
              return cachedFont;
            }
          } catch {}
        }

        try {
          const networkResponse = await fetchWithTimeout(
            url.pathname,
            {
              credentials: "same-origin",
              cache: isFontAsset ? "default" : "no-cache"
            },
            NETWORK_TIMEOUT_MS
          );
          if (isValidAssetResponse(url.pathname, networkResponse)) {
            const clone = networkResponse.clone();
            caches
              .open(CACHE_NAME)
              .then((cache) => cache.put(url.pathname, clone))
              .catch(() => {});
            return networkResponse;
          }
        } catch {}

        try {
          const currentCache = await caches.open(CACHE_NAME);
          const cachedByPath = await currentCache.match(url.pathname);
          if (cachedByPath && isValidAssetResponse(url.pathname, cachedByPath)) {
            return cachedByPath;
          }
          const cachedByReq = await currentCache.match(event.request);
          if (cachedByReq && isValidAssetResponse(url.pathname, cachedByReq)) {
            return cachedByReq;
          }
        } catch {}

        return fetch(event.request);
      })()
    );
    return;
  }

  // 4. All other same-origin GET assets
  event.respondWith(
    (async () => {
      try {
        const networkResponse = await fetchWithTimeout(event.request, {}, NETWORK_TIMEOUT_MS);
        if (networkResponse && networkResponse.ok) {
          const clone = networkResponse.clone();
          caches
            .open(RUNTIME_CACHE)
            .then((cache) => cache.put(url.pathname, clone))
            .catch(() => {});
          return networkResponse;
        }
      } catch {}
      return (
        (await caches.match(url.pathname)) ||
        (await caches.match(event.request)) ||
        new Response("", { status: 504 })
      );
    })()
  );
});

self.addEventListener("push", (event) => {
  let payload = {
    title: "Gym App",
    body: "Zeit für deine nächste Einheit!",
    icon: "/icons/icon-192.png",
    badge: "/icons/icon-192.png",
    url: "/"
  };

  if (event.data) {
    try {
      const parsed = event.data.json();
      payload = { ...payload, ...parsed };
    } catch {
      const text = event.data.text();
      if (text) payload.body = text;
    }
  }

  event.waitUntil(
    self.registration.showNotification(payload.title || "Gym App", {
      body: payload.body,
      icon: payload.icon || "/icons/icon-192.png",
      badge: payload.badge || "/icons/icon-192.png",
      tag: payload.tag || "gym-app-push",
      data: { url: payload.url || "/" }
    })
  );
});

self.addEventListener("pushsubscriptionchange", (event) => {
  event.waitUntil(Promise.resolve());
});

self.addEventListener("message", (event) => {
  if (event.data?.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

let restTimerId;
let lastNotifiedEndsAt = 0;
function isRestNotificationMessage(data) {
  return (
    typeof data === "object" &&
    data !== null &&
    "type" in data &&
    (data.type === "SCHEDULE_REST_NOTIFICATION" || data.type === "CANCEL_REST_NOTIFICATION")
  );
}

self.addEventListener("message", (event) => {
  const data = event.data;
  if (!isRestNotificationMessage(data)) return;
  if (restTimerId !== undefined) {
    clearTimeout(restTimerId);
    restTimerId = undefined;
  }
  if (data.type === "SCHEDULE_REST_NOTIFICATION" && typeof data.endsAt === "number") {
    if (data.endsAt <= lastNotifiedEndsAt) return;
    const delay = Math.max(0, Math.min(data.endsAt - Date.now(), 600000));
    const label = data.label;
    const endsAt = data.endsAt;
    const timerPromise = new Promise((resolve) => {
      restTimerId = setTimeout(async () => {
        restTimerId = undefined;
        if (endsAt <= lastNotifiedEndsAt) {
          resolve();
          return;
        }
        lastNotifiedEndsAt = endsAt;
        if (typeof Notification !== "undefined" && Notification.permission === "granted") {
          const options = {
            ...(label === undefined ? {} : { body: label }),
            icon: "/icons/icon-192.png",
            badge: "/icons/icon-192.png",
            tag: "gym-rest-timer",
            renotify: true
          };
          try {
            await self.registration.showNotification("Gym App", options);
          } catch {}
        }
        resolve();
      }, delay);
    });
    if (typeof event.waitUntil === "function") {
      event.waitUntil(timerPromise);
    }
  }
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const targetUrl = event.notification?.data?.url || "/";
  event.waitUntil(
    (async () => {
      const client = (
        await self.clients.matchAll({ type: "window", includeUncontrolled: true })
      )[0];
      if (client) {
        await client.focus();
      } else {
        await self.clients.openWindow(targetUrl);
      }
    })()
  );
});

self.addEventListener("sync", (event) => {
  if (event.tag === "gym-app-sync") {
    event.waitUntil(Promise.resolve());
  }
});

self.addEventListener("periodicsync", (event) => {
  if (event.tag === "gym-app-periodic-sync") {
    event.waitUntil(Promise.resolve());
  }
});
