# WW2 Battle Cards — Instructions for Claude Code

**Version:** 1.0
**Last Updated:** November 12, 2025
**Target AI:** Claude Code
**Repository:** ewallt/pocket-deploy
**Deployment:** GitHub Pages at `https://ewallt.github.io/pocket-deploy/`

---

## System Overview

The **is-ww2** battle card system is an interactive reference hub for major World War II battles and campaigns. It consists of:

1. **Hub Page** (`is-ww2-hub/index.html`): A filterable grid dashboard with search and tag-based filtering
2. **Individual Battle Pages**: Standalone HTML pages with collapsible sections covering strategic context, timeline, outcomes, and significance

### Key Features

- **Dark-first design** with blue/cyan gradients and system light mode support
- **Tag-based filtering** by theater, year, type (naval, air, amphibious, etc.)
- **Collapsible sections** with smooth animations
- **Breadcrumb navigation** back to hub and Military History Hub
- **Mobile-responsive** layout
- **No external dependencies** except inline JavaScript for interactivity

### Military History Hub Integration

The WW2 Battle Cards system is part of a larger **Military History Hub** (`is-war-hub`) that provides unified access to multiple war-specific battle card systems.

**Hub of Hubs:** `https://ewallt.github.io/pocket-deploy/is-war-hub/index.html`

The WW2 hub (`is-ww2-hub/index.html`) includes a breadcrumb link back to the Military History Hub, allowing users to navigate between different war systems (WW2, Revolutionary War, and future additions).

**Navigation hierarchy:**
```
Military History Hub (is-war-hub)
  └─ WW2 Hub (is-ww2-hub)
       └─ Individual Battle Pages (is-ww2-battle-name-year)
```

**Important:** When creating or updating the WW2 hub, ensure the breadcrumb navigation includes a link to the Military History Hub.

---

## Naming Convention

All folders and battle IDs follow this pattern:

```
is-ww2-{battle-slug}-{year-range}
```

### Rules

1. **Prefix:** Always `is-ww2-`
2. **Battle slug:** Lowercase, dash-separated, descriptive name
3. **Year suffix:** Single year (`-1942`) or range (`-1941-44`, `-1939-45`)
4. **No AI suffix:** Unlike Colorful Reader libraries, these do NOT use `-claude`, `-gpt`, etc.

### Examples

```
is-ww2-battle-of-midway-1942
is-ww2-siege-of-leningrad-1941-44
is-ww2-operation-overlord-d-day-1944
is-ww2-battle-of-the-atlantic-1939-45
```

---

## Architecture

### Hub Structure

The hub (`is-ww2-hub/index.html`) contains:

- **Breadcrumb navigation** back to Military History Hub (`is-war-hub`)
- **JavaScript array** of battle metadata embedded in the HTML
- **Search input** for text filtering
- **Tag chips** for category filtering
- **Card grid** dynamically rendered from the array

Each battle entry in the array has:

```javascript
{
  id: "is-ww2-battle-name-year",
  title: "Battle Name (Year)",
  blurb: "One-sentence description of the battle",
  tags: ["theater", "type", "year", "significance"],
  view: "https://ewallt.github.io/pocket-deploy/is-ww2-battle-name-year/index.html"
}
```

### Battle Page Structure

Each battle page (`is-ww2-{battle}/index.html`) contains:

1. **Header Section**
   - Title
   - Subtitle (thematic description)
   - Breadcrumb navigation

2. **Core Summary** (always visible)
   - 2-3 sentence overview of the battle

3. **Collapsible Sections** (7 standard sections)
   - 🎯 Strategic Context
   - 🪖 Forces & Commanders (or ⚓ for naval, ✈️ for air)
   - 📜 Battle Timeline (or Operation Timeline, Siege Timeline)
   - ⚡ Turning Points
   - 🏁 Outcomes & Consequences
   - 🏰 Historical Significance (or 🌏 for Pacific battles)
   - 📚 Sources

4. **JavaScript**
   - Section toggle function
   - Back-to-top button visibility control
   - First section auto-opens on page load

---

## CSS Theme

