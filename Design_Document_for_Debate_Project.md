# **Debates Static Library — AI-Facing Architecture Guide**

## **1. Purpose of This Document**

This document is written *for an AI system* responsible for generating or updating parts of the **Debates Static Library**, a fully static, JSON-driven mini-site inside `pocket-deploy`.
It explains:

* The architecture
* The moving parts
* The rules that must never be violated
* The workflow for adding new debates
* How navigation and images are dynamically generated
* Where AI should write files and what format to follow

If an AI reads this, it should be capable of maintaining or extending the project with no missing context.

---

# **2. High-Level Overview**

The **Debates Static Library** is a static web app built inside:

```
/pocket-deploy/debates/
```

It mirrors the architecture of your Open Theism Static Library:

* **Left side:** hierarchical sidebar (Debates → Subjects → Debate Items)
* **Right side:** either

  * Debates index (full list of subjects)
  * Subject page (full list of debates under that subject)
  * Debate detail page (Pro/Con content)

All navigation is generated **client-side from a single registry file**:

```
/pocket-deploy/data/debates-site-nav.json
```

Images are also mapped through a separate registry:

```
/pocket-deploy/data/debate-images.json
```

**Everything is data-driven.**
No navigation, images, or slugs are hardcoded in the HTML files.

---

# **3. Files an AI Must Know Exist**

## **Core Pages**

| Path                                         | Purpose                       |
| -------------------------------------------- | ----------------------------- |
| `/pocket-deploy/debates/index.html`          | Main Debates index            |
| `/pocket-deploy/the-big-bang/index.html`     | Subject page listing debates  |
| `/pocket-deploy/debates/<debate>/index.html` | Debate detail pages (Pro/Con) |

## **Data Files**

| Path                                        | Purpose                                                  |
| ------------------------------------------- | -------------------------------------------------------- |
| `/pocket-deploy/data/debates-site-nav.json` | Source of truth for sidebar and subject/debate structure |
| `/pocket-deploy/data/debate-images.json`    | Maps debate slugs → image paths                          |

## **Image Folder**

```
/pocket-deploy/img/
```

Images used in subject listings.

---

# **4. Canonical Registries**

## **4.1 debates-site-nav.json (Navigation Registry)**

This file defines:

* Subjects
* Debate titles
* Debate slugs
* Summaries

It looks like:

```json
{
  "subjects": [
    {
      "id": "the-big-bang",
      "title": "The Big Bang",
      "debates": [
        {
          "title": "Inflation: necessary or ad hoc?",
          "slug": "/pocket-deploy/debates/inflation/",
          "summary": "Does an early period of accelerated expansion uniquely explain the universe we observe, or is it a flexible patch?"
        }
      ]
    }
  ]
}
```

### **Rules**

1. Slugs must always be absolute paths beginning with `/pocket-deploy/…`
2. Each debate must live in:

   ```
   /pocket-deploy/debates/<slug-name>/
   ```
3. Each debate must contain:

   ```
   index.html
   ```

   (AI generates this when requested.)

---

## **4.2 debate-images.json (Image Registry)**

This maps debate slugs to image paths:

```json
{
  "/pocket-deploy/debates/inflation/": "/pocket-deploy/img/the-big-bang-01.gif",
  "/pocket-deploy/debates/missing-antimatter/": "/pocket-deploy/img/the-big-bang-02.png",
  "/pocket-deploy/debates/mature-galaxies/": "/pocket-deploy/img/the-big-bang-03.png"
}
```

### **Rules**

1. Key = absolute slug (`/pocket-deploy/debates/.../`)
2. Value = absolute image path in `/pocket-deploy/img/`
3. Debates without entries fall back to a default image.

---

# **5. How the Sidebar Works (AI Summary)**

The sidebar is dynamically assembled in the browser:

1. Load `debates-site-nav.json`
2. Render:

   * The "Debates" root node
   * Each subject beneath it
   * Each debate beneath its subject
3. Highlight the correct subject/debate based on `window.location.pathname`
4. Expand only the subject associated with the current page

### **No subject or debate is ever hardcoded in any HTML file.**

**All sidebar items come exclusively from the registry.**

---

# **6. How the Subject Page Works**

A subject page:

* Loads `debates-site-nav.json`
* Locates the subject block whose `"id"` matches the page's folder name (e.g., `"the-big-bang"`)
* Renders an "article card" for each debate
* Loads images from `debate-images.json`
* Falls back to default image if missing

The subject page **never** contains a hardcoded list of debates.

---

# **7. How a Debate Page Works**

A debate page contains **only:**

* The motion title
* Subtitle
* Motion line
* Pro column content
* Con column content
* Back link

It does **not**:

* Contain navigation
* Load sidebars
* Load registries
* Read JSON

Only the subject and index pages load the registries.

---

# **8. Required Workflow for Adding a New Debate**

This is crucial — an AI must follow this exactly.

### **Step 1 — Create the debate folder**

Example for new slug `/pocket-deploy/debates/dark-energy-tension/`:

```
/pocket-deploy/debates/dark-energy-tension/index.html
```

AI writes the debate content here.

---

### **Step 2 — Add entry to debates-site-nav.json**

Add:

```json
{
  "title": "Dark Energy Tension",
  "slug": "/pocket-deploy/debates/dark-energy-tension/",
  "summary": "Is the observed acceleration of the universe evidence for dark energy or a sign of model failure?"
}
```

To the appropriate subject.

---

### **Step 3 — Add image mapping (optional)**

Add to:

```
/pocket-deploy/data/debate-images.json
```

Example:

```json
"/pocket-deploy/debates/dark-energy-tension/": "/pocket-deploy/img/the-big-bang-05.png"
```

---

### **Step 4 — Test**

Local test:

```
cd ~/Documents
python -m http.server 8000
```

Verify:

* Sidebar shows the new debate
* Subject page shows the image
* Debate page loads

---

# **9. Rules AI Must Never Break**

1. **Never hardcode navigation or image paths inside HTML files.**
2. **Always write absolute slugs beginning with `/pocket-deploy/`.**
3. **Each debate must live in its own folder named exactly after the slug.**
4. **Registry files must remain valid JSON.**
5. **When generating new debates, follow the Pro/Con layout and semantics:**

   * **Pro** supports the motion
   * **Con** opposes the motion
6. **Never introduce additional global JSON files.**
7. **Never write code unless explicitly asked.**

---

# **10. How an AI Should Think When Extending This Project**

When the user requests:

> "Let's add a new debate about XYZ."

The AI must:

1. Ask for the slug name (if unclear)
2. Generate **only** what is requested (e.g., debate page when asked)
3. Update registry files only when explicitly asked
4. Follow static-site constraints (no frameworks, no bundlers)
5. Keep all HTML plain, self-contained, inline CSS + JS
