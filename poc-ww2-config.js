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
    // GROUP A: THE ISOMORPHIC LAB (All Structure = High Command)
    // Structure: Chip == Panel. Button Text == Panel.
    // ========================================================================
    
    // 1. MOCHA (Requested Baseline)
    "navy": { 
      name: "1. Lab: Mocha",
      colors: {
        "--bg": "#292524",        // Warm Dark Brown
        "--panel": "#44403c",     // Stone Brown
        "--chip": "#44403c",      // = PANEL (The Isomorphic Rule)
        "--border": "#57534e",    // Lighter Border
        
        "--ink": "#f5f5f4",       // White Text
        "--muted": "#a8a29e",     // Grey Text
        
        "--brand": "#d4b483",     // Khaki Brand
        "--accent": "#d97706",    // Amber Accent
        "--bad": "#ef4444",       // Red Alert
        
        "--btn-bg": "var(--brand)", 
        "--btn-text": "var(--panel)" // = PANEL
      }
    },

    // 2. MIDNIGHT (Deep Blue / Gold)
    "desert": { 
      name: "2. Lab: Midnight",
      colors: {
        "--bg": "#020617",        // Almost Black Blue
        "--panel": "#0f172a",     // Slate 900
        "--chip": "#0f172a",      // = PANEL
        "--border": "#1e293b",    // Slate 800
        
        "--ink": "#f8fafc",       // Slate 50
        "--muted": "#94a3b8",     // Slate 400
        
        "--brand": "#fbbf24",     // Bright Gold
        "--accent": "#f59e0b", 
        "--bad": "#ef4444",
        
        "--btn-bg": "var(--brand)", 
        "--btn-text": "var(--panel)"
      }
    },

    // 3. RED ALERT (Crimson / Orange)
    "paper": { 
      name: "3. Lab: Red Alert",
      colors: {
        "--bg": "#2a0a0a",        // Dark Blood
        "--panel": "#450a0a",     // Red 950
        "--chip": "#450a0a",      // = PANEL
        "--border": "#7f1d1d",    // Red 900
        
        "--ink": "#ffe4e6",       // Rose White
        "--muted": "#fda4af",     // Rose 300
        
        "--brand": "#fb923c",     // Orange (High Viz)
        "--accent": "#f43f5e", 
        "--bad": "#991b1b",
        
        "--btn-bg": "var(--brand)", 
        "--btn-text": "var(--panel)"
      }
    },

    // 4. CONCRETE (Grey / Toxic Green)
    "emerald": { 
      name: "4. Lab: Concrete",
      colors: {
        "--bg": "#18181b",        // Zinc 950
        "--panel": "#27272a",     // Zinc 900
        "--chip": "#27272a",      // = PANEL
        "--border": "#3f3f46",    // Zinc 700
        
        "--ink": "#f4f4f5",       // Zinc 100
        "--muted": "#a1a1aa",     // Zinc 400
        
        "--brand": "#a3e635",     // Lime 400
        "--accent": "#bef264", 
        "--bad": "#ef4444",
        
        "--btn-bg": "var(--brand)", 
        "--btn-text": "var(--panel)"
      }
    },

    // 5. ROYAL PURPLE (Plum / Lavender)
    "luftwaffe": { 
      name: "5. Lab: Royal",
      colors: {
        "--bg": "#2e1065",        // Violet 950
        "--panel": "#4c1d95",     // Violet 900
        "--chip": "#4c1d95",      // = PANEL
        "--border": "#5b21b6",    // Violet 800
        
        "--ink": "#f3e8ff",       // Purple 100
        "--muted": "#c4b5fd",     // Purple 300
        
        "--brand": "#e879f9",     // Fuchsia 400
        "--accent": "#d8b4fe", 
        "--bad": "#fb7185",
        
        "--btn-bg": "var(--brand)", 
        "--btn-text": "var(--panel)"
      }
    },

    // 6. BLUEPRINT (Deep Blue / White)
    "sonar": { 
      name: "6. Lab: Blueprint",
      colors: {
        "--bg": "#0c4a6e",        // Sky 900
        "--panel": "#075985",     // Sky 800
        "--chip": "#075985",      // = PANEL
        "--border": "#0369a1",    // Sky 700
        
        "--ink": "#f0f9ff",       // Sky 50
        "--muted": "#bae6fd",     // Sky 200
        
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
        "--brand": "#d4b483", "--accent": "#d97706", "--border": "#57534e", "--chip": "#57534e", "--bad": "#f87171",
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
        "--brand": "#fef08a", "--accent": "#f59e0b", "--border": "#065f46", "--chip": "#064e3b", "--bad": "#ef4444",
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
