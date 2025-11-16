# Snapshot Repository Guide

**Version:** 1.0
**Created:** 2025-11-15
**Purpose:** Complete guide for AI agents working in the Snapshot repository
**Audience:** Future AI assistants (primarily Claude Code)

---

## 📌 Repository Overview

The **Snapshot** repository houses interactive reference applications using the "is-" naming convention. These are standalone, single-page HTML apps with collapsible sections, filterable hubs, and consistent dark-themed design.

**Core Concept:** "Snapshot" apps provide quick, focused reference content on specific topics - like taking a snapshot of knowledge and presenting it in an interactive, accessible format.

**Deployment:** GitHub Pages at `https://ewallt.github.io/snapshot/`

---

## 🎯 Application Types

The repository contains **four primary app types**:

### 1. Battle Cards (History)
Interactive reference pages for military battles and campaigns.

**Systems:**
- **WW2 Battle Cards** - World War 2 battles (21 battles + hub)
- **Revolutionary War Battle Cards** - American Revolution battles (13 battles + hub)
- **War Hub** - Meta-hub linking to all war systems

**Pattern:** `is-{war}-{battle-slug}-{year}/`

### 2. Theorem Cards (Mathematics)
Interactive reference pages for mathematical theorems and concepts.

**Systems:**
- **Real Analysis Hub** - Real analysis theorems (11 theorems + hub)

**Pattern:** `is-real-analysis-{theorem-slug}/`

### 3. Gospel Hub (Theology)
Theology content hub with filterable topic cards.

**Systems:**
- **Gospel Hub** - Central hub with 10 theological topic pages

**Pattern:** `is-gospel-hub/` (hub), `is-{theology-topic}/` (children)

### 4. Reference Templates
- **Instructor Snapshot** - Template/reference implementation

---

## 📂 Complete File Manifest

### Files to Copy from pocket-deploy

**Instruction/Documentation Files:**
```
WW2_BATTLE_CARDS_INSTRUCTIONS_V1.md
REVWAR_BATTLE_CARDS_INSTRUCTIONS_V1.md
REAL_ANALYSIS_THEOREM_CARDS_INSTRUCTIONS_V1.md
```

**WW2 System (22 directories):**
```
is-ww2-hub/
is-ww2-battle-of-berlin-1945/
is-ww2-battle-of-britain-1940/
is-ww2-battle-of-france-1940/
is-ww2-battle-of-kursk-1943/
is-ww2-battle-of-midway-1942/
is-ww2-battle-of-moscow-1941-42/
is-ww2-battle-of-stalingrad-1942-43/
is-ww2-battle-of-the-atlantic-1939-45/
is-ww2-battle-of-the-bulge-1944-45/
is-ww2-guadalcanal-campaign-1942-43/
is-ww2-invasion-of-poland-1939/
is-ww2-italian-campaign-1943-45/
is-ww2-iwo-jima-1945/
is-ww2-okinawa-1945/
is-ww2-operation-bagration-1944/
is-ww2-operation-barbarossa-1941/
is-ww2-operation-overlord-d-day-1944/
is-ww2-operation-torch-1942/
is-ww2-pearl-harbor-1941/
is-ww2-second-battle-of-el-alamein-1942/
is-ww2-siege-of-leningrad-1941-44/
```

**Revolutionary War System (14 directories):**
```
is-revwar-hub/
is-revwar-bonhomme-richard-1779/
is-revwar-bunker-hill-1775/
is-revwar-charleston-1780/
is-revwar-cowpens-1781/
is-revwar-guilford-courthouse-1781/
is-revwar-kings-mountain-1780/
is-revwar-lexington-concord-1775/
is-revwar-monmouth-1778/
is-revwar-princeton-1777/
is-revwar-saratoga-1777/
is-revwar-trenton-1776/
is-revwar-yorktown-1781/
```

