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
    // 2. FIELD OPS (Army) - Olive/Tactical
    "field": {
      name: "Field Operations",
      colors: {
        "--bg": "#1a1c10",
        "--panel": "#26291b",
        "--ink": "#e8e6d1",
        "--muted": "#9ba188",
        "--brand": "#d4e157",
        "--accent": "#ff9800",
        "--border": "#3d422e",
        "--chip": "#323824",
        "--bad": "#e57373"
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
    // 4. HIGH COMMAND - Emerald Green & Gold
    "emerald": {
      name: "High Command",
      colors: {
        "--bg": "#022c22",       // Deepest Green
        "--panel": "#064e3b",    // Rich Forest
        "--ink": "#ecfdf5",      // Mint White
        "--muted": "#6ee7b7",    // Soft Green
        "--brand": "#fbbf24",    // Gold
        "--accent": "#f59e0b",   // Amber
        "--border": "#065f46",
        "--chip": "#064e3b",
        "--bad": "#ef4444"
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
        "--brand": "#38bdf8",    // Sky Blue (Luftwaffe feel)
        "--accent": "#f472b6",   // Pinkish red
        "--border": "#374151",
        "--chip": "#374151",
        "--bad": "#f87171"
      }
    },
    // 6. EASTERN FRONT - Crimson/Dark
    "crimson": {
      name: "Eastern Front",
      colors: {
        "--bg": "#2a0a0a",       // Black/Red mix
        "--panel": "#450a0a",    // Deep Blood Red
        "--ink": "#ffe4e6",      // Rose White
        "--muted": "#fca5a5",    // Pale Red
        "--brand": "#ef4444",    // Soviet Red
        "--accent": "#fcd34d",   // Star Gold
        "--border": "#7f1d1d",
        "--chip": "#7f1d1d",
        "--bad": "#991b1b"
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
