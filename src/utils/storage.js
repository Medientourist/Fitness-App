// Speichern von Daten in sessionStorage
export const saveToSessionStorage = (key, value) => {
  try {
    sessionStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error saving data to session storage", error);
  }
};

// Laden von Daten aus sessionStorage
export const loadFromSessionStorage = (key) => {
  try {
    const data = sessionStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Error loading data from session storage", error);
    return null;
  }
};
