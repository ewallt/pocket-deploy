# Revolutionary War Battle Cards - System Instructions

Version 1.0
Created: 2025-11-12

## Overview

The Revolutionary War Battle Cards system is a collection of interactive HTML reference pages covering major battles from 1775–1781. Each battle is presented as a standalone single-page application with dark-themed UI, collapsible sections, and comprehensive historical content. The system consists of a central hub page and individual battle pages.

**Deployed URL:** https://ewallt.github.io/pocket-deploy/is-revwar-hub/

## System Architecture

```
is-revwar-hub/
  └── index.html          # Central hub with filterable battle grid

is-revwar-{battle-slug}-{year}/
  └── index.html          # Individual battle page
```

## Naming Convention

All folders and battle IDs follow this pattern:

```
is-revwar-{battle-slug}-{year-range}
```

### Rules

1. **Prefix:** Always `is-revwar-`
2. **Battle slug:** Lowercase, dash-separated, descriptive name
3. **Year suffix:** Single year (`-1775`) or range (`-1776`)
4. **No AI suffix:** Unlike Colorful Reader libraries, these do NOT use `-claude`, `-gpt`, etc.

### Examples

- ✅ `is-revwar-lexington-concord-1775`
- ✅ `is-revwar-yorktown-1781`
- ✅ `is-revwar-saratoga-1777`
- ❌ `revwar-yorktown-1781` (missing prefix)
- ❌ `is-revwar-yorktown` (missing year)
- ❌ `is-revwar-yorktown-1781-claude` (no AI suffix)

## Hub Structure

The hub (`is-revwar-hub/index.html`) provides:

- **Search bar:** Filter by title, tags, or keywords
- **Tag chips:** Quick filter by theater (northern, southern), type (naval, siege), significance (turning-point)
- **Battle cards:** Grid layout with title, blurb, tags, and "Open" button
- **Responsive design:** Adapts from 4 columns → 3 → 2 → 1 column based on viewport

### Hub JavaScript Array Format

```javascript
const apps = [
  {
    id:"is-revwar-lexington-concord-1775",
    title:"Lexington & Concord (1775)",
    blurb:"The shot heard round the world. Colonial militia face British regulars on the road to Boston.",
    tags:["northern","1775","early-war"],
    view:"https://ewallt.github.io/pocket-deploy/is-revwar-lexington-concord-1775/index.html"
  },
  // ... more battles
];
```

### Tag System

Common tags:
- **Theater:** `northern`, `southern`
- **Type:** `naval`, `siege`
- **Year:** `1775`, `1776`, `1777`, `1778`, `1779`, `1780`, `1781`
- **Significance:** `turning-point`, `early-war`

## Battle Page Structure

Each battle page consists of:

1. **Breadcrumb navigation** → Back to hub
2. **Header** → Battle name and subtitle
3. **Core Summary** → Always visible, 3-5 sentences
4. **Six collapsible sections:**
   - 🎯 Strategic Context (3 items)
   - 🪖 Forces & Commanders (3 items)
   - 📅 Timeline (5 events with improved visual timeline)
   - ⚡ Turning Points (3 items)
   - 📊 Outcomes (3 items)
   - 🔍 Historical Significance (paragraph + 2 source blocks)
5. **Back-to-top button** → Appears on scroll

### Section Behavior

- Click a section header to expand it
- Clicking another section collapses the currently open one (accordion style)
- Only one section open at a time for focused reading

## CSS Theme

The system uses a **dark-first design** with blue/cyan gradients.

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

### Timeline Styling (IMPROVED)

**Key improvement:** The timeline now has a finishing circle at the bottom to cap off the vertical line.

```css
.timeline{
  border-left:3px solid var(--brand);
  padding-left:1.25rem;
  margin-left:.5rem;
}

.timeline-item{
  margin-bottom:1.25rem;
  position:relative;
}

.timeline-item::before{
  content:'';
  position:absolute;left:-1.65rem;top:.25rem;
  width:12px;height:12px;border-radius:50%;
  background:var(--brand);border:3px solid var(--panel);
  box-shadow:0 0 0 2px var(--brand);
}

/* Finishing circle - larger, accent color */
.timeline-item:last-child{
  margin-bottom:0;
}

.timeline-item:last-child::before{
  width:16px;
  height:16px;
  left:-1.75rem;
  background:var(--accent);
  box-shadow:0 0 0 2px var(--accent);
}
```

**Visual effect:** The last timeline event has a distinctive cyan-colored circle that's larger than the others, providing a clear visual endpoint to the timeline.

## Content Guidelines

### Core Summary
- **Length:** 3-5 sentences (100-150 words)
- **Purpose:** Answer "What happened?" in plain language
- **Include:** Date, location, commanders, outcome, significance
- **Tone:** Direct, informative, accessible

### Strategic Context (3 items)
- Why this battle happened
- Strategic objectives of both sides
- Military/political situation leading up to the battle

### Forces & Commanders (3 items)
- American forces and commanders
- British forces and commanders
- Casualty figures with sources

