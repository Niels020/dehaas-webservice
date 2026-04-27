# Main site design document — dehaaswebservice.nl

> Status: **first draft.** This is the source-of-truth for building the main website. Everything below should be readable end-to-end by a developer (human or AI) and turned directly into Next.js + shadcn/ui code.

---

## 1. Overview

A four-page marketing site for dehaas webservice. The site needs to:

1. Communicate the offering to non-technical SMB owners.
2. Build trust (the brand's main currency — see [voice.md](./voice.md)).
3. Get the visitor to book a free 30-minute video call.

**Live URL:** https://dehaaswebservice.nl/
**Repo:** https://github.com/Niels020/dehaas-webservice
**Deploy target:** Vercel (already wired up)

---

## 2. Tech stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Component library:** shadcn/ui (copied into `components/ui/`, not a dependency)
- **Icons:** lucide-react (ships with shadcn)
- **Fonts:** Geist Sans (primary), Geist Mono (rare — for fine print or pricing detail). Both are first-class on Next.js + Vercel.
- **Hosting:** Vercel
- **Domain & DNS:** mijn.host → Vercel
- **Booking widget (homepage CTA target):** TBD — likely Cal.com embed or a simple custom form posting to email. Decide before Contact page is built.

No CMS. Copy lives in code (MDX or plain TSX); the homepage and About page are hand-written. FAQ entries can live in a typed array for easy editing.

---

## 3. Brand & voice

The brand checks every word against four keywords (full doc in [voice.md](./voice.md)):

- **Trust** — no hype, no jargon hiding meaning.
- **Honesty** — pricing, timelines, and limits are stated plainly.
- **Personal** — singular "I", not corporate "we".
- **Small-scale** — deliberately, not as a limitation.

**Hard rules from voice.md (apply to every page):**

- No em-dashes in client-facing copy.
- Never suggest a client could maintain the site themselves.
- No "We pride ourselves on…" / "Industry-leading" / "Cutting-edge" / "World-class".
- Sentence case for headings. Never Title Case, never ALL CAPS.

---

## 4. Visual design

### 4.1 Colour palette

Minimal, with one accent. The intent is "a bit of colour", not a paintbox.

| Role | Light | Dark | Usage |
|---|---|---|---|
| Background | `#ffffff` | `#0a0a0a` | Page background |
| Foreground (text) | `#0a0a0a` | `#fafafa` | Body and headings |
| Muted background | `#f5f5f5` | `#171717` | Section bands, cards |
| Muted foreground | `#52525b` | `#a1a1aa` | Tagline, secondary text |
| Border | `#e4e4e7` | `#27272a` | Hairline dividers |
| Accent (primary) | `#0d9488` | `#14b8a6` | Buttons, link hovers, highlights |
| Accent (secondary, sparing) | `#f59e0b` | `#fbbf24` | One or two warmth moments — e.g. an icon, a callout dot |

The accent is teal because it reads "modern + trustworthy" without feeling generic-tech-blue. Easy to swap if a different colour fits better — only used in the accent slots.

### 4.2 shadcn theme

Drop these into `app/globals.css` under the existing `:root` and `.dark` blocks. Values are HSL because that's what shadcn expects.

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 4%;
  --muted: 0 0% 96%;
  --muted-foreground: 240 4% 35%;
  --border: 240 5% 91%;
  --input: 240 5% 91%;
  --ring: 173 80% 32%;
  --primary: 173 80% 32%;
  --primary-foreground: 0 0% 100%;
  --accent: 38 92% 50%;
  --accent-foreground: 0 0% 4%;
  --radius: 0.625rem;
}

.dark {
  --background: 0 0% 4%;
  --foreground: 0 0% 98%;
  --muted: 0 0% 9%;
  --muted-foreground: 240 5% 65%;
  --border: 240 4% 16%;
  --input: 240 4% 16%;
  --ring: 173 70% 45%;
  --primary: 173 70% 45%;
  --primary-foreground: 0 0% 4%;
  --accent: 43 96% 56%;
  --accent-foreground: 0 0% 4%;
}
```

### 4.3 Typography scale

Geist Sans throughout. Two weights: 400 regular, 600 semibold. Avoid 700.

- `h1` — 56–64px desktop / 36–40px mobile, weight 600, tight letter-spacing (-2 to -3).
- `h2` — 36–44px / 28–32px, weight 600.
- `h3` — 22–24px, weight 600.
- Body — 17–18px, weight 400, line-height 1.6.
- Small / fine print — 13–14px, weight 400, slightly muted.
- Labels (button text, nav) — 14–15px, weight 500.

### 4.4 Spacing & layout

- Container max width: **1152px** (`max-w-6xl`). Sections are full-width on background, content centred in the container.
- Section vertical padding: **96px desktop / 64px mobile** between major sections.
- Section bands alternate background: white → muted (`#f5f5f5`) → white → … to give visual rhythm without relying on imagery.
- Border radius: `0.625rem` for cards and buttons (shadcn default). Pills only when intentional.

