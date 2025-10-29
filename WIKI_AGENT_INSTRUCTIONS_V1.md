# Wiki Agent — Instructions for AI Assistants (v1)

## Purpose

Create an extensible, wiki-style knowledge base with a simple, flat sidebar, breadcrumb navigation, and single-file HTML pages using inline CSS with dark/light themes. The initial home is "Theological Subjects," but the structure is domain-agnostic and supports adding new Subjects, Topics, and Pages without template changes.

---

## Hierarchy & Paths

### Information Model

* **Home** → collection of **Subjects**
* **Subject** → collection of **Topics**
* **Topic** → collection of **Pages**
* **Page** → content unit (essays, notes, outlines)

Depth beyond Topic is optional; you may nest Topics under Subjects and place Pages either under a Topic or directly under a Subject.

### Slugging Rules (deterministic)

```
1. lowercase
2. trim whitespace
3. replace all non-alphanumeric with single dash "-"
4. collapse multiple dashes to one
5. trim leading/trailing dashes
6. append "-codex" suffix
```

Examples:

```
"Theological Subjects" → theological-subjects-codex
"Open Theism" → open-theism-codex
"Gödel's Incompleteness" → godel-s-incompleteness-codex
```

### Path Conventions

```
HOME_SLUG      = slugify("Theological Subjects") // or provided home title
SUBJECT_SLUG   = slugify(subject_title)
TOPIC_SLUG     = slugify(topic_title)
PAGE_SLUG      = slugify(page_title)

// Directories (each contains index.html)
wiki-home-{HOME_SLUG}/
wiki-subject-{SUBJECT_SLUG}/
wiki-topic-{TOPIC_SLUG}/
wiki-page-{PAGE_SLUG}/
```

### URL Structure (after deploy to GitHub Pages)

```
/pocket-deploy/wiki-home-{HOME_SLUG}/
/pocket-deploy/wiki-subject-{SUBJECT_SLUG}/
/pocket-deploy/wiki-topic-{TOPIC_SLUG}/
/pocket-deploy/wiki-page-{PAGE_SLUG}/
```

---

## Content Index (Flat Sidebar Source)

### Single JSON Index

Create one lightweight index JSON that powers the sidebar and breadcrumbs without editing templates:
**Path:** `/pocket-deploy/wiki-index-{HOME_SLUG}.json`

```json
{
  "home": {
    "title": "Theological Subjects",
    "slug": "theological-subjects-codex",
    "summary": "Gateway to theological subjects, topics, and pages."
  },
  "subjects": [
    {
      "title": "Open Theism",
      "slug": "open-theism-codex",
      "order": 1,
      "summary": "Core ideas, debates, and scriptural engagement.",
      "topics": [
        {
          "title": "Foundations",
          "slug": "foundations-codex",
          "order": 1,
          "summary": "Definitions, scope, and philosophical frame.",
          "pages": [
            {"title": "What is Open Theism?", "slug": "what-is-open-theism-codex", "order": 1},
            {"title": "God's Knowledge and the Open Future", "slug": "god-s-knowledge-and-the-open-future-codex", "order": 2}
          ]
        }
      ],
      "pages": [
        {"title": "Key Scriptures", "slug": "key-scriptures-codex", "order": 10}
      ]
    }
  ]
}
```

* **Flat sidebar behavior:** Each page loads this single index and renders a flat list of the current container's children (e.g., Subject page lists its Topics then Pages; Topic page lists its Pages). Sorting uses `order` then `title`.
* **Extensibility:** To add content, create the directory and page and append an entry to this JSON—no template changes required.

---

## Page Front-Matter (Embedded JSON)

Each HTML file embeds a small JSON block for local context (title, summary, parent breadcrumb, and kind). This enables breadcrumb rendering without extra requests if desired.

```html
<script type="application/json" id="frontmatter">
{
  "kind": "home" | "subject" | "topic" | "page",
  "title": "{TITLE}",
  "slug": "{THIS_SLUG}",
  "summary": "{ONE_LINE_SUMMARY}",
  "parent": {"title": "{PARENT_TITLE}", "slug": "{PARENT_SLUG}", "kind": "home|subject|topic"}
}
</script>
```

