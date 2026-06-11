# 🗺️ React-Entwicklungs-Roadmap: Pomodoro-App

Diese Roadmap dient als strukturierter Leitfaden für die schrittweise Entwicklung der Pomodoro-Anwendung in React. Der Fokus liegt auf einem modularen Aufbau ("Baustein-Prinzip"), der besonders für Anfänger geeignet ist.

---

## 🛠️ Phase 1: Projekt-Setup & Ordnerstruktur
**Ziel:** Die Werkzeuge bereitlegen und den Arbeitsplatz einrichten.

- [ ] **Schritt 1:** Erstelle ein neues React-Projekt (z. B. mit Vite).
- [ ] **Schritt 2:** Bereite die Ordnerstruktur vor. Erstelle im Ordner `src` einen Unterordner namens `components`.
- [ ] **Schritt 3:** Setze die Hintergrundfarbe für die gesamte Anwendung in deiner globalen CSS-Datei auf das dunkle Blau aus dem Screenshot.

---

## 🎨 Phase 2: Die UI-Bausteine (Statische Komponenten)
**Ziel:** Nur das Aussehen bauen. Noch keine Funktionen, keine Klicks, keine veränderlichen Zahlen.

### Abteilung A: Der Header
- [ ] **Schritt 4:** Erstelle eine Komponente `Header.jsx`.
- [ ] **Schritt 5:** Füge den Schriftzug „focusApp“ links und Platzhalter für die Icons (z. B. Einstellungen) rechts hinzu.
- [ ] **Schritt 6:** Positioniere die Elemente mit Flexbox (Spatium dazwischen), sodass sie am oberen Bildschirmrand sitzen.

### Abteilung B: Die Timer-Anzeige (Das Herzstück)
- [ ] **Schritt 7:** Erstelle eine Komponente `TimerDisplay.jsx`.
- [ ] **Schritt 8:** Schreibe die Zeit „25:00“ als festen Text (statisch) in ein großes Textfeld.
- [ ] **Schritt 9:** Füge den kleinen Text „DEEP FOCUS SESSION“ mit dem grünen Punkt direkt darunter hinzu.

### Abteilung C: Die Kontroll-Buttons & Modi
- [ ] **Schritt 10:** Erstelle eine Komponente `TimerControls.jsx`.
- [ ] **Schritt 11:** Baue die zwei großen Buttons: „Start“ (grüner Hintergrund) und „Reset“ (transparent mit Rahmen).
- [ ] **Schritt 12:** Baue die drei Modus-Buttons direkt darunter: „Pomodoro“, „Short Break“ und „Long Break“.

### Abteilung D: Die Statistik-Karten (Das Dashboard)
- [ ] **Schritt 13:** Erstelle eine Komponente `StatsCard.jsx`, die du wiederverwenden kannst.
- [ ] **Schritt 14:** Nutze diese Komponente zweimal in einer übergeordneten Dashboard-Komponente:
  - **Karte 1:** „Daily Goal“ mit dem Text „4/8 Sessions“ und dem Fortschrittsbalken.
  - **Karte 2:** „Today's Focus“ mit „1h 40m“ und dem grünen Trend-Text (+12% vs yesterday).

### Abteilung E: Das Gesamtbild zusammenfügen
- [ ] **Schritt 15:** Importiele alle diese kleinen Bausteine in deine Hauptdatei (`App.jsx`).
- [ ] **Schritt 16:** Nutze CSS (Flexbox oder Grid), um die Komponenten zentriert untereinander anzuordnen, genau wie auf dem Bild.

---

## 🧠 Phase 3: Die Logik-Bausteine (Zustand & Funktion)
**Ziel:** Die App interaktiv machen. Hier nutzt du React-Zustände (`useState` und `useEffect`).

### Abteilung F: Die Modus-Umschaltung
- [ ] **Schritt 17:** Definiere in `App.jsx` einen Zustand für den aktuellen Modus (z. B. `"pomodoro"`, `"short"`, `"long"`).
- [ ] **Schritt 18:** Verknüpfe die Modus-Buttons (Schritt 12) so, dass das Klicken eines Buttons den Zustand ändert.
- [ ] **Schritt 19:** Sorge dafür, dass der ausgewählte Button optisch hervorgehoben wird (aktiver Zustand).

### Abteilung G: Die Timer-Logik (Sekunden runterzählen)
- [ ] **Schritt 20:** Erstelle einen Zustand für die verbleibende Zeit in Sekunden (Start bei 1500 Sekunden für 25 Minuten).
- [ ] **Schritt 21:** Erstelle einen Zustand für den Timer-Status (läuft oder läuft nicht).
- [ ] **Schritt 22:** Verknüpfe den „Start“-Button, um den Status auf „läuft“ zu setzen. Der Text soll sich dann zu „Pause“ ändern.
- [ ] **Schritt 23:** Nutze einen Effekt (`useEffect`), der jede Sekunde eine Sekunde von der verbleibenden Zeit abzieht, wenn der Status auf „läuft“ steht.
- [ ] **Schritt 24:** Schreibe eine Hilfsfunktion, die die Sekunden wieder in das Format „MM:SS“ umrechnet, damit deine `TimerDisplay` (Schritt 8) die echten Zahlen anzeigt.
- [ ] **Schritt 25:** Verknüpfe den „Reset“-Button, um die Zeit wieder auf den Anfangswert des aktuellen Modus zurückzusetzen und den Timer zu stoppen.

### Abteilung H: Das Ziel- & Statistik-System
- [ ] **Schritt 26:** Erstelle einen Zustand für die heute geschafften Sessions (Start bei 4).
- [ ] **Schritt 27:** Erstelle eine Logik, die prüft, wann der Timer 00:00 erreicht. Wenn das passiert, spiele einen Ton ab und erhöhe die geschafften Sessions um +1.
- [ ] **Schritt 28:** Verknüpfe diese Zahl mit deiner Statistik-Karte (Schritt 14), sodass sich der Text (z. B. 5/8) und der Ladebalken automatisch anpassen.
