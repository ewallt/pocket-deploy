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
  },

  // Delete an item by ID
  delete: (id) => {
    const items = Store.getAll();
    const filtered = items.filter(i => i.id !== id);
    
    // Write back to storage
    // We maintain the root { items: [] } structure
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ items: filtered }));
    console.log(`Deleted item: ${id}`);
  }
};
