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
        "--bad": "#ff6b6b"
      }
    },

    // 2. DESERT RATS - Warm Brown/Sand
    "desert": {
      name: "Desert Rats",
      colors: {
        "--bg": "#292524",       // Warm Dark Brown
        "--panel": "#44403c",    // Stone Brown
        "--ink": "#f5f5f4",      // Stone White
        "--muted": "#a8a29e",    // Warm Grey
        "--brand": "#fbbf24",    // Sand Gold
        "--accent": "#38bdf8",   // Oasis Blue
        "--border": "#57534e",
        "--chip": "#57534e",
        "--bad": "#ef4444"
      }
    },

    // 3. ARCHIVES - Sepia/Light Mode
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

    // 4. HIGH COMMAND (Strict Green & Gold)
    "emerald": {
      name: "High Command",
      colors: {
        "--bg": "#022c22",       // Deepest Forest (Warm base)
        "--panel": "#14532d",    // Green 900
        "--ink": "#fef08a",      // Pale Gold (Yellow 200) - No White
        "--muted": "#bef264",    // Lime 300 - No Blue
        "--brand": "#ffd700",    // Pure Gold
        "--accent": "#eab308",   // Darker Gold
        "--border": "#365314",   // Olive 900
        "--chip": "#1a2e05",     // Deep Olive
        "--bad": "#d97706"       // Amber 600
      }
    },

    // 5. ATLANTIC WALL - Steel/Slate Grey
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

    // 6. ENIGMA MACHINE - Terminal Black/Green
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
        "--bad": "#ff0000"
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
