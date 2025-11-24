const STORAGE_KEY = 'poc-ww2-db';

const Store = {
  // Read all items from LocalStorage
  getAll: () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const db = JSON.parse(raw);
      return db.items || [];
    } catch (e) {
      console.error("Database Error:", e);
      return [];
    }
  },

  // Find a specific item by ID
  getById: (id) => {
    const items = Store.getAll();
    return items.find(i => i.id === id);
  }
};
