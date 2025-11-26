const APP_CONFIG = {
  labels: {
    loading: "Decrypting...",
    backToHub: "← Return to Command",
    errorTitle: "Intelligence Not Found",
    errorBody: "The requested record does not exist in the local archives.",
    summaryHeader: "Strategic Summary"
  },

  themes: {
    // ========================================================================
    // GROUP A: THE BLUEPRINT LAB (High Contrast, White on Deep Color)
    // Structure: Chip == Panel. Button Text == Panel. Brand == White.
    // ========================================================================
    
    // 1. MOCHA (The Warm Exception)
    "navy": { 
      name: "1. Mocha (Khaki)",
      colors: {
        "--bg": "#292524",        // Warm Dark Brown
        "--panel": "#44403c",     // Stone Brown
        "--chip": "#44403c",      // = PANEL
        "--border": "#57534e",    
        "--ink": "#f5f5f4",       
        "--muted": "#a8a29e",     
        "--brand": "#d4b483",     // Khaki
        "--accent": "#d97706",    
        "--bad": "#ef4444",
        "--btn-bg": "var(--brand)", 
        "--btn-text": "var(--panel)"
      }
    },

    // 2. TEAL BLUEPRINT (Requested)
    "desert": { 
      name: "2. Lab: Teal",
      colors: {
        "--bg": "#134e4a",        // Teal 900
        "--panel": "#115e59",     // Teal 800
        "--chip": "#115e59",      // = PANEL
        "--border": "#14b8a6",    // Teal 500 (Bright Border for Blueprint look)
        "--ink": "#f0fdfa",       // Teal 50
        "--muted": "#5eead4",     // Teal 300
        "--brand": "#ffffff",     // Pure White
        "--accent": "#2dd4bf", 
        "--bad": "#fb7185",
        "--btn-bg": "var(--brand)", 
        "--btn-text": "var(--panel)"
      }
    },

    // 3. VIOLET BLUEPRINT
    "paper": { 
      name: "3. Lab: Violet",
      colors: {
        "--bg": "#2e1065",        // Violet 950
        "--panel": "#4c1d95",     // Violet 900
        "--chip": "#4c1d95",      // = PANEL
        "--border": "#8b5cf6",    // Violet 500
        "--ink": "#f5f3ff",       // Violet 50
        "--muted": "#c4b5fd",     // Violet 300
        "--brand": "#ffffff",     // Pure White
        "--accent": "#a78bfa", 
        "--bad": "#f43f5e",
        "--btn-bg": "var(--brand)", 
        "--btn-text": "var(--panel)"
      }
    },

    // 4. ROSE BLUEPRINT
    "emerald": { 
      name: "4. Lab: Rose",
      colors: {
        "--bg": "#4c0519",        // Rose 950
        "--panel": "#881337",     // Rose 900
        "--chip": "#881337",      // = PANEL
        "--border": "#f43f5e",    // Rose 500
        "--ink": "#fff1f2",       // Rose 50
        "--muted": "#fda4af",     // Rose 300
        "--brand": "#ffffff",     // Pure White
        "--accent": "#fb7185", 
        "--bad": "#fbbf24",       // Gold for alert (Red on Red is bad)
        "--btn-bg": "var(--brand)", 
        "--btn-text": "var(--panel)"
      }
    },

    // 5. INDIGO BLUEPRINT
    "luftwaffe": { 
      name: "5. Lab: Indigo",
      colors: {
        "--bg": "#1e1b4b",        // Indigo 950
        "--panel": "#312e81",     // Indigo 900
        "--chip": "#312e81",      // = PANEL
        "--border": "#6366f1",    // Indigo 500
        "--ink": "#eef2ff",       // Indigo 50
        "--muted": "#a5b4fc",     // Indigo 300
        "--brand": "#ffffff",     // Pure White
        "--accent": "#818cf8", 
        "--bad": "#f43f5e",
        "--btn-bg": "var(--brand)", 
        "--btn-text": "var(--panel)"
      }
    },

    // 6. SKY BLUEPRINT (The Original "Perfect" One)
    "sonar": { 
      name: "6. Lab: Sky",
      colors: {
        "--bg": "#0c4a6e",        // Sky 900
        "--panel": "#075985",     // Sky 800
        "--chip": "#075985",      // = PANEL
        "--border": "#0ea5e9",    // Sky 500
        "--ink": "#f0f9ff",       // Sky 50
        "--muted": "#7dd3fc",     // Sky 300
        "--brand": "#ffffff",     // Pure White
        "--accent": "#38bdf8", 
        "--bad": "#f43f5e",
        "--btn-bg": "var(--brand)", 
        "--btn-text": "var(--panel)"
      }
    },

    // ========================================================================
    // GROUP B: FINAL ROSTER (Unchanged)
    // ========================================================================
    
    "navy_exp": {
      name: "7. Navy (Final)",
      colors: {
        "--bg": "#0b1020", "--panel": "#111833", "--ink": "#e6ecff", "--muted": "#a7b0cc",
        "--brand": "#8bb9ff", "--accent": "#c0ffe1", "--border": "#26325b", "--chip": "#1a2347", "--bad": "#ff6b6b",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },
    "desert_exp": {
      name: "8. Desert (Final)",
      colors: {
        "--bg": "#292524", "--panel": "#44403c", "--ink": "#f5f5f4", "--muted": "#a8a29e",
        "--brand": "#d4b483", 
        "--accent": "#d97706", "--border": "#57534e", "--chip": "#57534e", "--bad": "#f87171",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },
    "paper_exp": {
      name: "9. Archives (Final)",
      colors: {
        "--bg": "#f5f5f4", "--panel": "#e7e5e4", "--ink": "#292524", "--muted": "#57534e",
        "--brand": "#0f766e", "--accent": "#d97706", "--border": "#d6d3d1", "--chip": "#e7e5e4", "--bad": "#b91c1c",
        "--btn-bg": "var(--brand)", "--btn-text": "#ffffff"
      }
    },
    "emerald_exp": {
      name: "10. High Command (Final)",
      colors: {
        "--bg": "#022c22", "--panel": "#064e3b", "--ink": "#ecfdf5", "--muted": "#6ee7b7",
        "--brand": "#fef08a", 
        "--accent": "#f59e0b", "--border": "#065f46", "--chip": "#064e3b", "--bad": "#ef4444",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },
    "luftwaffe_exp": {
      name: "11. Luftwaffe (Final)",
      colors: {
        "--bg": "#1e293b", "--panel": "#334155", "--ink": "#f1f5f9", "--muted": "#cbd5e1",
        "--brand": "#a5f3fc", "--accent": "#22d3ee", "--border": "#475569", "--chip": "#475569", "--bad": "#f87171",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },
    "sonar_exp": {
      name: "12. Sonar (Final)",
      colors: {
        "--bg": "#042f2e", "--panel": "#115e59", "--ink": "#ccfbf1", "--muted": "#5eead4",
        "--brand": "#fef9c3", 
        "--accent": "#2dd4bf", "--border": "#134e4a", "--chip": "#134e4a", "--bad": "#f43f5e",
        "--btn-bg": "var(--brand)", "--btn-text": "#042f2e"
      }
    }
  },

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
