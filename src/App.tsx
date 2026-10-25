/**
 * © 2026 Julian – Alle Rechte vorbehalten.
 * Siehe LICENSE für Nutzungsbedingungen.
 */

export default function App() {
  return (
    <main className="w-full h-screen m-0 p-0 overflow-hidden bg-[#0A0C0D]">
      <iframe
        src="/app.html"
        title="Gym App"
        className="w-full h-full border-none m-0 p-0 block"
        allow="camera; microphone; display-capture"
      />
    </main>
  );
}
