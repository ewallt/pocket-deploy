const APP_CONFIG = {
  // --- LABELS & TEXT ---
  labels: {
    loading: "Decrypting...",
    backToHub: "← Return to Command",
    errorTitle: "Intelligence Not Found",
    errorBody: "The requested record does not exist in the local archives.",
    summaryHeader: "Strategic Summary"
  },

  // --- THEME ENGINE ---
  themes: {
    // 1. NAVY COMMAND (Default) - Deep Blue
    "navy": {
      name: "Navy Command",
      colors: {
        "--bg": "#0b1020",
        "--panel": "#111833",
        "--ink": "#e6ecff",
        "--muted": "#a7b0cc",
        "--brand": "#8bb9ff",
        "--accent": "#c0ffe1",
        "--border": "#26325b",
        "--chip": "#1a2347",
        "--bad": "#ff6b6b" // Red
      }
    },
    
    // 2. DESERT RATS (New) - Warm Brown/Sand
    "desert": {
      name: "Desert Rats",
      colors: {
        "--bg": "#292524",       // Warm Dark Brown
        "--panel": "#44403c",    // Stone Brown
        "--ink": "#f5f5f4",      // Stone White
        "--muted": "#a8a29e",    // Warm Grey
        "--brand": "#fbbf24",    // Sand Gold
        "--accent": "#38bdf8",   // Oasis Blue (Contrast)
        "--border": "#57534e",
        "--chip": "#57534e",
        "--bad": "#ef4444"
      }
    },

    // 3. ARCHIVES (Paper) - Sepia/Light Mode
    "paper": {
      name: "Archives",
      colors: {
        "--bg": "#f0ebd8",
        "--panel": "#e6e0cf",
        "--ink": "#2b2520",
        "--muted": "#6b5d52",
        "--brand": "#8a2be2",
        "--accent": "#d35400",
        "--border": "#d6cdb2",
        "--chip": "#dcd3bf",
        "--bad": "#c0392b"
      }
    },

    // 4. HIGH COMMAND (Refined) - Strictly Green & Gold
    "emerald": {
      name: "High Command",
      colors: {
        "--bg": "#022c22",       // Deepest Green
        "--panel": "#064e3b",    // Rich Forest
        "--ink": "#fffbeb",      // Cream/Pale Gold (No white)
        "--muted": "#d1fae5",    // Pale Green
        "--brand": "#ffd700",    // Pure Gold
        "--accent": "#f59e0b",   // Amber
        "--border": "#065f46",
        "--chip": "#064e3b",
        "--bad": "#d97706"       // Dark Amber (Instead of Red)
      }
    },

    // 5. ATLANTIC WALL (Steel) - Slate Grey
    "steel": {
      name: "Atlantic Wall",
      colors: {
        "--bg": "#111827",       // Gray 900
        "--panel": "#1f2937",    // Gray 800
        "--ink": "#f9fafb",      // Gray 50
        "--muted": "#9ca3af",    // Gray 400
        "--brand": "#38bdf8",    // Sky Blue
        "--accent": "#f472b6",   // Pinkish red
        "--border": "#374151",
        "--chip": "#374151",
        "--bad": "#f87171"
      }
    },

    // 6. CIPHER (New) - Terminal Black/Phosphor Green
    "cipher": {
      name: "Enigma Machine",
      colors: {
        "--bg": "#000000",       // Pure Black
        "--panel": "#111111",    // Off Black
        "--ink": "#e5e5e5",      // Dim White
        "--muted": "#666666",    // Dark Grey
        "--brand": "#22c55e",    // Terminal Green
        "--accent": "#4ade80",   // Bright Green
        "--border": "#333333",
        "--chip": "#222222",
        "--bad": "#ff0000"       // Stark Red
      }
    }
  },

  // --- VIEWER SECTIONS ---
  sections: [
    { key: "timeline", title: "Chronology", type: "timeline" },
    { key: "context", title: "Strategic Context", type: "list" },
    { key: "forces", title: "Opposing Forces", type: "list" },
    { key: "turningPoints", title: "Key Turning Points", type: "list" },
    { key: "outcomes", title: "Outcomes", type: "list" },
    { key: "significance", title: "Historical Significance", type: "list" },
    { key: "sources", title: "Intelligence Sources", type: "list" }
  ]
};
