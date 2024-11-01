# Fitness-App

**Projektbeschreibung**  
Die **Fitness-App** ist ein Übungsprojekt ohne Anspruch auf vollständige Nutzbarkeit, das grundlegende Funktionen einer Fitness-App simuliert.
Benutzer können Test-Trainings durchführen und deren Fortschritt verfolgen. Die App wurde mit **React** und **Tailwind CSS** entwickelt.

## Vorschau

![Projektvorschau](URL-zum-Bild)  
Bilder noch einzufügen.

## Inhaltsverzeichnis

- [Über das Projekt](#über-das-projekt)
- [Features](#features)
- [Technologien](#technologien)
- [Installation](#installation)
- [Projektstruktur](#projektstruktur)

---

## Über das Projekt

Die **Fitness-App** wurde zu Übungszwecken erstellt und basiert konzeptionell auf gängigen Fitness-Apps. Sie bietet eine Navigation durch verschiedene Bereiche:

- **Startseite**: Zeigt das nächste Training der aktuellen Trainingseinheit an.
- **Übersicht der Trainingseinheiten**: Listet alle Trainingseinheiten auf, die ausgewählt und gestartet werden können.
- **Profilseite**: Ermöglicht das Anlegen eines Namens und Profilbilds sowie das Anzeigen des Fortschritts innerhalb der aktiven Trainingseinheit.

### Funktionen im Detail:

1. **Trainingseinheiten**: Eine scrollbare Liste ermöglicht das Starten und Verwalten der einzelnen Einheiten. Jede Einheit zeigt:
   - Dauer in Wochen
   - Schwierigkeitsgrad und Schwerpunkt
   - Fortschritt innerhalb der Einheit
   - Startoption für das Training

2. **Trainingsansicht**: Detaillierte Übersicht über den Ablauf des Trainings, darunter:
   - Beschreibung der Trainingseinheit
   - Visuelle Darstellung des Trainingsplans (z. B. durch Diagramme)
   - Fortschrittsanzeige für jeden Trainingstag und die gesamte Einheit

3. **Übungen und Timer**:
   - Übungen sind als Wiederholungen oder Zeitblöcke (mit Timer) konfiguriert.
   - Navigation zwischen den Übungen und eingebauten Pausenblöcken, die ebenfalls über Timer verfügen.
   - Fortschritt wird durch eine Punkteanzeige dargestellt.

4. **Trainingseinheit abschließen**: Nach Abschluss des letzten Trainings einer Einheit wird der Fortschritt zurückgesetzt, um neu starten zu können.

## Features

- 🏋️ Test-Trainings mit Fortschrittsverfolgung
- 📊 Diagramme und Fortschrittsanzeige für Trainingseinheiten
- ⏳ Timer und Pausenfunktion für Übungen
- 🎨 Dynamische und responsive Benutzeroberfläche mit Tailwind CSS

## Technologien

Die Fitness-App wurde mit den folgenden Technologien entwickelt:

- [React](https://reactjs.org/) - Für die UI und Komponentenstruktur
- [Tailwind CSS](https://tailwindcss.com/) - Für ein flexibles und responsives Design
- [Apollo Client](https://www.apollographql.com/docs/react/) - Für die Anbindung an GraphQL
- [GraphQL]

---

## Voraussetzungen

Stelle sicher, dass du die folgenden Tools installiert hast:
- **Git**: Zum Klonen des Repositories.
- **Node.js**: Um JavaScript-Umgebungen zu erstellen.
- **Yarn**: Als Paketmanager.

## Installation
   ### Linux
   1. Falls Git noch nicht installiert ist, kannst du es mit folgendem Befehl installieren:
      sudo apt install git
   2. Klone das Repository:
      git clone https://github.com/Medientourist/Fitness-App.git
   3. Falls node noch nicht installiert ist, kannst du es mit folgendem Befehl installieren:
      Prüfe vorher mit
      node -v
      Ansonsten:
      sudo apt install nodejs
   4. sudo apt update
   5. sudo apt install yarn
   6. cd Fitness-App
   7. yarn install
   8. yarn dev

   ### Windows
   1. Lade den Git-Installer für Windows von der offiziellen Website herunter: [Git für Windows](https://git-scm.com/download/win) und folge den Installationsanweisungen.
      Nach der Installation kannst du die Eingabeaufforderung oder PowerShell verwenden, um Git zu überprüfen:
      git --version
   2. Lade die neueste Version von Node.js von der offiziellen Website herunter: Node.js und führe den Installer aus.
      Prüfe vorher mit
      node -v
   3. npm install --global yarn
   4. yarn -v
   5. Klone das Repository:
      git clone https://github.com/Medientourist/Fitness-App.git
   6. cd Fitness-App
   7. yarn install
   8. yarn dev
      



Projektstruktur

Die Projektstruktur enthält folgende Hauptverzeichnisse und Dateien:

Fitness-App/
 ── src/
    ├── assets/             # Statische Ressourcen wie Bilder und Icons
    ├── components/         # Wiederverwendbare UI-Komponenten
    ├── pages/              # Hauptseiten wie Startseite, Trainingseinheit, Profilseite
    ├── queries/              # Haupteinstiegspunkt der App
    └── utils/            # Einstiegspunkt für das Rendering in React


