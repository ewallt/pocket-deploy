# Colorful Reader Agent — Instructions for Gemini

## Purpose
Generate a complete bash deployment script that creates and uploads a structured educational content library to GitHub using the GitHub Contents API.

**Your output must be:** A single, pure bash script. No explanatory text. No Python code visible. Just the executable bash script.

---

## What You'll Receive from User

The user will provide:
1. **Topic name** (e.g., "Foundations of Real Numbers", "Open Theism")
2. **Number of series** (typically 3)
3. **Complete article outline** with series titles and all 15 article titles

Example:
```
Topic: Foundations of Real Numbers
Series: 3

Series 1: Historical Context and Motivation
- Part 1: The Crisis in Greek Mathematics
- Part 2: Dedekind's Construction
- Part 3: Cauchy Sequences
- Part 4: Completeness
- Part 5: Consequences

Series 2: ... [5 more articles]
Series 3: ... [5 more articles]
```

---

## What You Must Generate

A bash script that:
1. Creates a feature branch from `gh-pages`
2. Generates all 19 HTML files (1 library dashboard + 3 series dashboards + 15 articles)
3. Uploads all files to GitHub via Contents API
4. Opens a pull request
5. Is ready to execute without modification

**Critical:** Output ONLY the bash script. Do not show the Python code you use internally to generate it.

---

## Slug Requirements

**MANDATORY: All slugs must have `-gem` suffix**

Slugging algorithm:
```
1. Convert topic to lowercase
2. Trim whitespace
3. Replace non-alphanumeric characters with single dash
4. Collapse multiple consecutive dashes to single dash
5. Trim leading/trailing dashes
6. APPEND "-gem"

Examples:
"Foundations of Real Numbers" → "foundations-of-real-numbers-gem"
"Gödel's Incompleteness" → "godel-s-incompleteness-gem"
"Open Theism" → "open-theism-gem"
```

**Path structure:**
```
LIBRARY_SLUG = {topic-slug}-gem
SERIES_ID = s01, s02, s03 (zero-padded 2 digits)
SERIES_SLUG = {LIBRARY_SLUG}-{SERIES_ID}

Example for "Foundations of Real Numbers":
- Library: foundations-of-real-numbers-gem
- Series 1: foundations-of-real-numbers-gem-s01
- Series 2: foundations-of-real-numbers-gem-s02
- Series 3: foundations-of-real-numbers-gem-s03
```

**File paths in repository** (no `pocket-deploy/` prefix in API calls):
```
dashboard-library-{LIBRARY_SLUG}/index.html
dashboard-{SERIES_SLUG}/index.html
{SERIES_SLUG}-1/index.html
{SERIES_SLUG}-2/index.html
...
{SERIES_SLUG}-5/index.html
```

**Public URLs after deployment** (automatically prefixed with `/pocket-deploy/`):
```
https://ewallt.github.io/pocket-deploy/dashboard-library-{LIBRARY_SLUG}/
https://ewallt.github.io/pocket-deploy/dashboard-{SERIES_SLUG}/
https://ewallt.github.io/pocket-deploy/{SERIES_SLUG}-N/
```

---

## GitHub API Integration

### Repository Details
- **Repo:** `ewallt/pocket-deploy`
- **Base branch:** `gh-pages` (what GitHub Pages serves)
- **Target branch:** Create new feature branch (e.g., `gemini/colorful-reader-agent-TIMESTAMP` or similar)
- **Token:** Already exported as `$GITHUB_TOKEN` in user's bash environment

### Branch Creation
```bash
# Get base SHA from gh-pages
BASE_SHA=$(curl -sS -H "Authorization: Bearer $GITHUB_TOKEN" \
     -H "Accept: application/vnd.github+json" \
     https://api.github.com/repos/ewallt/pocket-deploy/git/ref/heads/gh-pages \
     | jq -r '.object.sha')

# Create feature branch
BRANCH="gemini/colorful-reader-agent-$(date +%Y%m%d-%H%M%S)"
jq -n --arg ref "refs/heads/$BRANCH" --arg sha "$BASE_SHA" \
  '{ref:$ref, sha:$sha}' | \
  curl -sS -X POST -H "Authorization: Bearer $GITHUB_TOKEN" \
       -H "Accept: application/vnd.github+json" \
       -H "Content-Type: application/json" \
       https://api.github.com/repos/ewallt/pocket-deploy/git/refs \
       --data-binary @-
```

