---
name: resume-pro
description: |
  Build, customize, and optimize complete resumes for specific job postings. Use this skill whenever T wants to tailor a resume to a role, apply to a posting, create ATS-optimized versions, or needs comprehensive resume guidance. This skill bundles research (company/role/qualifications), resume tailoring, ATS optimization, and writing cleanup into one unified workflow. Trigger on: "tailor my resume for [job]", "customize resume", "apply to [company/role]", "resume for [job]", "ATS optimization", "cover letter for", or when T provides a job posting URL/description. Also use proactively when T mentions applying to a role and may benefit from resume prep even if not explicitly requested.
compatibility: |
  Requires: application-writing, qualification-analysis, company-check, docx, clean-user-facing-text (optional: remove-ai-marks)
  Bundled resources: resume-standards-for-T.md, ai-writing-tells-checklist.md, ats-optimization-framework.md, cover-letter-template.md
---

# Resume-Pro: Complete Resume Creation & Optimization Workflow

Unified skill for building job-winning resumes tailored to T's specific background and the target role.

---

## When to Use This Skill

Use `/resume-pro` whenever T needs to:
- **Tailor a resume** to a specific job posting
- **Apply to a new role** and wants resume + cover letter ready
- **Optimize for ATS** (applicant tracking systems)
- **Understand job fit** before customizing
- **Clean up prose** and remove AI writing tells
- **Bundle research + resume + cover letter** into one workflow

Do NOT use this skill for:
- Generic resume advice (use application-writing directly)
- Company research alone (use company-check)
- Qualification parsing alone (use qualification-analysis)

---

## Complete Workflow: 6 Phases

### Phase 1: Research & Eligibility Check
**Tools:** company-check

**Steps:**
1. Research company: legitimacy, TT eligibility, hiring prospects
2. Extract role requirements: title, seniority, industry, location
3. Flag: salary range, remote vs. on-site, visa/citizenship barriers
4. Decision: Is this role worth pursuing?

**Output:** Company brief + red flags (if any)

---

### Phase 2: Qualification Analysis
**Tools:** qualification-analysis

**Steps:**
1. Parse job posting requirements (identify AND vs. OR logic)
2. Cross-reference against T's resume(s): technical writer, instructor, corporate training versions
3. Cross-reference against: NetLD/ThirdEye manuals (LogicVein), Google Drive "shared resumes" folder
4. Assess fit: strong matches, nice-to-haves, critical gaps
5. Identify: skills requiring upskilling vs. just resume repositioning

**Output:** Qualification match matrix + gap analysis + recommendation

---

### Phase 3: Resume Tailoring
**Tools:** application-writing

