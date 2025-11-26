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
    // GROUP A (1-6): BLUEPRINT LAB (Dark / White Brand)
    // ========================================================================
    "navy": { 
      name: "1. Lab: Mocha",
      colors: {
        "--bg": "#292524", "--panel": "#44403c", "--chip": "#44403c", "--border": "#57534e",    
        "--ink": "#f5f5f4", "--muted": "#a8a29e", "--brand": "#d4b483", "--accent": "#d97706", "--bad": "#ef4444",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },
    "desert": { 
      name: "2. Lab: Teal",
      colors: {
        "--bg": "#134e4a", "--panel": "#115e59", "--chip": "#115e59", "--border": "#14b8a6",    
        "--ink": "#f0fdfa", "--muted": "#5eead4", "--brand": "#ffffff", "--accent": "#2dd4bf", "--bad": "#fb7185",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },
    "paper": { 
      name: "3. Lab: Violet",
      colors: {
        "--bg": "#2e1065", "--panel": "#4c1d95", "--chip": "#4c1d95", "--border": "#8b5cf6",    
        "--ink": "#f5f3ff", "--muted": "#c4b5fd", "--brand": "#ffffff", "--accent": "#a78bfa", "--bad": "#f43f5e",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },
    "emerald": { 
      name: "4. Lab: Carbon",
      colors: {
        "--bg": "#09090b", "--panel": "#27272a", "--chip": "#27272a", "--border": "#52525b",    
        "--ink": "#fafafa", "--muted": "#a1a1aa", "--brand": "#ffffff", "--accent": "#e4e4e7", "--bad": "#ef4444",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },
    "luftwaffe": { 
      name: "5. Lab: Indigo",
      colors: {
        "--bg": "#1e1b4b", "--panel": "#312e81", "--chip": "#312e81", "--border": "#6366f1",    
        "--ink": "#eef2ff", "--muted": "#a5b4fc", "--brand": "#ffffff", "--accent": "#818cf8", "--bad": "#f43f5e",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },
    "sonar": { 
      name: "6. Lab: Sky",
      colors: {
        "--bg": "#0c4a6e", "--panel": "#075985", "--chip": "#075985", "--border": "#0ea5e9",    
        "--ink": "#f0f9ff", "--muted": "#7dd3fc", "--brand": "#ffffff", "--accent": "#38bdf8", "--bad": "#f43f5e",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },

    // ========================================================================
    // GROUP B (7-12): PAPER LAB (Light Mode / Dark Brand)
    // Structure: Chip=Panel, BtnText=White
    // ========================================================================
    
    // 7. PAPER NAVY
    "navy_exp": {
      name: "7. Paper: Royal Navy",
      colors: {
        "--bg": "#f0f9ff",      // Sky 50
        "--panel": "#e0f2fe",   // Sky 100
        "--chip": "#e0f2fe",    // = PANEL
        "--border": "#7dd3fc",  // Sky 300
        "--ink": "#0c4a6e",     // Sky 900
        "--muted": "#0369a1",   // Sky 700
        "--brand": "#0284c7",   // Sky 600 (Deep Blue)
        "--accent": "#38bdf8", 
        "--bad": "#b91c1c",
        "--btn-bg": "var(--brand)", 
        "--btn-text": "#ffffff" // WHITE TEXT
      }
    },

    // 8. PAPER DESERT
    "desert_exp": {
      name: "8. Paper: Expedition",
      colors: {
        "--bg": "#fefce8",      // Yellow 50
        "--panel": "#fef9c3",   // Yellow 100
        "--chip": "#fef9c3",    // = PANEL
        "--border": "#fde047",  // Yellow 300
        "--ink": "#422006",     // Yellow 950
        "--muted": "#854d0e",   // Yellow 800
        "--brand": "#a16207",   // Yellow 700 (Bronze)
        "--accent": "#ca8a04", 
        "--bad": "#b91c1c",
        "--btn-bg": "var(--brand)", 
        "--btn-text": "#ffffff"
      }
    },

    // 9. PAPER CRIMSON (New Try)
    "paper_exp": {
      name: "9. Paper: Top Secret",
      colors: {
        "--bg": "#fff1f2",      // Rose 50
        "--panel": "#ffe4e6",   // Rose 100
        "--chip": "#ffe4e6",    // = PANEL
        "--border": "#fda4af",  // Rose 300
        "--ink": "#881337",     // Rose 900
        "--muted": "#be123c",   // Rose 700
        "--brand": "#e11d48",   // Rose 600 (Crimson)
        "--accent": "#f43f5e", 
        "--bad": "#991b1b",
        "--btn-bg": "var(--brand)", 
        "--btn-text": "#ffffff"
      }
    },

    // 10. PAPER OLIVE (New Try)
    "emerald_exp": {
      name: "10. Paper: Field Map",
      colors: {
        "--bg": "#f7fee7",      // Lime 50
        "--panel": "#ecfccb",   // Lime 100
        "--chip": "#ecfccb",    // = PANEL
        "--border": "#bef264",  // Lime 300
        "--ink": "#1a2e05",     // Lime 950
        "--muted": "#3f6212",   // Lime 800
        "--brand": "#4d7c0f",   // Lime 700 (Army Green)
        "--accent": "#65a30d", 
        "--bad": "#b91c1c",
        "--btn-bg": "var(--brand)", 
        "--btn-text": "#ffffff"
      }
    },

    // 11. PAPER LUFTWAFFE
    "luftwaffe_exp": {
      name: "11. Paper: Intercept",
      colors: {
        "--bg": "#f8fafc",      // Slate 50
        "--panel": "#e2e8f0",   // Slate 200
        "--chip": "#e2e8f0",    // = PANEL
        "--border": "#cbd5e1",  // Slate 300
        "--ink": "#0f172a",     // Slate 900
        "--muted": "#475569",   // Slate 600
        "--brand": "#334155",   // Slate 700 (Deep Grey/Blue)
        "--accent": "#64748b", 
        "--bad": "#b91c1c",
        "--btn-bg": "var(--brand)", 
        "--btn-text": "#ffffff"
      }
    },

    // 12. PAPER PURPLE (New Try)
    "sonar_exp": {
      name: "12. Paper: Cipher",
      colors: {
        "--bg": "#faf5ff",      // Purple 50
        "--panel": "#f3e8ff",   // Purple 100
        "--chip": "#f3e8ff",    // = PANEL
        "--border": "#d8b4fe",  // Purple 300
        "--ink": "#3b0764",     // Purple 950
        "--muted": "#6b21a8",   // Purple 800
        "--brand": "#7e22ce",   // Purple 600 (Deep Violet)
        "--accent": "#9333ea", 
        "--bad": "#b91c1c",
        "--btn-bg": "var(--brand)", 
        "--btn-text": "#ffffff"
      }
    },

    // ========================================================================
    // GROUP C (13-18): FINAL ROSTER (Original Dark Favorites)
    // ========================================================================
    "navy_final": {
      name: "13. Orig: Navy",
      colors: {
        "--bg": "#0b1020", "--panel": "#111833", "--chip": "#111833", "--border": "#26325b",
        "--ink": "#e6ecff", "--muted": "#a7b0cc", "--brand": "#8bb9ff", "--accent": "#c0ffe1", "--bad": "#ff6b6b",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },
    "desert_final": {
      name: "14. Orig: Desert",
      colors: {
        "--bg": "#292524", "--panel": "#44403c", "--chip": "#44403c", "--border": "#57534e",
        "--ink": "#f5f5f4", "--muted": "#a8a29e", "--brand": "#d4b483", "--accent": "#d97706", "--bad": "#f87171",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },
    "paper_final": {
      name: "15. Orig: Archives",
      colors: {
        "--bg": "#f5f5f4", "--panel": "#e7e5e4", "--chip": "#e7e5e4", "--border": "#d6d3d1",
        "--ink": "#292524", "--muted": "#57534e", "--brand": "#0f766e", "--accent": "#d97706", "--bad": "#b91c1c",
        "--btn-bg": "var(--brand)", "--btn-text": "#ffffff"
      }
    },
    "emerald_final": {
      name: "16. Orig: High Cmd",
      colors: {
        "--bg": "#022c22", "--panel": "#064e3b", "--chip": "#064e3b", "--border": "#065f46",
        "--ink": "#ecfdf5", "--muted": "#6ee7b7", "--brand": "#fef08a", "--accent": "#f59e0b", "--bad": "#ef4444",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },
    "luftwaffe_final": {
      name: "17. Orig: Luftwaffe",
      colors: {
        "--bg": "#1e293b", "--panel": "#334155", "--chip": "#334155", "--border": "#475569",
        "--ink": "#f1f5f9", "--muted": "#cbd5e1", "--brand": "#a5f3fc", "--accent": "#22d3ee", "--bad": "#f87171",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },
    "sonar_final": {
      name: "18. Orig: Sonar",
      colors: {
        "--bg": "#042f2e", "--panel": "#115e59", "--chip": "#115e59", "--border": "#134e4a",
        "--ink": "#ccfbf1", "--muted": "#5eead4", "--brand": "#fef9c3", "--accent": "#2dd4bf", "--bad": "#f43f5e",
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
