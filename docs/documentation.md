# Washing Machine Repair Website MVP

SEO-oriented service website for attracting leads for washing machine repair.  
Built as a **Next.js monolith** with a minimal backend layer inside the same application.  
Main goal of MVP: **get indexed, convert visitors into leads, deliver leads to Telegram, stay easy to maintain for one developer**.

---

## Project goals

The project is created to solve these business tasks:

- attract clients from search, maps, ads, Avito, Profi, and direct traffic
- convert visitors into calls and form submissions
- build SEO landing pages for symptoms, brands, and error codes
- reduce dependence on aggregators
- keep the project simple enough for solo development and support

---

## MVP scope

### Included in MVP

- public website
- SEO pages
- lead forms
- server-side form handling
- Telegram lead delivery
- basic anti-spam protection
- Yandex Metrica integration
- sitemap and robots
- content stored in code
- reusable page templates

### Not included in MVP

- database
- admin panel
- authentication
- user roles
- CRM
- CMS
- separate backend service
- lead status management
- queue workers
- Redis
- advanced rate limiting
- external integrations except Telegram and analytics

---

## Tech stack

### Core

- **Next.js** (App Router)
- **TypeScript**
- **React**
- **Tailwind CSS**

### Forms and validation

- **React Hook Form**
- **Zod**

### Integrations

- **Telegram Bot API**
- **Yandex Metrica**

### Content

- typed content files (`.ts`)
- optional `.mdx` later if needed

### Deployment

- **Vercel** or VPS

---

## Why this architecture

This project is intentionally designed as a **Next.js monolith**.

Reasons:

- one developer
- strong frontend background in React / Next.js
- fast MVP delivery matters more than infrastructure complexity
- no need for a separate backend at MVP stage
- no need for a database on day one
- content can be managed directly in code
- forms and SEO can be handled inside the same app

This keeps the project:

- fast to build
- easy to deploy
- easy to reason about
- easy to extend later

---

## Product structure

### Main pages

- `/` home page
- `/prices`
- `/faq`
- `/contacts`
- `/privacy`

### Symptom pages

- `/symptoms/not-draining`
- `/symptoms/not-spinning`
- `/symptoms/not-turning-on`
- `/symptoms/leaking`
- `/symptoms/noisy`

### Brand pages

- `/brands/lg`
- `/brands/bosch`
- `/brands/samsung`
- `/brands/indesit`

### Error code pages

- `/error-codes/indesit/f05`
- `/error-codes/lg/ue`
- `/error-codes/samsung/4e`
- `/error-codes/bosch/e18`

---

## Project principles

### 1. Keep MVP small
Do not build infrastructure that does not directly help attract and convert leads.

### 2. Content must be separated from templates
Page content should live in structured content files, not inside page JSX.

### 3. Reuse templates
Symptom pages, brand pages, and error code pages should use reusable templates.

### 4. Avoid unnecessary abstractions
No fake enterprise structure, no premature backend complexity, no admin panel on MVP.

### 5. Prioritize maintainability
The project should remain understandable and editable by one frontend developer.

---

## Content model

All page content should be stored in typed files.

### Example structure

- `src/content/symptoms.ts`
- `src/content/brands.ts`
- `src/content/faq.ts`
- `src/content/reviews.ts`
- `src/content/error-codes/lg.ts`
- `src/content/error-codes/bosch.ts`
- `src/content/error-codes/samsung.ts`
- `src/content/error-codes/indesit.ts`

---

## Content entity types

### SymptomPage

Fields:

- `slug`
- `title`
- `metaTitle`
- `metaDescription`
- `h1`
- `intro`
- `signs`
- `possibleCauses`
- `selfCheckSteps`
- `whenNeedMaster`
- `priceNote`
- `faq`
- `relatedLinks`

### BrandPage

Fields:

- `slug`
- `brand`
- `metaTitle`
- `metaDescription`
- `h1`
- `intro`
- `commonProblems`
- `commonErrorCodes`
- `faq`
- `relatedLinks`

### ErrorCodePage

Fields:

- `brandSlug`
- `code`
- `slug`
- `metaTitle`
- `metaDescription`
- `h1`
- `meaning`
- `symptoms`
- `possibleCauses`
- `selfCheckSteps`
- `whenNeedMaster`
- `relatedLinks`

### FAQItem

Fields:

- `question`
- `answer`

### Review

Fields:

- `name`
- `district`
- `problem`
- `solution`
- `text`

---

## Page requirements

### Symptom page must include