### File Upload Function
```bash
upload() {
  local path="$1" msg="$2" content="$3" b64 sha payload code

  # Encode content as single-line base64
  if command -v openssl >/dev/null 2>&1; then
    b64=$(printf '%s' "$content" | openssl base64 -A)
  else
    b64=$(printf '%s' "$content" | base64 | tr -d '\n')
  fi

  # Check if file exists (get SHA for update)
  sha=$(curl -sS -H "Authorization: Bearer $GITHUB_TOKEN" \
               -H "Accept: application/vnd.github+json" \
       "https://api.github.com/repos/ewallt/pocket-deploy/contents/$path?ref=$BRANCH" \
       | jq -r '.sha // empty')

  # Build JSON payload with jq (safe, no quote escaping issues)
  if [ -n "$sha" ]; then
    payload=$(jq -n --arg message "$msg" --arg content "$b64" \
                    --arg branch "$BRANCH" --arg sha "$sha" \
                    '{message:$message, content:$content, branch:$branch, sha:$sha}')
  else
    payload=$(jq -n --arg message "$msg" --arg content "$b64" \
                    --arg branch "$BRANCH" \
                    '{message:$message, content:$content, branch:$branch}')
  fi

  # Upload file
  code=$(printf '%s' "$payload" | \
         curl -sS -o /tmp/put.json -w '%{http_code}' -X PUT \
              -H "Authorization: Bearer $GITHUB_TOKEN" \
              -H "Accept: application/vnd.github+json" \
              -H "Content-Type: application/json" \
              "https://api.github.com/repos/ewallt/pocket-deploy/contents/$path" \
              --data-binary @- || true)

  # Check status (200 = update, 201 = create)
  [[ "$code" =~ ^20[01]$ ]] || {
    echo "Upload failed: $path (HTTP $code)"
    cat /tmp/put.json
    exit 1
  }
}
```

### Pull Request Creation
```bash
# After all uploads complete
PR_URL=$(jq -n --arg title "Add $LIBRARY_NAME library (19 files)" \
               --arg body "Library dashboard + 3 series dashboards + 15 articles" \
               --arg head "$BRANCH" \
               --arg base "gh-pages" \
               '{title:$title, body:$body, head:$head, base:$base}' | \
         curl -sS -X POST -H "Authorization: Bearer $GITHUB_TOKEN" \
              -H "Accept: application/vnd.github+json" \
              -H "Content-Type: application/json" \
              https://api.github.com/repos/ewallt/pocket-deploy/pulls \
              --data-binary @- | jq -r '.html_url')

echo "Pull request created: $PR_URL"
```

---

## HTML Templates

