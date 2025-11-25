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
    // 1. NAVY COMMAND (Blue - User Favorite for Trust/Focus)
    "navy": {
      name: "Navy Command",
      colors: {
        "--bg": "#0f172a",       // Slate 900 (Not pure black)
        "--panel": "#1e293b",    // Slate 800
        "--ink": "#e2e8f0",      // Slate 200
        "--muted": "#94a3b8",    // Slate 400
        "--brand": "#38bdf8",    // Sky Blue
        "--accent": "#0ea5e9",   // Ocean Blue
        "--border": "#334155",
        "--chip": "#1e293b",
        "--bad": "#ef4444"
      }
    },

    // 2. DESERT RATS (Warm Earth - 2025 "Mocha" Trend)
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

    // 3. ARCHIVES (Light Mode - Best for Long Reading)
    "paper": {
      name: "Archives",
      colors: {
        "--bg": "#f5f5f4",       // Stone 100 (Not harsh white)
        "--panel": "#e7e5e4",    // Stone 200
        "--ink": "#292524",      // Stone 900 (Softer than black)
        "--muted": "#57534e",    // Stone 600
        "--brand": "#0f766e",    // Teal (Classic Ink)
        "--accent": "#d97706",   // Orange highlight
        "--border": "#d6d3d1",
        "--chip": "#e7e5e4",
        "--bad": "#b91c1c"
      }
    },

    // 4. HIGH COMMAND (Your Request: Strict Green/Gold)
    "emerald": {
      name: "High Command",
      colors: {
        "--bg": "#022c22",       // Deepest Green
        "--panel": "#14532d",    // Green 900
        "--ink": "#fef08a",      // Pale Gold (Yellow 200)
        "--muted": "#bef264",    // Lime 300
        "--brand": "#ffd700",    // Pure Gold
        "--accent": "#eab308",   // Darker Gold
        "--border": "#365314",   // Olive 900
        "--chip": "#1a2e05",     // Deep Olive
        "--bad": "#d97706"       // Amber
      }
    },

    // 5. LUFTWAFFE (Cool Grey/Steel - Better than flat grey)
    "luftwaffe": {
      name: "Luftwaffe",
      colors: {
        "--bg": "#1e293b",       // Slate 800
        "--panel": "#334155",    // Slate 700
        "--ink": "#f1f5f9",      // Slate 100
        "--muted": "#cbd5e1",    // Slate 300
        "--brand": "#a5f3fc",    // Cyan 200 (Electric Ice)
        "--accent": "#22d3ee",   // Cyan 400
        "--border": "#475569",
        "--chip": "#475569",
        "--bad": "#f87171"
      }
    },

    // 6. RED ARMY (Deep Maroon - "Luxury Dark Mode")
    "crimson": {
      name: "Red Army",
      colors: {
        "--bg": "#2a0a0a",       // Very Dark Red/Black
        "--panel": "#450a0a",    // Deep Maroon
        "--ink": "#ffe4e6",      // Rose White
        "--muted": "#fda4af",    // Rose 300
        "--brand": "#f43f5e",    // Rose 500 (Vibrant but not neon)
        "--accent": "#fbbf24",   // Gold (Soviet Star)
        "--border": "#881337",   // Rose 900
        "--chip": "#881337",
        "--bad": "#9f1239"
      }
    }
  },

  // --- VIEWER SECTIONS (Unchanged) ---
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
