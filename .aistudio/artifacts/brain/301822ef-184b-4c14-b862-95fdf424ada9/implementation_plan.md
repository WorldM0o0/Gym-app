# Gym App – Alltags-Komfort & Bedienfluss-Verfeinerung (Ohne Feature-Ballast)

Dieses Update macht die tägliche Nutzung der Gym App spürbar ruhiger, schneller und einhändig angenehmer – ohne neue Menüs oder zusätzliche Funktionen einzuführen –, indem bestehende Suchlisten, Eingabemasken, Karten-Details und Lösch-Abläufe gezielt entschlackt werden.

## User Review & Critical Decisions

> [!IMPORTANT]
> Es werden **keine zusätzlichen Tabs, Menüs oder Einstellungs-Schalter** hinzugefügt. Alle Verbesserungen greifen direkt in den vorhandenen Ansichten, erhalten 100 % der bestehenden Daten und lassen die Offline-Geschwindigkeit unangetastet.

- **Bestätigte Entscheidung 1 (Schwerpunkt: Suchen in Listen wie Übungen & Lebensmitteln)**:
  - Suchfelder erhalten einen direkten `×`-Leeren-Button (44×44 px Touch-Ziel), fehlertolerante Wortteil-Suche (z. B. findet `"hähnchen brust"` auch `"Hähnchenbrustfilet"`) und zeigen ohne Suchbegriff automatisch **zuletzt & am häufigsten genutzte Einträge** ganz oben an.
  - Kompakte Ein-Tipp-Filterchips (z. B. nach Muskelgruppe bei der Übungsauswahl) reduzieren langes Scrollen und Tippen am Smartphone.
- **Bestätigte Entscheidung 2 (Sekundäre Details einklappen & Textballast reduzieren)**:
  - Lange Erklärungstexte, optionale Felder (wie Notizen/Datum beim Gewichts-Eintrag oder Zielrechner-Hinweise) und sekundäre Metadaten werden standardmäßig eingeklappt oder auf eine ruhige Zeile reduziert und öffnen sich erst bei Bedarf.
- **Bestätigte Entscheidung 3 (Schnellere Eingabe im Training, bei Ernährung & Gewicht)**:
  - **Training**: Ein-Tipp-Übernahme der letzten Satzwerte sowie griffige `+`/`-`-Schritt-Tasten für Gewicht und Wiederholungen direkt an der aktiven Eingabe.
  - **Ernährung & Gewicht**: Schnell-Chips für typische Portionsgrößen (`50 g`, `100 g`, `150 g`, `250 g` bzw. `0.5`, `1`, `1.5`, `2` Portionen) beim Mahlzeiten-Eintrag sowie Vorbelegung/Schnell-Stepper (`±0,1 kg`) beim täglichen Wiegen.
- **Bestätigte Entscheidung 4 (Sanfte Undo-Toasts statt Bestätigungs-Dialogen)**:
  - Alltägliche Lösch-Aktionen (z. B. Mahlzeit aus dem Tagesplan, Gewichtseintrag, Einkaufslisten-Punkt oder Lebensmittel/Rezept) entfernen den Eintrag sofort flüssig und blenden unten im Daumenbereich für 5 Sekunden einen dezenten **„Gelöscht · Rückgängig"**-Hinweis ein, statt den Nutzer mit einem modalen Dialogfenster zu unterbrechen.

---

## 1. Overview & Core Concept

- **Was das Update liefert**: Eine durchgängige Entlastung bei den häufigsten Handgriffen im Alltag – schnelleres Finden in langen Übungs- und Lebensmittellisten, weniger Text- und Karten-Unruhe auf dem Bildschirm, direkte Schnell-Tasten bei Zahleneingaben und unterbrechungsfreies Korrigieren per „Rückgängig"-Toast.
- **Zielgruppe & Nutzungskontext**: Einhand-Bedienung am Smartphone während der Satzpause im Gym oder beim schnellen Eintragen von Mahlzeiten und Körpergewicht im Alltag.
- **Mehrwert**: Deutlich weniger Tippen auf der Smartphone-Tastatur, kürzere Listenwege und eine aufgeräumte Oberfläche, die nur das zeigt, was im jeweiligen Moment gebraucht wird.

---

## 2. User Experience & Visual Design

### Key User Flows

1. **Intelligente Suche in Übungs- & Lebensmittellisten**:
   - **Zuletzt & Häufig zuerst**: Öffnet man das Hinzufügen einer Mahlzeit oder Übung, stehen die zuletzt verwendeten Einträge direkt ganz oben – oft reicht ein einziger Tipp ganz ohne Tastatur.
   - **Komfort-Suchfeld mit Schnell-Reset**: Jedes Suchfeld besitzt rechts einen gut erreichbaren `×`-Button zum sofortigen Leeren der Eingabe mit einem Daumentipp sowie eine fehlertolerante Mehrwort-Suche (ignoriert Groß-/Kleinschreibung, Bindestriche und Wortreihenfolge).
   - **Muskelgruppen-Schnellfilter bei Übungen**: Über der Übungsliste erlaubt eine horizontale, einzeilige Leiste das Filtern nach Muskelgruppe (*Alle · Brust · Rücken · Beine · Schultern · Arme · Bauch*), ohne dass getippt werden muss.

