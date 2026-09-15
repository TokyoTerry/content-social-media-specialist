---
name: company-scam-check
description: Comprehensive company research and job board vetting skill. Combines company legitimacy checks with platform/job listing red flag detection. Trigger on /company-check, "research this company", "is [company] legit", or when evaluating a new job board/posting.
---

# Company & Job Board Scam Check

Two integrated skills for vetting companies, job platforms, and listings before applying.

---

## PART A: COMPANY CHECK SKILL

Research a company or platform and produce a structured hiring assessment, based in Trinidad and Tobago.

### Input
Accepts: company name, company URL, job posting URL, or job description text.

### Steps

1. **TT Eligibility & Hiring Prospects** — Confirm remote work eligibility from Trinidad and Tobago specifically for this company/role. Flag any country restrictions, visa/residency requirements, or "remote" listings that are actually US/region-locked.

2. **Job Suitability** — Cross-reference against:
   - Technical writer resume and instructor resume
   - Technical documentation experience (Diátaxis framework)
   - Writing samples from past projects
   - State best-fit ranking, matching skills/experience, missing skills, and how to close gaps. Parse AND vs OR qualification logic carefully.

3. **Company Brief** — Founding year, parent company/ownership, business model, size.

4. **General Information** — What they do, target market, remote work structure, application/onboarding process.

5. **Reviews & Reputation** — Search Glassdoor, Trustpilot, Reddit, LinkedIn, forums. Look specifically for: payment reliability, verification/onboarding complaints, account suspension patterns, "scam" or "data harvesting" mentions, support responsiveness. Always include reviews — never skip this step.

6. **Salary** — Range in USD, TTD, and other currencies (hourly + monthly equivalent where applicable). Compare to market rate for the role type.

7. **Red Flags Check** — Address/ID verification issues, unresolved support tickets, excessive unpaid assessment/interview time, vague T&C enforcement, hyper-local scam pattern (small TT town + foreign parent company + off-platform application).

8. **Synopsis & Recommendation** — **Pursue / Hold / Pass** verdict with reasoning. Note any blockers requiring action before proceeding.

### Output
Keep it brief — token-efficient responses. Flag pending action items. If the company is already tracked in the Job Search Table, reference existing status/notes rather than re-describing from scratch.

### Known Red-Flag Pattern (Reference)
Confirmed pattern: broad AI-recruitment platforms (e.g. Meridial/Invisible Technologies, Alignerr) that push fast "qualification," lengthy unpaid AI assessments, deliberately difficult identity/address verification, and low-transparency pay ranges. Treat these signals as cause for a **Hold/Pass** verdict pending clarification, not automatic rejection.

---

## PART B: JOB BOARD SPAM/FILTER DETECTION SKILL

Screen remote job platforms for viability, TT eligibility, hidden paywalls, and scam/spam patterns before applying.

**Trigger:** Whenever a new job board, platform, or job listing URL is mentioned or considered for job search.

**Output:** Platform recommendation (Pursue / Low-Priority / Skip) + eligibility score + red flags + action items.

---

### SECTION 1: PLATFORM SCREENING WORKFLOW

#### Step 1: Gather Platform Information
**Input needed:**
- Platform name + URL
- Job board type (aggregator, niche vertical, gig-bidding, subscription)
- Stated coverage (geographic, industries, roles)
- User reviews/Trustpilot score (if available)

**Ask yourself:**
- Is this a job board or a seller/profile platform?
- Does it actively post 2026 jobs (recent timestamps)?
- Is it primarily for job seekers or service providers?

---

#### Step 2: TT Eligibility Assessment

**ELIGIBILITY MATRIX:**

| Criterion | Eligible | Questionable | Ineligible |
|-----------|----------|--------------|-----------|
| **Geographic Coverage** | Explicitly lists Caribbean/TT; or "worldwide" with Caribbean examples | States "most countries"; no TT examples | US-only; specific countries listed, TT absent |
| **Payment Methods** | PayPal (TT receiving confirmed), Wise, ACH to Wise, Deel | PayPal unclear, Stripe, unsupported local bank | Stripe (TT blocked); ACH only; Hyperwallet no TT |
| **Time Zone Fit** | Accepts 4:00 PM–10:00 PM UTC−4 overlap (TT time) | Flexible but some roles require 6+ hr US overlap | Requires 8+ hr US overlap; APAC-only roles |
| **Platform Model** | Resume-and-apply; no subscription required for job access | Free tier limited; premium recommended | Paywall ($10+/month); subscription-locked platform |
| **Recent Activity** | Jobs posted in Sept 2026; active recruiter engagement | Last jobs from Aug 2026; slower updates | Last activity 2024; archived/defunct |

