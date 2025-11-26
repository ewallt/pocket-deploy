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
    // GROUP A: THE NAVY CLASS (New! Slots 1-3)
    // Value-Matched to Original Navy (Deep Saturation + Soft Highlight)
    // ========================================================================
    
    "iso_green": { 
      name: "1. Navy Class: Army",
      colors: {
        "--bg": "#051a10",        // Deepest Jungle (Matches Navy BG)
        "--panel": "#0f2e1d",     // Deep Forest (Matches Navy Panel)
        "--chip": "#1a3b29",      // Chip slightly lighter (Navy Style)
        "--border": "#1f4f35",    
        "--ink": "#e3fcec",       // Mint White
        "--muted": "#8abfac",     
        "--brand": "#6ee7b7",     // Soft Emerald (Matches #8bb9ff value)
        "--accent": "#34d399",    
        "--bad": "#ef4444",
        "--btn-bg": "linear-gradient(135deg, #0f2e1d 0%, #051a10 100%)", // Green Gradient
        "--btn-text": "#e3fcec"
      }
    },

    "iso_brown": { 
      name: "2. Navy Class: Marine",
      colors: {
        "--bg": "#1a120b",        // Deepest Coffee
        "--panel": "#2e2015",     // Deep Leather
        "--chip": "#3d2b1f",      
        "--border": "#4f3829",    
        "--ink": "#fceee3",       // Bone White
        "--muted": "#bf9f8a",     
        "--brand": "#fcd34d",     // Soft Gold (Matches #8bb9ff value)
        "--accent": "#fbbf24",    
        "--bad": "#ef4444",
        "--btn-bg": "linear-gradient(135deg, #2e2015 0%, #1a120b 100%)", // Brown Gradient
        "--btn-text": "#fceee3"
      }
    },

    "iso_purple": { 
      name: "3. Navy Class: Air",
      colors: {
        "--bg": "#100b20",        // Deepest Indigo
        "--panel": "#1d1533",     // Deep Violet
        "--chip": "#2a1f45",      
        "--border": "#3b2b5c",    
        "--ink": "#f0e6ff",       // Lavender White
        "--muted": "#a99ec2",     
        "--brand": "#c084fc",     // Soft Purple (Matches #8bb9ff value)
        "--accent": "#a855f7",    
        "--bad": "#ef4444",
        "--btn-bg": "linear-gradient(135deg, #1d1533 0%, #100b20 100%)", // Purple Gradient
        "--btn-text": "#f0e6ff"
      }
    },

    // ========================================================================
    // GROUP B: THE BLUEPRINT LAB (Was Group A) -> Now Slots 4-9
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
    // GROUP C: THE PAPER LAB (Was Group B) -> Now Slots 10-15
    // ========================================================================
    "navy_exp": {
      name: "10. Paper: Royal Navy",
      colors: {
        "--bg": "#f0f9ff", "--panel": "#e0f2fe", "--chip": "#e0f2fe", "--border": "#7dd3fc",    
        "--ink": "#0c4a6e", "--muted": "#0369a1", "--brand": "#0284c7", "--accent": "#38bdf8", "--bad": "#b91c1c",
        "--btn-bg": "var(--brand)", "--btn-text": "#ffffff"
      }
    },
    "desert_exp": {
      name: "11. Paper: Expedition",
      colors: {
        "--bg": "#fefce8", "--panel": "#fef9c3", "--chip": "#fef9c3", "--border": "#fde047",    
        "--ink": "#422006", "--muted": "#854d0e", "--brand": "#a16207", "--accent": "#ca8a04", "--bad": "#b91c1c",
        "--btn-bg": "var(--brand)", "--btn-text": "#ffffff"
      }
    },
    "paper_exp": {
      name: "12. Paper: Carbon Copy",
      colors: {
        "--bg": "#f8fafc", "--panel": "#e2e8f0", "--chip": "#e2e8f0", "--border": "#94a3b8",    
        "--ink": "#020617", "--muted": "#475569", "--brand": "#0f172a", "--accent": "#334155", "--bad": "#b91c1c",
        "--btn-bg": "var(--brand)", "--btn-text": "#ffffff"
      }
    },
    "emerald_exp": {
      name: "13. Paper: Emerald",
      colors: {
        "--bg": "#ecfdf5", "--panel": "#d1fae5", "--chip": "#d1fae5", "--border": "#6ee7b7",    
        "--ink": "#064e3b", "--muted": "#059669", "--brand": "#047857", "--accent": "#10b981", "--bad": "#b91c1c",
        "--btn-bg": "var(--brand)", "--btn-text": "#ffffff"
      }
    },
    "luftwaffe_exp": {
      name: "14. Paper: Intercept",
      colors: {
        "--bg": "#f8fafc", "--panel": "#e2e8f0", "--chip": "#e2e8f0", "--border": "#cbd5e1",    
        "--ink": "#0f172a", "--muted": "#475569", "--brand": "#334155", "--accent": "#64748b", "--bad": "#b91c1c",
        "--btn-bg": "var(--brand)", "--btn-text": "#ffffff"
      }
    },
    "sonar_exp": {
      name: "15. Paper: Cipher",
      colors: {
        "--bg": "#faf5ff", "--panel": "#f3e8ff", "--chip": "#f3e8ff", "--border": "#d8b4fe",    
        "--ink": "#3b0764", "--muted": "#6b21a8", "--brand": "#7e22ce", "--accent": "#9333ea", "--bad": "#b91c1c",
        "--btn-bg": "var(--brand)", "--btn-text": "#ffffff"
      }
    },

    // ========================================================================
    // GROUP D: FINAL ROSTER (Was Group C) -> Now Slots 16-21
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
