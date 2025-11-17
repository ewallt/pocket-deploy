# Real Analysis Theorem Cards - System Instructions

Version 1.0
Created: 2025-11-13

## Overview

The Real Analysis Theorem Cards system is a collection of interactive HTML reference pages covering fundamental theorems and concepts in real analysis. Each theorem is presented as a standalone single-page application with dark-themed UI, collapsible sections, and rigorous mathematical content. The system consists of a central hub page and individual theorem pages.

**Deployed URL:** https://ewallt.github.io/pocket-deploy/is-real-analysis-hub/

## System Architecture

```
is-real-analysis-hub/
  └── index.html          # Central hub with filterable theorem grid

is-real-analysis-{theorem-slug}/
  └── index.html          # Individual theorem page
```

## Naming Convention

All folders and theorem IDs follow this pattern:

```
is-real-analysis-{theorem-slug}
```

### Rules

1. **Prefix:** Always `is-real-analysis-`
2. **Theorem slug:** Lowercase, dash-separated, descriptive name
3. **No year suffix:** Unlike battle cards, these don't include dates
4. **No AI suffix:** Do NOT use `-claude`, `-gpt`, etc.

### Examples

- ✅ `is-real-analysis-heine-borel`
- ✅ `is-real-analysis-mean-value`
- ✅ `is-real-analysis-fundamental-calculus`
- ❌ `real-analysis-heine-borel` (missing prefix)
- ❌ `is-real-analysis-heine-borel-1872` (no year suffix for math)
- ❌ `is-real-analysis-heine-borel-claude` (no AI suffix)

## Hub Structure

The hub (`is-real-analysis-hub/index.html`) provides:

- **Search bar:** Filter by title, topic, or keywords
- **Tag chips:** Quick filter by category (foundations, completeness, continuity, compactness, sequences, differentiation, integration)
- **Theorem cards:** Grid layout with title, blurb, tags, and "Open" button
- **Responsive design:** Adapts from 4 columns → 3 → 2 → 1 column based on viewport

### Hub JavaScript Array Format

```javascript
const apps = [
  {
    id:"is-real-analysis-heine-borel",
    title:"Heine–Borel Theorem",
    blurb:"In ℝⁿ, a set is compact if and only if it is closed and bounded.",
    tags:["compactness","completeness","foundations"],
    view:"https://ewallt.github.io/pocket-deploy/is-real-analysis-heine-borel/index.html"
  },
  // ... more theorems
];
```

### Tag System

Common tags:
- **Category:** `foundations`, `completeness`, `continuity`, `compactness`, `sequences`, `differentiation`, `integration`
- Tags should describe the mathematical concepts involved
- Use 2-4 tags per theorem
- Avoid redundant or overly specific tags

## Theorem Page Structure

Each theorem page consists of:

1. **Breadcrumb navigation** → Back to hub
2. **Header** → Theorem name and subtitle
3. **Concept Snapshot** → Always visible, 3-5 sentences explaining the theorem
4. **Seven collapsible sections:**
   - 🧩 Concept Overview (3 items: Statement, Intuitive Meaning, Role in Analysis)
   - 📚 Assumptions & Definitions (2-3 items defining key terms)
   - 🧮 Proof Outline (structured proof with steps, may have subsections)
   - 💡 Key Insights & Intuition (3 items explaining why the theorem matters)
   - ⚙️ Applications & Examples (3-4 example blocks showing uses)
   - 🔁 Connections & Extensions (3 items linking to other theorems)
   - 🧠 Historical Note (2 items + sources: origins, impact, further reading)
5. **Back-to-top button** → Appears on scroll

### Section Behavior

- Click a section header to expand it
- Clicking another section collapses the currently open one (accordion style)
- Only one section open at a time for focused reading
- First section opens automatically on page load

## CSS Theme

The system uses the same **dark-first design** as the battle cards with blue/cyan gradients.

### Design Tokens

```css
:root{
  --bg:#0b1020;           /* Deep blue-black background */
  --panel:#111833;        /* Card/panel background */
  --ink:#e6ecff;          /* Primary text (light blue-white) */
  --muted:#a7b0cc;        /* Secondary text (muted blue-gray) */
  --brand:#8bb9ff;        /* Links, highlights (bright blue) */
  --accent:#c0ffe1;       /* Accent color (cyan/teal) */
  --border:#26325b;       /* Border color (dark blue) */
  --chip:#1a2347;         /* Tag/chip background */
  --bad:#ff6b6b;          /* Error/warning color */
  --shadow:0 8px 28px rgba(0,0,0,.35);
  --radius:12px;
  --radius-sm:8px;
}
```

