# Staffing-Platform Profile Fields

Applies to permanent candidate-profile questionnaires at staffing and outsourcing
firms (BairesDev, Toptal, Turing, Andela, Crossover, and similar), plus talent-pool
profiles on aggregators (Jobgether, Dynamite Jobs, Remote Leverage).

## Understand the mechanism first

These profiles are parsed by an automated matcher before any human reads them. The
system assigns candidates to open or anticipated roles based on stated role and
experience, then routes them into role-specific technical, English, and aptitude
tests. Two consequences govern every choice below: the text must be machine-
parseable, and every claim will be tested later. Profiles are also permanent until
the candidate edits them, so an inflated claim persists in the record.

## INCLUDE

- **Explicit tenure figures.** State years in the discipline as a number, and state
  it in the first sentence. Separate discipline-specific years from total career
  years when they differ.
- **Named employers with date ranges.** One line per employer, most relevant first
  or reverse-chronological. Dates in parentheses.
- **Named technologies in a dedicated stack line.** The matcher keys on these. Group
  by category (documentation, version control, DevOps, AI tooling).
- **One concrete artifact per role.** A pipeline built, a department established, a
  migration completed, a system administered. Something that could be verified.
- **Plain statement of scope owned.** Distinguish what was owned (projects,
  repositories, pipelines, documentation function) from what was managed (people).
  Where people management exists, cite it separately with the employer and duration.
- **Frameworks and methodologies by name** where genuinely applied — with the
  evidence of application, not the label alone.
- **Timezone and work eligibility** where the firm hires regionally.
- **Character-count compliance.** Check the field limit before writing. Draft to
  land under it, since truncation mid-sentence reads as carelessness.

## EXCLUDE

- **Narrative without parseable data.** Prose containing no years, no technologies,
  and no role titles gives the matcher nothing to slot, producing no assignment.
- **Generalist scatter.** Do not weight unrelated disciplines equally. A profile that
  could describe four different people is sold as none. Lead with one primary
  discipline and subordinate the rest.
- **Inflated tenure.** Never stretch discipline years using adjacent work. The
  technical test exposes it and the record persists.
- **"Managed" used loosely.** Do not use it for artifact ownership. Recruiters probe
  the word in interview.
- **Bloat.** Past roughly 400 words the text goes unread regardless of quality.
- **Buzzword density without artifacts.** "Passionate," "detail-oriented," "fast
  learner," "team player," "self-starter," "results-driven." No verification path.
- **Personal context.** Relocation reasons, availability pleas, unrequested gap
  explanations, financial circumstances. Weakens positioning, aids no matching.
- **Salary expectations or negotiating position** unless the field asks for it.
- **Non-ASCII characters** in fields of unknown encoding. Provide an ASCII fallback
  and note that the accented form can be restored if the field accepts it.
- **Formatting that may not survive paste** — nested bullets, tables, markdown
  emphasis in plain-text fields. Verify the field renders before relying on it.
- **Anything unverifiable against the source resumes.** Flag it to the user instead
  of writing it.

## Output procedure

1. Confirm the field's character or word limit. Ask if unknown.
2. Draft, then count characters programmatically rather than estimating.
3. Report the count with the output.
4. State explicitly what was cut to fit, so the user can restore items if the real
   limit proves more generous.
5. Flag any eligibility or positioning risk separately from the deliverable — for
   example, a firm that hires only within one region, or a profile that contradicts
   a role the user previously applied for at the same company.
