export const saveToLocalStorage = (key) => {
  const setItem = (value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error saving data to storage", error);
    }
  };
};

export const loadFromLocalStorage = (key) => {
  const getItem = () => {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error("Error loading data from storage", error);
      return null;
    }
  };
};
