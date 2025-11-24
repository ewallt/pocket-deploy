const STORAGE_KEY = 'poc-ww2-db';

const Store = {
  // 1. Read all items
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

  // 2. Read single item (Restored)
  getById: (id) => {
    const items = Store.getAll();
    return items.find(i => i.id === id);
  },

  // 3. Save new item
  save: (newItem) => {
    const items = Store.getAll();
    
    // Check for ID collision
    if (items.find(i => i.id === newItem.id)) {
      // Simple fallback: append random suffix
      newItem.id = newItem.id + '-' + Math.random().toString(36).substr(2, 5);
    }

    items.push(newItem);
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ items: items }));
    console.log(`Saved item: ${newItem.meta.title}`);
  },

  // 4. Delete item
  delete: (id) => {
    const items = Store.getAll();
    const filtered = items.filter(i => i.id !== id);
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ items: filtered }));
    console.log(`Deleted item: ${id}`);
  }
};
