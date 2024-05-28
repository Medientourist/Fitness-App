// Liste von Klassen
const classNamesList = [
  "block bg-medium text-white my-4 py-8 w-full rounded-3xl",
  "block bg-gradient-light-orange text-white my-4 py-8 w-full rounded-3xl",
  "block bg-gradient-bright-cyan text-white my-4 py-8 w-full rounded-3xl",
];

// Index der zuletzt verwendeten Klasse
let lastIndex = -1;

// Funktion, die eine Klasse aus der Liste zurückgibt
function getNextClass() {
  // Inkrementiere den Index
  lastIndex = (lastIndex + 1) % classNamesList.length;
  // Gib die nächste Klasse zurück
  return classNamesList[lastIndex];
}

export default getNextClass;
