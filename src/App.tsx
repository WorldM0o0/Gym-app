/**
 * © 2026 Julian – Alle Rechte vorbehalten.
 * Siehe LICENSE für Nutzungsbedingungen.
 */

import { useEffect, useState } from 'react';

export default function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let active = true;
    const timeout = window.setTimeout(() => {
      if (active) setReady(true);
    }, 400);

    (async () => {
      try {
        if ('caches' in window) {
          const keys = await window.caches.keys();
          await Promise.all(
            keys
              .filter((k) => k.startsWith('workbox-precache') || k.includes('precache'))
              .map((k) => window.caches.delete(k))
          );
        }
        if ('serviceWorker' in navigator) {
          const regs = await navigator.serviceWorker.getRegistrations();
          await Promise.all(regs.map((r) => r.update().catch(() => {})));
        }
      } catch {
        // Ignore cache cleanup errors in restricted contexts
      } finally {
        window.clearTimeout(timeout);
        if (active) setReady(true);
      }
    })();

    return () => {
      active = false;
      window.clearTimeout(timeout);
    };
  }, []);

  return (
    <main className="w-full h-screen m-0 p-0 overflow-hidden bg-[#111214]">
      {ready && (
        <iframe
          src="/app.html"
          title="Gym App"
          className="w-full h-full border-none m-0 p-0 block"
          allow="camera; microphone; display-capture"
        />
      )}
    </main>
  );
}