### Template 1: Library Dashboard
**Path:** `dashboard-library-{LIBRARY_SLUG}/index.html`

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>{TOPIC_TITLE}</title>
<style>
:root{--bg:#0f172a;--panel:#1f2937;--ink:#e5e7eb;--muted:#94a3b8;--brand:#60a5fa;--border:#1f2937}
@media(prefers-color-scheme:light){:root{--bg:#f8fafc;--panel:#ffffff;--ink:#1e293b;--muted:#64748b;--brand:#3b82f6;--border:#e2e8f0}}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--ink);font:16px/1.65 system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,Apple Color Emoji,Segoe UI Emoji}
.wrapper{max-width:760px;margin:0 auto;padding:48px 20px}
.panel{background:var(--panel);border:1px solid var(--border);border-radius:12px;padding:28px;box-shadow:0 0 0 1px rgba(0,0,0,.12) inset}
h1{margin:0 0 8px;font-size:2rem;line-height:1.2}
.lead{color:var(--muted);margin:0 0 24px}
a{color:var(--brand);text-decoration:none}
a:hover{text-decoration:underline}
ul.toc{list-style:none;padding:0;margin:0}
ul.toc li{margin:0 0 12px}
ul.toc a{padding:10px 14px;border:1px solid var(--border);border-radius:10px;background:rgba(96,165,250,.08);display:inline-block;color:var(--ink)}
small.muted{color:var(--muted);display:block;margin-top:24px}
</style>
</head>
<body>
<div class="wrapper"><div class="panel">
<h1>{TOPIC_TITLE}</h1>
<p class="lead">{Brief description sentence}</p>
<ul class="toc">
<li><a href="/pocket-deploy/dashboard-{LIBRARY_SLUG}-s01/">Series 1: {Series 1 Title}</a></li>
<li><a href="/pocket-deploy/dashboard-{LIBRARY_SLUG}-s02/">Series 2: {Series 2 Title}</a></li>
<li><a href="/pocket-deploy/dashboard-{LIBRARY_SLUG}-s03/">Series 3: {Series 3 Title}</a></li>
</ul>
<small class="muted">{TOPIC_TITLE}</small>
</div></div>
</body>
</html>
```

### Template 2: Series Dashboard
**Path:** `dashboard-{SERIES_SLUG}/index.html`

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>{TOPIC_TITLE} — {SERIES_TITLE}</title>
<style>
:root{--bg:#0f172a;--panel:#1f2937;--ink:#e5e7eb;--muted:#94a3b8;--brand:#60a5fa;--border:#1f2937}
@media(prefers-color-scheme:light){:root{--bg:#f8fafc;--panel:#ffffff;--ink:#1e293b;--muted:#64748b;--brand:#3b82f6;--border:#e2e8f0}}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--ink);font:16px/1.65 system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,Apple Color Emoji,Segoe UI Emoji}
.wrapper{max-width:760px;margin:0 auto;padding:48px 20px}
.panel{background:var(--panel);border:1px solid var(--border);border-radius:12px;padding:28px;box-shadow:0 0 0 1px rgba(0,0,0,.12) inset}
h1{margin:0 0 8px;font-size:2rem;line-height:1.2}
.lead{color:var(--muted);margin:0 0 24px}
a{color:var(--brand);text-decoration:none}
a:hover{text-decoration:underline}
ul.toc{list-style:none;padding:0;margin:0}
ul.toc li{margin:0 0 12px}
ul.toc a{padding:10px 14px;border:1px solid var(--border);border-radius:10px;background:rgba(96,165,250,.08);display:inline-block;color:var(--ink)}
hr{border:0;border-top:1px solid var(--border);margin:24px 0}
.nav{display:flex;gap:12px;margin-bottom:24px;flex-wrap:wrap}
.nav a{padding:10px 14px;border:1px solid var(--border);border-radius:10px;background:rgba(96,165,250,.08);color:var(--ink)}
small.muted{color:var(--muted);display:block;margin-top:24px}
</style>
</head>
<body>
<div class="wrapper"><div class="panel">
<div class="nav"><a href="/pocket-deploy/dashboard-library-{LIBRARY_SLUG}/">Library Home</a></div>
<h1>{SERIES_TITLE}</h1>
<p class="lead">Series {N} of {K} · {TOPIC_TITLE}</p>
<ul class="toc">
<li><a href="/pocket-deploy/{SERIES_SLUG}-1/">Part 1 · {Article 1 Title}</a></li>
<li><a href="/pocket-deploy/{SERIES_SLUG}-2/">Part 2 · {Article 2 Title}</a></li>
<li><a href="/pocket-deploy/{SERIES_SLUG}-3/">Part 3 · {Article 3 Title}</a></li>
<li><a href="/pocket-deploy/{SERIES_SLUG}-4/">Part 4 · {Article 4 Title}</a></li>
<li><a href="/pocket-deploy/{SERIES_SLUG}-5/">Part 5 · {Article 5 Title}</a></li>
</ul>
<hr />
<div class="nav"><a href="/pocket-deploy/dashboard-library-{LIBRARY_SLUG}/">Library Home</a></div>
<small class="muted">{TOPIC_TITLE} · Series {N} of {K}</small>
</div></div>
</body>
</html>
```

### Template 3: Article Pages
**Path:** `{SERIES_SLUG}-{N}/index.html` where N ∈ {1,2,3,4,5}

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>{TOPIC_TITLE}: {SERIES_TITLE} — {ARTICLE_TITLE}</title>
<style>
:root{--bg:#0f172a;--panel:#1f2937;--ink:#e5e7eb;--muted:#94a3b8;--brand:#60a5fa;--border:#1f2937}
@media(prefers-color-scheme:light){:root{--bg:#f8fafc;--panel:#ffffff;--ink:#1e293b;--muted:#64748b;--brand:#3b82f6;--border:#e2e8f0}}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--ink);font:16px/1.65 system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,Apple Color Emoji,Segoe UI Emoji}
.wrapper{max-width:760px;margin:0 auto;padding:48px 20px}
.panel{background:var(--panel);border:1px solid var(--border);border-radius:12px;padding:28px;box-shadow:0 0 0 1px rgba(0,0,0,.12) inset}
h1{margin:0 0 8px;font-size:2rem;line-height:1.2}
.lead{color:var(--muted);margin:0 0 24px}
a{color:var(--brand);text-decoration:none}
a:hover{text-decoration:underline}
article p{margin:0 0 16px}
hr{border:0;border-top:1px solid var(--border);margin:24px 0}
.nav{display:flex;gap:12px;margin-bottom:24px;flex-wrap:wrap}
.nav a{padding:10px 14px;border:1px solid var(--border);border-radius:10px;background:rgba(96,165,250,.08);color:var(--ink)}
small.muted{color:var(--muted);display:block;margin-top:24px}
</style>
</head>
<body>
<div class="wrapper"><div class="panel">
<div class="nav">
  <a href="/pocket-deploy/dashboard-{SERIES_SLUG}/">Dashboard</a>
  <!-- Part 1: Dashboard + Next only -->
  <!-- Parts 2-4: Dashboard + Prev + Next -->
  <!-- Part 5: Dashboard + Prev only -->
</div>
<h1>{TOPIC_TITLE}: {SERIES_TITLE}</h1>
<p class="lead">Part {N} · {ARTICLE_TITLE}</p>
<article>
<p>{Paragraph 1 content — 80-120 words}</p>
<p>{Paragraph 2 content — 80-120 words}</p>
<p>{Paragraph 3 content — 80-120 words}</p>
<p>{Paragraph 4 content — 80-120 words}</p>
<p>{Paragraph 5 content — 80-120 words}</p>
<p>{Paragraph 6 content — 80-120 words}</p>
<p>{Paragraph 7 content — 80-120 words}</p>
</article>
<hr />
<div class="nav">
  <a href="/pocket-deploy/dashboard-{SERIES_SLUG}/">Dashboard</a>
  <!-- Same nav as top -->
</div>
<small class="muted">{TOPIC_TITLE} · Series {X} of {K}</small>
</div></div>
</body>
</html>
```

**Navigation rules:**
- **Part 1:** Dashboard + Next
  ```html
  <a href="/pocket-deploy/dashboard-{SERIES_SLUG}/">Dashboard</a>
  <a href="/pocket-deploy/{SERIES_SLUG}-2/">Next</a>
  ```
- **Parts 2-4:** Dashboard + Prev + Next
  ```html
  <a href="/pocket-deploy/dashboard-{SERIES_SLUG}/">Dashboard</a>
  <a href="/pocket-deploy/{SERIES_SLUG}-{N-1}/">Prev</a>
  <a href="/pocket-deploy/{SERIES_SLUG}-{N+1}/">Next</a>
  ```
- **Part 5:** Dashboard + Prev
  ```html
  <a href="/pocket-deploy/dashboard-{SERIES_SLUG}/">Dashboard</a>
  <a href="/pocket-deploy/{SERIES_SLUG}-4/">Prev</a>
  ```

---

## Content Guidelines

### Article Content
Each article must contain exactly **7 paragraphs** of **80-120 words each**.

**Two valid approaches:**

**Option A: Full Substantive Content**
- Write complete educational content on the topic
- Each paragraph builds on previous understanding
- Academic but accessible tone
- Direct explanation (no "this article will discuss...")

**Option B: Structured Placeholder Content**
- Pattern for each paragraph:
  ```
  Content paragraph N for {Article Topic}. This examines {specific aspect}
  and explores {context}. Further discussion of {detail} and how it relates
  to {broader concept}. Analysis of {related point} in the context of
  {framework}. Additional exploration of {theme}.
  ```
- Valid for large libraries
- Can be expanded later

**Style rules:**
- No self-reference ("this article", "as we've seen")
- No meta-commentary ("we will now discuss")
- Jump directly into topic
- Structured narrative flow

---

## Bash Script Generation Strategy

### The Python String Literal Problem

**DO NOT ATTEMPT THIS:**
```python
# ❌ WRONG - Will cause SyntaxError
complete_script = """
#!/usr/bin/env bash
... 1000+ lines of bash with quotes, variables, heredocs ...
"""
print(complete_script)
```

**Why it fails:**
- The bash script contains quotation marks, variable expansions (`$VAR`), and complex heredocs
- Python interpreter misinterprets these as string literal terminators
- Results in: `SyntaxError: unterminated string literal`

### The Correct Solution: Modular Assembly

**Break the script into independent components:**

```python
# ✅ CORRECT - Build in pieces, print sequentially

# 1. Store each part in separate variables
script_header = """#!/usr/bin/env bash
set -euo pipefail

# Configuration
OWNER=ewallt
REPO=pocket-deploy
BASE_BRANCH=gh-pages
BRANCH="gemini/colorful-reader-agent-$(date +%Y%m%d-%H%M%S)"

# [upload function, branch creation, etc.]
"""

lib_dashboard_content = """cat > /tmp/lib_dashboard.html <<'HTML'
<!doctype html>
<html lang="en">
[... complete library dashboard HTML ...]
</html>
HTML
upload "dashboard-library-foundations-of-real-numbers-gem/index.html" \\
       "Add library dashboard" "$(cat /tmp/lib_dashboard.html)"
"""

series1_dashboard_content = """cat > /tmp/s1_dashboard.html <<'HTML'
<!doctype html>
[... complete series 1 dashboard HTML ...]
</html>
HTML
upload "dashboard-foundations-of-real-numbers-gem-s01/index.html" \\
       "Add Series 1 dashboard" "$(cat /tmp/s1_dashboard.html)"
"""

article1_1_content = """cat > /tmp/s1_a1.html <<'HTML'
<!doctype html>
[... complete article 1-1 HTML ...]
</html>
HTML
upload "foundations-of-real-numbers-gem-s01-1/index.html" \\
       "Add Series 1 Article 1" "$(cat /tmp/s1_a1.html)"
"""

# [... repeat for all 19 files ...]

script_footer = """
# Create pull request
PR_URL=$(jq -n --arg title "Add Foundations of Real Numbers library" \\
               --arg body "Library + 3 series + 15 articles" \\
               --arg head "$BRANCH" --arg base "gh-pages" \\
               '{title:$title, body:$body, head:$head, base:$base}' | \\
         curl -sS -X POST -H "Authorization: Bearer $GITHUB_TOKEN" \\
              -H "Accept: application/vnd.github+json" \\
              -H "Content-Type: application/json" \\
              https://api.github.com/repos/$OWNER/$REPO/pulls \\
              --data-binary @- | jq -r '.html_url')

echo "All files uploaded successfully!"
echo "Pull request: $PR_URL"
echo "After merge, view at: https://ewallt.github.io/pocket-deploy/dashboard-library-foundations-of-real-numbers-gem/"
"""

# 2. Print each component sequentially
print(script_header)
print(lib_dashboard_content)
print(series1_dashboard_content)
print(article1_1_content)
# [... print all other components ...]
print(script_footer)
```

**Why this works:**
- Each Python string variable contains only a small, syntactically simple piece
- No single string becomes too complex for Python interpreter
- Final bash script is assembled in stdout, not in memory
- Python never tries to parse the complex bash syntax as a Python string

---

## Bash Script Structure

Your generated bash script must follow this structure:

```bash
#!/usr/bin/env bash
set -euo pipefail

# --- Configuration ---
OWNER=ewallt
REPO=pocket-deploy
BASE_BRANCH=gh-pages
BRANCH="gemini/colorful-reader-agent-$(date +%Y%m%d-%H%M%S)"

# Topic-specific variables
LIBRARY_NAME="Foundations of Real Numbers"
LIBRARY_SLUG="foundations-of-real-numbers-gem"
SERIES1_SLUG="foundations-of-real-numbers-gem-s01"
SERIES2_SLUG="foundations-of-real-numbers-gem-s02"
SERIES3_SLUG="foundations-of-real-numbers-gem-s03"

# --- Upload Function ---
upload() {
  local path="$1" msg="$2" content="$3" b64 sha payload code

  if command -v openssl >/dev/null 2>&1; then
    b64=$(printf '%s' "$content" | openssl base64 -A)
  else
    b64=$(printf '%s' "$content" | base64 | tr -d '\n')
  fi

  sha=$(curl -sS -H "Authorization: Bearer $GITHUB_TOKEN" \
               -H "Accept: application/vnd.github+json" \
       "https://api.github.com/repos/$OWNER/$REPO/contents/$path?ref=$BRANCH" \
       | jq -r '.sha // empty')

  if [ -n "$sha" ]; then
    payload=$(jq -n --arg message "$msg" --arg content "$b64" \
                    --arg branch "$BRANCH" --arg sha "$sha" \
                    '{message:$message, content:$content, branch:$branch, sha:$sha}')
  else
    payload=$(jq -n --arg message "$msg" --arg content "$b64" \
                    --arg branch "$BRANCH" \
                    '{message:$message, content:$content, branch:$branch}')
  fi

  code=$(printf '%s' "$payload" | \
         curl -sS -o /tmp/put.json -w '%{http_code}' -X PUT \
              -H "Authorization: Bearer $GITHUB_TOKEN" \
              -H "Accept: application/vnd.github+json" \
              -H "Content-Type: application/json" \
              "https://api.github.com/repos/$OWNER/$REPO/contents/$path" \
              --data-binary @- || true)

  [[ "$code" =~ ^20[01]$ ]] || {
    echo "Upload failed: $path (HTTP $code)"
    cat /tmp/put.json
    exit 1
  }
  echo "✓ Uploaded: $path"
}

# --- Create Branch ---
echo "Creating branch from gh-pages..."
BASE_SHA=$(curl -sS -H "Authorization: Bearer $GITHUB_TOKEN" \
     -H "Accept: application/vnd.github+json" \
     https://api.github.com/repos/$OWNER/$REPO/git/ref/heads/$BASE_BRANCH \
     | jq -r '.object.sha')

jq -n --arg ref "refs/heads/$BRANCH" --arg sha "$BASE_SHA" \
  '{ref:$ref, sha:$sha}' | \
  curl -sS -X POST -H "Authorization: Bearer $GITHUB_TOKEN" \
       -H "Accept: application/vnd.github+json" \
       -H "Content-Type: application/json" \
       https://api.github.com/repos/$OWNER/$REPO/git/refs \
       --data-binary @- > /dev/null

echo "✓ Branch created: $BRANCH"

# --- Upload Files ---
echo "Uploading 19 files..."

# Library Dashboard
cat > /tmp/lib_dashboard.html <<'HTML'
[... full HTML content ...]
HTML
upload "dashboard-library-${LIBRARY_SLUG}/index.html" \
       "Add library dashboard" "$(cat /tmp/lib_dashboard.html)"

# Series 1 Dashboard
cat > /tmp/s1_dashboard.html <<'HTML'
[... full HTML content ...]
HTML
upload "dashboard-${SERIES1_SLUG}/index.html" \
       "Add Series 1 dashboard" "$(cat /tmp/s1_dashboard.html)"

# Series 1 Articles (1-5)
cat > /tmp/s1_a1.html <<'HTML'
[... full HTML content ...]
HTML
upload "${SERIES1_SLUG}-1/index.html" \
       "Add Series 1 Article 1" "$(cat /tmp/s1_a1.html)"

# [... repeat for all 19 files ...]

# --- Create Pull Request ---
echo "Creating pull request..."
PR_URL=$(jq -n --arg title "Add $LIBRARY_NAME library (19 files)" \
               --arg body "Library dashboard + 3 series dashboards + 15 articles exploring $LIBRARY_NAME" \
               --arg head "$BRANCH" --arg base "$BASE_BRANCH" \
               '{title:$title, body:$body, head:$head, base:$base}' | \
         curl -sS -X POST -H "Authorization: Bearer $GITHUB_TOKEN" \
              -H "Accept: application/vnd.github+json" \
              -H "Content-Type: application/json" \
              https://api.github.com/repos/$OWNER/$REPO/pulls \
              --data-binary @- | jq -r '.html_url')

echo ""
echo "=========================================="
echo "✓ All 19 files uploaded successfully!"
echo "✓ Pull request created: $PR_URL"
echo ""
echo "Next steps:"
echo "1. Review and merge the PR at: $PR_URL"
echo "2. After merge, view library at:"
echo "   https://ewallt.github.io/pocket-deploy/dashboard-library-${LIBRARY_SLUG}/"
echo "=========================================="
```

---

## File Count Reference

For a 3-series library:
- **Total files:** 19
  - 1 library dashboard
  - 3 series dashboards (one per series)
  - 15 articles (5 per series)

Formula: `1 + (N_series × 6)`

---

## Common Pitfalls to Avoid

### 1. Path Prefix Confusion
❌ **WRONG:** `pocket-deploy/dashboard-library-{slug}/index.html` in API calls
✅ **CORRECT:** `dashboard-library-{slug}/index.html` in API calls

The `/pocket-deploy/` prefix appears only in HTML hrefs, never in GitHub API paths.

### 2. JSON Escaping Issues
❌ **WRONG:** Hand-building JSON strings with quotes
✅ **CORRECT:** Always use `jq -n` to build JSON payloads

### 3. Multi-line Base64
❌ **WRONG:** `base64` alone (produces newlines)
✅ **CORRECT:** `openssl base64 -A` or `base64 | tr -d '\n'`

### 4. Missing `-gem` Suffix
❌ **WRONG:** `foundations-of-real-numbers`
✅ **CORRECT:** `foundations-of-real-numbers-gem`

### 5. Forgetting to Use Heredocs
❌ **WRONG:** Inline HTML strings in bash (quote escaping nightmare)
✅ **CORRECT:** Use `cat <<'HTML' ... HTML` heredocs

### 6. Python String Literal Approach
❌ **WRONG:** Single massive Python string containing entire bash script
✅ **CORRECT:** Modular variables, print sequentially

---

## Output Requirements

**Your final response must contain:**
1. **Only the bash script** - nothing else
2. **No explanatory text** before or after the script
3. **No Python code visible** in the output
4. **A complete, executable bash script** ready to save as `.sh` and run

**User workflow after receiving your output:**
```bash
# User saves your output to a file
# User executes it
bash deploy_library.sh

# User reviews and merges the PR
# Content goes live on GitHub Pages
```

---

## Example User Request → Your Response

**User provides:**
```
Topic: Foundations of Real Numbers
Series: 3

Series 1: Historical Context and Motivation
- Part 1: The Crisis in Greek Mathematics
- Part 2: Dedekind's Construction
- Part 3: Cauchy Sequences
- Part 4: Completeness
- Part 5: Consequences

Series 2: [5 more articles with titles]
Series 3: [5 more articles with titles]
```

**You respond with (ONLY THIS - nothing else):**
```bash
#!/usr/bin/env bash
set -euo pipefail

OWNER=ewallt
REPO=pocket-deploy
BASE_BRANCH=gh-pages
BRANCH="gemini/colorful-reader-agent-$(date +%Y%m%d-%H%M%S)"

LIBRARY_NAME="Foundations of Real Numbers"
LIBRARY_SLUG="foundations-of-real-numbers-gem"
[... complete bash script with all 19 files ...]
```

**No other text. Just the script.**

---

## Success Criteria

Your generated bash script is successful if:
1. ✅ All 19 files upload without errors (HTTP 200/201)
2. ✅ Feature branch created with correct name pattern
3. ✅ All slugs contain `-gem` suffix
4. ✅ All HTML hrefs use `/pocket-deploy/` prefix
5. ✅ Navigation links work correctly (Dashboard, Prev, Next)
6. ✅ Pull request opens successfully
7. ✅ After merge, library renders correctly on GitHub Pages
8. ✅ Dark mode default with light mode fallback works

---

## End of Instructions

**Remember:** Output only the pure bash script. No explanations. No visible Python code. Just the ready-to-execute bash script.