**Scoring:** 
- 3 points per "Eligible" 
- 1 point per "Questionable"
- 0 points per "Ineligible"
- **13–15 = Highly Eligible | 9–12 = Conditional | 0–8 = Ineligible**

---

#### Step 3: Red Flag Detection

**CATEGORY A — STRUCTURAL RED FLAGS (Platform Design):**

- [ ] **Paywall obscured:** "$2.95 intro" without mentioning 12-month lock until secondary text
- [ ] **Defunct platform:** Last job posted 2022+; archived documentation; redirects to new platform
- [ ] **No transparent country support:** States "worldwide" but no list; hard to find eligibility info
- [ ] **Payment rail not disclosed:** Platform lists payment methods but TT not mentioned; requires contact to confirm
- [ ] **Required subscription to see job descriptions:** Full details paywalled; free tier shows only partial jobs

**CATEGORY B — SCAM/EXPLOITATION RED FLAGS (Platform Behavior):**

- [ ] **Promises unrealistic pay:** Entry-level "AI trainer" at $50/hr without vetting
- [ ] **Requires payment to apply:** "Platform fee," "starter kit," "training deposit" before job starts
- [ ] **Collects data beyond need:** Asks for SSN, bank details, ID copies during signup (not just tax forms)
- [ ] **Vague job descriptions + hyper-local posting:** "Senior Writer needed in [TT town]" with foreign parent company
- [ ] **Hiring manager contact via WhatsApp/Telegram only:** Avoids platform communication; isolates candidate
- [ ] **No company verification:** Employer name not verified; no company website linked; no Glassdoor presence

**CATEGORY C — ELIGIBILITY RED FLAGS (TT-Specific):**

- [ ] **Stripe as only payment method:** (Known TT-ineligible)
- [ ] **"Remote" + "US only" buried in fine print:** After browsing shows US restrictions
- [ ] **Requires US phone number, SSN, or tax ID for contractor onboarding**
- [ ] **"Caribbean-eligible BUT requires 6+ hr US time zone overlap" without flexibility**

---

#### Step 4: Cost-Benefit Analysis

**Create a simple scorecard:**

```
PLATFORM: [Name]
COST:     [Free / $XX/month / $XX/year / $XX one-time]
JOBS:     [Volume: 2K / 30K+ / 160K]
TT FIT:   [Eligibility Score: X/15]
RED FLAGS: [Count: 0 / 1 / 3+]

VALUE EQUATION:
- If Cost = $0 + Red Flags ≤ 1 + TT Score ≥ 9 → PURSUE
- If Cost > $50/year + Red Flags ≥ 2 → LOW PRIORITY
- If Red Flags ≥ 3 OR TT Score ≤ 8 OR Cost-prohibitive → SKIP
```

---

### SECTION 2: PLATFORM CLASSIFICATION

#### TIER 1: PURSUE (High-Priority)
**Criteria:**
- Free access to full job descriptions
- Explicit TT eligibility OR "worldwide" with active Caribbean examples
- 0–1 red flags
- No subscription lock-in
- Recent activity (Sept 2026)

**Example: We Work Remotely**
- Free tier: ✓ Full descriptions visible
- TT fit: ✓ Worldwide
- Cost: $0 (Pro tier has billing trap, but free tier works)
- Red flags: 1 (billing trap on Pro tier, but free bypasses it)
- **Action:** Use free tier exclusively; do not upgrade

---

#### TIER 2: LOW-PRIORITY (Conditional)
**Criteria:**
- Limited free access (need to upgrade for full job list)
- TT eligibility conditional or requires contact support
- 1–2 red flags
- Subscription $10–50/month, month-to-month cancellation available
- Moderate activity (Aug 2026 or later)

**Example: Remotive**
- Free tier: ~2,000 jobs; Accelerator: 30,000+ (paywall)
- TT fit: Worldwide, but limited free job volume
- Cost: $79 one-time OR $14–50/month
- Red flags: 2 (paywall hides best jobs; payment method unclear for TT)
- **Action:** Monitor free board; upgrade only if search stalls on Tier 1 sources

---

#### TIER 3: SKIP (Blacklist)
**Criteria:**
- Defunct or archived (2024+ last update)
- Geographic restriction excludes TT
- Payment method doesn't support TT (Stripe only, ACH only)
- 3+ red flags
- Scam patterns detected