### Key Differences from Battle Cards

**No Timeline:** Mathematical theorems don't have chronological events, so there is no timeline section. The Proof Outline section takes a different structure.

**Proof Outline Structure:** Uses logical steps rather than temporal progression. May have subsections for different cases or alternative proofs.

**Mathematical Notation:** Uses Unicode math symbols (∀, ∃, ∈, ℝ, ℕ, ε, δ, etc.) throughout.

## Content Guidelines

### Concept Snapshot
- **Length:** 3-5 sentences (100-150 words)
- **Purpose:** Answer "What is this theorem?" in accessible language
- **Include:** Statement overview, why it matters, key application
- **Tone:** Clear, rigorous but not overly technical

### Concept Overview (3 items)

**Item 1: Statement**
- Formal mathematical statement of the theorem
- Use precise mathematical language
- Include all hypotheses and conclusions

**Item 2: Intuitive Meaning**
- Plain-language explanation
- Geometric or physical interpretation if applicable
- Help build conceptual understanding

**Item 3: Role in Analysis**
- Where this theorem appears in the discipline
- What it enables or proves
- Importance in the broader context

### Assumptions & Definitions (2-3 items)
- Define technical terms used in the theorem
- Explain required hypotheses
- Clarify notation and conventions
- Each item should define one key concept

### Proof Outline
- **Structure:** Organized into logical steps, not just prose
- **Subsections:** Use `<h3>` tags for major proof segments (e.g., "Part I", "Alternative Proof")
- **Level of detail:** Sketch the key ideas without getting bogged down in every epsilon-delta argument
- **Clarity:** Each step should be understandable; explain *why* each move is made
- **List items:** Use `<div class="list-item">` for proof steps

### Key Insights & Intuition (3 items)
- Why hypotheses are necessary (what fails without them)
- Geometric, physical, or conceptual interpretations
- Common misconceptions or subtleties
- Each item should illuminate a different aspect

### Applications & Examples (3-4 blocks)
- Use `<div class="example-block">` for each example
- Mix of: concrete calculations, important consequences, famous uses, counterexamples
- Each block: 2-4 sentences
- Include at least one counterexample showing why hypotheses matter

### Connections & Extensions (3 items)
- How this theorem relates to others in the collection
- Generalizations to other areas (topology, metric spaces, etc.)
- Historical development or variants
- Each item connects to a different theorem or concept

### Historical Note
- **Paragraph 1:** Origins (who proved it, when, context)
- **Paragraph 2:** Impact and development
- **Sources block:** List 2-3 canonical references

Example:
```html
<div class="list-item">
  <strong>Origins.</strong>
  Karl Weierstrass formalized the theorem in the 1860s...
</div>
<div class="list-item">
  <strong>Foundational Role.</strong>
  EVT is one of the first "big" theorems...
</div>
<div class="source">
  <strong>Further Reading:</strong> Walter Rudin, <em>Principles of Mathematical Analysis</em>, ch. 4; ...
</div>
```

## Workflow for Adding New Theorems

1. **Create folder:**
   ```bash
   mkdir is-real-analysis-{theorem-slug}
   ```

2. **Copy template:**
   - Use an existing theorem page as template
   - Update title, subtitle, breadcrumb
   - Keep all CSS and JavaScript unchanged

3. **Research content:**
   - Consult standard textbooks (Rudin, Spivak, Tao, Apostol)
   - Verify statement and proof
   - Check historical attribution
   - Find applications and connections

4. **Write content:**
   - Follow section guidelines above
   - Use Unicode math symbols consistently
   - Match existing tone and style
   - Be rigorous but accessible

5. **Update hub:**
   - Add theorem to `apps` array in hub's `index.html`
   - Choose appropriate tags
   - Write compelling 1-2 sentence blurb

6. **Test:**
   - Verify all links work
   - Check breadcrumb navigation
   - Test collapsible sections
   - Check mobile responsiveness
   - Verify mathematical notation renders correctly

## Writing Style Guidelines

- **Voice:** Rigorous, precise, but accessible
- **Tense:** Present tense for mathematical facts ("The theorem states...")
- **Person:** Third person; avoid "you" except in didactic asides
- **Tone:** Scholarly but pedagogical
- **Notation:** Use standard mathematical conventions
- **Length:** Concise; every sentence serves a purpose

### Mathematical Notation Best Practices

**Unicode symbols to use:**
- Set symbols: ∈, ∉, ⊆, ⊂, ∪, ∩, ∅
- Quantifiers: ∀, ∃
- Number sets: ℝ, ℚ, ℕ, ℤ, ℂ
- Greek letters: ε, δ, α, β, γ, π, etc.
- Relations: ≤, ≥, ≠, ≈, →, ↑, ↓
- Operations: ∫, Σ, ∏, ∂, ∇
- Logic: ⇒, ⇔, ∧, ∨, ¬

