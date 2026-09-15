# Resume template

A single HTML/CSS/JS template that renders any person's resume from a plain
`resume.md` file. Swap the `.md` file and the page updates — no HTML editing
needed.

## Files

| File | Purpose |
|---|---|
| `index.html` | Page shell. Loads `resume.css` and `resume.js`. |
| `resume.css` | All styling. Edit freely — class names are documented below. |
| `resume.js` | Fetches `resume.md`, parses it, renders it into the page. |
| `resume.md` | The person's content. **This is the only file most people need to edit.** |

## Using it for a different person

Replace the content of `resume.md` with that person's information, following
the format below. Everything else (`index.html`, `resume.css`, `resume.js`)
stays the same.

## `resume.md` format

### Front matter

A block between two `---` lines at the very top, one `key: value` per line:

```
---
name: Jane Doe
title: Product Manager · Data Analyst
description: Resume of Jane Doe — Product Manager and Data Analyst
link1_label: linkedin.com/in/janedoe
link1_url: https://linkedin.com/in/janedoe
link2_label: janedoe.dev
link2_url: https://janedoe.dev
---
```

- `name` — shown as the page's H1.
- `title` — the line under the name (role/subtitle).
- `description` — used for the page's meta description (optional).
- `link1_label` / `link1_url`, `link2_label` / `link2_url`, etc. — as many
  contact links as needed, numbered sequentially starting at 1.

### Sections

Everything after the front matter is `## `-level sections. These section
names get special formatting:

- **Professional Summary** — one or more paragraphs, separated by a blank line.
- **Professional Experience** — one `### Job Title | Company, Location` block
  per role, in this order: title line, a dates line, an optional summary
  line, then `- ` bullets.
  ```
  ### Senior Product Manager | Acme Corp, San Francisco
  Mar 2022 – Present
  Owning the checkout and payments roadmap

  - Led a cross-functional team of 8
  - Ran the quarterly experimentation program
  ```
- **Skills** — one line per group: `**Group Label**: item · item · item`.
- **Education** — `- Degree — Institution, Start – End` bullets.
- **Certifications** / **Associations** — plain `- ` bullet lists.
- **Professional Development** — bullets (or a single line) get joined into
  one dense `·`-separated line, matching a compact "courses taken" list.
- **Languages** — `- Language — proficiency notes` bullets.

Any other `## Section Name` you add is rendered automatically: a list of
`- ` bullets renders as a bullet list, anything else renders as paragraphs.
You can add, remove, or reorder sections freely — the page follows whatever
order they appear in `resume.md`.

## Previewing locally

Opening `index.html` directly (`file://`) will usually fail to load
`resume.md`, because browsers block `fetch()` on the local filesystem.
Run a tiny local server from this folder instead:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000` in a browser.

## Deploying (e.g. GitHub Pages)

Push this folder to a repo and enable GitHub Pages for it (Settings → Pages
→ deploy from branch). No build step is needed — it's static files served
as-is.

## Customizing the look

All visual styling lives in `resume.css`. The color palette and fonts are
declared as CSS variables at the top of the file (`--paper`, `--ink`,
`--accent`, `--font-display`, `--font-body`) — change those first for a
quick reskin.