**Example: GitHub Jobs**
- Status: Defunct (2022 shutdown)
- TT fit: ✗ No longer exists
- Cost: N/A
- Red flags: N/A (platform gone)
- **Action:** Remove from monitored sources; do NOT pursue

**Other Tier 3 examples:**
- Outlier AI (TT not in supported countries)
- Arc.dev (zero TT jobs visible; developer-vetting-heavy)
- Dribbble (design-first, not job-board primary)

---

### SECTION 3: JOB LISTING RED FLAG CHECKLIST

**Use when screening individual job postings (not platforms):**

- [ ] Job title vague or generic ("Writer needed")
- [ ] Salary range unusually high for role level (e.g., "$50/hr entry-level data entry")
- [ ] Location field shows small TT town + foreign parent company
- [ ] Contact info: WhatsApp/Telegram only; no company email
- [ ] Job description < 150 words OR overly long (copy-paste boilerplate)
- [ ] Required upfront payments (software, training, "starter kit")
- [ ] Asks for sensitive info before job details (SSN, bank account)
- [ ] No Glassdoor presence for company; zero Google results
- [ ] "Apply via external link" that redirects off-platform
- [ ] Posting date unclear or timestamp missing

**Action:** If 3+ boxes checked → Report to platform abuse contact; do not apply.

---

### SECTION 4: DECISION TREE (Quick Reference)

```
PLATFORM SCREENING DECISION TREE:

Is the platform defunct or archived (last update 2024+)?
├─ YES → SKIP (Tier 3)
└─ NO → Continue

Is TT explicitly in supported countries OR "worldwide" with Caribbean examples?
├─ YES → Continue
├─ MAYBE (requires contact) → LOW-PRIORITY (Tier 2)
└─ NO → SKIP (Tier 3)

Can you access full job descriptions for FREE?
├─ YES → Continue
├─ PARTIAL (free tier ~2k jobs; paid 30k+) → LOW-PRIORITY (Tier 2)
└─ NO (paywall for descriptions) → SKIP (Tier 3)

Do payment methods include PayPal, Wise, or Deel?
├─ YES → Continue
├─ MAYBE (unclear TT support) → Contact support; mark LOW-PRIORITY pending confirmation
└─ NO (Stripe only, ACH only) → SKIP (Tier 3)

Are there 3+ red flags (scam patterns, hidden restrictions, vague job descriptions)?
├─ YES → SKIP (Tier 3); Report to abuse contact
├─ 1-2 flags → Continue (assess cost-benefit)
└─ 0 flags → Continue

Is the cost $0–$15/month, month-to-month cancellation, no 12-month lock?
├─ YES → PURSUE (Tier 1)
├─ $15–$50/month, flexible → LOW-PRIORITY (Tier 2)
└─ $50+/month OR 12-month lock → SKIP (Tier 3)

FINAL RECOMMENDATION:
├─ Tier 1 (Pursue): Use actively; prioritize applications
├─ Tier 2 (Low-Priority): Monitor free board; upgrade if search stalls
└─ Tier 3 (Skip): Blacklist; do not apply; do not upgrade
```

---

### SECTION 5: INTEGRATION WITH JOB SEARCH TABLE

**Add to Job Search Table template:**

| Column | Purpose | Values |
|--------|---------|--------|
| **Platform** | Job board name | We Work Remotely, Remotive, etc. |
| **Tier** | Screening result | Pursue / Low-Priority / Skip |
| **TT Score** | Eligibility (0–15) | 13–15 / 9–12 / 0–8 |
| **Red Flags** | Count detected | 0 / 1–2 / 3+ |
| **Cost** | Subscription/fee | Free / $X/month / $X lifetime |
| **Last Checked** | Date of last platform review | YYYY-MM-DD |
| **Status** | Current action | Active Search / Monitor / Blacklisted |
| **Notes** | Specific red flags or blocking issues | "12-mo lock trap," "no TT payment clarity" |

**Example row:**
| We Work Remotely | Pursue | 14/15 | 1 (billing trap on Pro) | Free | 2026-09-06 | Active Search | Use free tier only; do not upgrade to Pro |

---

### SECTION 6: WORKFLOW FOR NEW PLATFORM

**Step-by-step process when evaluating a new job board:**