2. **Aufgeräumte Karten & Eingeklappte Sekundär-Details**:
   - **Gewichts-Ansicht**: Die Eingabekarte zeigt standardmäßig nur das große Gewichtsfeld (mit dem letzten Wert als Orientierung und schnellen `-0,1` / `+0,1`-Schritten) und den Speichern-Button. Datum (standardmäßig *Heute*) und optionale Notiz sind hinter einem ruhigen *„Datum / Notiz anpassen"* zusammengefasst. Der Zielrechner darunter ist als einklappbare Karte gestaltet, damit das Verlaufsdiagramm sofort im Blick liegt.
   - **Lebensmittel-, Rezept- & Übungs-Zeilen**: Statt mehrzeiliger Textblöcke stehen Name und wichtigste Kennzahl (z. B. `kcal / 100 g` oder `Muskelgruppe · Gerät`) ruhig in einer klar gegliederten Zeile mit unboxten `·`-Trennzeichen. Lange erklärende Hinweistexte unter Formularen werden gestrafft oder als dezente Info-Zeile dargestellt.

3. **Schnell-Eingabe bei Training & Ernährung**:
   - **Mahlzeiten eintragen**: Sobald ein Lebensmittel oder Rezept angetippt wird, erscheint neben dem Mengenfeld eine Zeile mit Schnell-Auswahl-Buttons (`50 g`, `100 g`, `150 g`, `200 g`, `250 g` bei Gramm/ml bzw. `½`, `1`, `1½`, `2` bei Stück/Portionen), sodass die Tastatur meist geschlossen bleiben kann.
   - **Satz-Eingabe im Training**: Direkte `+`/`-`-Feinschritte an Gewicht und Wiederholungen mit mindestens 44×44 px Touch-Fläche erleichtern die Bedienung mit verschwitzten Händen zwischen zwei Sätzen.

4. **Sanfte „Rückgängig"-Leiste (Undo-Toast) statt Bestätigungs-Popups**:
   - Tippt man beim Tagesplan, Gewichtstagebuch oder in der Lebensmittel-/Rezeptliste auf Löschen, verschwindet der Eintrag sofort ohne störendes Popup.
   - Am unteren Bildschirmrand (direkt über der Tab-Leiste im natürlichen Daumenbereich) erscheint für 5 Sekunden eine dunkle, gläserne Hinweis-Leiste mit **„Eintrag entfernt" → [Rückgängig]**, die den Vorgang bei versehentlichem Tippen verlustfrei wiederherstellt.

### Visual Identity & Theme
- **Aesthetic Direction**: *Calm Athletic Precision* – großzügiger Weißraum, reduzierte Textdichte, klare visuelle Fokuspunkte pro Bildschirm.
- **Color Palette & Mood (60-30-10 Verteilung)**:
  - **60 % Dominant Canvas (`--color-surface`)**: Ruhiger, dunkler oder heller Hintergrund gemäß gewähltem Theme.
  - **30 % Structural Surfaces (`--color-surface-container`, `--color-line`)**: Flache Karten mit feiner 1px-Haarlinie, ohne verschachtelte Rahmen-in-Rahmen-Boxen.
  - **10 % Accent Budget (`--color-primary`)**: Gezielt für den primären Aktionsbutton, aktive Filter-Auswahl und den „Rückgängig"-Link im Toast.
- **Typography & Hierarchy**:
  - **UI (`Instrument Sans`)**: Einzeilige Titel und Labels (`truncate`), Verzicht auf doppelte Überschriften und lange Hilfsabsätze.
  - **Zahlen & Einheiten (`JetBrains Mono` + `tabular-nums`)**: Ruhige, einheitlich ausgerichtete Zahlenwerte mit feinen Punkt-Trennern (`·`).
- **Touch-Ergonomie & Motion**:
  - Alle interaktiven Elemente (Lösch-Icons, `+`/`-`-Stepper, Suchfeld-Reset, Filter-Buttons) besitzen mindestens $44 \times 44\text{px}$ Tippfläche.
  - Ein-/Ausklappen und Toast-Einblendungen laufen über flüssige `transform`/`opacity`-Übergänge ($\le 180\text{ms}$).

---

## 3. Key Product Decisions & Trade-Offs

