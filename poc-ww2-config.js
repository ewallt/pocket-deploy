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
    // GROUP A (1-3): THE NAVY CLASS (Dark / Value Matched)
    // ========================================================================
    "iso_green": { 
      name: "1. Navy Class: Army",
      colors: {
        "--bg": "#021c10", "--panel": "#0b2e1e", "--chip": "#173d2b", "--border": "#1f4f35",    
        "--ink": "#e3fcec", "--muted": "#8abfac", "--brand": "#34d399", "--accent": "#10b981", "--bad": "#ef4444",
        "--btn-bg": "linear-gradient(135deg, #0b2e1e 0%, #021c10 100%)", "--btn-text": "#e3fcec"
      }
    },
    "iso_brown": { 
      name: "2. Navy Class: Marine",
      colors: {
        "--bg": "#1f150b", "--panel": "#362516", "--chip": "#4a3321", "--border": "#61442e",    
        "--ink": "#fef3c7", "--muted": "#d6c0a8", "--brand": "#fbbf24", "--accent": "#f59e0b", "--bad": "#ef4444",
        "--btn-bg": "linear-gradient(135deg, #362516 0%, #1f150b 100%)", "--btn-text": "#fef3c7"
      }
    },
    "iso_purple": { 
      name: "3. Navy Class: Air",
      colors: {
        "--bg": "#170e2e", "--panel": "#281a4a", "--chip": "#372661", "--border": "#4c3682",    
        "--ink": "#f3e8ff", "--muted": "#c4b5fd", "--brand": "#c084fc", "--accent": "#a855f7", "--bad": "#ef4444",
        "--btn-bg": "linear-gradient(135deg, #281a4a 0%, #170e2e 100%)", "--btn-text": "#f3e8ff"
      }
    },

    // ========================================================================
    // GROUP B (4-9): THE BLUEPRINT LAB (Dark / White Brand)
    // ========================================================================
    "navy": { 
      name: "4. Lab: Mocha",
      colors: {
        "--bg": "#292524", "--panel": "#44403c", "--chip": "#44403c", "--border": "#57534e",    
        "--ink": "#f5f5f4", "--muted": "#a8a29e", "--brand": "#d4b483", "--accent": "#d97706", "--bad": "#ef4444",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },
    "desert": { 
      name: "5. Lab: Teal",
      colors: {
        "--bg": "#134e4a", "--panel": "#115e59", "--chip": "#115e59", "--border": "#14b8a6",    
        "--ink": "#f0fdfa", "--muted": "#5eead4", "--brand": "#ffffff", "--accent": "#2dd4bf", "--bad": "#fb7185",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },
    "paper": { 
      name: "6. Lab: Violet",
      colors: {
        "--bg": "#2e1065", "--panel": "#4c1d95", "--chip": "#4c1d95", "--border": "#8b5cf6",    
        "--ink": "#f5f3ff", "--muted": "#c4b5fd", "--brand": "#ffffff", "--accent": "#a78bfa", "--bad": "#f43f5e",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },
    "emerald": { 
      name: "7. Lab: Carbon",
      colors: {
        "--bg": "#09090b", "--panel": "#27272a", "--chip": "#27272a", "--border": "#52525b",    
        "--ink": "#fafafa", "--muted": "#a1a1aa", "--brand": "#ffffff", "--accent": "#e4e4e7", "--bad": "#ef4444",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },
    "luftwaffe": { 
      name: "8. Lab: Indigo",
      colors: {
        "--bg": "#1e1b4b", "--panel": "#312e81", "--chip": "#312e81", "--border": "#6366f1",    
        "--ink": "#eef2ff", "--muted": "#a5b4fc", "--brand": "#ffffff", "--accent": "#818cf8", "--bad": "#f43f5e",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },
    "sonar": { 
      name: "9. Lab: Sky",
      colors: {
        "--bg": "#0c4a6e", "--panel": "#075985", "--chip": "#075985", "--border": "#0ea5e9",    
        "--ink": "#f0f9ff", "--muted": "#7dd3fc", "--brand": "#ffffff", "--accent": "#38bdf8", "--bad": "#f43f5e",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },

    // ========================================================================
    // GROUP C (10-15): THE INK LAB (Strict Archives Clone)
    // All Backgrounds = #f5f5f4 (Stone). Only Brand changes.
    // ========================================================================
    
    // 10. BLUE INK
    "navy_exp": {
      name: "10. Paper: Royal Navy",
      colors: {
        "--bg": "#f5f5f4", "--panel": "#e7e5e4", "--chip": "#e7e5e4", "--border": "#d6d3d1",    
        "--ink": "#292524", "--muted": "#57534e",     
        "--brand": "#1e40af",   /* Deep Blue */
        "--accent": "#3b82f6", "--bad": "#b91c1c",
        "--btn-bg": "var(--brand)", "--btn-text": "#ffffff"
      }
    },
    
    // 11. BRONZE INK
    "desert_exp": {
      name: "11. Paper: Expedition",
      colors: {
        "--bg": "#f5f5f4", "--panel": "#e7e5e4", "--chip": "#e7e5e4", "--border": "#d6d3d1",    
        "--ink": "#292524", "--muted": "#57534e",     
        "--brand": "#a16207",   /* Deep Bronze/Gold */
        "--accent": "#ca8a04", "--bad": "#b91c1c",
        "--btn-bg": "var(--brand)", "--btn-text": "#ffffff"
      }
    },
    
    // 12. GREY INK
    "paper_exp": {
      name: "12. Paper: Carbon Copy",
      colors: {
        "--bg": "#f5f5f4", "--panel": "#e7e5e4", "--chip": "#e7e5e4", "--border": "#d6d3d1",    
        "--ink": "#292524", "--muted": "#57534e",     
        "--brand": "#334155",   /* Deep Slate Grey */
        "--accent": "#475569", "--bad": "#b91c1c",
        "--btn-bg": "var(--brand)", "--btn-text": "#ffffff"
      }
    },
    
    // 13. GREEN INK
    "emerald_exp": {
      name: "13. Paper: Emerald",
      colors: {
        "--bg": "#f5f5f4", "--panel": "#e7e5e4", "--chip": "#e7e5e4", "--border": "#d6d3d1",    
        "--ink": "#292524", "--muted": "#57534e",     
        "--brand": "#047857",   /* Deep Emerald */
        "--accent": "#10b981", "--bad": "#b91c1c",
        "--btn-bg": "var(--brand)", "--btn-text": "#ffffff"
      }
    },
    
    // 14. SLATE/INDIGO INK
    "luftwaffe_exp": {
      name: "14. Paper: Intercept",
      colors: {
        "--bg": "#f5f5f4", "--panel": "#e7e5e4", "--chip": "#e7e5e4", "--border": "#d6d3d1",    
        "--ink": "#292524", "--muted": "#57534e",     
        "--brand": "#3730a3",   /* Deep Indigo */
        "--accent": "#6366f1", "--bad": "#b91c1c",
        "--btn-bg": "var(--brand)", "--btn-text": "#ffffff"
      }
    },
    
    // 15. PURPLE INK
    "sonar_exp": {
      name: "15. Paper: Cipher",
      colors: {
        "--bg": "#f5f5f4", "--panel": "#e7e5e4", "--chip": "#e7e5e4", "--border": "#d6d3d1",    
        "--ink": "#292524", "--muted": "#57534e",     
        "--brand": "#7e22ce",   /* Deep Purple */
        "--accent": "#a855f7", "--bad": "#b91c1c",
        "--btn-bg": "var(--brand)", "--btn-text": "#ffffff"
      }
    },

    // ========================================================================
    // GROUP D (16-21): FINAL ROSTER (Unchanged)
    // ========================================================================
    "navy_final": {
      name: "16. Orig: Navy",
      colors: {
        "--bg": "#0b1020", "--panel": "#111833", "--chip": "#111833", "--border": "#26325b",
        "--ink": "#e6ecff", "--muted": "#a7b0cc", "--brand": "#8bb9ff", "--accent": "#c0ffe1", "--bad": "#ff6b6b",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },
    "desert_final": {
      name: "17. Orig: Desert",
      colors: {
        "--bg": "#292524", "--panel": "#44403c", "--chip": "#44403c", "--border": "#57534e",
        "--ink": "#f5f5f4", "--muted": "#a8a29e", "--brand": "#d4b483", "--accent": "#d97706", "--bad": "#f87171",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },
    "paper_final": {
      name: "18. Orig: Archives",
      colors: {
        "--bg": "#f5f5f4", "--panel": "#e7e5e4", "--chip": "#e7e5e4", "--border": "#d6d3d1",
        "--ink": "#292524", "--muted": "#57534e", "--brand": "#0f766e", "--accent": "#d97706", "--bad": "#b91c1c",
        "--btn-bg": "var(--brand)", "--btn-text": "#ffffff"
      }
    },
    "emerald_final": {
      name: "19. Orig: High Cmd",
      colors: {
        "--bg": "#022c22", "--panel": "#064e3b", "--chip": "#064e3b", "--border": "#065f46",
        "--ink": "#ecfdf5", "--muted": "#6ee7b7", "--brand": "#fef08a", "--accent": "#f59e0b", "--bad": "#ef4444",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },
    "luftwaffe_final": {
      name: "20. Orig: Luftwaffe",
      colors: {
        "--bg": "#1e293b", "--panel": "#334155", "--chip": "#334155", "--border": "#475569",
        "--ink": "#f1f5f9", "--muted": "#cbd5e1", "--brand": "#a5f3fc", "--accent": "#22d3ee", "--bad": "#f87171",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },
    "sonar_final": {
      name: "21. Orig: Sonar",
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
