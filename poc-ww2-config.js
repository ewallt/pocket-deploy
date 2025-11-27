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
    // GROUP A (1-6): THE PASTEL SERIES (Isomorphic to #16 High Command)
    // Rules: Deep BG, Stepped Panel, Chip=Panel, Pastel Brand
    // ========================================================================
    
    "iso_mocha": { 
      name: "1. Iso: Mocha",
      colors: {
        "--bg": "#2a231d",        // Deep Espresso
        "--panel": "#453a32",     // Lighter Roast
        "--chip": "#453a32",      // = PANEL
        "--border": "#5e5046",    
        "--ink": "#f5f5f4",       
        "--muted": "#bcaaa4",     
        "--brand": "#fef3c7",     // PASTEL: Warm Cream (Like #16)
        "--accent": "#d97706",    
        "--bad": "#ef4444",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },

    "iso_teal": { 
      name: "2. Iso: Depth Charge",
      colors: {
        "--bg": "#0f292d",        // Deep Abyss
        "--panel": "#1a3f45",     // Lighter Water
        "--chip": "#1a3f45",      // = PANEL
        "--border": "#275a61",    
        "--ink": "#ecfeff",       
        "--muted": "#99d1d6",     
        "--brand": "#ccfbf1",     // PASTEL: Mint Ice
        "--accent": "#2dd4bf", 
        "--bad": "#fb7185",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },

    "iso_violet": { 
      name: "3. Iso: Ultraviolet",
      colors: {
        "--bg": "#1e102e",        // Deep Void
        "--panel": "#321c4a",     // Lighter Grape
        "--chip": "#321c4a",      // = PANEL
        "--border": "#4a2b6b",    
        "--ink": "#fbf7ff",       
        "--muted": "#c4b5fd",     
        "--brand": "#f3e8ff",     // PASTEL: Pale Lavender
        "--accent": "#a78bfa", 
        "--bad": "#f43f5e",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },

    "iso_carbon": { 
      name: "4. Iso: Graphite",
      colors: {
        "--bg": "#18181b",        // Zinc 950
        "--panel": "#27272a",     // Zinc 800 (Distinct Step Up)
        "--chip": "#27272a",      // = PANEL
        "--border": "#3f3f46",    
        "--ink": "#fafafa",       
        "--muted": "#a1a1aa",     
        "--brand": "#e4e4e7",     // PASTEL: Soft Platinum (Not stark white)
        "--accent": "#52525b", 
        "--bad": "#ef4444",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },

    "iso_indigo": { 
      name: "5. Iso: Midnight",
      colors: {
        "--bg": "#0f1029",        // Deep Night
        "--panel": "#1c1e42",     // Lighter Indigo
        "--chip": "#1c1e42",      // = PANEL
        "--border": "#2d3061",    
        "--ink": "#eef2ff",       
        "--muted": "#a5b4fc",     
        "--brand": "#e0e7ff",     // PASTEL: Periwinkle Mist
        "--accent": "#818cf8", 
        "--bad": "#f43f5e",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },

    "iso_sky": { 
      name: "6. Iso: Stratosphere",
      colors: {
        "--bg": "#082f49",        // Sky 950
        "--panel": "#0c4a6e",     // Sky 900 (Visible Step)
        "--chip": "#0c4a6e",      // = PANEL
        "--border": "#075985",    
        "--ink": "#f0f9ff",       
        "--muted": "#7dd3fc",     
        "--brand": "#e0f2fe",     // PASTEL: Cloud White
        "--accent": "#38bdf8", 
        "--bad": "#f43f5e",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },

    // ========================================================================
    // GROUP B (7-12): THE INK LAB (Paper) - Unchanged
    // ========================================================================
    "navy_exp": {
      name: "7. Paper: Royal Navy",
      colors: {
        "--bg": "#f0f9ff", "--panel": "#e0f2fe", "--chip": "#e0f2fe", "--border": "#7dd3fc",    
        "--ink": "#0c4a6e", "--muted": "#0369a1", "--brand": "#0284c7", "--accent": "#38bdf8", "--bad": "#b91c1c",
        "--btn-bg": "var(--brand)", "--btn-text": "#ffffff"
      }
    },
    "desert_exp": {
      name: "8. Paper: Expedition",
      colors: {
        "--bg": "#fefce8", "--panel": "#fef9c3", "--chip": "#fef9c3", "--border": "#fde047",    
        "--ink": "#422006", "--muted": "#854d0e", "--brand": "#a16207", "--accent": "#ca8a04", "--bad": "#b91c1c",
        "--btn-bg": "var(--brand)", "--btn-text": "#ffffff"
      }
    },
    "paper_exp": {
      name: "9. Paper: Carbon Copy",
      colors: {
        "--bg": "#f8fafc", "--panel": "#e2e8f0", "--chip": "#e2e8f0", "--border": "#94a3b8",    
        "--ink": "#020617", "--muted": "#475569", "--brand": "#0f172a", "--accent": "#334155", "--bad": "#b91c1c",
        "--btn-bg": "var(--brand)", "--btn-text": "#ffffff"
      }
    },
    "emerald_exp": {
      name: "10. Paper: Emerald",
      colors: {
        "--bg": "#ecfdf5", "--panel": "#d1fae5", "--chip": "#d1fae5", "--border": "#6ee7b7",    
        "--ink": "#064e3b", "--muted": "#059669", "--brand": "#047857", "--accent": "#10b981", "--bad": "#b91c1c",
        "--btn-bg": "var(--brand)", "--btn-text": "#ffffff"
      }
    },
    "luftwaffe_exp": {
      name: "11. Paper: Intercept",
      colors: {
        "--bg": "#f8fafc", "--panel": "#e2e8f0", "--chip": "#e2e8f0", "--border": "#cbd5e1",    
        "--ink": "#0f172a", "--muted": "#475569", "--brand": "#334155", "--accent": "#64748b", "--bad": "#b91c1c",
        "--btn-bg": "var(--brand)", "--btn-text": "#ffffff"
      }
    },
    "sonar_exp": {
      name: "12. Paper: Cipher",
      colors: {
        "--bg": "#faf5ff", "--panel": "#f3e8ff", "--chip": "#f3e8ff", "--border": "#d8b4fe",    
        "--ink": "#3b0764", "--muted": "#6b21a8", "--brand": "#7e22ce", "--accent": "#9333ea", "--bad": "#b91c1c",
        "--btn-bg": "var(--brand)", "--btn-text": "#ffffff"
      }
    },

    // ========================================================================
    // GROUP C (13-18): FINAL ROSTER (Unchanged)
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
        "--ink": "#ccfbf1", "--muted": "#5eead4", "--brand": "#fef9c3", "--accent": "#22d3ee", "--bad": "#f43f5e",
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