All pages use identical inline CSS with these design tokens:

```css
:root{
  --bg:#0b1020;
  --panel:#111833;
  --ink:#e6ecff;
  --muted:#a7b0cc;
  --brand:#8bb9ff;
  --accent:#c0ffe1;
  --border:#26325b;
  --chip:#1a2347;
  --bad:#ff6b6b;
  --shadow:0 8px 28px rgba(0,0,0,.35);
  --radius:12px;
  --radius-sm:8px;
}
```

### Key Visual Elements

- **Background:** Dual radial gradients over `--bg`
- **Panels:** `--panel` with border and shadow
- **Section headers:** Linear gradient `#1a2a6b → #0f172a`
- **Collapsible icons:** Rotate 180° when active
- **Timeline:** Left border with circular markers
- **List items:** Chip background with left brand accent border
- **Back-to-top:** Fixed button, appears after 300px scroll

---

## Content Guidelines

### Core Summary

- **Length:** 2-3 sentences (60-100 words)
- **Purpose:** Immediate context—dates, participants, outcome, significance
- **Tone:** Factual, concise, encyclopedic

### Strategic Context (3 items)

- Objectives of both sides
- Political/geographic situation
- Strategic importance of the battle

### Forces & Commanders (3 items)

- Allied commanders and units
- Axis commanders and units
- Scale of forces engaged

### Battle Timeline (4-5 items)

- Key dates with specific events
- Use `<strong>Date:</strong> Event description` format
- Chronological order from start to end

### Turning Points (3 items)

- Decisive moments that changed the battle
- Tactical or strategic shifts
- Examples: "Encirclement," "Air superiority," "Intelligence breakthrough"

### Outcomes & Consequences (3 items)

- Immediate results (casualties, territory)
- Strategic impacts (momentum shift, resource loss)
- Political or diplomatic consequences

### Historical Significance (3 items)

- Long-term military lessons
- Symbolic or cultural meaning
- Legacy and remembrance

### Sources

- **Primary:** Contemporary documents, diaries, action reports, photographs
- **Secondary:** Scholarly books with authors and publication years in *italics*
- Format: `Author, <em>Title</em> (Year)`

---

## Workflow: Adding a New Battle

### Step 1: Research and Plan

Identify:
- Battle name, dates, and location
- Key commanders and forces
- Strategic objectives and outcomes
- Appropriate tags (theater, type, year, turning-point)

### Step 2: Create Directory and File

```bash
mkdir -p is-ww2-{battle-slug}-{year}
cd is-ww2-{battle-slug}-{year}
```

Create `index.html` using the template below.

### Step 3: Write Content

Fill in:
- Title and subtitle
- Core Summary
- All 7 collapsible sections with 3-5 items each
- Sources with proper citations

### Step 4: Update Hub

Edit `is-ww2-hub/index.html`:

1. Add new entry to the `apps` array:

```javascript
{
  id:"is-ww2-{battle-slug}-{year}",
  title:"{Battle Name} ({Year})",
  blurb:"{One-sentence description}",
  tags:["{theater}","{type}","{year}","{significance}"],
  view:"https://ewallt.github.io/pocket-deploy/is-ww2-{battle-slug}-{year}/index.html"
}
```

2. Insert in chronological order within the array

### Step 5: Test Locally

- Open hub in browser
- Verify battle card appears
- Test search and tag filtering
- Click "Open" to view battle page
- Test collapsible sections
- Verify breadcrumb returns to hub

### Step 6: Commit and Push

```bash
git add is-ww2-{battle-slug}-{year}/ is-ww2-hub/
git commit -m "Add {Battle Name} ({Year}) battle page

- Created comprehensive battle page with 7 sections
- Updated hub with battle card and tags
- Added {X} primary and secondary sources"
git push -u origin claude/ww2-battle-cards-{SESSION_ID}
```

---

