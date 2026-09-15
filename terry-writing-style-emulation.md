---
name: terry-writing-style-emulation
description: Generate application and professional writing matching Terry's authentic voice
type: writing
version: 1.0
build_date: 2026-09-04
iterations: 7 application questions + voice sample analysis
---

# Terry Writing Style Emulation

Use this skill to generate professional writing, application responses, and promotional content that authentically matches Terry's voice and style.

## Invocation

`/terry-writing-style-emulation [prompt] [optional context]`

## Voice Profile

### Core Principles

**DO:**
- Open with specific context or action, never filler
- Use short, declarative sentences for emphasis
- Include concrete details (names, regions, metrics)
- Maintain active voice and personal agency
- Let dry humor and honest self-awareness show
- Vary sentence length intentionally
- Close with reflection or forward implication

**DO NOT:**
- Use "I believe," "I think," "I feel" (state directly)
- Repeat job titles once mentioned
- Pad with adjectives or superlatives ("highly," "very")
- Overuse em-dashes
- Over-explain or qualify statements
- Open with generic corporate phrases

### Sentence Structure
- Short, declarative sentences for emphasis
- Intentional length variation (short + long combinations)
- Avoids em-dashes; uses periods, commas, semicolons strategically
- Opens strong with context/action, never filler

### Vocabulary & Word Choice
- Concrete over abstract ("write fluently" not "highly adaptable")
- Specific detail over generalization (names, regions, metrics)
- Technical/formal when warranted; conversational when personal
- No buzzwords or corporate phrases
- Industry terms used naturally, no over-explaining

### Tone Markers
- Slightly self-aware, honest about constraints
- Direct and matter-of-fact
- Authoritative but not distant
- Dry humor/irony when appropriate
- Warm when describing fieldwork/research/interests

### Punctuation Patterns
- Strategic dashes within sentences for clarification
- Parentheses for credibility asides
- Commas for flow, not convention
- Periods for rhythm and emphasis

### Structure & Flow
- Topic-first (context/goal before detail)
- Builds evidence systematically
- Concludes with reflection or forward implication
- No repetition—says once, moves on

### Active Voice Dominance
- Personal agency ("I researched," "I tracked," "I applied")
- Subjects doing actions, not being acted upon
- Active construction even in client/work contexts

## Application Template

1. Open with specific context or action
2. Use short sentences for key points
3. Include concrete examples (names, metrics, details)
4. Maintain active voice throughout
5. Trim all filler
6. Let personality show (irony, honesty, specificity)
7. Close with implication or reflection, not summary

## Continuous Improvement

This skill improves with each iteration:
- Test output with new writing tasks
- User edits to refine voice further
- Document emerging patterns
- Track voice evolution over time

---

**Reference materials:**
- Blog: https://chizujin.wordpress.com (Sleep Analysis, Jogashima, Asahina Kiridoshi)
- Published work: Sakuraco (104), Tokyo Treat (13), Yume Twins (4)
- Professional background: Technical writing, SEO content, medical/healthcare, digital marketing, Japanese travel & culture

# Additions to /anthropic-skills:terry-writing-style-emulation

## Add to Section: "Continuous Improvement" → "Iteration Examples"

---

### Iteration 1: British Council (Trinidad & Tobago) Outreach Email — Sept 2026

**Context:** Direct outreach email to British Council TT office for teacher training roles. User refined initial draft with edits focusing on credibility, specificity, and streamlined closing.

**Final Output:**

```
Hello,

I'm reaching out about teacher training and IELTS examination roles at your Trinidad & Tobago office. I've spent 15+ years delivering instruction and exam preparation across Japan, and I'm positioned to bring that experience to the Caribbean.

Qualifications:
- TESOL certification (120-hours), American TESOL Institute
- TESOL for Business Certification, American TESOL Institute
- Developing Student Reading Skills Workshop, English Language Education Council (ELEC)
- Cambridge Speaking Examiner certified
- Direct instruction (IELTS, TOEFL, SAT, Cambridge exams)
- Teacher training, management, and curriculum development
- Corporate training delivery: TEPCO, Toshiba, Nissan Chemicals, JFE, Sumitomo, Nippon Steel
- Hosei University Essay & Speech-Writing, Presentation instructor

I'd welcome a conversation about how my background and qualifications matches your team's needs.

Terrance Michael Tobas
```