* For **home**, omit `parent`.

---

## Workflow

### Step 1: Receive Scope

User provides:

* Home title (default: "Theological Subjects")
* List of Subjects, each with optional Topics and Pages (titles only; order optional)

**Your role:** Acknowledge and proceed to path calculation and file creation. Only ask if a critical piece is missing (e.g., no home title and no default allowed).

### Step 2: Calculate Paths

Deterministically compute all slugs and directory paths using the rules above.

### Step 3: Create Directories (single bash)

Example (two subjects, one topic, a few pages):

```bash
mkdir -p \
wiki-home-{HOME_SLUG} \
wiki-subject-{SUBJECT1_SLUG} wiki-subject-{SUBJECT2_SLUG} \
wiki-topic-{TOPIC1_SLUG} \
wiki-page-{PAGE1_SLUG} wiki-page-{PAGE2_SLUG} wiki-page-{PAGE3_SLUG}
```

### Step 4: Write Files

* Generate **index JSON** once: `wiki-index-{HOME_SLUG}.json`
* Create `index.html` in every created directory using templates below (Home, Subject, Topic, Page)
* Use bash heredocs for efficiency

### Step 5: Git Protocol

**Branch naming convention:**

```
{AI_PREFIX}/wiki-agent-{SESSION_ID}

Where {AI_PREFIX} is:
- claude/ for Claude Code
- codex/ for OpenAI Codex
- gemini/ for Gemini
```

**Git commands:**

```bash
git add -A
git commit -m "Add wiki: {HOME_TITLE} – {COUNT_SUBJECTS} subjects, {COUNT_TOPICS} topics, {COUNT_PAGES} pages

Flat-sidebar wiki with dark/light themes, breadcrumb nav, and single JSON index.

🤖 Generated with [AI Assistant Name]"
git push -u origin {AI_PREFIX}/wiki-agent-{SESSION_ID}
```

> **Troubleshooting:** If GitHub shows “codex does not support updating PRs that are outside of codex,” rename your working branch to follow the `codex/wiki-agent-{SESSION_ID}` pattern (for example, `git branch -M codex/wiki-agent-1234`) and push again.

### Step 6: Completion Report

Provide counts and the Home URL:

```
Wiki created and pushed.

Home:
https://ewallt.github.io/pocket-deploy/wiki-home-{HOME_SLUG}/
```

---

## Templates (Inline CSS, Dark/Light, Flat Sidebar)

### Shared CSS Tokens

* Respect system preference with `@media (prefers-color-scheme: light)`
* Reuse familiar tokens: `--bg`, `--panel`, `--ink`, `--muted`, `--brand`, `--border`

### Template A — Home

