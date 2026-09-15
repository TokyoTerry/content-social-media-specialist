/* ============================================================
   Resume renderer
   Fetches resume.md, parses it against the format documented in
   README.md, and renders it into #resume-root using the same
   class names as resume.css expects.

   NOTE: fetch() of a local file needs an HTTP server (GitHub
   Pages works fine). Opening index.html directly via file://
   will fail in most browsers due to CORS — run a local server
   to preview (see README.md).
   ============================================================ */

(function () {
  const ROOT = document.getElementById("resume-root");
  const MD_PATH = "resume.md";

  fetch(MD_PATH)
    .then((res) => {
      if (!res.ok) throw new Error(`Could not load ${MD_PATH} (${res.status})`);
      return res.text();
    })
    .then((text) => render(parse(text)))
    .catch((err) => {
      ROOT.innerHTML = `<p class="error">Couldn't load resume.md — ${escapeHtml(
        err.message
      )}. If you're viewing this locally, run a small HTTP server (see README.md) instead of opening index.html directly.</p>`;
      console.error(err);
    });

  /* ---------------- Parsing ---------------- */

  function parse(raw) {
    const { meta, body } = splitFrontMatter(raw);
    const sections = splitSections(body);
    return { meta, sections };
  }

  // Front matter: a block between two lines of "---" at the top,
  // simple `key: value` pairs, one per line. Link pairs use
  // link1_label / link1_url, link2_label / link2_url, etc.
  function splitFrontMatter(raw) {
    const lines = raw.replace(/\r\n/g, "\n").split("\n");
    const meta = {};
    let bodyStart = 0;

    if (lines[0] && lines[0].trim() === "---") {
      let i = 1;
      for (; i < lines.length; i++) {
        if (lines[i].trim() === "---") {
          bodyStart = i + 1;
          break;
        }
        const m = lines[i].match(/^([A-Za-z0-9_]+)\s*:\s*(.*)$/);
        if (m) meta[m[1].trim()] = m[2].trim();
      }
    }

    return { meta, body: lines.slice(bodyStart).join("\n") };
  }

  // Split the remaining markdown into { "Section Name": "raw content" }
  // by top-level "## " headers.
  function splitSections(body) {
    const lines = body.replace(/\r\n/g, "\n").split("\n");
    const sections = {};
    let current = null;
    let buf = [];

    const flush = () => {
      if (current) sections[current] = buf.join("\n").trim();
      buf = [];
    };

    for (const line of lines) {
      const h2 = line.match(/^##\s+(.*)$/);
      if (h2) {
        flush();
        current = h2[1].trim();
      } else if (current) {
        buf.push(line);
      }
    }
    flush();
    return sections;
  }

  /* ---------------- Rendering ---------------- */

  function render({ meta, sections }) {
    document.title = meta.name ? `${meta.name} | Resume` : "Resume";
    if (meta.description) setMeta("description", meta.description);

    const parts = [];
    parts.push(renderHeader(meta));

    // Known sections render with tailored layout; anything else
    // in the markdown falls through to a generic renderer so the
    // template never silently drops custom sections.
    const renderers = {
      "Professional Summary": renderParagraphs,
      "Professional Experience": renderExperience,
      "Skills": renderSkills,
      "Education": renderEducation,
      "Certifications": renderList,
      "Associations": renderList,
      "Professional Development": renderJoinedLine,
      "Languages": renderLanguages,
    };

    for (const [title, content] of Object.entries(sections)) {
      const fn = renderers[title] || renderGeneric;
      parts.push(`<h2>${escapeHtml(title)}</h2>`);
      parts.push(fn(content));
    }

    ROOT.innerHTML = parts.join("\n");
  }

  function setMeta(name, value) {
    let tag = document.querySelector(`meta[name="${name}"]`);
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("name", name);
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", value);
  }

  function renderHeader(meta) {
    const links = collectLinks(meta);
    const linksHtml = links
      .map(
        (l) =>
          `<a href="${escapeAttr(l.url)}">${escapeHtml(l.label)}</a>`
      )
      .join('<span class="sep">·</span>');

    return `
      <header class="resume-header">
        <h1>${escapeHtml(meta.name || "Your Name")}</h1>
        ${meta.title ? `<div class="subtitle">${escapeHtml(meta.title)}</div>` : ""}
        ${links.length ? `<div class="contact-links">${linksHtml}</div>` : ""}
      </header>`;
  }

  function collectLinks(meta) {
    const links = [];
    let i = 1;
    while (meta[`link${i}_label`] && meta[`link${i}_url`]) {
      links.push({ label: meta[`link${i}_label`], url: meta[`link${i}_url`] });
      i++;
    }
    return links;
  }

  // One or more blank-line-separated paragraphs.
  function renderParagraphs(content) {
    return content
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .filter(Boolean)
      .map((p) => `<p>${escapeHtml(p)}</p>`)
      .join("\n");
  }

  // "### Job Title | Company, Location" header, then a line of
  // dates, an optional italic summary line, then "- " bullets.
  // Blocks are separated by "### " headers.
  function renderExperience(content) {
    const blocks = content
      .split(/\n(?=###\s+)/)
      .map((b) => b.trim())
      .filter(Boolean);

    return blocks.map(renderJobBlock).join("\n");
  }

  function renderJobBlock(block) {
    const lines = block.split("\n").map((l) => l.trim());
    const headerLine = lines.shift() || "";
    const titleLine = headerLine.replace(/^###\s+/, "");
    const [titlePart, companyPart] = splitOnce(titleLine, "|");

    const rest = lines.filter((l) => l !== "");
    let dates = "";
    let summary = "";
    const bullets = [];

    for (const line of rest) {
      if (line.startsWith("- ")) {
        bullets.push(line.slice(2).trim());
      } else if (!dates) {
        dates = line;
      } else if (!summary) {
        summary = line;
      }
    }

    return `
      <div class="job">
        <div class="job-header">
          <div class="job-title">${escapeHtml(titlePart.trim())}${
      companyPart ? ` <span class="company">| ${escapeHtml(companyPart.trim())}</span>` : ""
    }</div>
          ${dates ? `<div class="job-dates">${escapeHtml(dates)}</div>` : ""}
        </div>
        ${summary ? `<div class="job-summary">${escapeHtml(summary)}</div>` : ""}
        ${
          bullets.length
            ? `<ul>${bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}</ul>`
            : ""
        }
      </div>`;
  }

  // "**Label**: item1 · item2 · item3" — one skill group per line.
  function renderSkills(content) {
    const rows = content
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean)
      .map((line) => {
        const m = line.match(/^\*\*(.+?)\*\*\s*:\s*(.*)$/);
        if (!m) return `<div class="skill-row"><span>${escapeHtml(line)}</span></div>`;
        return `<div class="skill-row"><span class="label">${escapeHtml(
          m[1]
        )}</span><span>${escapeHtml(m[2])}</span></div>`;
      });
    return `<div class="skills">${rows.join("\n")}</div>`;
  }

  // "- Degree — Institution, Start – End" bullets. The trailing
  // ", <dates>" (comma-separated last segment with a dash/en-dash
  // in it) is de-emphasized via .dates-hidden, matching the source
  // resume's convention of visually softening — not hiding — dates.
  function renderEducation(content) {
    const items = content
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => l.startsWith("- "))
      .map((l) => l.slice(2).trim());

    return `<div class="education">${items
      .map((item) => {
        const m = item.match(/^(.*?),\s*([^,]*\d[^,]*)$/);
        if (!m) return `<p class="education-item">${escapeHtml(item)}</p>`;
        return `<p class="education-item">${escapeHtml(
          m[1]
        )}<span class="dates-hidden">, ${escapeHtml(m[2])}</span></p>`;
      })
      .join("\n")}</div>`;
  }

  // Plain "- item" bullet list.
  function renderList(content) {
    const items = content
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => l.startsWith("- "))
      .map((l) => l.slice(2).trim());
    return `<ul>${items.map((i) => `<li>${escapeHtml(i)}</li>`).join("")}</ul>`;
  }

  // Bullets (or a single paragraph) joined into one " · "-separated
  // line, matching the source resume's dense Professional
  // Development line.
  function renderJoinedLine(content) {
    const bulletLines = content
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => l.startsWith("- "))
      .map((l) => l.slice(2).trim());

    const items = bulletLines.length
      ? bulletLines
      : content.split("·").map((s) => s.trim()).filter(Boolean);

    return `<p>${escapeHtml(items.join(" · "))}</p>`;
  }

  // "- Language — proficiency" bullets, each its own paragraph.
  function renderLanguages(content) {
    const items = content
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => l.startsWith("- "))
      .map((l) => l.slice(2).trim());

    return items
      .map((i, idx) => `<p class="${idx === 0 ? "tight" : ""}">${escapeHtml(i)}</p>`)
      .join("\n");
  }

  // Fallback for any section name not in the known list above:
  // bullets render as <ul>, otherwise as paragraphs.
  function renderGeneric(content) {
    const trimmed = content.trim();
    if (!trimmed) return "";
    const isList = trimmed.split("\n").every((l) => !l.trim() || l.trim().startsWith("- "));
    return isList ? renderList(trimmed) : renderParagraphs(trimmed);
  }

  /* ---------------- Utilities ---------------- */

  function splitOnce(str, sep) {
    const i = str.indexOf(sep);
    if (i === -1) return [str, ""];
    return [str.slice(0, i), str.slice(i + 1)];
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function escapeAttr(str) {
    return escapeHtml(str).replace(/"/g, "&quot;");
  }
})();
