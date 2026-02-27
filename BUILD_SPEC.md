# NEXGEN PRECISION MEDICINE — ALFRED BUILD SPEC
## Content-Forward Knowledge Platform

**Handoff Date:** 2026-02-27
**Target:** nexgenprecisionmedicine.com
**Stack:** Next.js 14 (App Router) + Tailwind CSS + MDX + Vercel
**Design System:** V9 dark/light split-theme (navy #0a0e1a / cream #f5f4f0 / gold #b79450)

---

## 1. SITE PHILOSOPHY

This is NOT a portfolio site. It is a **knowledge platform** for clinicians, health system leaders, and healthcare AI practitioners. The site earns authority through content depth and freshness, not credentials. Every page should teach something. Every section should feel alive — updated, curated, current.

**Core principle:** If someone visits any pillar page, they should learn something in 60 seconds (Key Insights), discover what happened this week (What's New), and be able to go deeper (long-form articles).

---

## 2. DESIGN SYSTEM

### Typography
- **Headlines:** Cormorant Garamond, 300/400/500 weight, serif
- **Body/UI:** DM Sans, 300-700 weight, sans-serif
- **Code/data:** JetBrains Mono (for any code snippets or data displays)

### Colors
--navy:        #0a0e1a
--cream:       #f5f4f0
--gold:        #b79450
--gold-light:  #dcc488
--gold-dark:   #96763a
--blue:        #2968b8
--blue-light:  #d6e4f5
--text-dark:   rgba(10,14,26,0.8)
--text-muted:  rgba(10,14,26,0.5)
--text-light:  rgba(240,237,230,0.6)
--border-dark: rgba(183,148,80,0.1)
--border-light:rgba(10,14,26,0.06)

### Layout
- Split-theme grid: 44% dark left / 56% light right on desktop
- On pillar/content pages: full-width cream with dark nav + dark accent sections
- Responsive: Tailwind breakpoints, single-column on mobile
- Max content width: 720px for prose, 1200px for layouts

### Components (reusable)
- Nav -- Sticky, split-theme, links resolve to real pages
- Footer -- Split-theme, copyright + LinkedIn + email
- PillarCard -- Used on homepage and pillar index
- KeyInsights -- Bulleted review component (see Section 5)
- WhatsNew -- Curated news feed component (see Section 5)
- ArticleCard -- MDX article preview (title, date, summary, read time, tags)
- EmailCapture -- Gold CTA button + input, reused across pages
- SectionLabel -- Gold uppercase tracking label (DM Sans 10px, letter-spacing 3px)

---

## 3. SITEMAP & PAGE STRUCTURE

/                          Homepage (V9 hero + pillar grid)
/orchestration             Pillar 1: The Orchestration Layer
/bench-to-bedside          Pillar 2: Bench to Bedside
/clinical-workforce        Pillar 3: Clinical Workforce
/governance                Pillar 4: Governance & Trust
/insights                  All articles chronological feed
/about                     Minimal about (no credentials v1)

### 3a. HOMEPAGE

Keep V9 hero exactly as built:
- Split-theme layout
- "AI is now orchestrating biology." headline
- Body text + email capture + social proof line
- AI Orchestrator SVG visualization (right panel)
- Bottom pillar bar with 4 items linking to pillar pages

Addition: Below the hero (scrollable), add a "Latest Across All Pillars" section:
- 2x2 grid showing the most recent article from each pillar
- Uses ArticleCard component
- Light background section

### 3b. PILLAR PAGES (template -- same structure for all 4)

Each pillar page has this layout:

NAV (sticky)
PILLAR HEADER
  Left (dark): Pillar name, subtitle, 1-paragraph framing
  Right (cream): Pillar-specific SVG or visual element
KEY INSIGHTS (cream background)
  "What you need to know this week"
  5-7 bullet points, each 1-2 sentences
  Updated weekly via MDX
  Shows last-updated date
WHATS NEW (light gray background)
  Curated news/papers/developments
  4-6 items with source, date, 1-line take
  Updated 2-3x/week via MDX or JSON
DEEP DIVES (cream background)
  Long-form MDX articles for this pillar
  Sorted by date, paginated
  Each shows: title, date, summary, read time
EMAIL CAPTURE
  "Get [pillar-specific] insights weekly"
FOOTER

### 3c. INSIGHTS PAGE /insights

Chronological feed of ALL articles across all pillars. Filterable by pillar tag. Uses ArticleCard grid.

### 3d. ABOUT PAGE /about

V1 -- minimal. No personal credentials.
- "Nexgen Precision Medicine" -- what it is, what it believes
- The orchestration thesis (2-3 paragraphs)
- Link to LinkedIn for the curious
- Email capture
- That is it. Content is the credibility.

---

## 4. PILLAR CONTENT DEFINITIONS

Each pillar needs seed content. Here is the framing, Key Insights seed, and Whats New seed for each.

### PILLAR 1: THE ORCHESTRATION LAYER /orchestration

**Subtitle:** How AI coordinates multi-omic data into treatment decisions

**Framing paragraph:**
AI in medicine is not one model doing one thing. It is an orchestration problem -- coordinating genomics, imaging, pathology, and pharmacogenomics into a unified reasoning layer that supports treatment decisions no single data source could drive alone. This section tracks the architectures, agents, and integration patterns making that possible.

**Seed Key Insights (5-7 bullets):**
- Multi-agent orchestration is replacing single-model inference in clinical AI -- systems like Viz.ai and Tempus now chain 50+ specialized models per patient case
- The "last mile" problem in clinical AI is not model accuracy, it is EMR integration -- most AI insights never reach the physician at point-of-care because delivery infrastructure does not exist
- Agentic AI frameworks (LangGraph, CrewAI, AutoGen) are being adapted for clinical workflows where each agent handles one data modality (genomics, imaging, path) and a coordinator synthesizes
- RAG (retrieval-augmented generation) on clinical guidelines (NCCN, ASCO) is emerging as the most practical near-term application -- giving LLMs access to current treatment protocols rather than relying on training data
- The FDA has cleared 950+ AI/ML-enabled medical devices as of early 2026, but fewer than 5% involve multi-modal data fusion -- the orchestration layer remains largely unregulated territory
- Foundation models in pathology (Virchow, UNI, CONCH) are approaching human-expert concordance on specific tumor types but still require ensemble approaches for pan-cancer generalization
- Interoperability remains the structural bottleneck: FHIR adoption is at ~60% of US hospitals, but real-time streaming of imaging + genomics + clinical data to AI systems requires infrastructure most health systems have not built

**Seed Whats New (4-6 items):**
- These will be populated from PubMed alerts, healthcare AI news, FDA clearances
- Format: "Source - Date - Headline - Our take: [1 sentence]"

### PILLAR 2: BENCH TO BEDSIDE /bench-to-bedside

**Subtitle:** Translating molecular science into clinical decisions

**Framing paragraph:**
The gap between what we know in the lab and what reaches the patient bedside is measured in years and billions of dollars. This section covers the translation pipeline -- from biomarker discovery and target validation through clinical trial design to real-world evidence -- and how AI is compressing each stage.

**Seed Key Insights:**
- Liquid biopsy is reshaping early detection: Guardant Shield (FDA-approved CRC screening) and GRAIL Galleri (multi-cancer) represent two fundamentally different approaches -- targeted methylation vs. broad cfDNA panels -- with different sensitivity/specificity tradeoffs
- AI-driven drug discovery has produced 30+ molecules currently in clinical trials, but the first AI-discovered drug to complete Phase III (Insilico INS018_055 for IPF) will be the real inflection point for industry credibility
- Pharmacogenomic testing adoption remains below 15% in oncology despite clear evidence for drugs like fluorouracil (DPYD), irinotecan (UGT1A1), and tamoxifen (CYP2D6) -- implementation science, not evidence, is the bottleneck
- Companion diagnostics are evolving from single-gene tests to pan-cancer panels: FoundationOne CDx covers 300+ genes, while Tempus xT integrates whole-exome + RNA sequencing
- Real-world evidence (RWE) from EHR data is increasingly accepted by FDA for label expansions -- Flatiron/Roche demonstrated this with multiple oncology drugs
- Digital pathology + AI is enabling quantitative spatial biology: measuring not just what proteins are expressed, but where in the tumor microenvironment they appear
- Minimal residual disease (MRD) monitoring via ctDNA is becoming standard-of-care in CRC and early-stage breast cancer, enabling treatment de-escalation

**Seed Whats New:**
- Track: FDA approvals/clearances, Phase III readouts, ASCO/AACR abstracts, Nature Medicine publications

### PILLAR 3: CLINICAL WORKFORCE /clinical-workforce

**Subtitle:** How AI reshapes roles, workflows, and decision-making in practice

**Framing paragraph:**
The conversation about AI in healthcare usually focuses on technology. This section focuses on the humans. How does AI change what it means to practice medicine? What new roles emerge? Where does automation create value, and where does it create risk? We track workforce transformation with a clinician eye.

**Seed Key Insights:**
- Ambient clinical documentation (Nuance DAX, Abridge, Nabla) is the fastest-adopted clinical AI category -- ~40% of large health systems have piloted or deployed by early 2026
- The "AI scribe" is a gateway drug: once physicians experience automated documentation, they are significantly more open to AI-assisted clinical decision support
- AI is not replacing physicians but is eliminating entire categories of cognitive labor: prior authorization processing, inbox triage, result interpretation for normal labs, radiology pre-reads
- New roles are emerging: "AI clinical specialists" who configure and validate AI tools, "prompt engineers" embedded in clinical informatics teams, and "AI safety officers"
- Burnout metrics are mixed -- ambient AI reduces documentation burden but early data suggests it may increase total patient volume expectations
- Medical education has not caught up: fewer than 10% of US medical schools have formal AI curriculum
- The physician-AI trust calibration problem is real: studies show physicians over-rely on AI when it is right AND when it is wrong

**Seed Whats New:**
- Track: Health system deployment announcements, burnout/workforce studies, medical education policy, new AI clinical roles

### PILLAR 4: GOVERNANCE & TRUST /governance

**Subtitle:** Regulation, safety, equity, and accountability in clinical AI

**Framing paragraph:**
Deploying AI in medicine creates obligations that do not exist in other domains. A wrong prediction can harm a patient. A biased model can worsen disparities. An opaque algorithm can undermine informed consent. This section covers the governance frameworks that determine whether clinical AI earns and keeps trust.

**Seed Key Insights:**
- FDA Predetermined Change Control Plan allows manufacturers to update algorithms post-market without full resubmission -- a necessary flexibility that creates new monitoring challenges
- Algorithmic bias in clinical AI is not theoretical: Epic sepsis model showed different performance across racial groups, Optum algorithm systematically underestimated needs of Black patients
- The EU AI Act classifies most clinical AI as "high-risk," requiring conformity assessments, human oversight, and transparency documentation
- Post-market surveillance for clinical AI remains immature: unlike pharmaceuticals with FAERS, there is no standardized adverse event reporting system for AI/ML-enabled devices
- Health equity in AI requires more than diverse training data -- it requires diverse development teams, community engagement, and deployment monitoring stratified by demographics
- Informed consent for AI-assisted clinical decisions is an unsolved problem: patients rarely know when AI contributed to their diagnosis or treatment plan
- Model transparency is necessary but insufficient: translational interpretability (explaining AI reasoning in clinical terms) is the real challenge

**Seed Whats New:**
- Track: FDA guidance documents, EU AI Act implementation, bias audits, health equity research, liability cases

---

## 5. COMPONENT SPECIFICATIONS

### 5a. KeyInsights Component

Purpose: Quick-scan learning. "What you need to know about [this pillar] right now."

Design:
- Cream background section
- Section label: "KEY INSIGHTS" (gold, DM Sans, 10px, letter-spacing 3px)
- Subtitle: "What you need to know" (Cormorant Garamond, 24px, weight 400)
- Last updated badge: "Updated [date]" (DM Sans, 10px, muted text)
- 5-7 bullet points with gold diamond marker
- Bold lead phrase (DM Sans 14px, weight 600, dark text)
- Followed by supporting detail (DM Sans 14px, weight 300, muted text)
- 1-2 sentences max per bullet

Data source: MDX file per pillar: /content/insights/[pillar-slug]-insights.mdx
- Frontmatter: title, pillar, updatedAt, items[]
- Jarvis updates this file weekly, Alfred commits

### 5b. WhatsNew Component

Purpose: Curated news feed. "What happened this week in [this pillar]."

Design:
- Light gray background (#f0efeb or similar)
- Section label: "WHATS NEW" (gold)
- 4-6 items, each as a card/row:
  - Source pill (DM Sans 9px, uppercase, letter-spacing 1.5px, border-radius pill)
  - Date (DM Sans 11px, muted)
  - Headline (DM Sans 14px, weight 500, dark)
  - Our take (DM Sans 13px, weight 300, italic, muted -- 1 sentence editorial)
  - Optional: external link icon

Data source: JSON file per pillar: /content/news/[pillar-slug]-news.json
- Jarvis populates 2-3x/week via Claude API + RSS monitoring
- Alfred commits new JSON, Vercel auto-deploys

### 5c. ArticleCard Component

Design:
- Pillar tag pill (gold border, 9px uppercase)
- Title (DM Sans 16px, weight 500)
- Summary (DM Sans 13px, weight 300, 2 lines max)
- Date + read time (DM Sans 11px, muted)
- Hover: subtle gold left-border or underline

---

## 6. CONTENT PIPELINE (JARVIS to ALFRED to VERCEL)

### 6a. Weekly Key Insights Update
Jarvis monitors: PubMed alerts, FDA AI/ML clearances RSS, STAT News, Fierce Healthcare, Healthcare IT News RSS, ArXiv cs.AI + q-bio, LinkedIn health-AI thought leaders
Jarvis processes: Claude API call to generate 5-7 Key Insight bullets per pillar
Alfred commits: git add, commit, push -- Vercel auto-deploys

### 6b. 2-3x/Week Whats New Update
Jarvis monitors same sources filtered by pillar
Jarvis processes: Claude API call to select 4-6 most significant items with editorial takes
Alfred commits same flow

### 6c. Monthly Deep Dive Articles
Jarvis drafts via Claude API or repurposes JJ LinkedIn posts
JJ reviews/edits in 10 min (Jarvis sends draft via iMessage)
Alfred commits final MDX

---

## 7. MDX CONTENT STRUCTURE

/content
  /articles
    /orchestration
    /bench-to-bedside
    /clinical-workforce
    /governance
  /insights
    orchestration-insights.mdx
    bench-to-bedside-insights.mdx
    clinical-workforce-insights.mdx
    governance-insights.mdx
  /news
    orchestration-news.json
    bench-to-bedside-news.json
    clinical-workforce-news.json
    governance-news.json

### MDX Article Frontmatter
title, slug, pillar, date, summary, readTime, tags

---

## 8. TECHNICAL REQUIREMENTS

### Next.js App Router Structure
/app
  layout.tsx
  page.tsx (Homepage)
  /orchestration/page.tsx
  /bench-to-bedside/page.tsx
  /clinical-workforce/page.tsx
  /governance/page.tsx
  /insights/page.tsx
  /insights/[slug]/page.tsx
  /about/page.tsx
/components
  Nav.tsx, Footer.tsx, KeyInsights.tsx, WhatsNew.tsx
  ArticleCard.tsx, EmailCapture.tsx, PillarHeader.tsx
  SectionLabel.tsx, HeroSVG.tsx
/content (MDX + JSON)
/lib (mdx.ts, content.ts)
/public/fonts

### Dependencies
next ^14, tailwindcss ^3.4, @next/mdx ^14, next-mdx-remote ^4, gray-matter ^4, reading-time ^1, date-fns ^3

### Deployment
- Vercel project linked to GitHub repo
- Auto-deploy on push to main
- ISR for article pages (revalidate: 3600)
- SEO: Dynamic title/meta, Open Graph, sitemap.xml, robots.txt

---

## 9. SEED CONTENT CHECKLIST

Per pillar (x4):
- [ ] Pillar page with header, framing paragraph
- [ ] Key Insights file with 5-7 seed bullets (content provided in Section 4)
- [ ] Whats New file with 4-6 seed items (Jarvis to populate)
- [ ] At least 2 seed articles (repurposed from JJ LinkedIn)

Global:
- [ ] Homepage with working pillar links + Latest grid
- [ ] /insights page with all articles
- [ ] /about page (minimal, no credentials)
- [ ] Nav links all resolve
- [ ] Email capture functional
- [ ] Mobile responsive at 375px, 768px, 1024px, 1440px
- [ ] Vercel deployment working
- [ ] DNS configured for nexgenprecisionmedicine.com

Total minimum seed content: 8 articles + 4 insight files + 4 news files = 16 content files

---

## 10. BUILD PRIORITY ORDER

1. Project scaffold -- Next.js + Tailwind + MDX pipeline working
2. Homepage -- Port V9 HTML to React components
3. One pillar page -- /orchestration as template with KeyInsights + WhatsNew + article list
4. Content seeding -- Populate orchestration pillar with seed content from Section 4
5. Replicate -- Clone template to other 3 pillars, seed each
6. Global pages -- /insights feed, /about
7. Polish -- Responsive, SEO, email capture, footer
8. Deploy -- Vercel + DNS

Start with /orchestration. Do not replicate to other pillars until JJ approves the template.