**Real Analysis System (12 directories):**
```
is-real-analysis-hub/
is-real-analysis-bolzano-weierstrass/
is-real-analysis-cauchy-criterion/
is-real-analysis-extreme-value/
is-real-analysis-fundamental-calculus/
is-real-analysis-heine-borel/
is-real-analysis-intermediate-value/
is-real-analysis-least-upper-bound/
is-real-analysis-mean-value/
is-real-analysis-monotone-convergence/
is-real-analysis-uniform-continuity/
is-test-real-analysis-heine-borel/
```

**Gospel Hub System (11 directories):**
```
is-gospel-hub/
is-biblical-faith/
is-character-of-god-ot/
is-crucified-god-and-hope/
is-cruciform-god/
is-how-evil-emerged/
is-jesus-centered-gospel/
is-larger-view/
is-new-creation-hope/
is-restorative-sacrificial-system/
is-sermon-on-the-mount/
```

**War Hub (1 directory):**
```
is-war-hub/
```

**Templates (1 directory):**
```
is-instructor-snapshot/
```

**Total: 61 directories**

---

## 🏗️ Universal Architecture Patterns

### Design System (Shared Across All Apps)

**CSS Tokens:**
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

**Background Pattern:**
```css
background:
  radial-gradient(1200px 600px at 10% -5%, rgba(139,185,255,.20), transparent 55%),
  radial-gradient(1000px 400px at 95% 10%, rgba(192,255,225,.18), transparent 60%),
  var(--bg);
```

