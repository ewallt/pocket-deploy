const RENDERERS = {
  // Standard bullet list
  list: (items) => {
    if (!items || !Array.isArray(items) || items.length === 0) {
      return '<div class="list-item" style="font-style:italic; opacity:0.7">No data available for this section.</div>';
    }
    return items.map(txt => `<div class="list-item">${txt}</div>`).join('');
  },

  // Vertical Timeline
  timeline: (items) => {
    if (!items || !Array.isArray(items) || items.length === 0) return '';
    
    const events = items.map(evt => `
      <div class="timeline-item">
        <strong>${evt.label}:</strong> ${evt.text}
      </div>
    `).join('');
    
    return `<div class="timeline">${events}</div>`;
  },

  // Source Citations
  source: (items) => {
    if (!items || !Array.isArray(items) || items.length === 0) return '';
    return items.map(txt => `<div class="source">${txt}</div>`).join('');
  }
};
