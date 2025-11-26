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
    // GROUP A: THE TEST LAB (Unchanged)
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
    // GROUP B: FINAL ROSTER (Updated 9, 10, 12)
    // ========================================================================
    
    // 7. NAVY (Kept - You liked this)
    "navy_exp": {
      name: "7. Navy (Final)",
      colors: {
        "--bg": "#0b1020", "--panel": "#111833", "--ink": "#e6ecff", "--muted": "#a7b0cc",
        "--brand": "#8bb9ff", "--accent": "#c0ffe1", "--border": "#26325b", "--chip": "#1a2347", "--bad": "#ff6b6b",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },
    
    // 8. DESERT (Kept - You liked this)
    "desert_exp": {
      name: "8. Desert (Final)",
      colors: {
        "--bg": "#292524", "--panel": "#44403c", "--ink": "#f5f5f4", "--muted": "#a8a29e",
        "--brand": "#d4b483", "--accent": "#d97706", "--border": "#57534e", "--chip": "#57534e", "--bad": "#f87171",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },
    
    // 9. BLACK OPS (New: Carbon/Zinc - Replaces Archives)
    "paper_exp": {
      name: "9. Black Ops (Final)",
      colors: {
        "--bg": "#09090b",      // Zinc 950 (True Black)
        "--panel": "#27272a",   // Zinc 800 (Dark Grey)
        "--chip": "#27272a",    // = PANEL
        "--border": "#3f3f46",  // Zinc 700
        "--ink": "#fafafa",     // Zinc 50 (White)
        "--muted": "#a1a1aa",   // Zinc 400
        "--brand": "#e4e4e7",   // Zinc 200 (Off-White Brand)
        "--accent": "#ffffff",  
        "--bad": "#ef4444",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },
    
    // 10. JUNGLE (New: Olive Drab - Replaces High Command)
    "emerald_exp": {
      name: "10. Jungle (Final)",
      colors: {
        "--bg": "#1a2e05",      // Deep Olive
        "--panel": "#365314",   // Olive 900
        "--chip": "#365314",    // = PANEL
        "--border": "#4d7c0f",  // Olive 700
        "--ink": "#ecfccb",     // Lime 100
        "--muted": "#bef264",   // Lime 400
        "--brand": "#facc15",   // Yellow Gold
        "--accent": "#a3e635",  
        "--bad": "#ef4444",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },
    
    // 11. LUFTWAFFE (Kept - You liked this)
    "luftwaffe_exp": {
      name: "11. Luftwaffe (Final)",
      colors: {
        "--bg": "#1e293b", "--panel": "#334155", "--ink": "#f1f5f9", "--muted": "#cbd5e1",
        "--brand": "#a5f3fc", "--accent": "#22d3ee", "--border": "#475569", "--chip": "#475569", "--bad": "#f87171",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },
    
    // 12. RED ARMY (New: Maroon/Amber - Replaces Sonar)
    "sonar_exp": {
      name: "12. Red Army (Final)",
      colors: {
        "--bg": "#450a0a",      // Red 950
        "--panel": "#7f1d1d",   // Red 900
        "--chip": "#7f1d1d",    // = PANEL
        "--border": "#991b1b",  // Red 800
        "--ink": "#fef2f2",     // Rose 50
        "--muted": "#fecaca",   // Rose 200
        "--brand": "#fbbf24",   // Soviet Amber
        "--accent": "#f59e0b",  
        "--bad": "#f87171",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
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
