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
    // GROUP A: CLASSIC (Hardcoded Blue Buttons)
    // ========================================================================
    
    "navy": {
      name: "Navy Command",
      colors: {
        "--bg": "#0b1020", "--panel": "#111833", "--ink": "#e6ecff", "--muted": "#a7b0cc",
        "--brand": "#8bb9ff", "--accent": "#c0ffe1", "--border": "#26325b", "--chip": "#1a2347", "--bad": "#ff6b6b",
        "--btn-bg": "linear-gradient(135deg, #1a2a6b 0%, #0f172a 100%)", "--btn-text": "#e6ecff"
      }
    },
    "desert": {
      name: "Desert Rats",
      colors: {
        "--bg": "#292524", "--panel": "#44403c", "--ink": "#f5f5f4", "--muted": "#a8a29e",
        "--brand": "#fbbf24", "--accent": "#d97706", "--border": "#57534e", "--chip": "#57534e", "--bad": "#f87171",
        "--btn-bg": "linear-gradient(135deg, #1a2a6b 0%, #0f172a 100%)", "--btn-text": "#e6ecff"
      }
    },
    "paper": {
      name: "Archives",
      colors: {
        "--bg": "#f5f5f4", "--panel": "#e7e5e4", "--ink": "#292524", "--muted": "#57534e",
        "--brand": "#0f766e", "--accent": "#d97706", "--border": "#d6d3d1", "--chip": "#e7e5e4", "--bad": "#b91c1c",
        "--btn-bg": "linear-gradient(135deg, #1a2a6b 0%, #0f172a 100%)", "--btn-text": "#e6ecff"
      }
    },
    "emerald": {
      name: "High Command",
      colors: {
        "--bg": "#022c22", "--panel": "#064e3b", "--ink": "#ecfdf5", "--muted": "#6ee7b7",
        "--brand": "#fbbf24", "--accent": "#f59e0b", "--border": "#065f46", "--chip": "#064e3b", "--bad": "#ef4444",
        "--btn-bg": "linear-gradient(135deg, #1a2a6b 0%, #0f172a 100%)", "--btn-text": "#e6ecff"
      }
    },
    "luftwaffe": {
      name: "Luftwaffe",
      colors: {
        "--bg": "#1e293b", "--panel": "#334155", "--ink": "#f1f5f9", "--muted": "#cbd5e1",
        "--brand": "#a5f3fc", "--accent": "#22d3ee", "--border": "#475569", "--chip": "#475569", "--bad": "#f87171",
        "--btn-bg": "linear-gradient(135deg, #1a2a6b 0%, #0f172a 100%)", "--btn-text": "#e6ecff"
      }
    },
    // 6. SONAR SWEEP (Teal/Deep Ocean)
    "sonar": {
      name: "Sonar Sweep",
      colors: {
        "--bg": "#042f2e",      // Teal 950 (Very dark)
        "--panel": "#115e59",   // Teal 800
        "--ink": "#ccfbf1",     // Mint White
        "--muted": "#5eead4",   // Bright Cyan text
        "--brand": "#2dd4bf",   // Teal 400 (The Pop)
        "--accent": "#fbbf24",  // Amber
        "--border": "#134e4a",
        "--chip": "#134e4a",
        "--bad": "#f43f5e",
        "--btn-bg": "linear-gradient(135deg, #1a2a6b 0%, #0f172a 100%)", "--btn-text": "#e6ecff"
      }
    },

    // ========================================================================
    // GROUP B: EXPERIMENTAL (Buttons match Brand Color)
    // ========================================================================
    
    "navy_exp": {
      name: "Navy (Exp)",
      colors: {
        "--bg": "#0b1020", "--panel": "#111833", "--ink": "#e6ecff", "--muted": "#a7b0cc",
        "--brand": "#8bb9ff", "--accent": "#c0ffe1", "--border": "#26325b", "--chip": "#1a2347", "--bad": "#ff6b6b",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },
    "desert_exp": {
      name: "Desert (Exp)",
      colors: {
        "--bg": "#292524", "--panel": "#44403c", "--ink": "#f5f5f4", "--muted": "#a8a29e",
        "--brand": "#fbbf24", "--accent": "#d97706", "--border": "#57534e", "--chip": "#57534e", "--bad": "#f87171",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },
    "paper_exp": {
      name: "Archives (Exp)",
      colors: {
        "--bg": "#f5f5f4", "--panel": "#e7e5e4", "--ink": "#292524", "--muted": "#57534e",
        "--brand": "#0f766e", "--accent": "#d97706", "--border": "#d6d3d1", "--chip": "#e7e5e4", "--bad": "#b91c1c",
        "--btn-bg": "var(--brand)", "--btn-text": "#ffffff"
      }
    },
    "emerald_exp": {
      name: "High Command (Exp)",
      colors: {
        "--bg": "#022c22", "--panel": "#064e3b", "--ink": "#ecfdf5", "--muted": "#6ee7b7",
        "--brand": "#fbbf24", "--accent": "#f59e0b", "--border": "#065f46", "--chip": "#064e3b", "--bad": "#ef4444",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },
    "luftwaffe_exp": {
      name: "Luftwaffe (Exp)",
      colors: {
        "--bg": "#1e293b", "--panel": "#334155", "--ink": "#f1f5f9", "--muted": "#cbd5e1",
        "--brand": "#a5f3fc", "--accent": "#22d3ee", "--border": "#475569", "--chip": "#475569", "--bad": "#f87171",
        "--btn-bg": "var(--brand)", "--btn-text": "var(--panel)"
      }
    },
    // 12. SONAR SWEEP EXP (Teal buttons)
    "sonar_exp": {
      name: "Sonar (Exp)",
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