**Voice Principles Demonstrated:**

1. **Opening with specific context** — "I'm reaching out about teacher training and IELTS examination roles at your Trinidad & Tobago office" (no filler, direct action)
2. **Concrete details** — Named specific roles (teacher training, IELTS), named specific clients (TEPCO, Toshiba, etc.), specific institution (Hosei University with courses)
3. **Active voice** — "I've spent 15+ years delivering instruction," "I'm positioned to bring"
4. **No hedging** — No "I believe," "I think," "I feel" — states qualifications directly
5. **Scannable format** — Bullet points for quick reading; hiring managers scan credentials first
6. **Dry confidence** — Offers conversation without over-explaining or qualifying statements
7. **Streamlined closing** — Removed redundant text about résumé/timing; closes with clear forward implication

**Refinement Notes:**

- **User Edit 1:** Expanded "My qualifications:" → "Qualifications:" (cleaner label)
- **User Edit 2:** Added specific certifications (TESOL for Business, ELEC workshop) for sector credibility
- **User Edit 3:** Added "Hosei University Essay & Speech-Writing, Presentation instructor" (specific course names > generic "courses")
- **User Edit 4:** Simplified closing from "I'm interested in **teacher training roles specifically** — designing syllabi... My résumé and references are available on request" → "I'd welcome a conversation about how my background and qualifications matches your team's needs." (eliminates redundancy, focuses on next action)
- **User Edit 5:** Removed explicit contact info footer (email/LinkedIn already in email header; redundant in body)

**Length:** ~150 words (email body) — optimal for cold outreach (scannable, substantial, not overwhelming)

**Status:** Ready to send. Document as example of direct outreach using authentic voice.

---

## Pattern Identified (Update Section: "Voice Markers")

**New pattern:** Terry's direct outreach uses **credential-first structure** (bullet list of qualifications) before the ask/conversation opener. This signals authority and reduces hiring manager friction ("Why should I listen?") before making the request.

**When to apply:** Cold outreach, networking emails, applications to organizations without public job postings. Builds credibility before the soft ask.

---

## Continuous Improvement Tracker

| Date | Task | Output | Refinement | Status |
|------|------|--------|-----------|--------|
| Sept 5, 2026 | British Council outreach email | Direct inquiry for TT teacher training roles | Expanded credentials, added specific course names, streamlined closing | Sent |
| Sept 8, 2026 | Resume accuracy correction prompt | AI instruction set for verifying employment data | Master Resume cross-reference methodology | Complete |

---

## Iteration 2: Resume Accuracy Correction Workflow — Sept 2026

**Context:** Systematic process for correcting resume inaccuracies by cross-referencing against Master Resume source document. Developed after Communications Officer resume required employment date corrections.

**AI Prompt Template:**

```
You are a resume verification specialist. Your task is to correct inaccuracies 
in a job application resume by cross-referencing it against a comprehensive 
Master Resume source document.

## Instructions

1. **Source of Truth**: Use the Master Resume as the authoritative reference 
   for all employment data. Never infer or estimate dates, roles, or achievements.

2. **Verify and Correct**:
   - Extract exact employment dates (Month Year – Month Year format)
   - Identify the longest tenure role and mark it explicitly
   - Document concurrent roles with overlapping date ranges
   - Restore all quantified achievements (numbers of students, employees, articles, etc.)

3. **Enhance Role Descriptions**:
   - Replace generic descriptions with concrete outputs and responsibilities
   - Include specific tools, technologies, and methodologies actually used
   - Add measurable results tied to real employer data

4. **Improve Summary Section**:
   - Update to reflect complete career span
   - Highlight key competencies demonstrated across multiple roles
   - Name specific employers that add credibility

5. **Output Requirements**:
   - Single-page format with consistent date formatting
   - All claims traceable to Master Resume source
   - Professional tone; no assumptions or invented details
   - Calculate and state suitability percentage for target role

## Success Criteria

✓ All dates verified against source document  
✓ No concurrent role conflicts  
✓ Achievements quantified with real numbers  
✓ Summary reflects full career experience  
✓ Ready for immediate submission to target employer
```

