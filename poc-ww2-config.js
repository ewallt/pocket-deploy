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
    // GROUP A: THE BLUEPRINT LAB (1-6)
    // Dark Background / White Brand / Panel Text on Buttons
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
    // GROUP B: THE PAPER LAB (7-12)
    // Light Background / Dark Brand / White Text on Buttons
    // ========================================================================

    "paper_teal": { 
      name: "7. Paper: Teal (Orig)",
      colors: {
        "--bg": "#f5f5f4", "--panel": "#e7e5e4", "--chip": "#e7e5e4", "--border": "#d6d3d1",    
        "--ink": "#292524", "--muted": "#57534e",     
        "--brand": "#0f766e", /* Deep Teal */
        "--accent": "#d97706", "--bad": "#b91c1c",
        "--btn-bg": "var(--brand)", 
        "--btn-text": "#ffffff" /* WHITE TEXT override */
      }
    },
    "paper_navy": { 
      name: "8. Paper: Royal Navy",
      colors: {
        "--bg": "#f8fafc", "--panel": "#e2e8f0", "--chip": "#e2e8f0", "--border": "#cbd5e1",    
        "--ink": "#0f172a", "--muted": "#475569",     
        "--brand": "#1e40af", /* Deep Blue */
        "--accent": "#3b82f6", "--bad": "#b91c1c",
        "--btn-bg": "var(--brand)", 
        "--btn-text": "#ffffff"
      }
    },
    "paper_crimson": { 
      name: "9. Paper: Top Secret",
      colors: {
        "--bg": "#fff1f2", "--panel": "#ffe4e6", "--chip": "#ffe4e6", "--border": "#fecdd3",    
        "--ink": "#881337", "--muted": "#9f1239",     
        "--brand": "#be123c", /* Deep Rose */
        "--accent": "#e11d48", "--bad": "#991b1b",
        "--btn-bg": "var(--brand)", 
        "--btn-text": "#ffffff"
      }
    },
    "paper_olive": { 
      name: "10. Paper: Field Map",
      colors: {
        "--bg": "#f7fee7", "--panel": "#ecfccb", "--chip": "#ecfccb", "--border": "#d9f99d",    
        "--ink": "#365314", "--muted": "#4d7c0f",     
        "--brand": "#65a30d", /* Olive */
        "--accent": "#84cc16", "--bad": "#b91c1c",
        "--btn-bg": "var(--brand)", 
        "--btn-text": "#ffffff"
      }
    },
    "paper_purple": { 
      name: "11. Paper: Encryption",
      colors: {
        "--bg": "#faf5ff", "--panel": "#f3e8ff", "--chip": "#f3e8ff", "--border": "#e9d5ff",    
        "--ink": "#3b0764", "--muted": "#6b21a8",     
        "--brand": "#7e22ce", /* Deep Purple */
        "--accent": "#a855f7", "--bad": "#b91c1c",
        "--btn-bg": "var(--brand)", 
        "--btn-text": "#ffffff"
      }
    },
    "paper_manila": { 
      name: "12. Paper: Manila",
      colors: {
        "--bg": "#fef3c7", "--panel": "#fde68a", "--chip": "#fde68a", "--border": "#fcd34d",    
        "--ink": "#451a03", "--muted": "#92400e",     
        "--brand": "#b45309", /* Dark Amber/Brown */
        "--accent": "#d97706", "--bad": "#b91c1c",
        "--btn-bg": "var(--brand)", 
        "--btn-text": "#ffffff"
      }
    },

    // ========================================================================
    // GROUP C: FINAL ROSTER (13-18)
    // The Selected Favorites
    // ========================================================================
    
    "navy_exp": {
      name: "13. Navy (Final)",
      colors: {
        "--bg": "#0b1020", "--panel": "#111833", "--ink": "#e6ecff", "--muted": "#a7b0cc",
        "--brand": "#8bb9ff", "--accent": "#c0ffe1", "--border": "#26325b", "--chip": "#1a2347", "--bad": "#ff6b6b",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },
    "desert_exp": {
      name: "14. Desert (Final)",
      colors: {
        "--bg": "#292524", "--panel": "#44403c", "--ink": "#f5f5f4", "--muted": "#a8a29e",
        "--brand": "#d4b483", "--accent": "#d97706", "--border": "#57534e", "--chip": "#57534e", "--bad": "#f87171",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },
    "paper_exp": {
      name: "15. Archives (Final)",
      colors: {
        "--bg": "#f5f5f4", "--panel": "#e7e5e4", "--ink": "#292524", "--muted": "#57534e",
        "--brand": "#0f766e", "--accent": "#d97706", "--border": "#d6d3d1", "--chip": "#e7e5e4", "--bad": "#b91c1c",
        "--btn-bg": "var(--brand)", "--btn-text": "#ffffff"
      }
    },
    "emerald_exp": {
      name: "16. High Command (Final)",
      colors: {
        "--bg": "#022c22", "--panel": "#064e3b", "--ink": "#ecfdf5", "--muted": "#6ee7b7",
        "--brand": "#fef08a", "--accent": "#f59e0b", "--border": "#065f46", "--chip": "#064e3b", "--bad": "#ef4444",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },
    "luftwaffe_exp": {
      name: "17. Luftwaffe (Final)",
      colors: {
        "--bg": "#1e293b", "--panel": "#334155", "--ink": "#f1f5f9", "--muted": "#cbd5e1",
        "--brand": "#a5f3fc", "--accent": "#22d3ee", "--border": "#475569", "--chip": "#475569", "--bad": "#f87171",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },
    "sonar_exp": {
      name: "18. Sonar (Final)",
      colors: {
        "--bg": "#042f2e", "--panel": "#115e59", "--ink": "#ccfbf1", "--muted": "#5eead4",
        "--brand": "#fef9c3", "--accent": "#2dd4bf", "--border": "#134e4a", "--chip": "#134e4a", "--bad": "#f43f5e",
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
