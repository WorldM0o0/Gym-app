# Gym App – Geräte-Notizen, Trainings-Feinschliff, Auto-Sprache & iOS-Optimierung

Dieses Update erweitert das Training um dauerhaft angepinnte Geräte- und Setup-Notizen direkt auf den Übungskarten, erkennt beim ersten Start automatisch die Systemsprache des Geräts (Deutsch/Englisch) und beseitigt typische iOS-/iPhone-Reibungspunkte bei Dynamic-Island-Abständen, Pausen-Timer-Audio nach dem Sperrbildschirm und der Zahlen-Tastatur.

## User Review & Critical Decisions

> [!IMPORTANT]
> Alle Erweiterungen fügen sich nahtlos und unaufdringlich in die bestehende Oberfläche ein – ohne neue Tabs, ohne zusätzliche Einstellungs-Schalter und unter vollständiger Wahrung aller lokal gespeicherten Trainings- und Ernährungsdaten.

- **Bestätigte Entscheidung 1 (Angepinnte Geräte-Notizen & Feinschliff im Training)**:
  - **Angepinnte Setup-Notiz auf Übungskarten**: Jede Übung zeigt ihre hinterlegte Notiz (z. B. *„Sitz 4 · Polster 2 · Griff eng"*) dauerhaft und kompakt direkt unter dem Übungsnamen an – auch wenn die Karte zugeklappt ist. Im aufgeklappten Zustand sowie in der Übungsverwaltung lässt sich die Notiz jederzeit mit einem Tipp bearbeiten.
  - **Trainings-Feinschliff**: Nach dem Bestätigen eines Satzes schließt sich eine geöffnete Smartphone-Tastatur automatisch, damit die aktualisierte Satz-Liste und der Pausen-Timer sofort frei sichtbar sind. Zudem lassen sich die Werte eines bereits geloggten Satzes per Tipp schnell in die Eingabezeile übernehmen oder korrigieren.
- **Bestätigte Entscheidung 2 (Automatische Systemsprache DE/EN beim Erststart)**:
  - Beim allerersten Start (solange noch keine manuelle Sprachwahl gespeichert wurde) prüft die App die Systemsprache des Browsers/Geräts (`navigator.languages` / `navigator.language`). Auf deutschsprachigen Geräten startet die App sofort auf Deutsch (inklusive passendem Datums- und Zahlenformat), auf allen anderen auf Englisch. Eine manuelle Umstellung in den Einstellungen hat weiterhin jederzeit Vorrang.
- **Bestätigte Entscheidung 3 (Gezielte iOS- & iPhone-Optimierungen)**:
  - **Safe-Area Top für Dynamic Island & Notch**: Da die App im Home-Screen-Modus (`black-translucent`) bis unter die iOS-Statusleiste reicht, erhalten Hauptansichten, Vollbild-Ansichten (z. B. Übungsverwaltung, Plan-Generator, Trainings-Zusammenfassung) und der Vollbild-Pausentimer einen sauberen oberen Safe-Area-Abstand (`env(safe-area-inset-top)`), sodass Überschriften und Zurück-Pfeile nie mit der Dynamic Island oder Uhrzeit kollidieren.
  - **iOS WebAudio „Interrupted"-Recovery für den Pausentimer**: iOS versetzt den Audio-Kontext bei kurzem Sperren des Bildschirms oder App-Wechsel oft in den Status `interrupted` statt `suspended`. Die Audio-Engine reaktiviert den Kontext nach dem Aufwecken automatisch, damit der Signalton am Ende der Satzpause auf dem iPhone zuverlässig klingelt.
  - **Touch- & Tastatur-Ergonomie auf iOS**: Gedrückthalten auf `+`/`−`-Buttons löst kein störendes iOS-Textauswahl-/Lupen-Menü (`-webkit-touch-callout: none`) mehr aus, und die iOS-PWA-Metadaten sind konsistent auf der äußeren wie inneren App-Ebene hinterlegt.

---

## 1. Overview & Core Concept

- **Was das Update liefert**:
  1. **Gedächtnisstütze am Gerät**: Sitzhöhen, Pin-Stufen oder Ausführungshinweise stehen als angepinnte Zeile direkt im Kopf jeder Übungskarte und im Übungs-Editor.
  2. **Sofort richtige Sprache**: Neue Nutzer auf deutschen Geräten müssen nicht erst durch ein englisches Onboarding navigieren, um in den Einstellungen auf Deutsch umzustellen.
  3. **Spürbar runderes iPhone-Gefühl**: Kein Überlappen mit der Dynamic Island im Home-Screen-Modus, zuverlässiger Pausen-Wecker nach kurzem Display-Ruhezustand und sauberes Einklappen der Zahlentastatur nach jedem geloggten Satz.
- **Zielgruppe & Nutzungskontext**: Einhand-Nutzung im Fitnessstudio – insbesondere als installierte Home-Screen-Web-App (PWA) auf dem iPhone sowie auf Android-Geräten.
- **Mehrwert**: Weniger Suchen und Tippen zwischen den Sätzen, keine abgeschnittenen Kopfzeilen auf modernen iPhones und sofortige Sprach-Konsistenz ab der ersten Sekunde.

---

## 2. User Experience & Visual Design

### Key User Flows

1. **Angepinnte Geräte-Notizen im Training & in der Übungsverwaltung**:
   - **Sofort-Blick beim Scrollen**: Hat eine Übung eine Notiz (z. B. *„Sitz 3 · Rückenlehne 45°"*), erscheint diese als dezente, einzeilige Zusatzzeile direkt im Kartenkopf unter dem Übungsnamen und dem Satz-Ziel – selbst wenn die Übungskarte eingeklappt ist.
   - **Schnelles Anpassen im Satz**: Klappt man die Übungskarte auf, zeigt das Notizfeld ein dezentes Pin-/Notiz-Label und speichert Änderungen sofort beim Verlassen des Feldes oder per `Fertig`-Taste auf der Tastatur (mit einen `×`-Button zum schnellen Leeren).
   - **Pflege in der Übungsverwaltung**: Auch beim Anlegen oder Bearbeiten einer Übung in der Übungsverwaltung kann die Geräte-Notiz direkt eingetragen oder angepasst werden.

2. **Systemsprache beim ersten Start automatisch erkennen**:
   - Öffnet man die App zum ersten Mal auf einem Gerät mit deutscher Systemeinstellung (`de`, `de-DE`, `de-AT`, `de-CH`), lädt die App bereits vor dem ersten Hinweis-Dialog das deutsche Sprachpaket und stellt Datums-, Wochentags- und Komma-Formatierung automatisch auf Deutsch ein.
   - Sobald in den Einstellungen unter *App-Präferenzen → Sprache* aktiv zwischen *Deutsch* und *English* gewählt wird, bleibt diese persönliche Wahl dauerhaft in `localStorage` und `IndexedDB` gespeichert.

3. **iOS- & iPhone-Komfort im Trainings-Alltag**:
   - **Vollbild-Ansichten & Notch-Schutz**: Öffnet man auf dem iPhone im Home-Screen-Modus den Plan-Generator, die Übungsverwaltung, den Pausen-Bildschirm oder ein Hinweis-Banner, hält das Layout automatisch den oberen Sicherheitsabstand (`env(safe-area-inset-top)`) ein.
   - **Tastatur-Komfort beim Satz-Loggen**: Tippt man Gewicht oder Wiederholungen auf der iOS-Tastatur ein und drückt auf *„Satz bestätigen"*, schließt sich die Bildschirmtastatur automatisch, damit der Pausen-Timer und die nächste Übung nicht verdeckt werden.
   - **Pausen-Audio nach Sperrbildschirm**: Wird das iPhone während einer 2-Minuten-Pause kurz gesperrt und wieder entsperrt, stellt die App beim Aufwachen (`visibilitychange` / Touch-Interaktion) den iOS-Audio-Kanal wieder her, sodass der End-Signalton hörbar abgespielt wird.

### Visual Identity & Theme
- **Aesthetic Direction**: *Calm Athletic Precision* – ruhige Typografie, klare Hierarchie ohne zusätzliche Boxen oder bunte Badges.
- **Color Palette & Mood (60-30-10 Verteilung)**:
  - **60 % Dominant Canvas (`--color-surface`)**: Tiefes Schiefergrau bzw. gewählte Oberflächen-Variante bis in die Safe-Area-Ränder.
  - **30 % Structural Surfaces (`--color-surface-container`, `--color-on-surface-variant`)**: Angepinnte Geräte-Notizen nutzen gedämpfte Sekundärfarbe (`text-onSurfaceVariant`), damit sie informieren, ohne mit dem Übungsnamen oder den Satz-Zahlen zu konkurrieren.
  - **10 % Accent Budget (`--color-primary`)**: Bleibt exklusiv für aktive Satz-Punkte, primäre Aktionsbuttons und Fokus-Unterstreichungen reserviert.
- **Typography & Hierarchy**:
  - **UI (`Instrument Sans`)**: Übungsname (`text-titleL font-semibold`), darunter Satz-Ziel und angepinnte Notiz mit sauberem `·`-Trenner und Einzeilen-Kürzung (`truncate`).
  - **Zahlen & Timer (`JetBrains Mono` + `tabular-nums`)**: Ruhige, spaltentreue Darstellung aller Gewichte, Wiederholungen und Pausen-Zeiten.
- **Touch-Ergonomie & iOS-Feinschliff**:
  - Alle interaktiven Touch-Ziele mindestens $44 \times 44\text{px}$ (`h-touch` / `w-touch`).
  - Unterdrückung ungewollter iOS-Textmarkierungen (`-webkit-user-select: none; -webkit-touch-callout: none`) auf allen Stepper- und Steuer-Buttons.

---

## 3. Key Product Decisions & Trade-Offs

- **Entscheidung 1: Angepinnte Notiz direkt im Kartenkopf statt hinter einem eigenen Notiz-Icon-Popup**
  - *Gewählter Ansatz*: Ist eine Notiz vorhanden, steht sie ohne extra Klick direkt unter dem Übungsnamen im Kartenkopf; bearbeitet wird sie inline in der aufgeklappten Karte oder in der Übungsverwaltung.
  - *Warum*: Im Gym will man die Sitz- oder Pin-Einstellung *vor* dem Hinsetzen auf einen Blick sehen, ohne erst auf ein kleines Icon tippen zu müssen. Ist keine Notiz hinterlegt, nimmt sie im eingeklappten Zustand exakt null Platz ein.
- **Entscheidung 2: Automatische Systemsprache nur als Initial-Standard, kein Zwang**
  - *Gewählter Ansatz*: `navigator.languages` wird nur ausgewertet, wenn noch keine gespeicherte Einstellung vorliegt. Sobald Einstellungen geladen oder geändert werden, gilt der gespeicherte Wert.
  - *Warum*: Erspart deutschsprachigen Nutzern das manuelle Umstellen nach der Installation, lässt aber jedem Nutzer weiterhin die freie Wahl zwischen Deutsch und Englisch.
- **Entscheidung 3: CSS `env(safe-area-inset-top)` + iOS Audio-Resume statt plattformspezifischer Sonder-Layouts**
  - *Gewählter Ansatz*: Nutzung standardisierter CSS-Safe-Area-Berechnungen (`max(...)` / `calc(...)`) und erweiterter WebAudio-State-Checks (`suspended` + `interrupted`).
  - *Warum*: Auf Geräten ohne Notch (oder im normalen Browser-Tab) ist `env(safe-area-inset-top)` automatisch `0px`, sodass sich das Layout dort keinen Millimeter verschiebt, während iPhones im Home-Screen-Modus optimal geschützt sind.

---

## 4. Technical Architecture & Data Strategy *(Technical Reference)*

### Architecture & Component Diagram

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    System- & Geräte-Kontext (iOS / Web)                 │
│  navigator.language(s) · env(safe-area-inset-*) · WebKit AudioContext   │
└─────────────────┬─────────────────────────────────────┬─────────────────┘
                  │                                     │
                  ▼                                     ▼
┌───────────────────────────────────┐ ┌───────────────────────────────────┐
│   Initial Language & Theme Boot   │ │   iOS Safe-Area & Audio Guard     │
│  • Erkennt DE vs. EN beim 1. Start│ │  • Safe-Area Top an Screen-Sheets │
│  • Lädt DE-Sprachpaket verzögerungs│ │    Header & Vollbild-Pausentimer  │
│    frei vor dem Onboarding        │ │  • Reaktiviert AudioContext nach  │
│  • Synchronisiert <html lang>     │ │    iOS „interrupted"-Status       │
└─────────────────┬─────────────────┘ └─────────────────┬─────────────────┘
                  │                                     │
                  ▼                                     ▼
┌─────────────────────────────────────────────────────────────────────────┐
│             Trainings-Ansicht & Übungsverwaltung (IndexedDB)            │
│  • Übungskarte (Kopf): Zeigt angepinnte Notiz einzeilig auch zugeklappt │
│  • Übungskarte (Body) & Manager: Inline-Notizfeld mit Sofort-Speichern  │
│  • Satz-Eingabe: Auto-Blur schließt iOS-Tastatur nach „Satz bestätigen" │
└─────────────────────────────────────────────────────────────────────────┘
```

### Data Model & State
- **Keine Datenbank-Schema-Änderung erforderlich**:
  - Das Feld `notes` existiert bereits im `exercises`-Store der IndexedDB (Format-Version 33) und wird bereits in JSON-Sicherungen mitgesichert.
  - Die Sprach-Erkennung nutzt den bestehenden `gym-theme`-Schlüssel im `localStorage` sowie den `appSettings`-Store in der IndexedDB.

### Interactive Component & State Mapping
- **Übungskarte im Training & Übungs-Editor**:
  - Der Kartenkopf erhält das `notes`-Attribut der Übung und rendert bei vorhandenem Text eine einzeilige, gedämpfte Notizzeile direkt unter dem Namen/Ziel.
  - Das Notizfeld in der aufgeklappten Übungskarte besitzt einen Clear-Button (`×`) sowie `enterKeyHint="done"` zum direkten Speichern und Schließen der Tastatur; auch das Bearbeitungsformular in der Übungsverwaltung erhält ein Eingabefeld für die angepinnte Geräte-Notiz.
- **Satz-Eingabe (`onConfirm`)**:
  - Beim erfolgreichen Speichern eines Satzes wird ein eventuell fokussiertes Eingabefeld automatisch entschärft (`blur()`), damit die Bildschirmtastatur auf iOS/Android sofort einfährt.
- **Sprach-Initialisierung & iOS-Anpassungen**:
  - Vor dem ersten Render wird geprüft, ob bereits eine gespeicherte Spracheinstellung existiert; falls nicht, wird anhand von `navigator.languages` / `navigator.language` (`/^de\b/i`) automatisch `"de"` oder `"en"` gesetzt.
  - Globale Safe-Area-Klassen (`env(safe-area-inset-top)`) schützen den oberen Bildschirmrand in Hauptansichten, Vollbild-Dialogen und dem Pausen-Overlay; die WebAudio-Hilfsfunktion prüft zusätzlich auf `state === "interrupted"` und bindet einen `visibilitychange`/`touchend`-Unlock für iOS Safari ein.