**Path:** `/pocket-deploy/wiki-home-{HOME_SLUG}/index.html`

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>{HOME_TITLE}</title>
<style>
:root{--bg:#0f172a;--panel:#1f2937;--ink:#e5e7eb;--muted:#94a3b8;--brand:#60a5fa;--border:#1f2937}
@media (prefers-color-scheme: light){:root{--bg:#f8fafc;--panel:#ffffff;--ink:#1e293b;--muted:#64748b;--brand:#3b82f6;--border:#e2e8f0}}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--ink);font:16px/1.65 system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,Apple Color Emoji,Segoe UI Emoji}
.wrapper{max-width:860px;margin:0 auto;padding:48px 20px}
.panel{background:var(--panel);border:1px solid var(--border);border-radius:12px;padding:28px;box-shadow:0 0 0 1px rgba(0,0,0,.12) inset}
h1{margin:0 0 8px;font-size:2rem;line-height:1.2}
.lead{color:var(--muted);margin:0 0 24px}
a{color:var(--brand);text-decoration:none}
a:hover{text-decoration:underline}
.sidebar{margin:24px 0 0;padding:0}
.sidebar li{list-style:none;margin:0 0 10px}
.sidebar a{display:inline-block;padding:10px 14px;border:1px solid var(--border);border-radius:10px;background:rgba(96,165,250,.08);color:var(--ink)}
.breadcrumb{display:flex;gap:8px;flex-wrap:wrap;color:var(--muted);margin:0 0 16px}
.breadcrumb a{color:var(--muted)}
small.muted{color:var(--muted);display:block;margin-top:24px}
</style>
</head>
<body>
<script type="application/json" id="frontmatter">
{"kind":"home","title":"{HOME_TITLE}","slug":"{HOME_SLUG}","summary":"{HOME_SUMMARY}"}
</script>
<div class="wrapper"><div class="panel">
<div class="breadcrumb"><span>Home</span></div>
<h1>{HOME_TITLE}</h1>
<p class="lead">{HOME_SUMMARY}</p>
<ul class="sidebar" id="sidebar"></ul>
<small class="muted">{HOME_TITLE}</small>
</div></div>
<script>
(async function(){
  const res = await fetch('/pocket-deploy/wiki-index-{HOME_SLUG}.json'); const idx = await res.json();
  const list = document.getElementById('sidebar'); list.innerHTML = '';
  (idx.subjects||[]).sort(byOrder).forEach(s=>{
    const li = document.createElement('li');
    li.innerHTML = `<a href="/pocket-deploy/wiki-subject-${s.slug}/">${escapeHtml(s.title)}</a>`;
    list.appendChild(li);
  });
  function byOrder(a,b){return (a.order??999)-(b.order??999) || String(a.title).localeCompare(b.title);}
  function escapeHtml(x){return x.replace(/[&<>"']/g,m=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[m]));}
}());
</script>
</body>
</html>
```

### Template B — Subject

**Path:** `/pocket-deploy/wiki-subject-{SUBJECT_SLUG}/index.html`

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>{SUBJECT_TITLE}</title>
<style>
:root{--bg:#0f172a;--panel:#1f2937;--ink:#e5e7eb;--muted:#94a3b8;--brand:#60a5fa;--border:#1f2937}
@media (prefers-color-scheme: light){:root{--bg:#f8fafc;--panel:#ffffff;--ink:#1e293b;--muted:#64748b;--brand:#3b82f6;--border:#e2e8f0}}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--ink);font:16px/1.65 system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial}
.wrapper{max-width:860px;margin:0 auto;padding:48px 20px}
.panel{background:var(--panel);border:1px solid var(--border);border-radius:12px;padding:28px}
h1{margin:0 0 8px;font-size:2rem;line-height:1.2}
.lead{color:var(--muted);margin:0 0 24px}
a{color:var(--brand);text-decoration:none}
a:hover{text-decoration:underline}
.sidebar{margin:24px 0 0;padding:0}
.sidebar li{list-style:none;margin:0 0 10px}
.sidebar a{display:inline-block;padding:10px 14px;border:1px solid var(--border);border-radius:10px;background:rgba(96,165,250,.08);color:var(--ink)}
.breadcrumb{display:flex;gap:8px;flex-wrap:wrap;color:var(--muted);margin:0 0 16px}
.breadcrumb a{color:var(--muted)}
small.muted{color:var(--muted);display:block;margin-top:24px}
</style>
</head>
<body>
<script type="application/json" id="frontmatter">
{"kind":"subject","title":"{SUBJECT_TITLE}","slug":"{SUBJECT_SLUG}","summary":"{SUBJECT_SUMMARY}","parent":{"kind":"home","title":"{HOME_TITLE}","slug":"{HOME_SLUG}"}}
</script>
<div class="wrapper"><div class="panel">
<div class="breadcrumb">
  <a href="/pocket-deploy/wiki-home-{HOME_SLUG}/">{HOME_TITLE}</a><span>/</span><span>{SUBJECT_TITLE}</span>
</div>
<h1>{SUBJECT_TITLE}</h1>
<p class="lead">{SUBJECT_SUMMARY}</p>
<ul class="sidebar" id="sidebar"></ul>
<small class="muted">{SUBJECT_TITLE}</small>
</div></div>
<script>
(async function(){
  const res = await fetch('/pocket-deploy/wiki-index-{HOME_SLUG}.json'); const idx = await res.json();
  const me = "{SUBJECT_SLUG}";
  const sub = (idx.subjects||[]).find(s=>s.slug===me) || {topics:[],pages:[]};
  const items = [...(sub.topics||[]).map(t=>({t,kind:'topic'})), ...(sub.pages||[]).map(p=>({t:p,kind:'page'}))];
  items.sort((a,b)=>((a.t.order??999)-(b.t.order??999))||String(a.t.title).localeCompare(b.t.title));
  const list = document.getElementById('sidebar'); list.innerHTML = '';
  items.forEach(it=>{
    const href = it.kind==='topic' ? `/pocket-deploy/wiki-topic-${it.t.slug}/` : `/pocket-deploy/wiki-page-${it.t.slug}/`;
    const li = document.createElement('li');
    li.innerHTML = `<a href="${href}">${escapeHtml(it.t.title)}</a>`;
    list.appendChild(li);
  });
  function escapeHtml(x){return x.replace(/[&<>"']/g,m=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[m]));}
}());
</script>
</body>
</html>
```

### Template C — Topic

**Path:** `/pocket-deploy/wiki-topic-{TOPIC_SLUG}/index.html`

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>{TOPIC_TITLE}</title>
<style>
:root{--bg:#0f172a;--panel:#1f2937;--ink:#e5e7eb;--muted:#94a3b8;--brand:#60a5fa;--border:#1f2937}
@media (prefers-color-scheme: light){:root{--bg:#f8fafc;--panel:#ffffff;--ink:#1e293b;--muted:#64748b;--brand:#3b82f6;--border:#e2e8f0}}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--ink);font:16px/1.65 system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial}
.wrapper{max-width:860px;margin:0 auto;padding:48px 20px}
.panel{background:var(--panel);border:1px solid var(--border);border-radius:12px;padding:28px}
h1{margin:0 0 8px;font-size:2rem}
.lead{color:var(--muted);margin:0 0 24px}
a{color:var(--brand);text-decoration:none}
a:hover{text-decoration:underline}
.sidebar{margin:24px 0 0;padding:0}
.sidebar li{list-style:none;margin:0 0 10px}
.sidebar a{display:inline-block;padding:10px 14px;border:1px solid var(--border);border-radius:10px;background:rgba(96,165,250,.08);color:var(--ink)}
.breadcrumb{display:flex;gap:8px;flex-wrap:wrap;color:var(--muted);margin:0 0 16px}
.breadcrumb a{color:var(--muted)}
article p{margin:0 0 16px}
small.muted{color:var(--muted);display:block;margin-top:24px}
</style>
</head>
<body>
<script type="application/json" id="frontmatter">
{"kind":"topic","title":"{TOPIC_TITLE}","slug":"{TOPIC_SLUG}","summary":"{TOPIC_SUMMARY}","parent":{"kind":"subject","title":"{SUBJECT_TITLE}","slug":"{SUBJECT_SLUG}"}}
</script>
<div class="wrapper"><div class="panel">
<div class="breadcrumb">
  <a href="/pocket-deploy/wiki-home-{HOME_SLUG}/">{HOME_TITLE}</a><span>/</span>
  <a href="/pocket-deploy/wiki-subject-{SUBJECT_SLUG}/">{SUBJECT_TITLE}</a><span>/</span>
  <span>{TOPIC_TITLE}</span>
</div>
<h1>{TOPIC_TITLE}</h1>
<p class="lead">{TOPIC_SUMMARY}</p>
<ul class="sidebar" id="sidebar"></ul>
<small class="muted">{SUBJECT_TITLE}</small>
</div></div>
<script>
(async function(){
  const res = await fetch('/pocket-deploy/wiki-index-{HOME_SLUG}.json'); const idx = await res.json();
  const subj = (idx.subjects||[]).find(s=>s.slug==="{SUBJECT_SLUG}") || {};
  const me = (subj.topics||[]).find(t=>t.slug==="{TOPIC_SLUG}") || {pages:[]};
  const list = document.getElementById('sidebar'); list.innerHTML = '';
  (me.pages||[]).sort(byOrder).forEach(p=>{
    const li = document.createElement('li');
    li.innerHTML = `<a href="/pocket-deploy/wiki-page-${p.slug}/">${escapeHtml(p.title)}</a>`;
    list.appendChild(li);
  });
  function byOrder(a,b){return (a.order??999)-(b.order??999) || String(a.title).localeCompare(b.title);}
  function escapeHtml(x){return x.replace(/[&<>"']/g,m=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[m]));}
}());
</script>
</body>
</html>
```

### Template D — Page

**Path:** `/pocket-deploy/wiki-page-{PAGE_SLUG}/index.html`

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>{PAGE_TITLE}</title>
<style>
:root{--bg:#0f172a;--panel:#1f2937;--ink:#e5e7eb;--muted:#94a3b8;--brand:#60a5fa;--border:#1f2937}
@media (prefers-color-scheme: light){:root{--bg:#f8fafc;--panel:#ffffff;--ink:#1e293b;--muted:#64748b;--brand:#3b82f6;--border:#3b82f6;--border:#e2e8f0}}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--ink);font:16px/1.65 system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial}
.wrapper{max-width:860px;margin:0 auto;padding:48px 20px}
.panel{background:var(--panel);border:1px solid var(--border);border-radius:12px;padding:28px}
h1{margin:0 0 8px;font-size:2rem}
.lead{color:var(--muted);margin:0 0 24px}
a{color:var(--brand);text-decoration:none}
a:hover{text-decoration:underline}
article p{margin:0 0 16px}
.breadcrumb{display:flex;gap:8px;flex-wrap:wrap;color:var(--muted);margin:0 0 16px}
.breadcrumb a{color:var(--muted)}
.nav{display:flex;gap:12px;margin:24px 0;flex-wrap:wrap}
.nav a{padding:10px 14px;border:1px solid var(--border);border-radius:10px;background:rgba(96,165,250,.08);color:var(--ink)}
small.muted{color:var(--muted);display:block;margin-top:24px}
</style>
</head>
<body>
<script type="application/json" id="frontmatter">
{"kind":"page","title":"{PAGE_TITLE}","slug":"{PAGE_SLUG}","summary":"{PAGE_SUMMARY}","parent":{"kind":"topic|subject","title":"{PARENT_TITLE}","slug":"{PARENT_SLUG}"}}
</script>
<div class="wrapper"><div class="panel">
<div class="breadcrumb">
  <a href="/pocket-deploy/wiki-home-{HOME_SLUG}/">{HOME_TITLE}</a><span>/</span>
  <a href="/pocket-deploy/wiki-subject-{SUBJECT_SLUG}/">{SUBJECT_TITLE}</a>
  <!-- If under a topic, include: -->
  <!-- <span>/</span><a href="/pocket-deploy/wiki-topic-{TOPIC_SLUG}/">{TOPIC_TITLE}</a> -->
  <span>/</span><span>{PAGE_TITLE}</span>
</div>
<h1>{PAGE_TITLE}</h1>
<p class="lead">{PAGE_SUMMARY}</p>
<article>
<p>{Paragraph 1 — 80-120 words}</p>
<p>{Paragraph 2 — 80-120 words}</p>
<p>{Paragraph 3 — 80-120 words}</p>
<p>{Paragraph 4 — 80-120 words}</p>
<p>{Paragraph 5 — 80-120 words}</p>
<p>{Paragraph 6 — 80-120 words}</p>
<p>{Paragraph 7 — 80-120 words}</p>
</article>
<div class="nav">
  <a href="/pocket-deploy/wiki-subject-{SUBJECT_SLUG}/">Subject</a>
  <!-- If under topic: -->
  <!-- <a href="/pocket-deploy/wiki-topic-{TOPIC_SLUG}/">Topic</a> -->
</div>
<small class="muted">{PARENT_TITLE}</small>
</div></div>
</body>
</html>
```

---

## Migration Shim (from Colorful Reader)

* Take article title → **Page title**
* Use article series title → **Topic title** (optional)
* Use library topic → **Subject title**
* Generate slugs with **-codex** suffix
* Create directories for Subject/Topic/Page and add entries to the JSON index
* Paste article body into the **Page** `<article>` block; keep paragraph count rules if desired

---

## Content Guidelines

* **Two valid approaches:**

  * **Substantive content:** 7 paragraphs, 80–120 words each, organized and explanatory
  * **Structured placeholders:** 7 paragraphs that specify intent and scaffolding (expandable later)
* **Style:**

  * No self-reference or meta-commentary
  * Direct, educational tone
  * Logical flow across paragraphs
* **Tags/Related (optional):** Add `tags` and `related` arrays to the index objects later if needed

---

## Search Functionality

**Search: Deferred for initial version.** Once content exists, add a simple client-side filter over the JSON index (filter by title/summary text). This can be added without changing page templates - just add a search input that filters the sidebar dynamically. The JSON index already contains all necessary data (titles, summaries) to implement search without backend requirements.

---

## Cross-Linking via Link Registry (Codex-Managed)

**Goal:** Centralize internal linking decisions so that pages remain clean and links stay consistent across the wiki.

**Registry file:** `wiki-link-map-codex.json` (repo root)

**Concepts**

* **targets:** Map stable page keys (e.g., `s01-2`) to canonical paths (`/pocket-deploy/open-theism-codex-s01-2/`) and known anchors (IDs that exist in the destination HTML).
* **pages rules:** For each source page key, declare:

  * `inline`: small list of `{ "match": "phrase", "hrefKey": "TARGET[#anchor]" }` items to wrap the first occurrence of that phrase (max 1–2 per paragraph).
  * `seeAlso`: short curated list of related links to render in a “See also” section near the end of the article.

**Apply flow (idempotent)**

1. Codex reads the registry, resolves `hrefKey` to `/pocket-deploy/...` (+ `#anchor` if present).
2. Wraps the first occurrence of each `match` not already inside a link, enforcing density (≤2 per paragraph).
3. Replaces or creates a `See also` list matching `seeAlso` exactly.
4. Re-running does not duplicate links.

**Maintenance**

* Add new pages to **targets** when created; populate `anchors` with real `id` attributes found in the HTML.
* Keep `inline` lists small and meaningful; aim for 6–14 total links/page including “See also”.
* All edits to linking happen in the registry; avoid hand-editing links in HTML.

---

## Validation Checklist

* **Index present:** `wiki-index-{HOME_SLUG}.json` loads on all pages
* **Links:** All hrefs use absolute `/pocket-deploy/` paths
* **Sidebar:** Flat listing of children (sorted by `order`, then `title`)
* **Breadcrumbs:** Accurate chain Home → Subject → Topic → Page
* **Front-matter:** Present and JSON-parseable
* **CSS:** Inline tokens; light/dark via media query
* **Counts:** Directories created for every Subject/Topic/Page entry
* **JSON/HTML sync:** All pages referenced in JSON have corresponding directories
* **Registry present:** `wiki-link-map-codex.json` parses; every `hrefKey` resolves to a `targets` entry; anchors exist in destination files
* **Link density:** ≤2 auto-inserted inline links per paragraph; “See also” ≤5 items
* **Git:** Clean working tree after commit

---

## Error Handling

* **Existing files:** If a target directory exists, report the conflict and offer:

  1. overwrite, 2) create only missing, or 3) use new slugs.
* **Index mismatch:** If JSON references a missing page, create the page skeleton or remove stubs—report action taken.
* **Registry errors:** If a `hrefKey` has no matching target or anchor, skip inserting that link and report it.
* **Partial sessions:** Commit completed subset with a clear message; resume later.

---

## Autonomous Execution Mode

When provided a Home title and a Subject/Topic/Page outline:

1. Acknowledge input and show computed structure.
2. Generate/update `wiki-index-{HOME_SLUG}.json`.
3. Create directories and all `index.html` files (Home → Subjects → Topics → Pages).
4. Initialize or update `wiki-link-map-codex.json` (optional at creation time).
5. Apply registry to pages with rules (idempotent).
6. Commit and push on `{AI_PREFIX}/wiki-agent-{SESSION_ID}`.
7. Report completion with Home URL.

---

## End of Instructions

**Remember:** The wiki structure is extensible. To add content after initial creation, create the HTML file, add an entry to the JSON index, and—if cross-links are desired—add rules to the link registry and re-apply.
