const APP_CONFIG = {
  // 1. THEMES: Defines CSS variables for different aesthetics
  themes: {
    default: {
      name: "Navy Command",
      colors: {
        "--bg": "#0b1020",
        "--panel": "#111833",
        "--ink": "#e6ecff",
        "--muted": "#a7b0cc",
        "--brand": "#8bb9ff",
        "--accent": "#c0ffe1",
        "--border": "#26325b",
        "--chip": "#1a2347",
        "--bad": "#ff6b6b"
      }
    },
    sepia: {
      name: "Field Report",
      colors: {
        "--bg": "#f4ecd8",
        "--panel": "#eaddcf",
        "--ink": "#2b2118",
        "--muted": "#5c4b3e",
        "--brand": "#8b0000",
        "--accent": "#d4a017",
        "--border": "#c7b299",
        "--chip": "#d6c4b0",
        "--bad": "#a33"
      }
    }
  },

  // 2. SECTION SKELETON: The 7 Hard-coded Accordions
  // Maps data keys to UI titles and specific renderers
  sections: [
    { key: "context",       title: "🎯 Strategic Context",      type: "list" },
    { key: "forces",        title: "🪖 Forces & Commanders",    type: "list" },
    { key: "timeline",      title: "📜 Campaign Timeline",      type: "timeline" },
    { key: "turningPoints", title: "⚡ Turning Points",         type: "list" },
    { key: "outcomes",      title: "🏁 Outcomes & Consequences",type: "list" },
    { key: "significance",  title: "🏰 Historical Significance",type: "list" },
    { key: "sources",       title: "📚 Sources",                type: "source" }
  ],

  // 3. GLOBAL UI STRINGS
  labels: {
    loading: "› Loading...",
    errorTitle: "› Error",
    errorBody: "404: Battle Not Found",
    summaryHeader: "Core Summary",
    backToHub: "WWII Hub"
  }
};