- H1
- short intro
- how the issue appears
- possible causes
- safe self-check steps
- when a master is needed
- pricing note
- lead form
- FAQ
- related links

### Brand page must include

- H1
- short intro
- common issues for this brand
- common error codes
- links to related error pages
- lead form
- FAQ

### Error code page must include

- H1
- what the code means
- how it appears
- possible causes
- what can be checked safely
- when a master is needed
- lead form
- related links

---

## Lead form requirements

### Required fields

- `name`
- `phone`
- `message`

### Optional fields

- `brand`
- `errorCode`
- `model`

### Hidden / technical fields

- `pageUrl`
- `pageType`
- `pageSlug`
- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_content`
- `utm_term`
- `timestamp`
- `honeypot`

### Form behavior

- validate on client and server
- send data without full page reload if possible
- show success state
- show error state if request fails
- pass page context automatically

---

## Backend logic in MVP

There is no separate backend service.  
Minimal backend responsibilities are implemented inside Next.js.

### Responsibilities

- receive form submission
- validate input with Zod
- reject spam / invalid requests
- enrich lead with technical metadata
- send lead to Telegram
- return success or error response to the client

### Not required on MVP

- saving leads to database
- admin interface for leads
- lead retries queue
- lead status model
- CRM logic

---

## Telegram integration

All leads must be sent to Telegram through Bot API.

### Telegram message should include

- lead type
- name
- phone
- issue description
- brand if provided
- error code if provided
- current page URL
- page type
- UTM tags
- submission timestamp

### Requirements

- `TELEGRAM_BOT_TOKEN` must be stored in env
- `TELEGRAM_CHAT_ID` must be stored in env
- sending logic must be isolated in a utility module
- Telegram failure must not crash the whole app
- failures must be logged

---

## Anti-spam requirements

### Required on MVP

- honeypot field
- minimal delay check between page render and submit
- server-side validation
- reject obviously empty or suspicious submissions

### Can be postponed

- Redis-based rate limiting
- reCAPTCHA
- advanced bot protection

---

## SEO requirements

The project must be SEO-ready from the start.

### Required

- SSR or SSG for public pages
- unique `title` and `description`
- Next.js Metadata API
- `robots.ts`
- `sitemap.ts`
- canonical URL support
- Open Graph metadata
- readable URLs
- internal linking between related pages
- no duplicate pages

### Recommended

- JSON-LD structured data
- `LocalBusiness`
- `Service`
- `FAQPage`
- `BreadcrumbList`

---

## Analytics requirements

### Required

- Yandex Metrica integration

### Events to track

- form submission
- phone click
- WhatsApp click
- Telegram click
- key page views if needed

### Notes

- analytics must not break SSR
- event helpers should be centralized

---

## UI/UX requirements

### General

- responsive layout
- mobile-friendly forms
- readable typography
- visible CTA blocks
- every key page should allow contacting quickly

### Required UI blocks

- header
- footer
- CTA sections
- lead form
- FAQ block
- advantages block
- brands block
- related pages block

### Mobile requirements

- clickable phone number
- easy form interaction
- visible primary CTA
- proper spacing and readable font sizes

---

## Non-functional requirements

### Maintainability

The project must stay easy to maintain by one developer.

Required:

- clean folder structure
- strict typing
- reusable templates
- reusable components
- minimal copy-paste
- business logic outside JSX where possible

### Performance

- minimal JS where unnecessary
- fast mobile loading
- optimized images
- lazy loading where applicable

### Reliability

- Telegram integration failure should not break rendering
- form submission should always return a safe response
- errors should be logged

---

## Code quality requirements

### Required

- TypeScript strict mode
- ESLint
- Prettier
- clear naming
- no giant god-components
- extracted helpers for SEO, Telegram, analytics, and validation

---

## Suggested project structure

```txt
src/
  app/
    (site)/
      page.tsx
      prices/page.tsx
      faq/page.tsx
      contacts/page.tsx
      privacy/page.tsx
      symptoms/[slug]/page.tsx
      brands/[slug]/page.tsx
      error-codes/[brand]/[code]/page.tsx
    api/
      lead/route.ts
    layout.tsx
    sitemap.ts
    robots.ts
    globals.css

  components/
    ui/
    sections/
    forms/
    shared/

  content/
    symptoms.ts
    brands.ts
    faq.ts
    reviews.ts
    error-codes/
      lg.ts
      bosch.ts
      samsung.ts
      indesit.ts

  lib/
    telegram.ts
    seo.ts
    analytics.ts
    utils.ts

  schemas/
    lead.ts

  types/
    content.ts
    lead.ts