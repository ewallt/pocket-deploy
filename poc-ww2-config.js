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
    
    // 1. HIGH COMMAND + KHAKI
    "navy": { 
      name: "1. HC (Khaki)",
      colors: {
        "--bg": "#022c22", "--panel": "#064e3b", "--ink": "#ecfdf5", "--muted": "#6ee7b7",
        "--brand": "#d4b483", 
        "--accent": "#f59e0b", "--border": "#065f46", "--chip": "#064e3b", "--bad": "#ef4444",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },

    // 2. MOCHA + KHAKI
    "desert": { 
      name: "2. Mocha (Khaki)",
      colors: {
        "--bg": "#292524", "--panel": "#44403c", "--ink": "#f5f5f4", "--muted": "#a8a29e",
        "--brand": "#d4b483", 
        "--accent": "#38bdf8", "--border": "#57534e", "--chip": "#57534e", "--bad": "#ef4444",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },

    // 3. HIGH COMMAND + LIME
    "paper": { 
      name: "3. HC (Lime)",
      colors: {
        "--bg": "#022c22", "--panel": "#064e3b", "--ink": "#ecfdf5", "--muted": "#6ee7b7",
        "--brand": "#d9f99d", 
        "--accent": "#f59e0b", "--border": "#065f46", "--chip": "#064e3b", "--bad": "#ef4444",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },

    // 4. MOCHA + LIME
    "emerald": { 
      name: "4. Mocha (Lime)",
      colors: {
        "--bg": "#292524", "--panel": "#44403c", "--ink": "#f5f5f4", "--muted": "#a8a29e",
        "--brand": "#d9f99d", 
        "--accent": "#38bdf8", "--border": "#57534e", "--chip": "#57534e", "--bad": "#ef4444",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },

    // 5. HIGH COMMAND + CREAM
    "luftwaffe": { 
      name: "5. HC (Cream)",
      colors: {
        "--bg": "#022c22", "--panel": "#064e3b", "--ink": "#ecfdf5", "--muted": "#6ee7b7",
        "--brand": "#fef08a", 
        "--accent": "#f59e0b", "--border": "#065f46", "--chip": "#064e3b", "--bad": "#ef4444",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },

    // 6. MOCHA + CREAM
    "sonar": { 
      name: "6. Mocha (Cream)",
      colors: {
        "--bg": "#292524", "--panel": "#44403c", "--ink": "#f5f5f4", "--muted": "#a8a29e",
        "--brand": "#fef08a", 
        "--accent": "#38bdf8", "--border": "#57534e", "--chip": "#57534e", "--bad": "#ef4444",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },

    // ========================================================================
    // GROUP B: FINAL ROSTER
    // ========================================================================
    
    // 7. NAVY (Blue)
    "navy_exp": {
      name: "7. Navy (Final)",
      colors: {
        "--bg": "#0b1020", "--panel": "#111833", "--ink": "#e6ecff", "--muted": "#a7b0cc",
        "--brand": "#8bb9ff", "--accent": "#c0ffe1", "--border": "#26325b", "--chip": "#1a2347", "--bad": "#ff6b6b",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },
    
    // 8. DESERT (Cream - Selected Winner)
    "desert_exp": {
      name: "8. Desert (Final)",
      colors: {
        "--bg": "#292524", "--panel": "#44403c", "--ink": "#f5f5f4", "--muted": "#a8a29e",
        "--brand": "#d4b483", /* KHAKI (Swapped to Khaki as requested in previous turn logic, or do you want Cream?) */ 
        /* Wait, you said "Mocha gets Khaki" in the previous turn. I will stick to Khaki here. */
        "--brand": "#d4b483", 
        "--accent": "#d97706", "--border": "#57534e", "--chip": "#57534e", "--bad": "#f87171",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },
    
    // 9. ARCHIVES (Teal/Sepia)
    "paper_exp": {
      name: "9. Archives (Final)",
      colors: {
        "--bg": "#f5f5f4", "--panel": "#e7e5e4", "--ink": "#292524", "--muted": "#57534e",
        "--brand": "#0f766e", "--accent": "#d97706", "--border": "#d6d3d1", "--chip": "#e7e5e4", "--bad": "#b91c1c",
        "--btn-bg": "var(--brand)", "--btn-text": "#ffffff"
      }
    },
    
    // 10. HIGH COMMAND (Cream - Selected Winner)
    "emerald_exp": {
      name: "10. High Command (Final)",
      colors: {
        "--bg": "#022c22", "--panel": "#064e3b", "--ink": "#ecfdf5", "--muted": "#6ee7b7",
        "--brand": "#fef08a", /* CREAM */
        "--accent": "#f59e0b", "--border": "#065f46", "--chip": "#064e3b", "--bad": "#ef4444",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },
    
    // 11. LUFTWAFFE (Ice Blue)
    "luftwaffe_exp": {
      name: "11. Luftwaffe (Final)",
      colors: {
        "--bg": "#1e293b", "--panel": "#334155", "--ink": "#f1f5f9", "--muted": "#cbd5e1",
        "--brand": "#a5f3fc", "--accent": "#22d3ee", "--border": "#475569", "--chip": "#475569", "--bad": "#f87171",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },
    
    // 12. SONAR (Coral - Research Based)
    "sonar_exp": {
      name: "12. Sonar (Final)",
      colors: {
        "--bg": "#042f2e",      // Deep Teal
        "--panel": "#115e59",   // Medium Teal
        "--ink": "#ccfbf1",     // Mint White
        "--muted": "#5eead4",   // Cyan Text
        "--brand": "#fb7185",   // CORAL / SALMON (Complementary)
        "--accent": "#2dd4bf",  // Teal Accent
        "--border": "#134e4a",
        "--chip": "#134e4a",
        "--bad": "#f43f5e",
        "--btn-bg": "var(--brand)", "--btn-text": "#042f2e" /* Dark text on Coral */
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