### Timeline (5 events)
- Chronological progression of the battle
- Key moments with dates/times
- Each event: 1-2 sentences
- **Format:** `<strong>Date/Time:</strong> Description`

### Turning Points (3 items)
- Critical moments that decided the battle
- Tactical innovations or mistakes
- Individual actions that mattered

### Outcomes (3 items)
- Military results (who won, casualties)
- Strategic consequences
- Political/morale effects

### Historical Significance
- **Paragraph:** 100-150 words on long-term impact
- **Primary Sources:** Contemporary accounts, letters, official reports
- **Key Works:** 2-3 major scholarly works on the battle

## Workflow for Adding New Battles

1. **Create folder:**
   ```bash
   mkdir is-revwar-{battle-slug}-{year}
   ```

2. **Copy template:**
   - Use an existing battle page as template
   - Update title, subtitle, breadcrumb
   - Keep all CSS and JavaScript unchanged

3. **Research content:**
   - Consult primary sources
   - Read 2-3 scholarly works
   - Verify casualty figures
   - Check dates carefully

4. **Write content:**
   - Follow section guidelines above
   - Match existing tone and style
   - Use active voice
   - Be concise but substantive

5. **Update hub:**
   - Add battle to `apps` array in hub's `index.html`
   - Use appropriate tags
   - Write compelling 1-2 sentence blurb

6. **Test:**
   - Verify all links work
   - Check breadcrumb navigation
   - Test collapsible sections
   - Confirm timeline has finishing circle
   - Check mobile responsiveness

## Writing Style Guidelines

- **Voice:** Active, direct, informative
- **Tense:** Past tense for historical narrative
- **Person:** Third person (avoid "you")
- **Tone:** Scholarly but accessible
- **Jargon:** Minimal; explain military terms
- **Length:** Concise; every word earns its place

### Good Examples

✅ "Washington led 2,400 Continental soldiers across the ice-choked Delaware River to launch a surprise attack."

✅ "The victory convinced France to formally enter the war as an ally."

✅ "Cornwallis's surrender effectively ended major combat operations."

### Avoid

❌ "This amazing battle was really important." (vague, subjective)
❌ "You can see how Washington's strategy..." (second person)
❌ "It is interesting to note that..." (weak phrasing)

## Quality Checklist

Before publishing a new battle page:

- [ ] Folder name follows `is-revwar-{slug}-{year}` convention
- [ ] Breadcrumb links to hub
- [ ] Title and subtitle are accurate
- [ ] Core Summary is 3-5 sentences
- [ ] All six sections have proper content
- [ ] Timeline has 5 events
- [ ] Timeline has finishing circle (check CSS)
- [ ] Turning points are actual turning points (not just events)
- [ ] Casualty figures cited
- [ ] Sources listed (primary + scholarly)
- [ ] All collapsible sections work
- [ ] Back-to-top button appears on scroll
- [ ] Battle added to hub's JavaScript array
- [ ] Tags are appropriate
- [ ] Mobile responsive (test at 480px width)
- [ ] No spelling/grammar errors
- [ ] Historical facts verified

## Current Collection

As of v1.0, the system includes 12 battles:

1. **Lexington & Concord (1775)** - Opening shots
2. **Bunker Hill (1775)** - Costly British victory
3. **Trenton (1776)** - Washington's crossing
4. **Princeton (1777)** - Follow-up victory
5. **Saratoga (1777)** - Brought France into war
6. **Monmouth (1778)** - Last major northern battle
7. **Bonhomme Richard vs. Serapis (1779)** - "I have not yet begun to fight!"
8. **Charleston (1780)** - Britain's greatest victory
9. **King's Mountain (1780)** - Overmountain Men triumph
10. **Cowpens (1781)** - Morgan's tactical masterpiece
11. **Guilford Courthouse (1781)** - Pyrrhic British victory
12. **Yorktown (1781)** - Decisive siege, war-ending surrender

## Technical Notes

- **Single-file architecture:** All CSS and JS inline, no external dependencies
- **Vanilla JavaScript:** No frameworks or libraries
- **Accessibility:** Semantic HTML, ARIA labels where appropriate
- **Performance:** Minimal CSS, optimized rendering
- **Browser support:** Modern browsers (Chrome, Firefox, Safari, Edge)
- **Mobile-first:** Responsive design with mobile breakpoints

## Maintenance

- **Updates:** Edit battle pages directly; changes are immediate
- **Version control:** Commit to git with descriptive messages
- **Deployment:** Push to `gh-pages` branch to publish
- **Backups:** Keep copies before major structural changes

## Future Enhancements

Potential additions:

- Maps showing battle locations and troop movements
- Additional battles (Long Island, Brandywine, etc.)
- Timeline visualization showing all battles chronologically
- Comparison tool for analyzing multiple battles
- Print-friendly CSS
- Dark/light mode toggle

---

**Created by:** Claude (Anthropic)
**Date:** November 12, 2025
**System:** Colorful Reader Agent (Pocket Deploy)
**Contact:** See repository documentation