**Voice Principles Demonstrated:**

1. **Direct methodology** — Step-by-step instructions without hedging
2. **Authority-driven** — "You are a specialist" establishes expertise framing
3. **Concrete verification process** — Each step has specific, measurable outputs
4. **No generalization** — Success criteria are checkboxes, not vague aspirations

**Applied to:** Communications Officer resume correction (Eigotechnica dates, concurrent roles, achievement quantification)

**Status:** Reusable template for future resume tailoring tasks

---

## Iteration 3: Trinidad & Tobago Resume Nomenclature & Format Adaptation — Sept 2026

**Context:** Trinidad & Tobago job market prefers shorter, simpler resumes that differ significantly from international standards. Established naming convention to distinguish TT-market resumes from global-market versions.

**Naming Convention:**

```
International Resume:
  2026-09-08 Communications Officer Resume - T Tobas.md
  2026-09-08 Communications Officer Resume - T Tobas.html

Trinidad & Tobago Resume (SAME POSITION):
  2026-09-08 Communications Officer TT - T Tobas.md
  2026-09-08 Communications Officer TT - T Tobas.html
  (Add "TT" suffix before name, after role/position)
```

**Key Principle:** One position may require TWO resume versions—one for international platforms (ATS-optimized, full detail, 20+ years experience visible), one for Trinidad platforms (abbreviated, locally-focused, simplified format).

**Format Differences:**

| Element | International Resume | Trinidad Resume |
|---------|----------------------|-----------------|
| Length | 1–2 pages | Single page, highly condensed |
| Experience entries | 8+ roles listed | 4–5 most relevant roles |
| Detail depth | Specific achievements, metrics | Brief role summary, no metrics |
| Audience | ATS systems, hiring managers globally | Local employers, personal review |
| Tone | Formal, achievement-driven | Conversational, locally appropriate |
| Font/Design | 12pt, professional styling | Simpler, easier to read |
| Technical jargon | Industry-standard terminology | Plain language |

**Applied to:** Communications Officer position (Job ID 2627, EmployTT)
- International version: Full 20+ year career, 8 job entries, detailed achievements
- TT version: Condensed, 4–5 most relevant roles, simplified content

**Prompt Template for Future TT Adaptations:**

```
Create a Trinidad & Tobago market resume from the international version by:

1. **Reduce to essentials** — Keep 4–5 most relevant roles (prioritize recency 
   and local applicability over chronological completeness)

2. **Simplify language** — Replace technical/corporate jargon with plain speech. 
   No ATS keywords; instead, clarity for human readers.

3. **Remove metrics** — Strip specific numbers (100+ trained, 1,000+ students). 
   State results without quantification.

4. **Single page only** — Ruthlessly edit for brevity. If international is 1.5 
   pages, TT target is single page.

5. **Focus on transferability** — Emphasize skills that apply to the TT role, 
   even if they are not the primary skill in the international version.

6. **Local context first** — Lead with Trinidad origins and current location 
   before international experience.

7. **Tone shift** — Warm, direct, less "professional corporate" and more 
   "I can do this for you."

8. **Naming:** File with "TT" suffix before name (e.g., "Role-Name TT - T Tobas.md")
```

**File Naming Rule (Going Forward):**

- **All Trinidad & Tobago positions:** Add "TT" designation in filename before author name
  - Format: `[Date] [Role] TT - T Tobas.[extension]`
  - Examples:
    - `2026-09-08 Communications Officer TT - T Tobas.md`
    - `2026-09-08 Customer Service Facilitator TT - T Tobas.html`
    - `2026-09-08 Teacher Trainer TT - T Tobas.docx`

