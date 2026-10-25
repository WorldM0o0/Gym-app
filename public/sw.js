const ICON_CACHE = "gym-app-icons-v2";
const ICON_PATHS = [
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/icons/icon-maskable-512.png"
];
const ICON_SET = new Set(ICON_PATHS);

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    (async () => {
      try {
        const cache = await caches.open(ICON_CACHE);
        await Promise.all(
          ICON_PATHS.map(async (p) => {
            if (await cache.match(p)) return;
            const res = await fetch(p);
            if (res.ok) await cache.put(p, res.clone());
          })
        );
      } catch {}
    })()
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      try {
        const keys = await caches.keys();
        await Promise.all(
          keys
            .filter((k) => k !== ICON_CACHE)
            .map((k) => caches.delete(k))
        );
      } catch {}
      await self.clients.claim();
    })()
  );
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (url.origin === self.location.origin && ICON_SET.has(url.pathname)) {
    event.respondWith(
      (async () => {
        try {
          const cached = await (await caches.open(ICON_CACHE)).match(url.pathname);
          if (cached) return cached;
        } catch {}
        return fetch(event.request);
      })()
    );
  }
});

self.addEventListener("message", (event) => {
  if (event.data?.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

let restTimerId;
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
    const delay = Math.max(0, data.endsAt - Date.now());
    const label = data.label;
    restTimerId = setTimeout(() => {
      restTimerId = undefined;
      if (Notification.permission !== "granted") return;
      const options = {
        ...(label === undefined ? {} : { body: label }),
        icon: "/icons/icon-192.png",
        tag: "gym-rest-timer",
        renotify: true
      };
      self.registration.showNotification("Gym App", options).catch(() => {});
    }, delay);
  }
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(
    (async () => {
      const client = (
        await self.clients.matchAll({ type: "window", includeUncontrolled: true })
      )[0];
      if (client) {
        await client.focus();
      } else {
        await self.clients.openWindow("/");
      }
    })()
  );
});