**Typography:**
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
line-height: 1.6;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
```

**Responsive Breakpoints:**
- Desktop: 4 columns
- Tablet (≤980px): 3 columns
- Mobile (≤720px): 2 columns
- Small (≤480px): 1 column

### Common Components

**1. Collapsible Sections:**
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

**2. Back-to-Top Button:**
```javascript
window.addEventListener('scroll', () => {
  const btn = document.getElementById('backToTop');
  if (window.pageYOffset > 300) btn.classList.add('visible');
  else btn.classList.remove('visible');
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
```

**3. Filterable Hubs:**
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

## 📘 Consolidated Instructions

### Battle Cards (WW2 & Revolutionary War)

**Naming Convention:**
```
is-{war}-{battle-slug}-{year}/
```

**Examples:**
- `is-ww2-battle-of-midway-1942/`
- `is-revwar-bunker-hill-1775/`

**Year Conventions:**
- Single year: `-1942`
- Range: `-1941-44`, `-1939-45`

**Page Structure (7 Collapsible Sections):**
1. 🎯 **Strategic Context** (3 items)
   - Objectives of both sides
   - Political/geographic situation
   - Strategic importance
2. 🪖 **Forces & Commanders** (3 items)
   - Allied/American commanders and units
   - Axis/British commanders and units
   - Scale of forces engaged
3. 📜 **Battle Timeline** (4-5 items)
   - Chronological events with dates
   - Format: `<strong>Date:</strong> Event`
4. ⚡ **Turning Points** (3 items)
   - Decisive moments
   - Tactical/strategic shifts
5. 🏁 **Outcomes & Consequences** (3 items)
   - Immediate results
   - Strategic impacts
   - Political/diplomatic consequences
6. 🏰 **Historical Significance** (3 items)
   - Military lessons
   - Cultural meaning
   - Legacy and remembrance
7. 📚 **Sources**
   - Primary sources
   - Secondary sources (format: `Author, <em>Title</em> (Year)`)

**Content Guidelines:**
- **Core Summary:** 2-3 sentences (60-100 words), always visible
- **Tone:** Factual, concise, encyclopedic
- **Sources:** Real historical works, properly cited

**Hub Structure:**
- JavaScript array of battle metadata
- Search input for text filtering
- Tag chips (theater, type, year, significance)
- Card grid with title, blurb, tags, "Open" button

**Tag Systems:**

*WW2 Tags:*
- Theater: `europe`, `eastern-front`, `western-front`, `pacific`, `north-africa`, `atlantic`
- Type: `land`, `naval`, `air`, `amphibious`, `armor`
- Year: `1939`, `1940`, `1941`, `1942`, `1943`, `1944`, `1945`
- Significance: `turning-point`

*RevWar Tags:*
- Theater: `northern`, `southern`, `naval`
- Type: `land`, `naval`, `siege`
- Year: `1775`, `1776`, `1777`, `1778`, `1779`, `1780`, `1781`
- Significance: `turning-point`, `final-campaign`

**Creating New Battle:**
1. Research battle (dates, commanders, forces, outcomes)
2. Create directory: `mkdir is-{war}-{battle-slug}-{year}`
3. Copy template from existing battle
4. Fill 7 sections with 3-5 items each
5. Write Core Summary
6. Add sources
7. Update hub JavaScript array
8. Test collapsible sections and navigation

**Hub Array Entry:**
```javascript
{
  id: "is-ww2-battle-of-midway-1942",
  title: "Battle of Midway (1942)",
  blurb: "Decisive naval battle that turned the tide in the Pacific...",
  tags: ["pacific", "naval", "1942", "turning-point"],
  view: "https://ewallt.github.io/snapshot/is-ww2-battle-of-midway-1942/index.html"
}
```

---

### Theorem Cards (Real Analysis)

**Naming Convention:**
```
is-real-analysis-{theorem-slug}/
```

**Examples:**
- `is-real-analysis-heine-borel/`
- `is-real-analysis-mean-value/`

**No Year Suffix:** Mathematics is timeless

**Page Structure (7 Collapsible Sections):**
1. 🧩 **Concept Overview** (3 items)
   - Statement (formal mathematical statement)
   - Intuitive Meaning (plain-language explanation)
   - Role in Analysis (importance in broader context)
2. 📚 **Assumptions & Definitions** (2-3 items)
   - Define technical terms
   - Explain required hypotheses
   - Clarify notation
3. 🧮 **Proof Outline**
   - Logical steps (not chronological)
   - Use `<h3>` for major segments
   - `<div class="list-item">` for proof steps
4. 💡 **Key Insights & Intuition** (3 items)
   - Why hypotheses are necessary
   - Geometric/physical interpretations
   - Common misconceptions
5. ⚙️ **Applications & Examples** (3-4 blocks)
   - `<div class="example-block">` for each
   - Mix of calculations, consequences, counterexamples
6. 🔁 **Connections & Extensions** (3 items)
   - Relations to other theorems
   - Generalizations
   - Variants
7. 🧠 **Historical Note** (2 items + sources)
   - Origins (who, when, context)
   - Impact and development
   - Further reading

**Content Guidelines:**
- **Concept Snapshot:** 3-5 sentences (100-150 words), always visible
- **Tone:** Rigorous but accessible, pedagogical
- **Notation:** Use Unicode math symbols (∀, ∃, ∈, ℝ, ℕ, ε, δ, etc.)

**Unicode Math Symbols:**
- Sets: ∈, ∉, ⊆, ⊂, ∪, ∩, ∅
- Quantifiers: ∀, ∃
- Number sets: ℝ, ℚ, ℕ, ℤ, ℂ
- Greek: ε, δ, α, β, γ, π
- Relations: ≤, ≥, ≠, ≈, →
- Operations: ∫, Σ, ∏, ∂, ∇
- Logic: ⇒, ⇔, ∧, ∨, ¬

**Hub Structure:**
- JavaScript array of theorem metadata
- Search by title, topic, keywords
- Tag chips (foundations, completeness, continuity, compactness, sequences, differentiation, integration)
- Card grid

**Creating New Theorem:**
1. Research theorem (statement, proof, history)
2. Create directory: `mkdir is-real-analysis-{theorem-slug}`
3. Copy template from existing theorem
4. Write Concept Snapshot
5. Fill 7 sections
6. Use proper Unicode notation
7. Add to hub JavaScript array
8. Test sections and verify notation

**Hub Array Entry:**
```javascript
{
  id: "is-real-analysis-heine-borel",
  title: "Heine–Borel Theorem",
  blurb: "In ℝⁿ, a set is compact if and only if it is closed and bounded.",
  tags: ["compactness", "completeness", "foundations"],
  view: "https://ewallt.github.io/snapshot/is-real-analysis-heine-borel/index.html"
}
```

---

### Gospel Hub (Theology)

**Naming Convention:**
```
is-gospel-hub/           (hub)
is-{theology-topic}/     (children)
```

**Examples:**
- `is-biblical-faith/`
- `is-cruciform-god/`
- `is-new-creation-hope/`

**Hub Structure:**
- JavaScript array of theology topics
- Search and tag filtering
- Tags: `cross`, `character`, `hope`, `grace`, `faith`, `teaching`, `sacrifice`, `conflict`
- Links open in same tab (no `target="_blank"`)

**Children Features:**
- **Back navigation** to Gospel Hub
- **Blue Letter Bible ScriptTagger** plugin (KJV)
- **Collapsible sections** for structured content
- Some use alternate CSS tokens (`otf-*` variables for Old Testament Faith theme)

**Blue Letter Bible Plugin:**
```html
<!-- Blue Letter Bible ScriptTagger -->
<script src="https://www.blueletterbible.org/assets/scripts/blbToolTip/BLB_ScriptTagger-min.js" type="text/javascript"></script>
<script type="text/javascript">
  BLB.Tagger.Translation = 'KJV';
  BLB.Tagger.HyperLinks = 'all';
  BLB.Tagger.HideTanslationAbbrev = false;
  BLB.Tagger.TargetNewWindow = true;
  BLB.Tagger.Style = 'par';
  BLB.Tagger.NoSearchTagNames = 'code,pre,script,style';
  BLB.Tagger.NoSearchClassNames = 'noTag';
</script>
```

**Initialization:**
```javascript
document.addEventListener('DOMContentLoaded', () => {
  BLB.Tagger.pageInit();
  // ... other initialization
});
```

**Back Navigation CSS:**
```css
.back-nav {
  margin-bottom: 1rem;
}
.back-nav a {
  display: inline-flex;
  align-items: center;
  gap: .5rem;
  color: var(--brand);
  text-decoration: none;
  font-size: .95rem;
  padding: .5rem .75rem;
  border-radius: 999px;
  transition: background .2s ease;
}
.back-nav a:hover {
  background: rgba(139, 185, 255, .1);
}
```

**Back Navigation HTML:**
```html
<nav class="back-nav">
  <a href="../is-gospel-hub/index.html">← Back to Gospel Hub</a>
</nav>
```

**Creating New Gospel Child:**
1. Identify theology topic and key themes
2. Create directory: `mkdir is-{theology-topic}`
3. Copy template from existing child
4. Add Blue Letter Bible plugin
5. Include back navigation
6. Write content with collapsible sections
7. Add to Gospel Hub array
8. Test Bible verse tooltips and navigation

**Hub Array Entry:**
```javascript
{
  id: "is-new-creation-hope",
  title: "New Creation & Resurrection Hope",
  blurb: "The kingdom inaugurated through Jesus' resurrection; God renewing creation, not escaping it.",
  tags: ["hope", "cross", "teaching"],
  view: "https://ewallt.github.io/snapshot/is-new-creation-hope/index.html"
}
```

---

### War Hub (Meta-Hub)

**Purpose:** Hub of hubs for military history content

**Location:** `is-war-hub/`

**Structure:**
- Links to WW2 Hub
- Links to Revolutionary War Hub
- Future wars can be added

**Creating New War System:**
1. Create war-specific hub: `is-{war}-hub/`
2. Add battle pages following battle card pattern
3. Update War Hub to link to new war-specific hub

---

## 🚀 Quick Start Workflows

### Adding a New WW2 Battle

```bash
# 1. Create directory
mkdir is-ww2-{battle-slug}-{year}

# 2. Copy template
cp is-ww2-battle-of-midway-1942/index.html is-ww2-{battle-slug}-{year}/index.html

# 3. Edit content (use Read tool)
# - Update title, subtitle, breadcrumb
# - Write Core Summary
# - Fill 7 collapsible sections
# - Add sources

# 4. Update hub
# Edit is-ww2-hub/index.html - add to apps array

# 5. Test
# - Collapsible sections work
# - Breadcrumb links to hub
# - Back-to-top button appears on scroll

# 6. Commit and push
git add is-ww2-{battle-slug}-{year}/ is-ww2-hub/
git commit -m "Add {Battle Name} ({Year}) battle page"
git push -u origin claude/{agent-type}-{session-id}
```

### Adding a New Theorem

```bash
# 1. Create directory
mkdir is-real-analysis-{theorem-slug}

# 2. Copy template
cp is-real-analysis-heine-borel/index.html is-real-analysis-{theorem-slug}/index.html

# 3. Edit content
# - Update title, subtitle, breadcrumb
# - Write Concept Snapshot
# - Fill 7 sections with proper Unicode notation
# - Add historical note and sources

# 4. Update hub
# Edit is-real-analysis-hub/index.html - add to apps array

# 5. Test
# - Mathematical notation renders correctly
# - Sections collapse/expand
# - Breadcrumb navigation works

# 6. Commit and push
git add is-real-analysis-{theorem-slug}/ is-real-analysis-hub/
git commit -m "Add {Theorem Name} theorem page"
git push -u origin claude/{agent-type}-{session-id}
```

### Adding a New Gospel Hub Child

```bash
# 1. Create directory
mkdir is-{theology-topic}

# 2. Copy template
cp is-biblical-faith/index.html is-{theology-topic}/index.html

# 3. Edit content
# - Update title and content
# - Ensure Blue Letter Bible plugin included
# - Update back navigation link
# - Write collapsible sections

# 4. Update Gospel Hub
# Edit is-gospel-hub/index.html - add to apps array

# 5. Test
# - Bible verse tooltips work
# - Back navigation to hub works
# - Sections collapse/expand

# 6. Commit and push
git add is-{theology-topic}/ is-gospel-hub/
git commit -m "Add {Topic Name} to Gospel Hub"
git push -u origin claude/{agent-type}-{session-id}
```

---

## 🧪 Testing Checklist

### For Individual Pages

- [ ] Title and subtitle accurate
- [ ] Breadcrumb links work (navigate to hub)
- [ ] Core summary/concept snapshot is 2-5 sentences
- [ ] All 7 sections have proper content
- [ ] Collapsible sections toggle correctly
- [ ] Only one section open at a time (accordion behavior)
- [ ] First section auto-opens on page load
- [ ] Back-to-top button appears after scrolling 300px
- [ ] Back-to-top button scrolls to top smoothly
- [ ] CSS matches other pages (design tokens)
- [ ] No console errors
- [ ] Mobile responsive (test at 480px width)

### For Battle Cards Specifically

- [ ] Timeline is chronological
- [ ] Dates use `<strong>` format
- [ ] Sources cite real works
- [ ] Tags accurately describe battle

### For Theorem Cards Specifically

- [ ] Unicode math symbols render correctly
- [ ] Statement is mathematically precise
- [ ] Proof outline is logical and clear
- [ ] At least one counterexample included

### For Gospel Hub Children Specifically

- [ ] Blue Letter Bible plugin loads
- [ ] Bible verses show tooltips on hover
- [ ] Back navigation link works
- [ ] Scripture references formatted correctly

### For Hubs

- [ ] All children appear as cards
- [ ] Search filters by text (title, blurb, tags)
- [ ] Tag chips filter correctly
- [ ] "All" tag shows everything
- [ ] Card grid responsive (4→3→2→1 columns)
- [ ] "Open" buttons link to correct pages
- [ ] JavaScript array syntax valid
- [ ] No duplicate IDs in array

---

## 🔧 Path Updates Required

When copying to Snapshot repo, **update all URLs** from:
```
https://ewallt.github.io/pocket-deploy/
```

To:
```
https://ewallt.github.io/snapshot/
```

**Files requiring path updates:**

1. **All hub files** (`is-*-hub/index.html`):
   - JavaScript `apps` array `view` properties
   - Example: `view: "https://ewallt.github.io/snapshot/is-ww2-battle-of-midway-1942/index.html"`

2. **All battle/theorem/gospel pages**:
   - Breadcrumb links
   - Example: `<a href="https://ewallt.github.io/snapshot/is-ww2-hub/index.html">WWII Hub</a>`

3. **Gospel Hub children**:
   - Back navigation links
   - Example: `<a href="../is-gospel-hub/index.html">← Back to Gospel Hub</a>`

4. **War Hub**:
   - Links to WW2 and RevWar hubs

**Search and replace strategy:**
```bash
# Use grep to find all files with pocket-deploy URLs
grep -r "pocket-deploy" . --include="*.html"

# Use sed to replace (example for single file)
sed -i 's|pocket-deploy|snapshot|g' is-ww2-hub/index.html
```

Or use Edit tool to update each file individually for precision.

---

## 📝 Naming Conventions Summary

| App Type | Pattern | Example |
|----------|---------|---------|
| WW2 Battle | `is-ww2-{battle}-{year}/` | `is-ww2-battle-of-midway-1942/` |
| RevWar Battle | `is-revwar-{battle}-{year}/` | `is-revwar-bunker-hill-1775/` |
| Theorem | `is-real-analysis-{theorem}/` | `is-real-analysis-heine-borel/` |
| Gospel Child | `is-{theology-topic}/` | `is-biblical-faith/` |
| Hub | `is-{type}-hub/` | `is-ww2-hub/`, `is-gospel-hub/` |
| Meta-Hub | `is-{name}-hub/` | `is-war-hub/` |

**Year Conventions:**
- Single year: `-1942`
- Year range: `-1941-44`, `-1939-45`
- No year for theorems (timeless mathematics)

---

## 🎨 CSS Variants

### Standard Dark Theme (Most Apps)

```css
:root {
  --bg: #0b1020;
  --panel: #111833;
  --ink: #e6ecff;
  --muted: #a7b0cc;
  --brand: #8bb9ff;
  --accent: #c0ffe1;
  --border: #26325b;
  --chip: #1a2347;
  --bad: #ff6b6b;
  --shadow: 0 8px 28px rgba(0,0,0,.35);
  --radius: 12px;
  --radius-sm: 8px;
}
```

### Old Testament Faith Theme (Some Gospel Children)

Used in `is-restorative-sacrificial-system/`:

```css
:root {
  --otf-bg: #0a0e14;
  --otf-panel: #12161e;
  --otf-ink: #e3e8f0;
  --otf-muted: #98a3b8;
  --otf-brand: #7ba3d9;
  /* ... etc */
}
```

When creating new Gospel Hub children, choose appropriate theme based on content focus.

---

## 📚 Reference Materials

### Standard Textbooks for Theorems

When creating Real Analysis content, consult:
1. Walter Rudin - *Principles of Mathematical Analysis* (Baby Rudin)
2. Michael Spivak - *Calculus*
3. Terence Tao - *Analysis I* and *Analysis II*
4. Tom Apostol - *Mathematical Analysis*

### Historical Sources for Battles

When creating battle cards, cite:
- Primary: Contemporary documents, diaries, action reports
- Secondary: Scholarly books with authors and years

---

## 🔄 Maintenance

### Updating Existing Pages

```bash
# 1. Read current file
# Use Read tool to view content

# 2. Make specific edits
# Use Edit tool to update sections

# 3. Test changes
# Verify sections, links, formatting

# 4. Commit
git add {directory}/
git commit -m "Update {page name}: {description of changes}"
git push
```

### Adding Tags to Hubs

When new tag categories emerge:
1. Update hub's tag chip list
2. Add filtering logic if needed
3. Tag existing entries appropriately
4. Document new tags in this guide

---

## 🚨 Common Issues & Solutions

### Issue: Collapsible sections don't work

**Cause:** JavaScript `toggleSection` function missing or incorrect

**Solution:**
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

// Ensure first section opens on load
document.addEventListener('DOMContentLoaded', () => {
  const first = document.querySelector('.section');
  if (first) first.classList.add('active');
});
```

### Issue: Hub filter not working

**Cause:** JavaScript array syntax error or filter logic issue

**Solution:**
- Check `apps` array for trailing commas or syntax errors
- Verify tag names match between array and tag chips
- Console log filter values to debug

### Issue: Blue Letter Bible tooltips not appearing

**Cause:** Plugin not loaded or initialized

**Solution:**
```html
<!-- Ensure script loaded before closing body -->
<script src="https://www.blueletterbible.org/assets/scripts/blbToolTip/BLB_ScriptTagger-min.js"></script>
<script>
  BLB.Tagger.Translation = 'KJV';
  BLB.Tagger.HyperLinks = 'all';
  // ... config
  document.addEventListener('DOMContentLoaded', () => {
    BLB.Tagger.pageInit(); // Must call this
  });
</script>
```

### Issue: Breadcrumb links broken

**Cause:** Incorrect paths after copying from pocket-deploy

**Solution:** Update all paths to use `/snapshot/` instead of `/pocket-deploy/`

---

## 📋 Copy Operations Checklist

When copying from pocket-deploy to snapshot:

**Pre-Copy:**
- [ ] Identify all directories to copy (see File Manifest)
- [ ] Plan path updates (pocket-deploy → snapshot)

**Copy:**
- [ ] Copy all "is-" directories (61 total)
- [ ] Copy instruction files (3 files)

**Post-Copy:**
- [ ] Update all hub `view` URLs
- [ ] Update all breadcrumb links
- [ ] Update all back navigation links
- [ ] Test each hub's filter functionality
- [ ] Test sample pages from each app type
- [ ] Verify mobile responsiveness
- [ ] Check console for errors

**Commit:**
- [ ] Commit all files with clear message
- [ ] Push to feature branch
- [ ] User creates and merges PR

---

## 🎯 Future Expansion Ideas

### New Battle Systems
- Civil War battles
- Napoleonic Wars
- Ancient Rome battles

### New Theorem Systems
- Topology theorems
- Abstract Algebra theorems
- Complex Analysis theorems

### New Gospel Hub Topics
- Additional theological themes
- Biblical narrative studies
- Church history topics

### Quality of Life Improvements
- Dark/light mode toggle
- Print-friendly CSS
- Keyboard navigation
- Search within page content
- Export to PDF

---

## 🧠 For Future AI: Quick Reference

**You are likely reading this because you're starting work in the Snapshot repository.**

### First Steps:
1. ✅ Read this entire document
2. ✅ Check git branch name includes session ID
3. ✅ Use TodoWrite for multi-step tasks
4. ✅ Verify you're in `/home/user/snapshot/` directory

### Common Commands:
```bash
# Check current location
pwd

# List is-* directories
ls -d is-*/

# Find all hubs
ls -d *-hub/

# Search for pocket-deploy URLs (should be none after initial setup)
grep -r "pocket-deploy" . --include="*.html"

# Create new battle
mkdir is-ww2-{battle}-{year}
cp is-ww2-battle-of-midway-1942/index.html is-ww2-{battle}-{year}/index.html

# Test section count in file
grep -c "class=\"section\"" is-ww2-battle-of-midway-1942/index.html
# Should return 7
```

### When User Says:
- **"Add a WW2 battle"** → Follow "Adding a New WW2 Battle" workflow
- **"Add a theorem"** → Follow "Adding a New Theorem" workflow
- **"Update the hub"** → Edit hub's JavaScript `apps` array
- **"Fix navigation"** → Check breadcrumb links and back navigation
- **"Test mobile"** → Verify responsive breakpoints

### Golden Rules:
1. **Always preserve CSS tokens** - Don't change the design system
2. **Always use inline CSS/JS** - No external dependencies (except BLB plugin)
3. **Always update hubs** - When adding children, update parent hub
4. **Always test sections** - Collapsible behavior must work
5. **Always use Unicode** - For math symbols in theorems
6. **Always cite sources** - For battles and theorems

---

**End of Snapshot Repository Guide**

*This document is your complete reference. Bookmark the key sections you use most frequently.*