### 4.5 Imagery

The user has a stock of generic photos: technology and small-business scenes. Guidelines:

- **Treatment:** consistent across the site. Either all desaturated to ~70% saturation, or all kept natural — pick one and apply globally so the site doesn't feel like a stock-photo collage.
- **Aspect ratios:** prefer 16:9 (hero / section), 4:3 (about), 1:1 (small accents). Crop to these ratios to keep the layout calm.
- **Where photos earn their keep:**
  - **Homepage Why section** — one supporting image per side ("Out with the Old": old laptop / messy desk; "In with the New": clean modern workspace).
  - **About page** — at least one image of the workspace or a portrait-style shot.
  - **Section dividers** — one full-bleed photo with a soft overlay between sections, used max once per page.
- **Where photos do NOT belong:** the hero, the Services section (text-only is stronger here), and the FAQ page.

---

## 5. Pages & sitemap

```
/                  Homepage
/about             About me
/faq               FAQs
/contact           Contact + booking
```

Header nav: `dehaas` logo (left) → `About`, `FAQ`, `Contact` (right) → `Book a call` button (rightmost, primary).

Footer: brand mark + tagline, repeat nav, contact line, KvK number (placeholder), copyright.

---

## 6. Page specs

### 6.1 Homepage (`/`)

Sections in order. Real copy is locked in [pitch.md](./pitch.md); referenced rather than duplicated.

| # | Section | Content source | Notes |
|---|---|---|---|
| 1 | **Header** | Logo + nav | Sticky on scroll, slight backdrop blur. Logo from `/public/logo.svg`. |
| 2 | **Hero** | pitch.md → "Locked hero" + "Locked supporting paragraph" | Text-only. Headline `h1`, subhead `h2`-style but smaller, supporting paragraph below. Primary button: "Book a free 30-minute video call →" linking to `/contact`. |
| 3 | **Why — Out with the Old / In with the New** | pitch.md → "Why — Out with the Old / In with the New" | Two-column on desktop, stacked on mobile. Each side has one supporting image (see imagery section). Section background: muted band. |
| 4 | **What I do (Services)** | pitch.md → "Services — What I do" | Three cards in a row on desktop, stacked on mobile. Each card: short heading (`Build` / `Maintain` / `Change requests`), the body copy, and the italic pricing line at the bottom. Use shadcn `Card` with hairline border. White background. |
| 5 | **Maintenance (dedicated)** | pitch.md → "Maintenance" (the deeper section we just drafted) | Two-column: left has the intro + bullet list, right is a single supporting image (small business owner working, or clean dashboard). Muted band. |
| 6 | **How it works** | _not yet drafted — use lorem ipsum placeholder, structured as 4 steps: Consultation → Plan → Build → Launch & maintain_ | Horizontal step list with numbered circles. White background. |
| 7 | **FAQ teaser** | _not yet drafted — use lorem for the 3 sample questions_ | Three accordion items pulled from the full FAQ page. Below: link "See all questions →" to `/faq`. Muted band. |
| 8 | **Consultation CTA** | Echo of hero CTA, slightly different phrasing: "Still on the fence? A 30-minute call answers most of it." | Centred block, large button. White background. |
| 9 | **Footer** | Standard | See sitemap. |

### 6.2 About me (`/about`)

> All copy below is **placeholder lorem ipsum** until we draft it together.

| # | Section | Content |
|---|---|---|
| 1 | **Header** | Same as homepage |
| 2 | **Hero** | `h1` "About me" or similar. One short paragraph of lorem. |
| 3 | **Story** | "Why I started dehaas webservice" — two or three lorem paragraphs. One supporting image (workspace, hands on keyboard, neighbourhood shop, etc.). |
| 4 | **What I believe** | Three short blocks tied to the four voice keywords (Trust, Honesty, Personal, Small-scale) — lorem until written. |
| 5 | **A typical client** | Lorem describing the kind of business this is built for. Helps prospects self-qualify. |
| 6 | **CTA band** | "Sounds like you? Book a call." |
| 7 | **Footer** | Same |

### 6.3 FAQs (`/faq`)

> Questions and answers are **placeholder lorem ipsum**. The structure is real.

| # | Section | Content |
|---|---|---|
| 1 | **Header** | Same |
| 2 | **Hero** | `h1` "Questions". One short paragraph: "If yours isn't here, the consultation call is the best way to ask." |
| 3 | **FAQ accordion**, grouped by category | shadcn `Accordion` (single open). Categories below. |
| 4 | **CTA band** | "Still have questions? Book a 30-minute call." |
| 5 | **Footer** | Same |

**Suggested categories and seed questions** (all lorem until drafted):

- **Pricing & contracts**
  - How much does a build cost?
  - What's in the monthly maintenance fee?
  - Can I cancel maintenance later?
  - What if I want to keep the site without you maintaining it?