- **International positions:** No TT designation
  - Format: `[Date] [Role] - T Tobas.[extension]`
  - Examples:
    - `2026-09-08 Technical Writer Resume - T Tobas.md`
    - `2026-09-08 SEO Content Specialist - T Tobas.html`

**Voice Principles for TT Market:**

1. **Brevity as professionalism** — Hiring managers scan quickly; every line must earn its place
2. **Specificity over scope** — Name the exact skills the role needs, skip the rest
3. **Local credibility** — Lead with Trinidad connection; use international exp as secondary credibility
4. **Conversational authority** — "I have done X at Y" not "I bring expertise in the landscape of X"
5. **No hedging** — State capability directly; local market rewards confidence

**Status:** Naming convention adopted; template ready for future TT applications

---

## Update Section: "Continuous Improvement Tracker"

Add new row:

| Date | Task | Output | Refinement | Status |
|------|------|--------|-----------|--------|
| Sept 8, 2026 | Trinidad resume naming convention | TT suffix for local market (vs. international format) | Single-page condensed format, simplified language, 4–5 roles max | Adopted |
| Sept 8, 2026 | Trinidad cover letter format | Direct salutation, signature image, personal touch | Remove "Dear", replace "Sincerely," with name, add handwritten signature | Complete |

---

## Iteration 4: Trinidad Cover Letter Format & Signature Integration — Sept 2026

**Context:** Trinidad & Tobago cover letters benefit from warmer, more direct tone with visual elements (handwritten signature) that convey authenticity. Format differs from international standard.

**AI Prompt Template:**

```
Create a Trinidad & Tobago market cover letter by adapting the Somnio template:

1. **Remove "Dear" salutation** — Open directly with recipient name/title.
   Before: "Dear Ministry of Rural Development & Local Government Hiring Team,"
   After: "Ministry of Rural Development & Local Government Hiring Team,"

2. **Remove "Sincerely," formal closing** — Replace with formal title + name line.
   Before: "Sincerely,"
   After: "Mr. Terrance Tobas"

3. **Add handwritten signature image** — Insert between formal name line and contact info.
   - Source: D:\Resumes\Work Documents\terry-signature.png
   - Size: Proportional (max-width 120px, height auto)
   - Format: HTML <img> tag with alt-text
   - Placement: After "Mr. Terrance Tobas" → before email/contact line

4. **Body stays strong** — Keep 3-paragraph Somnio structure (opening + supporting + closing line).

5. **Tone shift** — Formal business English → direct, conversational, locally appropriate.

6. **Result:** Handwritten signature adds authenticity and personal touch. More credible 
   and warm than typed name alone in TT market.
```

**Applied to:** Communications Officer cover letter (EmployTT Job 2627)

**Key Innovation:** Handwritten signature transforms formal letter into personal communication. TT hiring managers respond well to this blend of professionalism + personal touch.

**Voice Principles for TT Cover Letter:**

1. **Direct opening** — No corporate throat-clearing ("I am writing to express...")
2. **Handwritten signature** — Personal authenticity; signals genuine interest
3. **Warm closing** — One line expressing enthusiasm for discussion/opportunity
4. **Body language** — Specific achievements tied to posted role, not generic strengths
5. **Local credibility** — Lead with relevant experience; save international background for P2

**Status:** Format adopted; template ready for all TT market cover letters

---

## Iteration 5: Multi-Divisional Prospecting Cover Letter (MPAAI) — Sept 2026

**Context:** Prospecting outreach to government ministry positioning for multi-divisional capability support (not single role). Requires balance: outcome-focused specificity + warm tone + local credibility. DRAFT evolved to DRAFT2 through user editing for directness and brevity.

**Key Differences (DRAFT → DRAFT2):**

| Element | DRAFT | DRAFT2 | Why Changed |
|---------|-------|--------|-------------|
| Opening | "I've studied your work—Service Modernisation..." | "I've been reading about your projects" | More conversational, less formal |
| Initiative listing | Inline with explanations | Simple bullet list | Faster to scan; respects reader's time |
| Technical framing | "exact skillset—process automation via Git/CI-CD..." | Embedded naturally in context | Shows knowledge without showing off |
| Force/emphasis | "precise match between what you're building" | "precise match between what you're building" | Retained (works) |
| Middle section split | Single long paragraph | Separated into own actions | Easier to read; more digestible |
| Closing tone | "I've committed 17+ years...discipline to government" | "I've committed 17+ years...discipline to government service delivery at home" | Slight warmth addition; shows local commitment |

