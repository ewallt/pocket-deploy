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
    // 1. NAVY COMMAND (Restored Original) - Deep Blue
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

    // 2. DESERT RATS (Kept Optimized) - Warm Stone/Mocha
    "desert": {
      name: "Desert Rats",
      colors: {
        "--bg": "#292524",       // Stone 900
        "--panel": "#44403c",    // Stone 700
        "--ink": "#f5f5f4",      // Warm White
        "--muted": "#a8a29e",    // Warm Grey
        "--brand": "#fbbf24",    // Amber Gold
        "--accent": "#d97706",   // Deep Amber
        "--border": "#57534e",
        "--chip": "#57534e",
        "--bad": "#f87171"
      }
    },

    // 3. ARCHIVES (Kept Optimized) - Soft Light Mode
    "paper": {
      name: "Archives",
      colors: {
        "--bg": "#f5f5f4",       // Stone 100
        "--panel": "#e7e5e4",    // Stone 200
        "--ink": "#292524",      // Stone 900
        "--muted": "#57534e",    // Stone 600
        "--brand": "#0f766e",    // Teal Ink
        "--accent": "#d97706",   // Orange
        "--border": "#d6d3d1",
        "--chip": "#e7e5e4",
        "--bad": "#b91c1c"
      }
    },

    // 4. HIGH COMMAND (Restored) - Emerald/Mint/Gold
    "emerald": {
      name: "High Command",
      colors: {
        "--bg": "#022c22",       // Deepest Green
        "--panel": "#064e3b",    // Rich Forest
        "--ink": "#ecfdf5",      // Mint White (Readable)
        "--muted": "#6ee7b7",    // Soft Green
        "--brand": "#fbbf24",    // Gold
        "--accent": "#f59e0b",   // Amber
        "--border": "#065f46",
        "--chip": "#064e3b",
        "--bad": "#ef4444"
      }
    },

    // 5. LUFTWAFFE (Kept Optimized) - Slate Blue/Grey
    "luftwaffe": {
      name: "Luftwaffe",
      colors: {
        "--bg": "#1e293b",       // Slate 800
        "--panel": "#334155",    // Slate 700
        "--ink": "#f1f5f9",      // Slate 100
        "--muted": "#cbd5e1",    // Slate 300
        "--brand": "#a5f3fc",    // Electric Ice
        "--accent": "#22d3ee",   // Cyan
        "--border": "#475569",
        "--chip": "#475569",
        "--bad": "#f87171"
      }
    },

    // 6. ENIGMA MACHINE (Restored Original) - Pure Black/Green
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