**Formatting conventions:**
- Use italics for variables: *f*, *x*, *n*
- Use regular text for operators: sin, cos, log, sup, inf
- Use subscripts/superscripts sparingly in plain text (prefer x₁, xₙ, x², etc.)
- Write interval notation: [a,b], (a,b), [a,b), etc.

### Good Examples

✅ "If f : [a,b] → ℝ is continuous and K is compact, then f attains its maximum and minimum on K."

✅ "The proof uses the Least Upper Bound Property: since (xₙ) is bounded above, L = sup{xₙ} exists in ℝ."

✅ "Uniform continuity is a stronger condition than pointwise continuity: it requires a single δ that works for all points."

### Avoid

❌ "This theorem is super important!" (too informal)
❌ "You can easily see that..." (assumes reader perspective)
❌ "Obviously, the function converges." (dismissive of difficulty)
❌ Using ASCII art or LaTeX syntax (\int, \forall, etc.) instead of Unicode

## Quality Checklist

Before publishing a new theorem page:

- [ ] Folder name follows `is-real-analysis-{slug}` convention
- [ ] Breadcrumb links to hub
- [ ] Title and subtitle are accurate
- [ ] Concept Snapshot is 3-5 sentences
- [ ] All seven sections have proper content
- [ ] Statement is mathematically precise
- [ ] Proof outline is clear and structured
- [ ] At least one counterexample included
- [ ] Mathematical notation is consistent
- [ ] Unicode symbols used correctly
- [ ] Sources cited (textbooks, papers)
- [ ] All collapsible sections work
- [ ] Back-to-top button appears on scroll
- [ ] Theorem added to hub's JavaScript array
- [ ] Tags are appropriate
- [ ] Mobile responsive (test at 480px width)
- [ ] No spelling/grammar errors
- [ ] Mathematical facts verified

## Current Collection

As of v1.0, the system includes 10 theorems:

1. **Heine-Borel Theorem** - Compact ⇔ closed and bounded in ℝⁿ
2. **Bolzano-Weierstrass Theorem** - Bounded sequences have convergent subsequences
3. **Intermediate Value Theorem** - Continuous functions attain intermediate values
4. **Extreme Value Theorem** - Continuous functions on compact sets attain max/min
5. **Mean Value Theorem** - Average rate equals instantaneous rate somewhere
6. **Fundamental Theorem of Calculus** - Integration and differentiation are inverse
7. **Cauchy Criterion for Sequences** - Convergence ⇔ Cauchy property
8. **Monotone Convergence Theorem** - Bounded monotone sequences converge
9. **Uniform Continuity on Compact Sets** - Continuous on compact ⇒ uniformly continuous
10. **Least Upper Bound Property** - Completeness axiom of ℝ

## Technical Notes

- **Single-file architecture:** All CSS and JS inline, no external dependencies
- **Vanilla JavaScript:** No frameworks or libraries
- **Accessibility:** Semantic HTML, ARIA labels where appropriate
- **Performance:** Minimal CSS, optimized rendering
- **Browser support:** Modern browsers (Chrome, Firefox, Safari, Edge)
- **Mobile-first:** Responsive design with mobile breakpoints

## Maintenance

- **Updates:** Edit theorem pages directly; changes are immediate
- **Version control:** Commit to git with descriptive messages
- **Deployment:** Push to `gh-pages` branch to publish
- **Backups:** Keep copies before major structural changes

## Future Enhancements

Potential additions:

- Additional theorems (Arzelà-Ascoli, Stone-Weierstrass, Baire Category, etc.)
- Interactive proof visualizations
- Problem sets and exercises linked to theorems
- Comparison tool showing relationships between theorems
- Print-friendly CSS
- Dark/light mode toggle
- Search within theorem content

## Recommended Textbooks

When creating content, consult these standard references:

1. **Walter Rudin** - *Principles of Mathematical Analysis* (Baby Rudin)
2. **Michael Spivak** - *Calculus*
3. **Terence Tao** - *Analysis I* and *Analysis II*
4. **Tom Apostol** - *Mathematical Analysis*
5. **Kenneth Ross** - *Elementary Analysis*
6. **Charles Pugh** - *Real Mathematical Analysis*

---

**Created by:** Claude (Anthropic)
**Date:** November 13, 2025
**System:** Colorful Reader Agent (Pocket Deploy)
**Contact:** See repository documentation
