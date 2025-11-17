# Debates Static Library – Architecture Notes (for Assistant, new session)

## 1. Purpose

This project is a **static web app** (served locally with `python -m http.server` or hosted on GitHub Pages) that presents structured **debate-style content**.
Each **subject** (e.g., *The Big Bang*) contains a list of **debate motions**, each with a **Pro** and **Con** side rendered in parallel or tabbed view.

Design and navigation mimic the **Open Theism Library**:

* Left sidebar = 2-level navigation (top-level "Debates," expandable subjects, and child debate motions).
* Right panel = dynamic content (subject page → list of debates; debate page → side-by-side Pro/Con arguments).
* All pages read from a **shared JSON navigation file** to keep the sidebar consistent.

The current subject is **The Big Bang**, containing the **Inflation Debate** as the first motion.

---

## 2. Root layout (local)

The project resides in:

```
C:\Users\tomew\Documents\pocket-deploy
```

Served locally from one level above:

```bash
cd "C:\Users\tomew\Documents"
python -m http.server 8000
```

Base URL for testing:

```
http://localhost:8000/pocket-deploy/
```

---

## 3. Folder structure

```text
pocket-deploy/
  debates/                          ← All debates live here
    index.html                      ← Top-level Debates page
    inflation/                      ← One folder per debate motion
      index.html
  the-big-bang/                     ← Subject landing page (child of Debates)
    index.html
  data/
    site-nav.json                   ← Shared sidebar navigation
  img/
    big-bang-01.png                 ← Subject-level thumbnail
    inflation.gif                   ← Optional animation for debate
```

### Key folder rules

* The server root is one level above `pocket-deploy`, so all browser paths begin with `/pocket-deploy/...`.
* Each **debate motion** is its own folder under `/debates/`.
* Each **subject** (like *The Big Bang*) lives directly under `/pocket-deploy/`.
* The shared sidebar navigation and image resources are global (not per-folder).

---

## 4. Shared navigation JSON

**File:** `pocket-deploy/data/site-nav.json`
**Role:** Central source of truth for sidebar structure.

**Fetch URL:** `/pocket-deploy/data/site-nav.json`

**Example structure:**

```json
{
  "sections": [
    {
      "id": "debates",
      "title": "Debates"
    },
    {
      "id": "the-big-bang",
      "title": "The Big Bang",
      "debates": [
        {
          "title": "Inflation: Necessary or Ad Hoc?",
          "slug": "/pocket-deploy/debates/inflation/",
          "summary": "Does inflation solve early-universe problems or patch them?"
        }
      ]
    }
  ]
}
```

**Notes:**

* Top-level `"debates"` serves as the root category.
* Each subject (e.g., `"the-big-bang"`) holds a `"debates"` array instead of `"articles"`.
* Use **absolute slugs** with `/pocket-deploy/.../` prefix.
* Add new subjects or debates directly to this file; all pages will automatically reflect changes.

---

## 5. Page types

### 5.1 Debates index page

**File:** `pocket-deploy/debates/index.html`
**Purpose:** Root listing page showing all subjects (e.g., "The Big Bang").

**Behavior:**

* Left sidebar: "Debates" selected.
* Right: Title "Debates," description, and a list of subjects.
* Each subject is a clickable title leading to `/pocket-deploy/the-big-bang/`.

---

### 5.2 Subject page (e.g., *The Big Bang*)

**File:** `pocket-deploy/the-big-bang/index.html`
**Purpose:** Lists all debates within this subject.

**Behavior:**

* Sidebar: "Debates" expanded, "The Big Bang" highlighted.

* Right panel:

  * Title "The Big Bang"
  * Subheading: "Articles in this subject" (or customized description).
  * Rows for each debate:

    * Left: Thumbnail (`big-bang-01.png`)
    * Right: Debate title (link), short summary.

* Image path pattern:

  ```
  /pocket-deploy/img/big-bang-01.png
  ```

* Clicking a title goes to the debate folder (e.g., `/pocket-deploy/debates/inflation/`).

---

### 5.3 Debate page (e.g., *Inflation: Necessary or Ad Hoc?*)

**File:** `pocket-deploy/debates/inflation/index.html`
**Purpose:** Displays one full debate with Pro and Con columns (or tabs on mobile).

**Behavior:**

* Top title: "Inflation: Necessary or Ad Hoc?"

* Subtitle: "Does an early period of accelerated expansion uniquely explain the universe we observe, or is it a flexible patch?"

* Motion line:

  ```
  The Motion: Inflation is an ad-hoc rescue device.
  ```

