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

Projektstruktur

Die Projektstruktur enthält folgende Hauptverzeichnisse und Dateien:

Fitness-App/
 ── src/
    ├── assets/             # Statische Ressourcen wie Bilder und Icons
    ├── components/         # Wiederverwendbare UI-Komponenten
    ├── pages/              # Hauptseiten wie Startseite, Trainingseinheit, Profilseite
    ├── queries/              # Haupteinstiegspunkt der App
    └── utils/            # Einstiegspunkt für das Rendering in React


