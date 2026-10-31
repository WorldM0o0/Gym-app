<div align="center">

# 🏋️‍♂️ Gym App — All-in-One Training, Cycle-Sync & Nutrition PWA

**100 % Lokal · Offline-First PWA · iOS- & iPhone-Optimiert · Anti-Guilt Gamification**

[![Version](https://img.shields.io/badge/version-13.21.0-2D8B8B?style=flat-square)](./public/changelog.json)
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

## 📱 App-Preview-Galerie · Live Screen Mockups

| **Heute & Gym Buddy 2.0** | **Cycle-Synced Training** | **Live Workout-Tracker** | **Gym Buddy Studio (HSL)** |
| :---: | :---: | :---: | :---: |
| <img src="docs/previews/preview-dashboard-buddy.svg" alt="Heute-Dashboard mit Gym Buddy 2.0, Schild, Shaker, XP-Balken und Streak" width="210" /> | <img src="docs/previews/preview-cycle-training.svg" alt="Cycle-Synced Training Widget mit 4 Phasen, Anti-Frust-Hinweis und Kalender-Phasenpunkten" width="210" /> | <img src="docs/previews/preview-workout-tracker.svg" alt="Laufendes Krafttraining mit Sätzen, Gewichten, PR-Badge und schwebendem Pausentimer" width="210" /> | <img src="docs/previews/preview-customization.svg" alt="Gym Buddy Anpassungs-Menü mit freiem HSL-Farbwähler, Accessoire-Slots und Pet-Auswahl" width="210" /> |
| *Heute-Dashboard mit Lächeln, ausgerüstetem Schild/Shaker, XP-Balken & Streak-Schutz* | *4-Phasen-Zyklus-Widget, Anti-Frust-Hinweise & farbige Kalender-Phasenpunkte* | *Aktive Einheit mit Sätzen, Gewichten, RIR, PR-Badges & schwebendem Pausentimer* | *Freier HSL-Farbwähler, 3 Accessoire-Slots (Kopf, Körper, Hand) & 10 Begleiter* |

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
- **7+ Freischaltbare Pets (10 Charaktere in 50/50 Cute & Progress) & 4 Evolutionsstufen:**
  - *Cute-Stil (5 Pets):* **Iron-Bot**, **Kraft-Bär**, **Gym-Katze**, **Pump-Shiba** und **Gains-Axolotl** (kompakt, glänzende Kulleraugen, süßes Lächeln, funkelnde Sterne auf Stufe 4).
  - *Progress-/Beast-Stil (5 Pets):* **Pumper-Monster**, **Lifter-Max**, **Reps-Rex**, **Silberrücken** und **Cyber-Wolf** (wachsende Muskulatur, breite Schultern, selbstbewusstes Grinsen, pulsierende Energie-Aura).
  - *Spoiler-freie Evolution:* Jedes Pet entwickelt sich über **4 Stufen** (`0 / 100 / 300 / 600 XP`), ohne zukünftige Stufen vorab zu verraten.
- **Freie HSL-Farbwahl & Accessoire-Slots mit scharfen SVG-Outlines:**
  - Stufenloser **HSL-Farbwähler** (Farbton, Sättigung, Helligkeit + Hex-Code) oder edler **Theme-Monochrom-Modus**.
  - **3 Accessoire-Slots (Kopf, Körper, Hand):** Schweißband, Gym-Mütze, Sonnenbrille, Pump-Hoodie, Hebergürtel, Kurzhantel, Protein-Shaker, Trainings-Schild und Kettlebell — mit scharfen SVG-Konturen und sichtbarem Pfoten-/Hand-Griff, der sich synchron mit dem Körper bewegt.
- **Lebendige Mimik & Tagesrhythmus:** Ausdrucksstarkes Lächeln, motivierendes Zwinkern alle ~7 Sekunden, stolze **Post-Workout-Atmung** (2 Stunden nach dem Training) und automatische **Nachtschlaf-Phase** (`22:00–06:00 Uhr`). Jederzeit mit einem Tipp ausblendbar.

### 3. 🌸 Cycle-Synced Training (4 Phasen & Streak-Schutz)
- **Biologisch abgestimmtes Training (100 % lokal):** Optional im Onboarding oder in den Einstellungen aktivierbar (Zykluslänge `21–35 Tage`, Periodendauer `3–7 Tage`, Schnell-Button *„Periode hat heute begonnen“*).
- **4 Trainingsphasen im Dashboard & Kalender:**
  - 🔴 **Phase 1 — Menstruation:** Fokus auf Erholung, Technik & Mobility · **Automatischer Streak-Schutz** (erhöht das Rest-Day-Limit von 2 auf **4 Pausentage**) + Gym Buddy im entspannten Recovery-Zustand.
  - 🟢 **Phase 2 — Follikelphase:** Steigendes Östrogen & optimale Regeneration — ideal für Muskelaufbau und höheres Satzvolumen.
  - 🟡 **Phase 3 — Ovulation / Power-Peak:** Maximalkraft-Peak in der Zyklusmitte — grünes Licht für schwere Grundübungen und persönliche Rekorde (`🏆 PR`).
  - 🟣 **Phase 4 — Lutealphase (Anti-Frust-Schutz):** Erklärt transparent, dass 1–2 Wdh. weniger oder +1–2 kg durch hormonelle Wassereinlagerung völlig normal sind und kein Kraftverlust vorliegt.
- **Farbige Kalender-Phasenpunkte:** Zeigt im Trainingskalender unter jedem Tag den passenden Phasenpunkt zur langfristigen Trainingsplanung.

### 4. 🧭 Interaktive Live-Tab Guided-Tour, Ernährung & Lokales JSON-Backup
- **Interaktive 5-Schritte-Tour mit Live-Tab-Wechsel:** Führt Einsteiger live durch *Heute*, *Training*, *Verlauf/Kalender* und *Einstellungen* (inkl. Zurück/Weiter-Navigation, animierten Pill-Dots und Gym-Buddy-Begrüßung).
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
- **10 Unlockable Pets (50% Cute / 50% Progress) & 4 Evolution Stages:** Evolve companions from Stage 1 to Stage 4 (`0 / 100 / 300 / 600 XP`) with spoiler-free level-up surprises.
- **Free HSL Color Picker & Crisp SVG Accessories:** Customize your buddy with full Hue/Saturation/Lightness sliders, theme monochrome mode, and 3 accessory slots (*Head*, *Body*, *Hand*) featuring sharp SVG outlines and a synchronized paw grip.
- **Expressive Animations:** Friendly smile, 7-second wink, 2-hour post-workout proud breathing, and automatic night sleep (`10:00 PM – 6:00 AM`). Completely optional and can be hidden anytime.

### 3. 🌸 Cycle-Synced Training (4 Phases & Streak Protection)
- **4 Biological Training Phases:** Tracks **Phase 1 (Menstruation)**, **Phase 2 (Follicular)**, **Phase 3 (Ovulation / PR Peak)**, and **Phase 4 (Luteal)** with colored calendar phase dots and biological anti-frustration guidance.
- **Automatic Streak Protection:** Extends the workout streak rest-day buffer from 2 to **4 rest days** during Phase 1 and places your Gym Buddy into a gentle recovery mood.

### 4. 🧭 Live Guided Tour, Nutrition & Local JSON Backup
- **Interactive 5-Step Live-Tab Tour:** Automatically switches tabs live across *Today*, *Workout*, *History/Calendar*, and *Settings* with smooth cubic-bezier transitions.
- **100% Local & iOS Ready:** Full IndexedDB persistence (`navigator.storage.persist()`), native iOS Share Sheet support (`navigator.share`) for validated JSON backups, and bilingual DE/EN interface.

---

## 🗺️ Roadmap & Meilensteine

### ✅ Abgeschlossene Meilensteine (Shipped)
- [x] **Workout-Logger, Wochenplan-Generator & RIR-Autoregulation** *(inkl. `⇄ Swap` & PR-Erkennung)*
- [x] **Minimierbarer Vollbild-Pausentimer** *(schwebende Leiste + Service-Worker Push-Benachrichtigung)*
- [x] **7-Tage-Muskel-Balance-Netzdiagramm & Filter für dauerhafte Einschränkungen**
- [x] **Ernährungs- & Makro-Tracker, Vorrat, Einkaufsliste & Zweisprachige Rezepte (DE/EN)**
- [x] **Erweiterte Erinnerungen mit `.ics`-Kalender-Export** *(1 Woche, 1 Monat, 3 Monate, unbegrenzt)*
- [x] **Gym Buddy 2.0 Trainings-Begleiter** *(10 Pets in Cute/Progress, 4 Evolutionsstufen, freier HSL-Farbwähler, 3 Accessoire-Slots mit scharfen SVG-Outlines & Pfoten-Griff, Lächeln/Zwinkern, Post-Workout- & Nachtschlaf-Modus)*
- [x] **Cycle-Synced Training (4 Phasen)** *(Dashboard-Widget, Anti-Frust-Hinweise, farbige Kalender-Punkte & 4-Tage-Streak-Schutz in Phase 1)*
- [x] **Persönliches Onboarding mit Biologie-Check & sanfter Accordion-Animation**
- [x] **Interaktive 5-Schritte-Tour mit automatischem Live-Tab-Wechsel & UI/UX-Polish**
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