**AI Prompt Template (Trinidad Multi-Divisional Prospecting Cover Letter):**

```
Create a prospecting cover letter for multi-divisional government outreach using this structure:

## Core Principles

1. **Opening: Specific, not generic**
   - "I'm reaching out because I've been reading about [X initiative]"
   - Name specific projects, not "your organization"
   - Show evidence of research without overexplaining

2. **Evidence paragraph: Concrete examples first**
   - Lead with one successful precedent (Woven by Toyota, Rakuten, GLOVA, etc.)
   - Embed technology/methodology names naturally (Diátaxis, Git, CI/CD)
   - Provide one link/credential that proves expertise
   - End with outcome, not process: "reduced manual processing time significantly"

3. **Multi-divisional positioning (not role-specific)**
   - List 4–6 initiatives as simple bullets
   - Avoid explaining each one; let the list speak
   - Signal flexibility: "whether you need immediate help with X, Y, or Z"

4. **Proof of scale**
   - Quantify without padding: "trained 1,000+ students," "100+ trainers"
   - Show concurrent work: "done this in international environments, under deadline"
   - Demonstrate reliability: "17+ years sustained engagement"

5. **Local credibility statement**
   - "I'm now based in [location]"
   - Reference home connection if applicable
   - Signal availability: "as my contract has ended, I am available..."

6. **Warm, direct closing**
   - One-line call to action: "I'd welcome a conversation about how these capabilities align with your roadmap"
   - Avoid formal sign-off patterns
   - No over-explaining or qualifying

## Tone Markers

- **Conversational but authoritative** — "I've been reading about your projects" (not "Upon review of your initiatives")
- **Direct positioning** — "I am not applying for any one role" (explicit, clear)
- **Honest availability** — "My contract has ended, I am available" (not "I am seeking new opportunities")
- **Warm specificity** — "I'm excited to see the country taking sizeable technological steps" (personal + local)

## Structure Template

P1: Research evidence + precedent (Woven by Toyota example)
P2: Multi-divisional alignment (bullets) + scale proof
P3: Local positioning + availability
P4: One-line ask + warm close

## Word Count: 280–320 words (longer than role-specific cover letter, justified by complexity)

## Application Markers (From MPAAI DRAFT2 example):

✓ Research evident: Named all 6 initiatives, links to actual company sites
✓ Outcome-focused: "automated documentation," "bridging teams," "reduced manual processing"
✓ Multi-divisional: Explicit statement: "I am not applying for any one role"
✓ Local warmth: "excited to see the country taking sizeable technological steps...ready to bring that same discipline to government service delivery at home"
✓ Directness: No hedging, no "I believe," no "I think"
✓ Proof of scale: 1,000+ students, 100+ trainers, 17+ years
```

**Voice Principles for Multi-Divisional Prospecting:**

1. **Research evident but not ostentatious** — Name specific initiatives; don't over-explain them
2. **One strong precedent is enough** — Don't list every job; one powerful example (Woven by Toyota) carries weight
3. **Multi-role positioning explicit** — Say outright: "I am not applying for any one role"
4. **Scale language concrete** — "hundreds," "100+," "thousands" are fine; avoid "vast experience" or "deep expertise"
5. **Local connection warm** — If applicable, reference home origins/location; signal genuine commitment to region
6. **Availability direct** — "My contract ended, I am available" beats "I am seeking new challenges"
7. **Closing action clear** — One sentence; no vague "hoping to hear from you"

**Applied to:** MPAAI [Ministry of Public Administration and Artificial Intelligence] prospecting outreach (6 initiatives: MSID, TTWiFi, DHub, LearnTT, AI Centres, Open Data Portal)

**Status:** Prospecting model verified; reusable for multi-divisional government or enterprise outreach

---
