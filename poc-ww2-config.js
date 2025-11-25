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
    // 1. THE DEFAULT (Command Center)
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
    // 2. TACTICAL (Olive/Gold)
    "field": {
      name: "Field Operations",
      colors: {
        "--bg": "#1a1c10",
        "--panel": "#26291b",
        "--ink": "#e8e6d1",
        "--muted": "#9ba188",
        "--brand": "#d4e157", // Gold/Green
        "--accent": "#ff9800",
        "--border": "#3d422e",
        "--chip": "#323824",
        "--bad": "#e57373"
      }
    },
    // 3. LIGHT MODE (Paper/Ink)
    "paper": {
      name: "Archives",
      colors: {
        "--bg": "#f0ebd8",
        "--panel": "#e6e0cf",
        "--ink": "#2b2520",     // Dark text
        "--muted": "#6b5d52",
        "--brand": "#8a2be2",   // Ink Purple
        "--accent": "#d35400",  // Burnt Orange
        "--border": "#d6cdb2",
        "--chip": "#dcd3bf",
        "--bad": "#c0392b"
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
