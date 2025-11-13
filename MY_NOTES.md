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

## Other Workflows

(Add additional workflows here as needed)