- **Entscheidung 1: Verzögerte Löschung bzw. sofortige Wiederherstellung per Undo-Toast statt Bestätigungs-Modal**
  - *Gewählter Ansatz*: Beim Löschen von Einträgen wird der Zustand im Speicher gemerkt und ein 5-Sekunden-Undo-Banner eingeblendet; ein Tipp auf *Rückgängig* stellt den Datensatz exakt wieder her. (Nur bei unwiderruflichen Komplett-Resets in den Einstellungen bleibt der Sicherheitsdialog bestehen.)
  - *Warum*: Spart bei jedem Löschvorgang einen zusätzlichen Dialog-Tipp und einen Blickwechsel in die Bildschirmmitte, schützt aber gleichzeitig zuverlässig vor Fehltipps.
- **Entscheidung 2: Intelligente Standard-Sortierung (Zuletzt/Häufig genutzt) statt neuer Favoriten-Menüs**
  - *Gewählter Ansatz*: Aus den ohnehin lokal vorhandenen Mahlzeiten- und Trainings-Einträgen wird automatisch abgeleitet, welche Lebensmittel und Übungen zuletzt genutzt wurden, und diese werden bei leerem Suchfeld oben eingereiht.
  - *Warum*: Der Nutzer muss nichts manuell pflegen oder konfigurieren – die App passt sich von selbst an die persönlichen Gewohnheiten an.
- **Entscheidung 3: Progressive Disclosure (Einklappen sekundärer Felder) statt getrennter „Profi/Einfach"-Modi**
  - *Gewählter Ansatz*: Optionale Angaben (wie abweichendes Datum, Notiz oder Ziel-Prognosen) bleiben genau dort, wo sie sind, starten aber platzsparend eingeklappt.
  - *Warum*: Keine Funktion geht verloren, aber die tägliche Standard-Aktion schrumpft auf ein Minimum an sichtbaren Feldern.

---

## 4. Technical Architecture & Data Strategy *(Technical Reference)*

### Architecture & Component Diagram

```
┌─────────────────────────────────────────────────────────────────────────┐
│                   Lokale Nutzungsdaten (IndexedDB)                      │
│  workouts · exercises · mealPlanEntries · foods · recipes · weight      │
└─────────────────┬─────────────────────────────────────┬─────────────────┘
                  │                                     │
                  ▼                                     ▼
┌───────────────────────────────────┐ ┌───────────────────────────────────┐
│   Smart Search & Recency Engine   │ │    Non-Blocking Undo Controller   │
│  • Berechnet zuletzt/häufig       │ │  • Hält gelöschten Snapshot (5s)  │
│    genutzte Foods & Exercises     │ │  • Zeigt Daumen-Toast über Nav    │
│  • Mehrwort- & Token-Filterung    │ │  • Stellt Datensatz bei Tipp auf  │
│  • Ein-Tipp-Reset & Muskel-Chips  │ │    „Rückgängig" sofort wieder her │
└─────────────────┬─────────────────┘ └─────────────────┬─────────────────┘
                  │                                     │
                  ▼                                     ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                Entschlackte Ansichten & Schnell-Eingaben                │
│  • Training: Satz-Stepper (±Gewicht/Wdh) & Schnell-Filter bei Übungen   │
│  • Ernährung: Portions-Schnellchips (50g/100g/150g · ½/1/2 Portionen)   │
│  • Gewicht: Kompakte 1-Zeilen-Eingabe (±0,1 kg) + einklappbare Details  │
└─────────────────────────────────────────────────────────────────────────┘
```

### Data Model & State
- **Keine Datenbank-Migration erforderlich**:
  - Die Zuletzt-genutzt-Sortierung für Lebensmittel und Übungen wird direkt zur Laufzeit aus den vorhandenen `mealPlanEntries` und `workouts`-Historien berechnet.
  - Der Undo-Mechanismus hält das vorübergehend entfernte Objekt im Speicher und schreibt es bei Betätigung von *Rückgängig* über die bestehende IndexedDB-Transaktion zurück.

### Interactive Component & State Mapping
- **Such- & Auswahllisten (Übungen, Lebensmittel, Rezepte)**:
  - Such-Input mit integriertem Clear-Button (`×`), automatischer Token-Zerlegung (`query.trim().toLowerCase().split(/\s+/)`) und Recency-Sortierung im ungefilterten Zustand.
  - Horizontale Muskelgruppen-Filterleiste in der Übungsauswahl und im Übungs-Manager.
- **Schnell-Eingabe-Steuerungen**:
  - Portions-Schnellwahl-Buttons im Mahlzeiten-Dialog setzen den Mengenwert sofort und erlauben direktes Speichern.
  - Kompakte Gewichtseingabe übernimmt auf Wunsch mit einem Tipp den letzten Messwert $\pm 0{,}1\text{ kg}$ und klappt Datums-/Notizfelder sowie den Zielrechner erst bei Klick auf.
- **Globaler Undo-Toast**:
  - Schwebendes, barrierefreies Status-Banner (`role="status"`) oberhalb der unteren Navigationsleiste mit 5-Sekunden-Timer und direktem Wiederherstellungs-Handler.
