# Richway Lofts & Extensions — Full Website Build

## You are building a complete website for Richway, a London/Essex house extension & loft conversion company.

**Repo:** jakeylee93/richway-website
**Deploy:** Vercel

---

## Business Context

**Richway Lofts & Extensions** — 30+ years experience in house extensions, loft conversions, and home renovations across London and Essex. Turnkey service: planning drawings → construction → completion. Each project gets a dedicated Project Manager. Run by Tom.

**Services:**
- House Extensions (rear, side return, wraparound)
- Loft Conversions (dormer, hip-to-gable, mansard, Velux)
- Full Home Renovations
- Design & Planning

**Accreditations:** Velux Specialist, Federation of Master Builders, TrustMark, Gas Safe, NICEIC

**Areas:** London, Essex, surrounding areas

**Key selling points:**
- 30+ years experience
- Turnkey start-to-finish service
- Dedicated Project Manager per project
- 10-year guarantee
- Free consultation
- 24/7 reachable

---

## Tech Stack
- Next.js 14+ (App Router, TypeScript strict)
- Tailwind CSS v4
- Framer Motion
- pnpm
- Vercel deployment

---

## Design Direction

**Clean, modern, premium construction company.** Think architectural firm meets trusted builder. NOT a generic WordPress construction template.

### Colour Palette
- **Primary:** Deep charcoal `#1a1a1a`
- **Accent:** Warm amber/gold `#c8956c` (trustworthy, premium)
- **Background:** Clean white `#ffffff` + light warm grey `#f7f5f2`
- **Text:** `#1a1a1a` on light, `#ffffff` on dark

### Typography
- **Headings:** DM Serif Display (architectural, premium)
- **Body:** DM Sans (clean, modern)

### Photography
- Use high-quality Unsplash images of modern home extensions, loft conversions, interior renovations
- Bright, airy, lots of natural light — the exact aesthetic their customers want

---

## Pages to Build

### 1. Homepage
**Hero**
- Full-width image (modern extension with glass/light)
- Headline: "Transforming London & Essex Homes for Over 30 Years"
- Subtitle: "Expert house extensions, loft conversions, and complete renovations — designed and built around you."
- Two CTAs: "Get a Free Quote" (primary amber) + "View Our Work" (outline)

**Stats Strip**
- 30+ Years Experience
- 500+ Projects Completed
- 10 Year Guarantee
- 5★ Customer Rating

**Services Overview** (3 cards)
- House Extensions — "From rear extensions to wraparounds, we create the space your home deserves."
- Loft Conversions — "Unlock your home's hidden potential with a beautifully crafted loft conversion."
- Full Renovations — "Complete home transformations, managed from start to finish."
Each card with a high-quality image, short description, and "Learn More" link.

**How We Work** (visual process timeline — 4 steps)
1. Free Consultation — "We visit your home, take measurements, and understand your vision."
2. Design & Planning — "Our architects create detailed plans and handle all permissions."
3. Construction — "Your dedicated Project Manager oversees every detail."
4. Completion — "We hand over your dream home with a 10-year guarantee."

Horizontal timeline on desktop, vertical on mobile. Icons + brief text + connecting line.

**Featured Projects** (3 project cards)
- Each with before/after style or hero image
- Project type tag (Extension / Loft / Renovation)
- Location
- Brief description
- Use Unsplash placeholder images

**Testimonials** (use their real 3 reviews)
1. The Chowdhury's, Chingford — "Working with Richway, and in particular Tom was a pleasure..."
2. Tom & Katy Evans, Chingford — "Anyone committing to major building works... I can't tell you how happy I am..."
3. Mr & Mrs Griffiths, Epping — "We are so pleased with our extension. Tom and the team went above and beyond..."

**Accreditations Strip**
- Velux Specialist, Federation of Master Builders, TrustMark, Gas Safe, NICEIC
- Use text logos or simple badge-style items

**CTA Section**
- "Ready to Transform Your Home?"
- "Book a free, no-obligation consultation today."
- "Get Your Free Quote" button + phone number

### 2. /extensions
- Hero with extension image
- Types of extensions (rear, side return, wraparound, single storey, double storey)
- Why choose Richway for extensions
- Process overview
- Featured extension projects
- CTA

### 3. /loft-conversions
- Hero with loft conversion image
- Types (dormer, hip-to-gable, mansard, Velux/rooflight)
- Benefits of a loft conversion
- Featured loft projects
- CTA

### 4. /renovations
- Hero with renovation image
- Full renovation services
- Design & build approach
- Featured renovation projects
- CTA

### 5. /our-work (Gallery)
- Filterable grid: All / Extensions / Loft Conversions / Renovations
- Project cards with images, type tag, location
- Click to expand (modal or detail page)

### 6. /about
- Tom's story and the Richway team
- 30 years of experience narrative
- Values: quality, communication, trust
- Accreditations with descriptions
- Team photo placeholder

### 7. /contact
- Contact form (name, email, phone, project type dropdown, postcode, message — all required)
- Phone number prominently displayed
- Email address
- Service area map or text description (London & Essex)

### 8. /quote
- Simple multi-step quote form:
  - Step 1: Project type (Extension / Loft / Renovation / Other)
  - Step 2: Property type (Terraced / Semi-detached / Detached / Flat)
  - Step 3: Approximate size/scope (Small / Medium / Large)
  - Step 4: Location (postcode)
  - Step 5: Contact details (name, email, phone)
  - Confirmation: "Thanks! We'll be in touch within 24 hours for a free consultation."
- Not actual pricing — just a structured lead capture form

---

## Layout
- **Header:** Logo (text "RICHWAY" for now), nav links, "Get a Quote" CTA button
- **Footer:** Contact details, service links, accreditation badges, company info
- **Mobile nav:** Hamburger menu, slide-out

## Quality
- Lighthouse 90+
- Mobile-first
- WCAG 2.1 AA
- TypeScript strict
- Framer Motion for subtle scroll animations (fade-in sections)

## Git
- Conventional commits
- Push to main when done
