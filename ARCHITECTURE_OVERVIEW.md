# Architecture Overview — Pocket Deploy Repository

**Last Updated:** 2025-11-15
**Repository:** ewallt/pocket-deploy
**Deployment:** GitHub Pages (`https://ewallt.github.io/pocket-deploy/`)
**Total Directories:** ~673

---

## 🎯 Repository Purpose

The **pocket-deploy** repository is a multi-tenant static site hosting educational and reference content across multiple domains:
- Mathematics (Real Analysis, Galois Theory, Gödel's Incompleteness, Cantor, etc.)
- Theology (Gospel Hub, Open Theism, Character of God)
- History (WW2, Revolutionary War, Enlightenment, Berlin Wall, Industrial Revolution)
- General Knowledge (Aging, Art, Critical Thinking)

The architecture prioritizes:
1. **Self-contained HTML files** - Each page is standalone with inline CSS/JS
2. **Flat directory structure** - All content at root level, no deep nesting
3. **Consistent design systems** - Shared color tokens and component patterns
4. **No build step** - Direct HTML deployment to GitHub Pages
5. **Mobile-first responsive design** - Works across all device sizes

---

## 📁 Directory Structure Overview

All content lives in **flat, self-contained directories** at the repository root. Each directory contains a single `index.html` file (with rare exceptions).

### Naming Conventions

The repository uses **prefix-based naming** to organize content:

| Prefix | Purpose | Example |
|--------|---------|---------|
| `dashboard-library-*` | Library entry points for Colorful Reader | `dashboard-library-open-theism-claude` |
| `dashboard-*` | Series dashboards or collection dashboards | `dashboard-open-theism-claude-s01` |
| `{topic}-{series}-{article}` | Individual articles in a series | `open-theism-claude-s01-1` |
| `is-*-hub` | Hub pages with filterable grids | `is-gospel-hub`, `is-real-analysis-hub`, `is-ww2-hub` |
| `is-*` | Individual content pages or app instances | `is-biblical-faith`, `is-real-analysis-heine-borel` |
| `wiki-home-*` | Wiki system home pages | `wiki-home-theological-subjects-codex` |
| `wiki-subject-*` | Wiki subject pages | `wiki-subject-open-theism-codex` |
| `wiki-topic-*` | Wiki topic pages | `wiki-topic-foundations-codex` |
| `wiki-page-*` | Wiki individual pages | `wiki-page-what-is-open-theism-codex` |
| `tr-*` | Threaded Reader format pages | `tr-demo`, `tr-aging-dashboard` |
| `*-hub` | Development or meta-hubs | `nov-2025-development-hub` |

---

## 🏗️ Application Types

### 1. Colorful Reader Libraries

**Purpose:** Hierarchical educational content organized into libraries, series, and articles.

**Structure:**
```
dashboard-library-{topic-slug}-{ai-suffix}/
  └── index.html (library entry point, links to all series)

dashboard-{topic-slug}-{ai-suffix}-{series-id}/
  └── index.html (series dashboard, links to 5 articles)

{topic-slug}-{ai-suffix}-{series-id}-{1-5}/
  └── index.html (individual article, 7 paragraphs)
```

**AI Suffixes:**
- `-claude` — Created by Claude Code
- `-gpt` — Created by ChatGPT/OpenAI
- `-gem` — Created by Gemini
- (No suffix for legacy content)

**Series Naming:**
- `s01`, `s02`, `s03`... (zero-padded, 2 digits)

**File Count Formula:**
- 1 library + (N_series × 6) total files
- Each series = 1 dashboard + 5 articles

**Examples:**
- `dashboard-library-open-theism-claude/`
- `dashboard-open-theism-claude-s01/`
- `open-theism-claude-s01-1/`, `open-theism-claude-s01-2/`, ..., `open-theism-claude-s01-5/`

**Instructions:** `COLORFUL_READER_INSTRUCTIONS_V2.md`

**Key Features:**
- Dark/light mode support via CSS media queries
- Inline CSS using design tokens (--bg, --panel, --ink, --muted, --brand, --border)
- Navigation: Library ↔ Series Dashboard ↔ Articles (Prev/Next)
- 7 paragraphs per article (80-120 words each)
- Two content modes: substantive or structured placeholders

---

### 2. Wiki/Codex System

**Purpose:** Flat, wiki-style knowledge base with breadcrumb navigation and dynamic sidebars.

**Structure:**
```
wiki-home-{topic}-codex/
  └── index.html (home page listing subjects)

wiki-subject-{subject}-codex/
  └── index.html (subject page listing topics and pages)

wiki-topic-{topic}-codex/
  └── index.html (topic page listing pages)

wiki-page-{page}-codex/
  └── index.html (individual content page)

wiki-index-{topic}-codex.json
  └── Single JSON index powering all navigation
```

**Suffix Convention:**
- All wiki paths use `-codex` suffix

**Key Features:**
- Single JSON index file controls all navigation
- Flat sidebar rendering (children of current container only)
- Breadcrumb: Home → Subject → Topic → Page
- Embedded frontmatter JSON in each HTML file
- Optional cross-linking via `wiki-link-map-codex.json`

**Instructions:** `WIKI_AGENT_INSTRUCTIONS_V1.md`

**Example:**
- `wiki-home-theological-subjects-codex/`
- `wiki-subject-open-theism-codex/`
- `wiki-index-theological-subjects-codex.json`

---

### 3. Battle Cards (Historical Events)

**Purpose:** Interactive reference pages for battles and military campaigns.

**Structure:**
```
is-{war}-hub/
  └── index.html (filterable grid of battles)

is-{war}-{battle-slug}-{year}/
  └── index.html (individual battle page with collapsible sections)
```

**War Prefixes:**
- `is-ww2-*` — World War 2 battles
- `is-revwar-*` — Revolutionary War battles

**Year Conventions:**
- Single year: `-1942`
- Range: `-1941-44` or `-1939-45`

**Page Sections (Collapsible):**
1. 🎯 Strategic Context
2. 🪖 Forces & Commanders
3. 📜 Battle Timeline
4. ⚡ Turning Points
5. 🏁 Outcomes & Consequences
6. 🏰 Historical Significance
7. 📚 Sources

**Hub Features:**
- JavaScript array of battle metadata
- Search input for text filtering
- Tag chips for category filtering (theater, type, year, significance)
- Card grid dynamically rendered

**Instructions:** `WW2_BATTLE_CARDS_INSTRUCTIONS_V1.md`, `REVWAR_BATTLE_CARDS_INSTRUCTIONS_V1.md`

**Examples:**
- `is-ww2-hub/`
- `is-ww2-battle-of-midway-1942/`
- `is-revwar-hub/`

---

### 4. Theorem Cards (Mathematics)

**Purpose:** Interactive reference pages for mathematical theorems in real analysis.

**Structure:**
```
is-real-analysis-hub/
  └── index.html (filterable grid of theorems)

is-real-analysis-{theorem-slug}/
  └── index.html (individual theorem page)
```

**Naming:**
- Prefix: `is-real-analysis-`
- No year suffix (mathematics is timeless)
- No AI suffix

**Page Sections (Collapsible):**
1. 🧩 Concept Overview
2. 📚 Assumptions & Definitions
3. 🧮 Proof Outline
4. 💡 Key Insights & Intuition
5. ⚙️ Applications & Examples
6. 🔁 Connections & Extensions
7. 🧠 Historical Note

**Hub Features:**
- Tag-based filtering (foundations, completeness, continuity, compactness, sequences, differentiation, integration)
- Search by title, topic, keywords
- Uses same CSS tokens as battle cards

**Instructions:** `REAL_ANALYSIS_THEOREM_CARDS_INSTRUCTIONS_V1.md`

**Examples:**
- `is-real-analysis-hub/`
- `is-real-analysis-heine-borel/`
- `is-real-analysis-mean-value/`
- `is-real-analysis-fundamental-calculus/`

**Content Guidelines:**
- Uses Unicode math symbols (∀, ∃, ∈, ℝ, ℕ, ε, δ, etc.)
- Rigorous but accessible tone
- 3-5 sentence Concept Snapshot always visible
- Proof outlines use logical steps (not timeline)

---

### 5. Gospel Hub (Theology)

**Purpose:** Theology content hub with filterable topic cards.

**Structure:**
```
is-gospel-hub/
  └── index.html (hub with search and tag filtering)

is-{theology-topic}/
  └── index.html (individual theology page)
```

**Hub Configuration:**
- JavaScript array of theology topics
- Tags: cross, character, hope, grace, faith, teaching, sacrifice, conflict
- Search and tag filtering

**Children Examples:**
- `is-biblical-faith/`
- `is-cruciform-god/`
- `is-new-creation-hope/`
- `is-character-of-god-ot/`
- `is-sermon-on-the-mount/`

**Special Features:**
- Blue Letter Bible ScriptTagger plugin (KJV translation)
- Back navigation to hub from all children
- Collapsible sections for structured content
- Some children use alternate CSS tokens (otf-* variables)

**Plugin Configuration:**
```javascript
BLB.Tagger.Translation = 'KJV';
BLB.Tagger.HyperLinks = 'all';
BLB.Tagger.TargetNewWindow = true;
```

---

### 6. Threaded Reader (TR)

**Purpose:** Alternative reading experience with theme customization.

**Structure:**
```
tr-{topic}/
  └── index.html (threaded reader page)

tr-{topic}-dashboard/
  └── index.html (dashboard for TR collection)
```

**Key Differences:**
- Uses **Tailwind CSS** (CDN-loaded)
- Light/dark mode toggle
- Color scheme selection (slate, emerald, etc.)
- localStorage-based theme persistence
- Google Fonts integration (Lora serif font)

**CSS Approach:**
- CSS variables for semantic surfaces
- Prepaint script to prevent theme flicker
- Tailwind prose plugin for typography

**Examples:**
- `tr-demo/`
- `tr-aging-dashboard/`
- `tr-critical-thinker-playbook/`
- `tr-wisdom-playbook/`

---

### 7. Development/Meta Hubs

**Purpose:** Navigation dashboards linking to active projects and resources.

**Structure:**
```
{name}-hub/
  └── index.html (simple card grid with links)
```

**Features:**
- Static HTML card grids
- Links to other dashboards and resources
- Tags for categorization
- Minimal JavaScript (if any)

**Examples:**
- `nov-2025-development-hub/` (links to 16+ active projects)
- `is-war-hub/` (hub of hubs for military history)

---

### 8. Instructor Snapshot

**Purpose:** Template/example for collapsible section content.

**Location:** `is-instructor-snapshot/`

**Features:**
- Uses same collapsible section pattern as battle/theorem cards
- Serves as reference implementation
- Same dark theme with blue gradients

---

## 🎨 Design System

### Universal CSS Tokens

Most apps use this **consistent dark-first color palette**:

```css
:root {
  --bg: #0b1020;           /* Deep blue-black background */
  --panel: #111833;        /* Card/panel background */
  --ink: #e6ecff;          /* Primary text (light blue-white) */
  --muted: #a7b0cc;        /* Secondary text (muted blue-gray) */
  --brand: #8bb9ff;        /* Links, highlights (bright blue) */
  --accent: #c0ffe1;       /* Accent color (cyan/teal) */
  --border: #26325b;       /* Border color (dark blue) */
  --chip: #1a2347;         /* Tag/chip background */
  --bad: #ff6b6b;          /* Error/warning color */
  --shadow: 0 8px 28px rgba(0,0,0,.35);
  --radius: 12px;
  --radius-sm: 8px;
}
```

**Light Mode Support:**
Most systems include `@media (prefers-color-scheme: light)` fallbacks.

### Background Pattern

Standard radial gradient background:
```css
background:
  radial-gradient(1200px 600px at 10% -5%, rgba(139,185,255,.20), transparent 55%),
  radial-gradient(1000px 400px at 95% 10%, rgba(192,255,225,.18), transparent 60%),
  var(--bg);
```

### Typography
- **Font:** `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif`
- **Line height:** 1.6 (body), 1.2 (headings)
- **Smoothing:** `-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale`

### Responsive Breakpoints
- **Desktop:** 4 columns
- **Tablet (≤980px):** 3 columns
- **Mobile (≤720px):** 2 columns
- **Small Mobile (≤480px):** 1 column

---

## 🧩 Common Component Patterns

### Collapsible Sections

Used in battle cards, theorem cards, gospel hub children, instructor snapshot:

```javascript
function toggleSection(header) {
  const section = header.parentElement;
  const all = document.querySelectorAll('.section');
  all.forEach(s => {
    if (s !== section && s.classList.contains('active'))
      s.classList.remove('active');
  });
  section.classList.toggle('active');
}
```

**Behavior:** Only one section open at a time (accordion style).

### Back-to-Top Button

```javascript
window.addEventListener('scroll', () => {
  const btn = document.getElementById('backToTop');
  if (window.pageYOffset > 300) btn.classList.add('visible');
  else btn.classList.remove('visible');
});
```

Appears after scrolling 300px down.

### Filterable Card Grids

Used in hubs (Gospel, WW2, Real Analysis):

1. **Search input** filters by text (title, blurb, tags)
2. **Tag chips** filter by category
3. **JavaScript array** holds all items
4. **Dynamic rendering** updates grid on filter change

Pattern:
```javascript
const apps = [ /* array of objects */ ];

function render() {
  grid.innerHTML = '';
  const query = searchInput.value.toLowerCase();
  apps
    .filter(a => {
      const tagOk = activeTag === 'all' || a.tags.includes(activeTag);
      const text = (a.title + ' ' + a.blurb + ' ' + a.tags.join(' ')).toLowerCase();
      const queryOk = !query || text.includes(query);
      return tagOk && queryOk;
    })
    .forEach(a => grid.appendChild(makeCard(a)));
}
```

---

## 📂 Dashboard Index

### Mathematics Libraries

**Real Analysis:**
- `dashboard-library-real-analysis/` → Hub for real analysis content
- `is-real-analysis-hub/` → Theorem cards hub
- `dashboard-bolzano-weierstrass-1/`, `dashboard-bolzano-weierstrass-2/`, `dashboard-bolzano-weierstrass-3/`

**Galois Theory:**
- `dashboard-library-galois-theory/`
- `dashboard-galois-theory-s01/`, `dashboard-galois-theory-s02/`, `dashboard-galois-theory-s03/`

**Gödel's Incompleteness:**
- `dashboard-library-godel-s-incompleteness/`
- `dashboard-godel-s-incompleteness-s01/`, `dashboard-godel-s-incompleteness-s02/`, `dashboard-godel-s-incompleteness-s03/`

**Cantor and the Infinite:**
- `dashboard-library-cantor-and-the-infinite/`
- `dashboard-cantor-and-the-infinite-s01/`, `dashboard-cantor-and-the-infinite-s02/`, `dashboard-cantor-and-the-infinite-s03/`

**Foundations:**
- `dashboard-library-foundations-of-real-numbers/`
- `dashboard-foundations-of-real-numbers-s01/`

### Theology Libraries

**Open Theism:**
- `dashboard-library-open-theism/` (legacy)
- `dashboard-library-open-theism-codex/` (wiki format)
- `wiki-home-open-theism-codex/`

**Gospel Hub:**
- `is-gospel-hub/` → Main theology hub
- 10 children (biblical-faith, character-of-god-ot, cruciform-god, etc.)

**Atonement:**
- `dashboard-library-atonement/`
- `dashboard-atonement-1/`, `dashboard-atonement-2/`, `dashboard-atonement-3/`

**Servants and Friends:**
- `dashboard-library-servants-and-friends/`
- `dashboard-servants-and-friends-1/`, etc.

### History Libraries

**Enlightenment:**
- `dashboard-library-the-enlightenment-claude/`
- `dashboard-the-enlightenment-claude-s01/`, `s02`, `s03`
- 15 articles total (3 series × 5)

**Berlin Wall:**
- `dashboard-library-the-berlin-wall-claude/`
- `dashboard-the-berlin-wall-claude-s01/`, `s02`, `s03`
- 15 articles total

**Industrial Revolution:**
- `dashboard-library-the-industrial-revolution-in-britain-claude/`
- 15 articles (3 series × 5)

**World War 2:**
- `is-ww2-hub/` → Battle cards hub
- Multiple battle pages (`is-ww2-*-{year}`)

**Revolutionary War:**
- `is-revwar-hub/` → Battle cards hub
- Multiple battle pages (`is-revwar-*`)

### Meta Dashboards

- `dashboard-libraries/` → All libraries dashboard
- `nov-2025-development-hub/` → Current active projects
- `is-war-hub/` → Military history hub of hubs

---

## 🔧 Conventions and Rules

### Slugging Rules (Deterministic)

All systems use consistent slugging:
1. Convert to lowercase
2. Trim whitespace
3. Replace all non-alphanumeric characters with single dash `-`
4. Collapse multiple consecutive dashes to single dash
5. Trim leading/trailing dashes
6. **Append appropriate suffix:**
   - Colorful Reader: `-claude`, `-gpt`, or `-gem`
   - Wiki: `-codex`
   - Battle/Theorem cards: No suffix
   - No year for math/theology, year for history

**Examples:**
- "Open Theism" → `open-theism-claude` (library)
- "Open Theism" → `open-theism-codex` (wiki)
- "Gödel's Incompleteness" → `godel-s-incompleteness-claude`
- "Battle of Midway" → `is-ww2-battle-of-midway-1942`
- "Heine–Borel Theorem" → `is-real-analysis-heine-borel`

### File Creation Rules

- **Use bash heredocs** for efficiency when creating files programmatically
- **Inline everything:** CSS and JavaScript embedded in HTML
- **No external dependencies** (except Threaded Reader using Tailwind CDN)
- **Preserve exact indentation** when using templates
- **Validate HTML structure** before committing

### Git Workflow

**Branch Naming:**
```
{ai-prefix}/{agent-type}-{session-id}

Examples:
- claude/colorful-reader-agent-011CUPGcLZzPRYstDHgR68bM
- claude/wiki-agent-011Xyz...
- claude/ww2-battle-cards-011Abc...
- claude/new-session-start-011Npnvqzvw8fEd5F9MLXXys
```

**Push Protocol:**
- Always use `git push -u origin <branch-name>`
- Branch MUST start with `claude/` and end with matching session ID
- Retry on network failure: up to 4 times with exponential backoff (2s, 4s, 8s, 16s)
- 403 error means branch name mismatch

**Commit Messages:**
```
Complete {Topic} library - all {N} files

Library dashboard plus {K} series ({COUNT} articles total) exploring
{description}.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

---

## 📋 Content Registration

### Adding to Hubs

When creating new content, update the appropriate hub's JavaScript array:

**Gospel Hub** (`is-gospel-hub/index.html`):
```javascript
{
  id: "is-new-creation-hope",
  title: "New Creation & Resurrection Hope",
  blurb: "The kingdom inaugurated through Jesus' resurrection...",
  tags: ["hope", "cross", "teaching"],
  view: "https://ewallt.github.io/pocket-deploy/is-new-creation-hope/index.html"
}
```

**Real Analysis Hub** (`is-real-analysis-hub/index.html`):
```javascript
{
  id: "is-real-analysis-heine-borel",
  title: "Heine–Borel Theorem",
  blurb: "In ℝⁿ, a set is compact if and only if it is closed and bounded.",
  tags: ["compactness", "completeness", "foundations"],
  view: "https://ewallt.github.io/pocket-deploy/is-real-analysis-heine-borel/index.html"
}
```

**WW2 Hub** (`is-ww2-hub/index.html`):
```javascript
{
  id: "is-ww2-battle-of-midway-1942",
  title: "Battle of Midway (1942)",
  blurb: "Decisive naval battle that turned the tide in the Pacific...",
  tags: ["pacific", "naval", "1942", "turning-point"],
  view: "https://ewallt.github.io/pocket-deploy/is-ww2-battle-of-midway-1942/index.html"
}
```

### Adding to Development Hub

Edit `nov-2025-development-hub/index.html` to add new projects to the meta-dashboard.

---

## 🚀 Deployment

- **Platform:** GitHub Pages
- **Branch:** `gh-pages` (production)
- **Base URL:** `https://ewallt.github.io/pocket-deploy/`
- **Process:**
  1. Create content on feature branch (`claude/...`)
  2. Commit and push
  3. User creates PR from feature branch → `gh-pages`
  4. User merges PR
  5. GitHub Pages deploys automatically
  6. Content live at `{base-url}/{directory-name}/`

**No build step required.** Static HTML is deployed directly.

---

## 🧠 For Future AI Agents

### Quick Start Checklist

When starting a new session:

1. **Read this document first** to understand the architecture
2. **Check existing instruction files** for specific agent tasks:
   - `COLORFUL_READER_INSTRUCTIONS_V2.md`
   - `WIKI_AGENT_INSTRUCTIONS_V1.md`
   - `WW2_BATTLE_CARDS_INSTRUCTIONS_V1.md`
   - `REVWAR_BATTLE_CARDS_INSTRUCTIONS_V1.md`
   - `REAL_ANALYSIS_THEOREM_CARDS_INSTRUCTIONS_V1.md`
3. **Verify branch name** matches current session ID
4. **Use TodoWrite** to track progress on multi-step tasks
5. **Follow naming conventions** exactly (slugging rules, suffixes)
6. **Preserve CSS/JS patterns** when creating new content
7. **Update hubs** when adding new children
8. **Test locally** before pushing (navigation, filters, responsiveness)

### Common Tasks

**Creating a Colorful Reader library:**
- Follow `COLORFUL_READER_INSTRUCTIONS_V2.md`
- Calculate all paths using slugging rules
- Create library dashboard + series dashboards + articles
- Single atomic commit for entire library

**Adding a battle/theorem card:**
- Create directory: `is-{type}-{slug}-{year}`
- Copy template from existing card
- Fill 7 collapsible sections
- Update hub JavaScript array
- Test collapsible sections and navigation

**Adding to Gospel Hub:**
- Create `is-{topic}/` directory
- Include Blue Letter Bible plugin
- Add back navigation to hub
- Update `is-gospel-hub/index.html` array

**Creating wiki content:**
- Follow `WIKI_AGENT_INSTRUCTIONS_V1.md`
- Update `wiki-index-{home-slug}.json`
- Create HTML files with embedded frontmatter
- Maintain breadcrumb navigation

### Troubleshooting

**403 on push:**
- Verify branch starts with `claude/`
- Verify branch ends with current session ID
- Cherry-pick commits to correct branch if needed

**Hub not showing new content:**
- Check JavaScript array syntax
- Verify entry added to correct hub
- Ensure tags array is valid
- Check view URL path

**Navigation broken:**
- Verify absolute paths starting with `/pocket-deploy/`
- Check breadcrumb links
- Test back-to-hub navigation

**Styling inconsistent:**
- Compare CSS tokens with working examples
- Ensure inline CSS (no external stylesheets)
- Check responsive breakpoints
- Verify dark/light mode media queries

---

## 📊 Statistics

**Approximate counts as of 2025-11-15:**

- **Total directories:** ~673
- **Colorful Reader libraries:** 10+
- **Wiki systems:** 2 (Theological Subjects, Open Theism)
- **Battle cards:** 10+ (WW2 + RevWar)
- **Theorem cards:** 10+ (Real Analysis)
- **Gospel Hub children:** 10
- **Threaded Reader pages:** 30+
- **Meta hubs:** 5+

**File size:**
- Typical article HTML: 5-15 KB
- Hub pages: 10-20 KB
- Battle/theorem cards: 15-30 KB

---

## 🎓 Design Philosophy

### Why Flat Structure?

- **Simplicity:** No complex routing or nested paths
- **Portability:** Easy to move/copy directories
- **GitHub Pages compatibility:** Direct path mapping
- **Debugging:** Easy to locate files by name

### Why Inline CSS/JS?

- **Self-contained:** Each page works independently
- **No build step:** Deploy raw HTML
- **Reliability:** No external dependency failures
- **Performance:** Single HTTP request per page

### Why Multiple App Types?

- **Flexibility:** Different content needs different structures
- **Evolution:** New patterns emerge over time
- **Specialization:** Each type optimized for its use case
- **Experimentation:** Try new approaches without breaking existing content

---

## 📝 Maintenance Notes

### Updating This Document

When adding new app types or patterns:
1. Add to **Application Types** section
2. Update **Dashboard Index** with examples
3. Add to **Conventions and Rules** if new naming patterns
4. Update **Statistics** section
5. Note in git commit message

### Session Notes

Additional session-specific notes stored in:
- `SESSION_NOTES_2025-11-13.md`
- `SESSION_NOTES_2025-11-11.md`
- `MY_NOTES.md`

---

**End of Architecture Overview**

*This document is maintained by AI agents working on the pocket-deploy repository. It serves as a persistent knowledge base for understanding the repository structure, conventions, and patterns.*