## Battle Page Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>{BATTLE_TITLE}</title>
  <style>
    :root{
      --bg:#0b1020;
      --panel:#111833;
      --ink:#e6ecff;
      --muted:#a7b0cc;
      --brand:#8bb9ff;
      --accent:#c0ffe1;
      --border:#26325b;
      --chip:#1a2347;
      --bad:#ff6b6b;
      --shadow:0 8px 28px rgba(0,0,0,.35);
      --radius:12px;
      --radius-sm:8px;
    }

    *{margin:0;padding:0;box-sizing:border-box}

    body{
      font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,sans-serif;
      line-height:1.6;
      color:var(--ink);
      background:
        radial-gradient(1200px 600px at 10% -5%, rgba(139,185,255,.20), transparent 55%),
        radial-gradient(1000px 400px at 95% 10%, rgba(192,255,225,.18), transparent 60%),
        var(--bg);
      min-height:100vh;
      padding-bottom:2rem;
      -webkit-font-smoothing:antialiased;
      -moz-osx-font-smoothing:grayscale;
    }

    .container{max-width:860px;margin:0 auto;padding:1rem}

    header{
      background:linear-gradient(180deg, color-mix(in oklab,var(--panel) 85%, transparent), var(--panel));
      border:1px solid var(--border);
      border-radius:var(--radius);
      padding:2rem 1.5rem;
      margin-bottom:1.5rem;
      box-shadow:var(--shadow);
    }

    h1{
      color:var(--ink);
      font-size:1.75rem;
      margin-bottom:.5rem;
      letter-spacing:-.015em;
    }

    .subtitle{
      color:var(--muted);
      font-size:.95rem;
      font-style:italic;
    }

    .breadcrumb{
      margin-bottom:1rem;
      font-size:.9rem;
    }
    .breadcrumb a{color:var(--brand);text-decoration:none}
    .breadcrumb span{color:var(--muted)}

    .main-answer{
      background:var(--panel);
      border:1px solid var(--border);
      border-radius:var(--radius);
      padding:1.5rem;
      margin-bottom:1.5rem;
      box-shadow:var(--shadow);
      border-left:4px solid var(--brand);
    }

    .main-answer h2{
      color:var(--brand);
      font-size:1.3rem;
      margin-bottom:1rem;
      letter-spacing:.01em;
    }

    .main-answer p{font-size:1.05rem;line-height:1.7}

    .section{
      background:var(--panel);
      border:1px solid var(--border);
      border-radius:var(--radius);
      margin-bottom:1rem;
      box-shadow:var(--shadow);
      overflow:hidden;
    }

    .section-header{
      padding:1.1rem 1.25rem;
      background:linear-gradient(135deg, #1a2a6b 0%, #0f172a 100%);
      color:var(--ink);
      cursor:pointer;
      display:flex;
      justify-content:space-between;
      align-items:center;
      user-select:none;
      -webkit-tap-highlight-color:transparent;
      border-bottom:1px solid var(--border);
    }

    .section-header h2{
      font-size:1.15rem;
      font-weight:700;
      letter-spacing:.01em;
    }

    .section-icon{font-size:1.35rem;transition:transform .3s ease}
    .section.active .section-icon{transform:rotate(180deg)}

    .section-content{max-height:0;overflow:hidden;transition:max-height .4s ease}
    .section.active .section-content{max-height:5000px}

    .section-inner{padding:1.25rem}

    h3{
      color:var(--brand);
      font-size:1.08rem;
      margin:1.3rem 0 .65rem 0;
      letter-spacing:.01em;
    }
    h3:first-child{margin-top:0}

    .list-item{
      background:color-mix(in oklab,var(--chip) 75%, transparent);
      border-left:3px solid var(--brand);
      padding:1rem;
      margin-bottom:.75rem;
      border-radius:var(--radius-sm);
      border:1px solid var(--border);
    }

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

    .timeline-item strong{color:var(--brand);display:block;margin-bottom:.25rem}

    .source{
      background:color-mix(in oklab,var(--chip) 65%, transparent);
      border-radius:8px;padding:1rem;margin-top:1.2rem;
      font-size:.95rem;color:var(--muted);
      border:1px solid var(--border);
    }
    .source strong{color:var(--ink)}

    .back-to-top{
      position:fixed;bottom:1.5rem;right:1rem;
      background:var(--brand);color:#001;
      width:50px;height:50px;border-radius:50%;
      border:none;font-size:1.5rem;cursor:pointer;
      box-shadow:var(--shadow);opacity:0;transition:opacity .3s ease;
      z-index:1000;display:flex;align-items:center;justify-content:center;
      font-weight:900;
    }
    .back-to-top.visible{opacity:1}
    .back-to-top:active{transform:scale(.96)}

    a{color:var(--brand)}

    @media (max-width:480px){
      h1{font-size:1.5rem}
      .section-header h2{font-size:1.05rem}
      .container{padding:.75rem}
      header{padding:1.5rem 1rem}
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="breadcrumb">
      <a href="https://ewallt.github.io/pocket-deploy/is-ww2-hub/index.html">WWII Hub</a> <span>›</span> {BATTLE_NAME}
    </div>

    <header>
      <h1>{BATTLE_TITLE}</h1>
      <p class="subtitle">{SUBTITLE}</p>
    </header>

    <div class="main-answer">
      <h2>Core Summary</h2>
      <p>{2-3 sentence overview of the battle outcome and significance}</p>
    </div>

    <div class="section">
      <div class="section-header" onclick="toggleSection(this)">
        <h2>🎯 Strategic Context</h2>
        <span class="section-icon">▼</span>
      </div>
      <div class="section-content">
        <div class="section-inner">
          <div class="list-item">
            <strong>Objective Label:</strong> Description of first strategic element
          </div>
          <div class="list-item">
            <strong>Situation Label:</strong> Description of second strategic element
          </div>
          <div class="list-item">
            <strong>Importance Label:</strong> Description of third strategic element
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-header" onclick="toggleSection(this)">
        <h2>🪖 Forces & Commanders</h2>
        <span class="section-icon">▼</span>
      </div>
      <div class="section-content">
        <div class="section-inner">
          <div class="list-item">
            <strong>Allied Forces:</strong> Commander names, units, composition
          </div>
          <div class="list-item">
            <strong>Axis Forces:</strong> Commander names, units, composition
          </div>
          <div class="list-item">
            <strong>Forces Engaged:</strong> Scale and numbers
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-header" onclick="toggleSection(this)">
        <h2>📜 Battle Timeline</h2>
        <span class="section-icon">▼</span>
      </div>
      <div class="section-content">
        <div class="section-inner">
          <div class="timeline">
            <div class="timeline-item">
              <strong>Date 1:</strong> Event description
            </div>
            <div class="timeline-item">
              <strong>Date 2:</strong> Event description
            </div>
            <div class="timeline-item">
              <strong>Date 3:</strong> Event description
            </div>
            <div class="timeline-item">
              <strong>Date 4:</strong> Event description
            </div>
            <div class="timeline-item">
              <strong>Date 5:</strong> Event description (optional)
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-header" onclick="toggleSection(this)">
        <h2>⚡ Turning Points</h2>
        <span class="section-icon">▼</span>
      </div>
      <div class="section-content">
        <div class="section-inner">
          <div class="list-item">
            <strong>Turning Point 1:</strong> Description
          </div>
          <div class="list-item">
            <strong>Turning Point 2:</strong> Description
          </div>
          <div class="list-item">
            <strong>Turning Point 3:</strong> Description
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-header" onclick="toggleSection(this)">
        <h2>🏁 Outcomes & Consequences</h2>
        <span class="section-icon">▼</span>
      </div>
      <div class="section-content">
        <div class="section-inner">
          <div class="list-item">
            <strong>Immediate Result:</strong> Description
          </div>
          <div class="list-item">
            <strong>Strategic Impact:</strong> Description
          </div>
          <div class="list-item">
            <strong>Long-term Consequence:</strong> Description
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-header" onclick="toggleSection(this)">
        <h2>🏰 Historical Significance</h2>
        <span class="section-icon">▼</span>
      </div>
      <div class="section-content">
        <div class="section-inner">
          <div class="list-item">
            <strong>Military Legacy:</strong> Description
          </div>
          <div class="list-item">
            <strong>Cultural Meaning:</strong> Description
          </div>
          <div class="list-item">
            <strong>Remembrance:</strong> Description
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-header" onclick="toggleSection(this)">
        <h2>📚 Sources</h2>
        <span class="section-icon">▼</span>
      </div>
      <div class="section-content">
        <div class="section-inner">
          <div class="source">
            <strong>Primary:</strong> List contemporary sources
          </div>
          <div class="source">
            <strong>Secondary:</strong> Author, <em>Book Title</em> (Year); Author, <em>Book Title</em> (Year).
          </div>
        </div>
      </div>
    </div>
  </div>

  <button class="back-to-top" onclick="scrollToTop()" id="backToTop" aria-label="Back to top">↑</button>

  <script>
    function toggleSection(header){
      const section = header.parentElement;
      const all = document.querySelectorAll('.section');
      all.forEach(s => { if(s !== section && s.classList.contains('active')) s.classList.remove('active'); });
      section.classList.toggle('active');
    }

    window.addEventListener('scroll', () => {
      const btn = document.getElementById('backToTop');
      if(window.pageYOffset > 300){ btn.classList.add('visible'); }
      else { btn.classList.remove('visible'); }
    });

    document.addEventListener('DOMContentLoaded', () => {
      const first = document.querySelector('.section');
      if(first) first.classList.add('active');
    });

    function scrollToTop(){
      window.scrollTo({ top:0, behavior:'smooth' });
    }
  </script>
</body>
</html>
```

---

## Tag System

### Theater Tags

- `europe` - European theater
- `eastern-front` - Soviet-German front
- `western-front` - Western Europe
- `pacific` - Pacific Ocean theater
- `north-africa` - North African campaign
- `atlantic` - Atlantic Ocean

### Type Tags

- `land` - Ground battle
- `naval` - Naval engagement
- `air` - Aerial campaign
- `amphibious` - Amphibious assault
- `armor` - Tank battle

### Year Tags

Include all years the battle spanned:
- `1939`, `1940`, `1941`, `1942`, `1943`, `1944`, `1945`

### Significance Tags

- `turning-point` - Major strategic turning point

---

## Common Battles to Add

If expanding the collection, consider:

### European Theater
- Fall of France (1940)
- Dunkirk Evacuation (1940)
- Siege of Malta (1940-42)
- Battle of the Bulge (1944-45)
- Crossing the Rhine (1945)

### Eastern Front
- Battle of Kiev (1941)
- Siege of Sevastopol (1941-42)
- Battle of Smolensk (1941)
- Vistula-Oder Offensive (1945)

### Pacific Theater
- Fall of Singapore (1942)
- Battle of the Coral Sea (1942)
- Battle of the Philippine Sea (1944)
- Recapture of the Philippines (1944-45)
- Burma Campaign (1942-45)

### North Africa & Mediterranean
- First Battle of El Alamein (1942)
- Tunisia Campaign (1942-43)
- Battle of Monte Cassino (1944)

---

## Quality Checklist

Before committing a new battle page:

- [ ] Title and dates are accurate
- [ ] Breadcrumb links to hub correctly
- [ ] Core Summary is 2-3 sentences
- [ ] All 7 sections have 3-5 items each
- [ ] Timeline is chronological with specific dates
- [ ] Sources cite real historical works
- [ ] CSS is identical to other battle pages
- [ ] JavaScript functions work (test toggle, back-to-top)
- [ ] Hub entry added with correct tags
- [ ] Tags accurately describe battle characteristics
- [ ] Mobile responsive (test on narrow viewport)
- [ ] No typos or grammatical errors

---

## Maintenance

### Updating Existing Battles

To revise a battle page:

1. Read the current file
2. Make specific edits preserving template structure
3. Commit with clear change description

### Updating Hub

If modifying hub features:

- Maintain backward compatibility with existing battle pages
- Test all filter combinations
- Preserve tag system conventions

---

## End of Instructions

**Remember:** The is-ww2 system prioritizes consistency, historical accuracy, and user experience. Every battle page should feel part of a cohesive collection while providing substantive educational content.