1. **Gather info:** Platform name, URL, job volume, user reviews
2. **Run eligibility matrix:** Score TT fit (0–15)
3. **Check red flags:** Structural, scam, TT-specific (mark each)
4. **Cost-benefit:** Calculate Value Equation
5. **Classify:** Assign Tier (Pursue / Low-Priority / Skip)
6. **Add to Job Search Table:** Log platform + tier + score + last-checked date
7. **Take action:**
   - **Tier 1:** Create profile, start browsing, apply to matching roles weekly
   - **Tier 2:** Follow free board; revisit quarterly; upgrade only if other sources dry up
   - **Tier 3:** Add to Blacklist section; skip; move on
8. **Monitor:** Check Tier 1 sources every 3–7 days; re-score platforms every 30 days

---

### SECTION 7: RED FLAG PHRASES (Copy-Paste Detection)

**If a job posting contains ANY of these, flag it immediately:**

- "Work from home but we need you in the office sometimes"
- "Remote but requires daily 8+ hour US time zone overlap"
- "Guaranteed income of $5,000/month (after initial investment)"
- "Please wire $50 for background check"
- "Email your SSN and bank details to confirm employment"
- "Apply via WhatsApp only"
- "No contract provided"
- "Payment after 90-day trial period"
- "You must subscribe to our platform to apply"

---

### SECTION 8: TRUSTED PLATFORMS (Validated Tier 1 List)

**As of Sept 6, 2026:**

| Platform | Eligibility | Cost | Volume | Best For | Status |
|----------|------------|------|--------|----------|--------|
| **We Work Remotely** | 14/15 | Free | 5,000+ | Tech writing, DevOps, general remote | Active |
| **Himalayas** | 14/15 | Free | 200+ (TT filter) | TT-focused freelance + remote | Active |
| **Brafton** | 13/15 | Free | 50–100 recurring | Content writing, tech writing | Active |
| **SmartJobLinks** | 12/15 | Free | 100+ (Caribbean) | Regional remote roles | Monitor |
| **Dynamite Jobs** | 12/15 | Free (profile) | 5,000+ | Remote roles; profile active | Tier 2 |

**TT Blacklist (Tier 3):**
- GitHub Jobs (defunct)
- Remotive (paywall)
- Outlier AI (TT ineligible)
- Arc.dev (no TT coverage)
- Stripe-only platforms (payment barrier)

---

### SECTION 9: USAGE EXAMPLES

**Example 1: Evaluating a New Job Board**

**Scenario:** Considering "RemoteByDesign.co" for Content Writer role.

**Apply this skill:**

1. **Gather:** RemoteByDesign, remotebycdesign.co, 500 jobs, no reviews found
2. **Eligibility matrix:**
   - Geographic: Unclear (no country list) → 1 point
   - Payment: Not disclosed → 0 points
   - Time zone: Flexible US times → 3 points
   - Model: Requires signup to see details → 1 point
   - Recent: Sept 2026 jobs visible → 3 points
   - **SCORE: 8/15 (Ineligible)**

3. **Red flags:**
   - Paywall obscured? Unclear payment info → 1 flag
   - Defunct? No; recently active → 0 flags
   - No country support list → 1 flag
   - Payment rail TT-unclear → 1 flag
   - **TOTAL: 3 flags**

4. **Cost-benefit:**
   - Cost: Free to browse, but payment method TT-unclear
   - Jobs: 500 (moderate)
   - Eligibility: 8/15 (below threshold)
   - Red flags: 3 (critical)
   - **VERDICT: Value equation fails**

5. **Classify:** **SKIP (Tier 3)** — Ineligible + 3+ red flags

6. **Add to table:**
   - Platform: RemoteByDesign.co | Tier: Skip | TT Score: 8/15 | Red Flags: 3
   - Cost: Free (payment method unclear) | Last Checked: 2026-09-06
   - Status: Blacklisted | Notes: "Do not pursue; payment rails TT-unclear"

7. **Action:** Do NOT apply; do NOT contact platform; move on.

---

### SECTION 10: FINAL CHECKLISTS

**Before Applying to ANY Platform:**

- [ ] TT eligibility explicitly confirmed (not assumed)
- [ ] Payment method works for TT (PayPal/Wise/Deel verified, NOT Stripe-only)
- [ ] 0–2 red flags maximum
- [ ] Free access to job descriptions (no paywall for core job info)
- [ ] Platform active within last 30 days
- [ ] Cost: $0–$15/month max, month-to-month cancellation, no annual lock-in
- [ ] Added to Job Search Table with Tier + score + date
- [ ] If Tier 2/3: Explicitly approved for why you're spending time here

**Only proceed if ALL boxes checked.**

---

**Created:** Sept 8, 2026  
**Last Updated:** Sept 8, 2026  
**Integration:** Job Search Table, memory system, application-writing skill
