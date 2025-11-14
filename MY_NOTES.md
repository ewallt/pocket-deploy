# My Claude Code Workflows

This file contains quick-start instructions for different workflows I use with Claude Code.

---

## The Original Library Workflow

**Purpose:** Build educational content libraries with 19 HTML files (1 library dashboard + 3 series dashboards + 15 articles)

### Starting a New Session

1. **Point Claude to the instructions:**
   ```
   Read COLORFUL_READER_INSTRUCTIONS_V2.md on the gh-pages branch
   ```

2. **Provide the outline:**
   Give Claude:
   - Library title (e.g., "The Scientific Method")
   - 3 series titles
   - 5 article titles per series (15 total articles)

   Example format:
   ```
   Build a library on "The Scientific Method"

   Series 1: Origins and Development
   - The Ancient Greeks and Natural Philosophy
   - Francis Bacon and Empiricism
   - The Scientific Revolution
   - Newton and Mathematical Principles
   - The Enlightenment's Contribution

   Series 2: Core Principles
   [... etc]

   Series 3: Modern Applications
   [... etc]
   ```

3. **What Claude will do:**
   - Create all 19 HTML files with full content (7 paragraphs per article)
   - Commit to a feature branch: `claude/colorful-reader-agent-[SESSION_ID]`
   - Push to remote

4. **After Claude finishes:**
   - Review the files if desired
   - Merge the feature branch to `gh-pages` to publish
   - The library will be live at: `https://ewallt.github.io/pocket-deploy/dashboard-library-[slug]-claude/`

### Key Files
- **Instructions for Claude:** `COLORFUL_READER_INSTRUCTIONS_V2.md`
- **Examples:** Check existing libraries (The Enlightenment, Industrial Revolution, Berlin Wall)
- **Branch:** Work happens on feature branches, then merge to `gh-pages` to publish

### Notes
- Each library must have articles divisible by 5 (5, 10, 15, 20, etc.)
- Standard is 3 series with 5 articles each = 15 total articles
- All slugs automatically get "-claude" suffix to distinguish from other AI-generated content

---

## Battle Cards Workflow

**Purpose:** Build single-page educational cards for historical battles with timelines and collapsible sections

### Starting a New Session

1. **Point Claude to the instructions:**
   ```
   Read WW2_BATTLE_CARDS_INSTRUCTIONS_V1.md (for WW2 battles)
   Read REVWAR_BATTLE_CARDS_INSTRUCTIONS_V1.md (for Revolutionary War battles)
   ```

2. **Provide the battle list:**
   Give Claude the list of battles you want covered (e.g., 12-17 battles for a war)

   Example:
   ```
   Create Civil War Battle Cards for these 12 battles:
   - Fort Sumter (1861)
   - First Bull Run (1861)
   - Shiloh (1862)
   [... etc]
   ```

3. **What Claude will do:**
   - Create a hub page (`is-[war]-hub/index.html`) with search/filter
   - Create individual battle pages (`is-[war]-[battle-name]/index.html`)
   - Each battle page includes:
     - Timeline with visual dots for each event
     - Core Summary (always visible)
     - 5 collapsible sections (Context, Turning Points, Aftermath, etc.)
     - Finishing circle (larger cyan dot) at timeline end
   - Commit and push to feature branch

4. **After Claude finishes:**
   - Merge to `gh-pages` to publish
   - Hub will be live at: `https://ewallt.github.io/pocket-deploy/is-[war]-hub/`

### Key Features
- **Dark-first CSS theme** - Deep blue-black background with cyan accents
- **Timeline visualization** - Chronological dots showing battle progression
- **Mobile-responsive** - Works from 320px to 4K displays
- **Single-file HTML** - No external dependencies
- **Search and filtering** - Tag-based navigation on hub pages

### Existing Systems
- **WW2 Battle Cards** - 17 major battles from WWII
- **Revolutionary War Battle Cards** - 12 battles from 1775-1781

### Key Files
- `WW2_BATTLE_CARDS_INSTRUCTIONS_V1.md` (749 lines)
- `REVWAR_BATTLE_CARDS_INSTRUCTIONS_V1.md` (332 lines)

---

## Math Theorem Cards Workflow

**Purpose:** Build single-page educational cards for mathematical theorems with rigorous proofs and explanations

### Starting a New Session

1. **Point Claude to the instructions:**
   ```
   Read REAL_ANALYSIS_THEOREM_CARDS_INSTRUCTIONS_V1.md
   ```

2. **Provide the theorem list:**
   Give Claude the list of theorems you want covered (e.g., 10 fundamental theorems)

   Example:
   ```
   Create Abstract Algebra Theorem Cards for these theorems:
   - Lagrange's Theorem
   - First Isomorphism Theorem
   - Sylow's Theorems
   [... etc]
   ```

3. **What Claude will do:**
   - Create a hub page (`is-[subject]-hub/index.html`) with tag filtering
   - Create individual theorem pages (`is-[subject]-[theorem-name]/index.html`)
   - Each theorem page includes:
     - Concept Snapshot (formal statement, always visible)
     - 7 collapsible sections:
       1. 🧩 Concept Overview
       2. 📚 Assumptions & Definitions
       3. 🧮 Proof Outline
       4. 💡 Key Insights & Intuition
       5. ⚙️ Applications & Examples
       6. 🔁 Connections & Extensions
       7. 🧠 Historical Note
     - Unicode mathematical notation (∀, ∃, ∈, ℝ, ε, δ, etc.)
   - Commit and push to feature branch

4. **After Claude finishes:**
   - Merge to `gh-pages` to publish
   - Hub will be live at: `https://ewallt.github.io/pocket-deploy/is-[subject]-hub/`

### Key Features
- **Same dark CSS theme** as Battle Cards
- **Mathematical rigor** - Formal statements and proof outlines
- **No timeline** - Not chronological (theorems are timeless)
- **Structured proofs** - Logical steps with key insights
- **Counterexamples** - Shows why hypotheses matter
- **Cross-references** - Links to related theorems and textbooks

### Existing Systems
- **Real Analysis Theorem Cards** - 10 fundamental theorems (Heine-Borel, Bolzano-Weierstrass, MVT, etc.)

### Key Files
- `REAL_ANALYSIS_THEOREM_CARDS_INSTRUCTIONS_V1.md` (368 lines)

---

## Other Workflows

(Add additional workflows here as needed)
