<div align="center">

# 🏋️‍♂️ Gym App — All-in-One Training, Cycle-Sync & Nutrition PWA

**100 % Lokal · Offline-First PWA · iOS- & iPhone-Optimiert · Anti-Guilt Gamification**

[![Version](https://img.shields.io/badge/version-13.26.0-2D8B8B?style=flat-square)](./public/changelog.json)
[![100% Local](https://img.shields.io/badge/storage-100%25_Local_IndexedDB-A8DAB5?style=flat-square)](#datenschutz--architektur--privacy--architecture)
[![Offline-First PWA](https://img.shields.io/badge/PWA-Offline--First-10B981?style=flat-square)](./public/manifest.webmanifest)
[![iOS Optimized](https://img.shields.io/badge/iOS_Safari-100%25_Compatible-3B82F6?style=flat-square)](#feature-übersicht-deutsch)
[![Anti-Guilt Gamification](https://img.shields.io/badge/Gym_Buddy_2.0-Anti--Guilt-F59E0B?style=flat-square)](#2-gym-buddy-20--anti-guilt-trainings-begleiter)
[![License](https://img.shields.io/badge/license-All_Rights_Reserved-6B7280?style=flat-square)](./LICENSE)

*Persönliche All-in-One Fitness-App für Krafttraining, Zyklus-Synchronisation, Muskel-Balance und Ernährung — entwickelt als pfeilschnelle, komplett lokale Progressive Web App ohne Cloud-Zwang, ohne Abo und ohne Tracking.*

*Personal all-in-one fitness companion for strength training, cycle-synced workouts, muscle balance, and nutrition — built as a fast, strictly local Progressive Web App with zero cloud accounts, zero subscriptions, and zero tracking.*

[🇩🇪 **Deutsche Dokumentation**](#-feature-übersicht-deutsch) · [🇬🇧 **English Documentation**](#-english-overview--features) · [🗺️ **Roadmap**](#-roadmap--meilensteine) · [🚀 **Installation**](#-lokale-ausführung--quick-start)

</div>

---

## 📱 App-Preview-Galerie · 1:1 Live Screen Mockups

| **Heute & Gym Buddy** | **Verlauf, Konstanz & Zyklus** | **Live Workout-Tracker** | **Gym Buddy Studio (HSL)** |
| :---: | :---: | :---: | :---: |
| <img src="docs/previews/preview-dashboard-buddy.svg" alt="Heute-Screen mit Gym Buddy Widget (Kraft-Bär), Zyklus-Karte, Heute Geplant und Capsule-Nav" width="210" /> | <img src="docs/previews/preview-cycle-training.svg" alt="Verlauf-Screen mit 26-Wochen Konstanz-Kalender, Zyklus-Phasenpunkten und 4-Phasen-Übersicht" width="210" /> | <img src="docs/previews/preview-workout-tracker.svg" alt="Laufendes Krafttraining (Oberkörper A) mit Satzeingabe, RIR, Satz-Pills und minimiertem Pausentimer" width="210" /> | <img src="docs/previews/preview-customization.svg" alt="Gym Buddy Sheet mit Pumper-Monster, HSL-Farbwähler, 3 Accessoire-Slots und 7 Begleitern" width="210" /> |
| *Echter „Heute“-Screen mit horizontalem Gym-Buddy-Widget (Kraft-Bär), Zyklus-Karte & Wochenplan* | *Echter „Verlauf“-Screen mit 26-Wochen-Konstanz-Grid, Zyklus-Phasenpunkten & Einheiten* | *Aktive Einheit („Oberkörper A“) mit Vorschlag, RIR, Satz-Pills & schwebendem Pausentimer* | *Gym-Buddy-Sheet mit freiem HSL-Farbwähler, 3 Accessoire-Slots (Kopf, Körper, Hand) & 7 Pets* |

---

## 🇩🇪 Feature-Übersicht (Deutsch)

### 1. 🏋️ Workout-Logger, Autoregulation & Muskel-Balance
- **Intelligenter Trainings-Tracker:** Erfasse Aufwärm- und Arbeitssätze mit Gewicht (`kg`/`lbs`), Wiederholungen, RIR/RPE und Live-1RM-Berechnung (Epley-Formel).
- **Tagesform-Autoregulation & Smart-Sorting:** Passt Gewichtsempfehlungen ab dem 2. Arbeitssatz dynamisch an deine Tagesform an. Aktive Übungskarten bleiben ruhig unter deinem Daumen verankert; abgeschlossene Übungen wandern automatisch nach unten.
- **Minimierbarer Vollbild-Pausentimer:** Wahlweise als großer Ring-Timer mit Folgeübung oder minimiert als schwebende Leiste am unteren Bildschirmrand (inkl. Service-Worker-Hintergrundbenachrichtigung).
- **Erweiterter Übungs-Tausch (`⇄ Swap`) & Plan-Generator:** Schlägt bei besetzten Geräten sofort biomechanisch passende Ersatzübungen vor und erstellt vollständige Wochenpläne nach Fokus, Frequenz und Equipment.
- **7-Tage-Muskel-Balance & Dauerhafte Einschränkungen:** Wissenschaftliches Netzdiagramm mit primärer (`1,0×`) und sekundärer (`0,5×`) Muskelbelastung sowie Verletzungs-/Einschränkungsfilter im Profil.

### 2. 🐾 Gym Buddy 2.0 — Anti-Guilt Trainings-Begleiter
- **100 % Positiv (Kein Bestrafungssystem):** Dein Begleiter freut sich über jedes Training, liest an Ruhetagen entspannt ein Buch oder hält einen *Rest-Day Power-Nap* — niemals schlechtes Gewissen, kein Level-Verlust.
- **7 Freischaltbare Pixel-Art-Pets (3 Cute & 4 Progress/Beast) & 4 Evolutionsstufen:**
  - *Cute-Stil (3 Pets):* **Iron-Bot** (`robot`), **Kraft-Bär** (`bear`) und **Gym-Katze** (`cat`, ab 5 Workouts) — kompakt, glänzende Augen, süßes Lächeln, funkelnde Sterne auf Stufe 4.
  - *Progress-/Beast-Stil (4 Pets):* **Pumper-Monster** (`monster`), **Lifter-Max** (`lifter`), **Reps-Rex** (`dino`, ab 15 Workouts) und **Silberrücken** (`gorilla`, ab 30 Workouts) — wachsende Muskulatur, breite Schultern, selbstbewusstes Grinsen, pulsierende Energie-Aura.
  - *Spoiler-freie Evolution:* Jedes der 7 Pets besitzt eigene **16×16 Pixel-Art-Sprites** über **4 Stufen** (`0 / 100 / 300 / 600 XP`), ohne zukünftige Stufen vorab zu verraten.
- **Freie HSL-Farbwahl & Accessoire-Slots mit scharfen SVG-Outlines:**
  - Stufenloser **HSL-Farbwähler** (Farbton, Sättigung, Helligkeit + Hex-Code) oder edler **Theme-Monochrom-Modus**.
  - **3 Accessoire-Slots (Kopf, Körper, Hand):** Schweißband, Gym-Mütze, Sonnenbrille, Pump-Hoodie, Hebergürtel, Kurzhantel, Protein-Shaker, Trainings-Schild und Kettlebell — mit scharfen SVG-Konturen und sichtbarem Pfoten-/Hand-Griff, der sich synchron mit dem Körper bewegt.
- **Lebendige Mimik & Tagesrhythmus:** Ausdrucksstarkes Lächeln, motivierendes Zwinkern alle ~7 Sekunden, stolze **Post-Workout-Atmung** (2 Stunden nach dem Training) sowie automatische **Nachtschlaf-Phase** (`22:00–06:00 Uhr`). Jederzeit mit einem Tipp ausblendbar.

### 3. 🌸 Cycle-Synced Training (4 Phasen & Streak-Schutz)
- **Biologisch abgestimmtes Training (100 % lokal):** Optional im Onboarding oder in den Einstellungen aktivierbar (Zykluslänge `21–35 Tage`, Periodendauer `3–7 Tage`, Schnell-Button *„Periode hat heute begonnen“*).
- **4 Trainingsphasen im Dashboard & Kalender:**
  - 🔴 **Phase 1 — Menstruation:** Fokus auf Erholung, Technik & Mobility · **Automatischer Streak-Schutz** (erhöht das Rest-Day-Limit von 2 auf **4 Pausentage**) + Gym Buddy im entspannten Recovery-Zustand.
  - 🟢 **Phase 2 — Follikelphase:** Steigendes Östrogen & optimale Regeneration — ideal für Muskelaufbau und höheres Satzvolumen.
  - 🟡 **Phase 3 — Ovulation / Power-Peak:** Maximalkraft-Peak in der Zyklusmitte — grünes Licht für schwere Grundübungen und persönliche Rekorde (`🏆 PR`).
  - 🟣 **Phase 4 — Lutealphase (Anti-Frust-Schutz):** Erklärt transparent, dass 1–2 Wdh. weniger oder +1–2 kg durch hormonelle Wassereinlagerung völlig normal sind und kein Kraftverlust vorliegt.
- **Farbige Kalender-Phasenpunkte:** Zeigt im 26-Wochen-Konstanz-Kalender unter jedem Tag den passenden Phasenpunkt zur langfristigen Trainingsplanung.

### 4. 👋 Automatische Pausen- & Comeback-Erkennung, Ernährung & Lokales JSON-Backup
- **Vollautomatische Pausen- & Comeback-Erkennung (ohne manuelle Pausen-Buttons):** Wenn du die App länger nicht geöffnet oder kein Training geloggt hast, fragt dich ein freundlicher „Willkommen zurück!“-Dialog beim Öffnen automatisch, ob du krank oder im Urlaub warst — rettet rückwirkend deine Streak, setzt den Deload-Zähler ab 7 Tagen Pause auf Woche 1 zurück und begleitet deine ersten 1–2 Comeback-Workouts mit einem sanften Hinweis.
- **Ernährung, Rezepte (DE/EN) & Kalorienrechner:** BMR/TDEE-Rechner (Mifflin-St Jeor & Katch-McArdle) mit Sicherheitsgrenzen, Barcode-/Lebensmittelsuche (Open Food Facts), Vorratsschrank, Einkaufsliste und zweisprachigen Rezepten.
- **100 % iOS-Optimiert & JSON-Backup:** Aktiver Safari-Speicherschutz (`navigator.storage.persist()`), natives iOS-Teilen-Menü (*„In Dateien sichern“*) für vollständige JSON-Backups, `.ics`-Kalender-Export und strikter Lie-Fi-Schutz (3,5 s Timeout im Gym-Funkloch).

---

## 🇬🇧 English Overview & Features

### 1. 🏋️ Workout Logger, Autoregulation & Muscle Balance
- **Smart Strength Tracker:** Log warm-up and working sets with weight (`kg`/`lbs`), reps, RIR/RPE, live Epley e1RM calculation, and instant `🏆 PR` badges.
- **Daily Form Autoregulation & Minimizable Rest Timer:** Automatically adjusts weight suggestions from the 2nd working set onwards based on your RIR. Minimize the fullscreen rest timer into a sleek floating bottom bar while browsing exercises.
- **Exercise Swap (`⇄ Swap`) & Plan Generator:** Instantly find biomechanically matching replacement exercises when gym equipment is taken, or generate tailored weekly splits.
- **7-Day Muscle Balance Radar:** Tracks primary (`1.0×`) and secondary (`0.5×`) muscle group volume with an injury/limitation exclusion filter.

### 2. 🐾 Gym Buddy 2.0 — Anti-Guilt Companion
- **Purely Positive Gamification:** Celebrates your workouts, reads on rest days, and takes power naps — zero punishment, zero streak shame.
- **7 Unlockable Pixel-Art Pets (3 Cute / 4 Progress) & 4 Evolution Stages:**
  - *Cute Style (3 Pets):* **Iron-Bot**, **Power Bear**, and **Gym Cat** (unlocked at 5 workouts).
  - *Progress / Beast Style (4 Pets):* **Pump Monster**, **Lifter Max**, **Reps Rex** (15 workouts), and **Silverback** (30 workouts).
  - Evolve companions from Stage 1 to Stage 4 (`0 / 100 / 300 / 600 XP`) with custom 16×16 pixel-art sprites and spoiler-free level-up surprises.
- **Free HSL Color Picker & Crisp SVG Accessories:** Customize your buddy with full Hue/Saturation/Lightness sliders, theme monochrome mode, and 3 accessory slots (*Head*, *Body*, *Hand*) featuring sharp SVG outlines and a synchronized paw grip.
- **Expressive Animations:** Friendly smile, 7-second wink, 2-hour post-workout proud breathing, and automatic night sleep (`10:00 PM – 6:00 AM`). Completely optional and can be hidden anytime.

### 3. 🌸 Cycle-Synced Training (4 Phases & Streak Protection)
- **4 Biological Training Phases:** Tracks **Phase 1 (Menstruation)**, **Phase 2 (Follicular)**, **Phase 3 (Ovulation / PR Peak)**, and **Phase 4 (Luteal)** with colored calendar phase dots and biological anti-frustration guidance.
- **Automatic Streak Protection:** Extends the workout streak rest-day buffer from 2 to **4 rest days** during Phase 1 and places your Gym Buddy into a gentle recovery mood.

### 4. 👋 Automatic Break & Comeback Detection, Nutrition & Local JSON Backup
- **Fully Automatic Break & Comeback Detection:** When you return after not opening the app or logging a workout for several days, a friendly 'Welcome back!' prompt automatically asks if you were sick or on vacation — retroactively protecting your streak, resetting deload counters after 7+ days off, and guiding your first comeback workouts.
- **100% Local & iOS Ready:** Full IndexedDB persistence (`navigator.storage.persist()`), native iOS Share Sheet support (`navigator.share`) for validated JSON backups, and bilingual DE/EN interface.

---

## 🗺️ Roadmap & Meilensteine

### ✅ Abgeschlossene Meilensteine (Shipped)
- [x] **Workout-Logger, Wochenplan-Generator & RIR-Autoregulation** *(inkl. `⇄ Swap` & PR-Erkennung)*
- [x] **Minimierbarer Vollbild-Pausentimer** *(schwebende Leiste + Service-Worker Push-Benachrichtigung)*
- [x] **7-Tage-Muskel-Balance-Netzdiagramm & Filter für dauerhafte Einschränkungen**
- [x] **Ernährungs- & Makro-Tracker, Vorrat, Einkaufsliste & Zweisprachige Rezepte (DE/EN)**
- [x] **Erweiterte Erinnerungen mit `.ics`-Kalender-Export** *(1 Woche, 1 Monat, 3 Monate, unbegrenzt)*
- [x] **Gym Buddy 2.0 Trainings-Begleiter** *(7 Pets in Cute/Progress: Pumper-Monster, Iron-Bot, Lifter-Max, Kraft-Bär, Gym-Katze, Reps-Rex, Silberrücken · 4 Evolutionsstufen · freier HSL-Farbwähler · 3 Accessoire-Slots mit scharfen SVG-Outlines & Pfoten-Griff)*
- [x] **Cycle-Synced Training (4 Phasen)** *(Dashboard-Widget, Anti-Frust-Hinweise, farbige Kalender-Punkte & 4-Tage-Streak-Schutz in Phase 1)*
- [x] **Vollautomatische Pausen- & Comeback-Erkennung** *(Automatische „Willkommen zurück!“-Abfrage nach längeren Pausen mit rückwirkendem Streak-Schutz, Deload-Reset ab 7 Tagen & Comeback-Banner)*
- [x] **Interaktive 5-Schritte-Tour mit automatischem Live-Tab-Wechsel & 1:1 App-Previews**
- [x] **100 % iPhone- & iOS-Web-App-Optimierung** *(`navigator.storage.persist`, natives iOS Share Sheet für JSON-Backups, WebKit-SVG-Optimierung & 3,5 s Lie-Fi-Schutz)*

### 🔜 Zukünftige Meilensteine (Planned)
- [ ] **Smart Wearable Sync (Apple Health & Health Connect):** Optionaler, rein lokaler Import von täglichen Schritten, Aktivitätskalorien und Ruhepuls — 100 % datenschutzkonform direkt auf dem Gerät ohne Cloud-Konto.
- [ ] **Mesozyklus-Planer & Periodisierungs-Kurven:** Visuelle Darstellung von Satz- und Intensitäts-Akkumulation über 4–8 Wochen zur gezielten Deload- und Peak-Steuerung.
- [ ] **Offline Barcode-Schnellkatalog:** Lokaler Vorab-Cache für die am häufigsten genutzten Lebensmittel-Barcodes für verzögerungsfreies Scannen im Gym-Funkloch.

---

## 🚀 Lokale Ausführung · Quick Start

### Voraussetzungen / Prerequisites
- [Node.js](https://nodejs.org/) (Version 18+)

### Installation, Tests & Build

```bash
# 1. Abhängigkeiten installieren / Install dependencies
npm install

# 2. Entwicklungsserver starten (Port 3000) / Start dev server
npm run dev

# 3. Domain- & Bundle-Integritätstests ausführen / Run unit tests
npm test

# 4. TypeScript-Typprüfung & Produktions-Build / Typecheck & build
npm run lint
npm run build
```

---

## 🔒 Datenschutz & Architektur · Privacy & Architecture

- **100 % Local-First:** Alle Trainings-, Körper-, Ernährungs-, Zyklus- und Gym-Buddy-Daten liegen ausschließlich lokal in der `IndexedDB` deines Endgeräts.
- **Kein Tracking, keine Cloud:** Es existieren keine Benutzerkonten, keine Telemetrie-Skripte und keine externen Datenbanken.
- **Portabilität:** Über **Einstellungen → Datensicherung** lassen sich jederzeit vollständige, schema-validierte `.json`-Backups exportieren und wiederherstellen.

---

## 📄 Lizenz & Rechtliches

© 2026 Julian – Alle Rechte vorbehalten.

Private, nicht-kommerzielle Nutzung ist erlaubt. Kein Re-Publish, kein Verkauf und keine kommerzielle Verwertung ohne ausdrückliche Genehmigung des Urhebers. Weitere Details siehe [LICENSE](./LICENSE).