**Steps:**
1. Select base resume (default: latest from T's resumes folder)
2. Reorder sections if needed (ATS-friendly sequence prioritized)
3. Map T's experience → posting language/terminology
4. Emphasize matching skills; minimize/contextualize gaps
5. Rewrite bullet points to match posting tone + focus
6. Add relevant keywords from posting (avoid keyword stuffing)

**Output:** Tailored resume content (draft, not yet formatted)

---

### Phase 4: ATS Optimization (Before Formatting)
**Tools:** None; manual audit + best practices

**Audit checklist:**
- [ ] Font: consistent 12px throughout
- [ ] Section headers: standard order (Contact | Summary | Experience | Education | Skills | optional: Certs/Languages)
- [ ] Dates: "Month Year – Month Year" format, consistent
- [ ] No graphics, tables, colored backgrounds, or embedded images
- [ ] Bullet points: action verb + responsibility + outcome (quantified if possible)
- [ ] Keywords: 3–5 from posting naturally integrated, not forced
- [ ] Spacing: adequate white space (not cramped, not sparse)
- [ ] Length: 1 page (default) or 2 pages if 20+ yrs experience justified
- [ ] Sections in correct order: Contact ▸ Summary ▸ Experience ▸ Education ▸ Skills
- [ ] Education: single-line format — *Degree, University, start date – end date*

**Output:** ATS-ready structure + keyword log

---

### Phase 5: Formatting & File Creation
**Tools:** docx

**Steps:**
1. Apply T's original resume template (preserve styling, font, spacing)
2. Insert tailored content into template
3. Apply white-text date hiding if needed (`#ffffff` color via CSS: `.job-period { color: #ffffff; }`)
4. Verify: all sections render correctly, no formatting breaks
5. Export as .docx to `/mnt/user-data/outputs/` with filename: `[TargetCompany]_Resume_T_Tobas_[Date].docx`
6. Create backup in Google Drive Jobs folder

**Output:** .docx resume file + backup saved

---

### Phase 6: Cleanup & Finalization
**Tools:** clean-user-facing-text, remove-ai-marks (optional)

**Steps:**
1. Proofread: spelling, grammar, consistency
2. Check against AI-writing-tells (see bundled reference)
3. Remove: vague generalizations, buzzwords, fluff
4. Verify tone: professional, concise, outcome-focused
5. Strip invisible Unicode / AI metadata (if needed)
6. Final review: Does resume match job posting? Does it represent T accurately?

**Output:** Final, clean resume ready to submit

---

## Outputs Produced

1. **Tailored Resume** (.docx, saved to `/mnt/user-data/outputs/` + Google Drive Jobs folder)
2. **Cover Letter** (optional, ~150 words if requested; see template in bundled resources)
3. **Suitability Analysis** (qualification match + gap summary + recommendations)
4. **Application Readiness Checklist** (everything verified before submission)

---

## Key Inputs Required

- **Job posting URL** or **pasted job description** (required)
- **Target company name** (for research)
- **Resume version preference** (default: latest from resumes folder)
- **Cover letter needed?** (optional; default: yes)

---

## T's Resume Standards (Always Apply)

**Reference:** See bundled file `resume-standards-for-T.md` for complete standards.

Quick checklist:
- Font: 12px throughout all sections
- Education dates: white text (`#ffffff`) if privacy needed
- Education format: Single-line — *Degree, University, start date – end date*
- No "journalist" title — use "Advertising Copywriter" (SportsMax)
- Portfolio highlights: No specific numbers (avoid "50+ articles")
- Diátaxis: T applied full framework at Woven by Toyota; never hedge as "elements of"

---

## Bundled Resources

Read these when the skill triggers:

1. **`resume-standards-for-T.md`** — T's specific formatting rules, styling guide, white-text date method
2. **`ai-writing-tells-checklist.md`** — Wikipedia Signs of AI Writing reference; what to avoid
3. **`ats-optimization-framework.md`** — 6-phase ATS audit (keywords, structure, formatting, readability)
4. **`cover-letter-template.md`** — 150-word structure + examples (3 paragraphs: opening + supporting + closing)

---

## Workflow Summary (Quick Reference)

```
1. Research (company-check)
   ↓
2. Analyze Qualifications (qualification-analysis)
   ↓
3. Tailor Resume (application-writing)
   ↓
4. Optimize for ATS (manual audit)
   ↓
5. Format & Save (docx)
   ↓
6. Clean & Finalize (clean-user-facing-text)
   ↓
Ready to Apply
```

---

## What This Skill Does NOT Do

- **Does not apply to jobs** (user submits manually or via platform)
- **Does not track applications** (use Job Search Table for that)
- **Does not guarantee interviews** (depends on company, hiring manager, timing)
- **Does not replace human judgment** (user makes final decision to apply)

---

## Pro Tips

1. **Salary negotiation:** Use company research to inform ask; don't undersell
2. **Cover letter:** Keep to 150 words, 3 short paragraphs; see template in bundled resources
3. **Multiple versions:** If applying to 3+ similar roles, create 2–3 resume versions (tailor each, don't genericize)
4. **Timing:** Apply immediately after resume ready; hiring managers review within 24–48 hours
5. **Follow-up:** If no response in 1 week, send brief follow-up email to hiring manager/recruiter
6. **Track it:** Log every application in Job Search Table for visibility

---

**Last Updated:** Sept 2, 2026  
**Skill Version:** 1.0  
**Author:** T (Terrance Tobas) + Claude