* **Pro side:** Argues *for* the motion (i.e., that inflation is ad hoc).

* **Con side:** Argues *against* the motion (that inflation is necessary).

* Desktop view: side-by-side columns.

* Mobile: tabbed interface (Pro/Con toggle).

* Footer:

  ```
  ← Back to Debates
  ```

  linking to `/pocket-deploy/the-big-bang/`.

* Optionally includes animation at top or beside title (`inflation.gif`).

---

## 6. Styling system

* Design derived from the Open Theism template but with distinct color coding for Pro/Con.
* Key CSS variables:

```css
--accent-pro: #2563eb; /* Blue for Pro (arguing for the motion) */
--accent-con: #f59e0b; /* Amber for Con (arguing against the motion) */
```

* Consistent look across light/dark modes using `prefers-color-scheme`.

* Pro and Con panels each have:

  * Colored border
  * Indicator dot (`.position-indicator`)
  * Matching header text

* Font: system-ui stack.

* Layout:

  * `.view-sidebyside` for desktop
  * `.view-tabbed` for mobile (<768px)

* Panels styled with drop shadows and rounded corners.

---

## 7. Images and animation

**Location:** `/pocket-deploy/img/`
**Examples:**

```
big-bang-01.png        ← subject card
inflation.gif           ← optional debate animation
```

**Display rule:**
Images referenced using absolute paths (e.g., `/pocket-deploy/img/big-bang-01.png`).

Animated `.gif` files can be embedded inline in debate pages using `<img>` or `<video autoplay loop muted>` for smoother playback.

---

## 8. Local development workflow

1. Launch from **one directory above** `pocket-deploy`:

   ```bash
   cd ~/Documents
   python -m http.server 8000
   ```
2. Visit:

   ```
   http://localhost:8000/pocket-deploy/debates/
   ```
3. Hard-refresh after JSON edits (`Ctrl+F5`), or append `?ts=${Date.now()}` when fetching JSON.
4. Verify image paths via direct access, e.g.:

   ```
   http://localhost:8000/pocket-deploy/img/big-bang-01.png
   ```

---

## 9. Typical issues (and fixes)

| Problem                              | Cause                                      | Fix                                                 |
| ------------------------------------ | ------------------------------------------ | --------------------------------------------------- |
| 404 errors for JSON                  | Fetch path missing `/pocket-deploy` prefix | Ensure `fetch('/pocket-deploy/data/site-nav.json')` |
| Image not showing                    | File misnamed or wrong folder              | Check `/pocket-deploy/img/`                         |
| Sidebar empty                        | JSON invalid or not yet fetched            | Validate JSON syntax                                |
| Links point to `/debates-deploy/...` | Leftover from older template               | Replace with `/pocket-deploy/...`                   |

---

## 10. Design consistency rules

* Sidebar always built from `site-nav.json`.
* Subject and debate pages must **not** duplicate "Debates" in the sidebar (one "Debates" heading only).
* Motion text defines logical polarity:

  * **Pro = supports motion**
  * **Con = opposes motion**
* Page titles follow `"<Motion Title> — Debates"`.
* Paths always absolute (`/pocket-deploy/...`) so they work both locally and on GitHub Pages.

---

## 11. Expansion plan

Future subjects (each with their own debates):

* **Cosmology**

  * The Big Bang (current)
  * Steady State
  * Fine-Tuning
* **Theology**

  * Problem of Evil
  * Divine Hiddenness
* **Philosophy of Mind**

  * Free Will vs Determinism

Each new subject should follow the same structure:

```
pocket-deploy/<subject>/index.html
```

and be added to `site-nav.json`.

---

## 12. Future enhancements

* **Tooltips system** (borrowed from Open Theism Library) could later be added for cross-linking glossary or reference pages.
* **Light animation embedding** for humor (like *Runaway Inflation*) can be displayed inline.
* **Reusable HTML template** to reduce redundancy across debate pages.
* **Auto-index generation script** to populate `site-nav.json` dynamically.

---

## 13. Quick QA checklist

✅ Debates sidebar loads correctly
✅ "The Big Bang" expands when on debate pages
✅ "Inflation" link works and opens debate
✅ Motion wording matches debate logic (Pro = supports motion)
✅ Back link leads to subject page
✅ Image/animation loads from `/pocket-deploy/img/`
✅ Mobile tabs switch properly
✅ All paths begin with `/pocket-deploy/`

---

## 14. Guiding principle

> **Everything is data-driven from `site-nav.json`.**
> Pages contain no hardcoded sidebar items — only data lookups and links.
