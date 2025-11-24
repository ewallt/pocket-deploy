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

  // Save a NEW item
  save: (newItem) => {
    const items = Store.getAll();
    
    // Prevent ID Collisions (Simple check)
    if (items.find(i => i.id === newItem.id)) {
      // Fallback: Append a random string if ID exists
      newItem.id = newItem.id + '-' + Math.random().toString(36).substr(2, 5);
    }

    items.push(newItem);
    
    // Commit to storage
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ items: items }));
    console.log(`Saved item: ${newItem.meta.title}`);
  },

  // Delete an item by ID
  delete: (id) => {
    const items = Store.getAll();
    const filtered = items.filter(i => i.id !== id);
    
    // Write back to storage
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ items: filtered }));
    console.log(`Deleted item: ${id}`);
  }
};
