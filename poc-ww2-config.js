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
    // GROUP A: YELLOW TESTING LAB (Variations of "Mocha/Desert")
    // ========================================================================
    
    // 1. ODD (Keep Navy)
    "navy": {
      name: "1. Navy (Control)",
      colors: {
        "--bg": "#0b1020", "--panel": "#111833", "--ink": "#e6ecff", "--muted": "#a7b0cc",
        "--brand": "#8bb9ff", "--accent": "#c0ffe1", "--border": "#26325b", "--chip": "#1a2347", "--bad": "#ff6b6b",
        "--btn-bg": "linear-gradient(135deg, #1a2a6b 0%, #0f172a 100%)", "--btn-text": "#e6ecff"
      }
    },

    // 2. EVEN (TEST A: KHAKI / SAND) - Desaturated, Earthy
    "desert_sand": {
      name: "2. Desert (Test: Khaki)",
      colors: {
        "--bg": "#292524", "--panel": "#44403c", "--ink": "#f5f5f4", "--muted": "#a8a29e",
        "--brand": "#d4b483", /* KHAKI: Low saturation, realistic sand */
        "--accent": "#38bdf8", "--border": "#57534e", "--chip": "#57534e", "--bad": "#ef4444",
        "--btn-bg": "linear-gradient(135deg, #1a2a6b 0%, #0f172a 100%)", "--btn-text": "#e6ecff"
      }
    },

    // 3. ODD (Keep Paper)
    "paper": {
      name: "3. Archives (Control)",
      colors: {
        "--bg": "#f5f5f4", "--panel": "#e7e5e4", "--ink": "#292524", "--muted": "#57534e",
        "--brand": "#0f766e", "--accent": "#d97706", "--border": "#d6d3d1", "--chip": "#e7e5e4", "--bad": "#b91c1c",
        "--btn-bg": "linear-gradient(135deg, #1a2a6b 0%, #0f172a 100%)", "--btn-text": "#e6ecff"
      }
    },

    // 4. EVEN (TEST B: VIVID / CANARY) - Bright, High Contrast
    "desert_vivid": {
      name: "4. Desert (Test: Vivid)",
      colors: {
        "--bg": "#292524", "--panel": "#44403c", "--ink": "#f5f5f4", "--muted": "#a8a29e",
        "--brand": "#facc15", /* VIVID YELLOW: Pure, bright yellow-gold */
        "--accent": "#38bdf8", "--border": "#57534e", "--chip": "#57534e", "--bad": "#ef4444",
        "--btn-bg": "linear-gradient(135deg, #1a2a6b 0%, #0f172a 100%)", "--btn-text": "#e6ecff"
      }
    },

    // 5. ODD (Keep Luftwaffe)
    "luftwaffe": {
      name: "5. Luftwaffe (Control)",
      colors: {
        "--bg": "#1e293b", "--panel": "#334155", "--ink": "#f1f5f9", "--muted": "#cbd5e1",
        "--brand": "#a5f3fc", "--accent": "#22d3ee", "--border": "#475569", "--chip": "#475569", "--bad": "#f87171",
        "--btn-bg": "linear-gradient(135deg, #1a2a6b 0%, #0f172a 100%)", "--btn-text": "#e6ecff"
      }
    },

    // 6. EVEN (TEST C: SULPHUR / GREENISH) - "Vivid Greenish Yellow" from image
    "desert_sulphur": {
      name: "6. Desert (Test: Sulphur)",
      colors: {
        "--bg": "#292524", "--panel": "#44403c", "--ink": "#f5f5f4", "--muted": "#a8a29e",
        "--brand": "#d9f99d", /* LIME/SULPHUR: Greenish tint */
        "--accent": "#38bdf8", "--border": "#57534e", "--chip": "#57534e", "--bad": "#ef4444",
        "--btn-bg": "linear-gradient(135deg, #1a2a6b 0%, #0f172a 100%)", "--btn-text": "#e6ecff"
      }
    },

    // ========================================================================
    // GROUP B: EXPERIMENTAL (Full Roster, Matched Buttons)
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
        "--brand": "#fbbf24", /* AMBER GOLD (Original) */
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
        "--brand": "#fcd34d", /* Updated to a lighter, cleaner gold */
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
        "--brand": "#2dd4bf", "--accent": "#fbbf24", "--border": "#134e4a", "--chip": "#134e4a", "--bad": "#f43f5e",
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