- **Process**
  - How long does a build take?
  - How involved do I need to be?
  - What if I don't like the design?
- **Technical**
  - What is Next.js / Vercel? Why those?
  - Will my old content move over?
  - What happens to my SEO?
- **Maintenance**
  - What counts as a "smaller change"?
  - How fast do you respond?
  - What if my site goes down at midnight?

### 6.4 Contact (`/contact`)

> Mostly **placeholder** until we decide on the booking flow.

| # | Section | Content |
|---|---|---|
| 1 | **Header** | Same |
| 2 | **Hero** | `h1` "Book a call" + short paragraph: what to expect from the 30 minutes (informed by business-plan.md "Free consultation" section). |
| 3 | **Booking widget** | TBD — Cal.com embed _or_ a custom form (name, business, current site URL, what you want to talk about) submitting to email. Decide before building. |
| 4 | **Other ways to reach me** | Email link + small note that phone is available on request. |
| 5 | **What happens next** | Three short steps: book → call → written proposal. |
| 6 | **Footer** | Same |

---

## 7. Component inventory (shadcn/ui)

Components to install via `npx shadcn add <name>`:

- `button` — primary CTA, secondary actions
- `card` — Services trio, FAQ teaser, About blocks
- `accordion` — FAQ page, FAQ teaser
- `navigation-menu` — header nav (or just plain links if simple enough)
- `sheet` — mobile nav drawer
- `separator` — section divider hairlines
- `avatar` — About page (if using a portrait)
- `badge` — small labels (e.g. "Free" pill on the consultation card)
- `dialog` — only if booking flow needs a modal

Custom components (build by hand):

- `<Header />` — sticky nav with logo + links + CTA
- `<Footer />`
- `<Section>` — wrapper handling vertical padding + background band toggle
- `<Hero>` — homepage hero block
- `<ServiceCard>` — one of the three Services cards
- `<MaintenanceList>` — bullet list with consistent styling
- `<HowItWorksStep>` — numbered step block
- `<FAQItem>` — wraps shadcn Accordion item with category support
- `<CTABand>` — reusable closing CTA across pages

---

## 8. Responsive

- Breakpoints: Tailwind defaults (`sm 640`, `md 768`, `lg 1024`, `xl 1280`).
- Design mobile-first. Hero stacks at `< md`; two-column sections collapse to single column at `< lg`; Services trio stacks at `< md`.
- Header: full nav at `>= md`, hamburger + `Sheet` drawer below that.
- Tap targets min 44px.

---

## 9. Accessibility

- Semantic HTML: one `<h1>` per page; `<section>` with `aria-labelledby` for each major block.
- Colour contrast min WCAG AA — the palette above clears it; verify the accent on muted backgrounds.
- All images have `alt` text. Decorative images get `alt=""`.
- Forms (contact) have visible labels and an accessible error pattern.
- Focus rings visible (don't `outline: none` without a replacement). Use the `--ring` token already in the theme.
- Skip-to-content link in the header.

---

## 10. SEO & performance

- Per-page `<title>`, `<meta name="description">`, OpenGraph image (use `logo.svg` or a generated card).
- `app/sitemap.ts` and `app/robots.ts`.
- All images via `next/image` with explicit width/height. Photos served as AVIF/WebP via Next image optimization.
- Lighthouse target: 95+ across the board on the homepage.
- No third-party scripts unless strictly needed (avoid analytics piling on; if needed, use a privacy-friendly one like Plausible).

---

## 11. What's locked vs. what's TBD

**Locked (real copy, ready to ship):**

- Homepage hero
- Homepage Why section
- Homepage Services section
- Logo + favicon (already in `public/`)

**Drafted but not locked:**

- Homepage Maintenance section (one round of feedback from user pending)

**Lorem ipsum placeholders for now:**

- Homepage "How it works"
- Homepage FAQ teaser
- Full About page
- Full FAQ page
- Contact page intro and "what happens next"

**Decisions still needed before build:**

- Booking widget choice (Cal.com vs. custom form)
- Final accent colour (teal proposed; could swap)
- UK vs. US English spelling (currently UK from "specialise")
- What "smaller change" means in writing (lives on the dedicated services/SLA page later, not the homepage)

---

## 12. Suggested build order

If a developer is sitting down to build this, this is the order that minimises rework:

1. **Theme & layout shell.** Drop the colour tokens, set up Geist, build `<Header />`, `<Footer />`, and the page shell. No content yet.
2. **Homepage with locked sections only.** Hero, Why, Services. Use lorem for everything else and ship the page. Verify the visual rhythm and the accent works.
3. **Maintenance section** (once locked).
4. **About, FAQ, Contact pages** with lorem. Wire navigation. Get the four-page sitemap functioning.
5. **Booking flow** on /contact (after the widget decision).
6. **Replace lorem** as real copy gets drafted in `_project/`.
7. **SEO + performance pass** before announcing.
