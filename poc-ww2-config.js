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
    // GROUP A (1-6): THE PASTEL SERIES (Dark / Chip=Panel / Pastel Brand)
    // ========================================================================
    "iso_mocha": { 
      name: "1. Iso: Mocha",
      colors: {
        "--bg": "#2a231d", "--panel": "#453a32", "--chip": "#453a32", "--border": "#5e5046",    
        "--ink": "#f5f5f4", "--muted": "#bcaaa4", "--brand": "#fef3c7", "--accent": "#d97706", "--bad": "#ef4444",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },
    "iso_teal": { 
      name: "2. Iso: Depth Charge",
      colors: {
        "--bg": "#0f292d", "--panel": "#1a3f45", "--chip": "#1a3f45", "--border": "#275a61",    
        "--ink": "#ecfeff", "--muted": "#99d1d6", "--brand": "#ccfbf1", "--accent": "#2dd4bf", "--bad": "#fb7185",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },
    "iso_violet": { 
      name: "3. Iso: Ultraviolet",
      colors: {
        "--bg": "#1e102e", "--panel": "#321c4a", "--chip": "#321c4a", "--border": "#4a2b6b",    
        "--ink": "#fbf7ff", "--muted": "#c4b5fd", "--brand": "#f3e8ff", "--accent": "#a78bfa", "--bad": "#f43f5e",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },
    "iso_carbon": { 
      name: "4. Iso: Graphite",
      colors: {
        "--bg": "#18181b", "--panel": "#27272a", "--chip": "#27272a", "--border": "#3f3f46",    
        "--ink": "#fafafa", "--muted": "#a1a1aa", "--brand": "#e4e4e7", "--accent": "#52525b", "--bad": "#ef4444",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },
    "iso_indigo": { 
      name: "5. Iso: Midnight",
      colors: {
        "--bg": "#0f1029", "--panel": "#1c1e42", "--chip": "#1c1e42", "--border": "#2d3061",    
        "--ink": "#eef2ff", "--muted": "#a5b4fc", "--brand": "#e0e7ff", "--accent": "#818cf8", "--bad": "#f43f5e",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },
    "iso_sky": { 
      name: "6. Iso: Stratosphere",
      colors: {
        "--bg": "#082f49", "--panel": "#0c4a6e", "--chip": "#0c4a6e", "--border": "#075985",    
        "--ink": "#f0f9ff", "--muted": "#7dd3fc", "--brand": "#e0f2fe", "--accent": "#38bdf8", "--bad": "#f43f5e",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },

    // ========================================================================
    // GROUP B (7-12): THE INK LAB (Light Mode / Stone Paper / Deep Brand)
    // ========================================================================
    "navy_exp": {
      name: "7. Paper: Royal Navy",
      colors: {
        "--bg": "#f5f5f4", "--panel": "#e7e5e4", "--chip": "#e7e5e4", "--border": "#d6d3d1",    
        "--ink": "#292524", "--muted": "#57534e", "--brand": "#1e40af", "--accent": "#3b82f6", "--bad": "#b91c1c",
        "--btn-bg": "var(--brand)", "--btn-text": "#ffffff"
      }
    },
    "desert_exp": {
      name: "8. Paper: Expedition",
      colors: {
        "--bg": "#f5f5f4", "--panel": "#e7e5e4", "--chip": "#e7e5e4", "--border": "#d6d3d1",    
        "--ink": "#292524", "--muted": "#57534e", "--brand": "#a16207", "--accent": "#ca8a04", "--bad": "#b91c1c",
        "--btn-bg": "var(--brand)", "--btn-text": "#ffffff"
      }
    },
    "paper_exp": {
      name: "9. Paper: Carbon Copy",
      colors: {
        "--bg": "#f5f5f4", "--panel": "#e7e5e4", "--chip": "#e7e5e4", "--border": "#d6d3d1",    
        "--ink": "#292524", "--muted": "#57534e", "--brand": "#334155", "--accent": "#475569", "--bad": "#b91c1c",
        "--btn-bg": "var(--brand)", "--btn-text": "#ffffff"
      }
    },
    "emerald_exp": {
      name: "10. Paper: Emerald",
      colors: {
        "--bg": "#f5f5f4", "--panel": "#e7e5e4", "--chip": "#e7e5e4", "--border": "#d6d3d1",    
        "--ink": "#292524", "--muted": "#57534e", "--brand": "#047857", "--accent": "#10b981", "--bad": "#b91c1c",
        "--btn-bg": "var(--brand)", "--btn-text": "#ffffff"
      }
    },
    "luftwaffe_exp": {
      name: "11. Paper: Intercept",
      colors: {
        "--bg": "#f5f5f4", "--panel": "#e7e5e4", "--chip": "#e7e5e4", "--border": "#d6d3d1",    
        "--ink": "#292524", "--muted": "#57534e", "--brand": "#3730a3", "--accent": "#6366f1", "--bad": "#b91c1c",
        "--btn-bg": "var(--brand)", "--btn-text": "#ffffff"
      }
    },
    "sonar_exp": {
      name: "12. Paper: Cipher",
      colors: {
        "--bg": "#f5f5f4", "--panel": "#e7e5e4", "--chip": "#e7e5e4", "--border": "#d6d3d1",    
        "--ink": "#292524", "--muted": "#57534e", "--brand": "#7e22ce", "--accent": "#a855f7", "--bad": "#b91c1c",
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
    },

    // ========================================================================
    // GROUP D (19-22): LEGACY ADDITIONS
    // ========================================================================
    "legacy_navy": { 
      name: "19. Legacy: Navy",
      colors: {
        "--bg": "#0b1020",
        "--panel": "#111833",
        "--chip": "#1a2347", 
        "--border": "#26325b",
        "--ink": "#e6ecff",
        "--muted": "#a7b0cc",
        "--brand": "#8bb9ff",
        "--accent": "#c0ffe1",
        "--bad": "#ff6b6b",
        "--btn-bg": "linear-gradient(135deg, #1a2a6b 0%, #0f172a 100%)", 
        "--btn-text": "#e6ecff" 
      }
    },

    "legacy_army": { 
      name: "20. Legacy: Army",
      colors: {
        "--bg": "#051a10",
        "--panel": "#0f2e1d",
        "--chip": "#1a3b29", 
        "--border": "#1f4f35",    
        "--ink": "#e3fcec",
        "--muted": "#8abfac",     
        "--brand": "#6ee7b7",
        "--accent": "#34d399",    
        "--bad": "#ef4444",
        "--btn-bg": "linear-gradient(135deg, #0f2e1d 0%, #051a10 100%)", 
        "--btn-text": "#e3fcec"
      }
    },

    // CHANGED: SLOT 21
    "legacy_marine": { 
      name: "21. Legacy: Marine",
      colors: {
        "--bg": "#1a120b",        // Deepest Coffee
        "--panel": "#2e2015",     // Rich Leather
        "--chip": "#3d2b1f",      // Distinct Lighter Brown
        "--border": "#4f3829",    
        "--ink": "#fceee3",       // Bone White
        "--muted": "#bf9f8a",     
        "--brand": "#fbbf24",     // Amber Gold
        "--accent": "#f59e0b",    
        "--bad": "#ef4444",
        "--btn-bg": "linear-gradient(135deg, #2e2015 0%, #1a120b 100%)", 
        "--btn-text": "#fceee3"
      }
    },

    // CHANGED: SLOT 22
    "legacy_carbon": { 
      name: "22. Legacy: Carbon",
      colors: {
        "--bg": "#09090b",        // Deepest Zinc
        "--panel": "#18181b",     // Dark Charcoal
        "--chip": "#27272a",      // Distinct Lighter Grey
        "--border": "#3f3f46",    
        "--ink": "#fafafa",       // Pure White
        "--muted": "#a1a1aa",     
        "--brand": "#e4e4e7",     // Platinum
        "--accent": "#ffffff",    
        "--bad": "#ef4444",
        "--btn-bg": "linear-gradient(135deg, #18181b 0%, #09090b 100%)", 
        "--btn-text": "#fafafa"
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
