# Design Guidelines: Nigerian Event Startup Platform

## Design Approach: Reference-Based (Event Discovery + Cultural Vibrancy)

**Primary Inspiration**: Eventbrite's card-based discovery + Dice's bold typography + Airbnb's visual storytelling, enhanced with vibrant Nigerian cultural elements.

**Design Philosophy**: Create an energetic, trustworthy platform that celebrates Nigerian culture while maintaining modern web standards. Focus on visual impact, easy discovery, and building trust for payment transactions.

---

## Core Design Elements

### A. Color Palette

**Primary Colors:**
- Dark Mode Primary: `142 76% 36%` (Deep emerald green - Nigerian flag inspired)
- Light Mode Primary: `142 71% 45%` (Vibrant emerald)
- Dark Mode Background: `240 10% 8%` (Rich charcoal)
- Light Mode Background: `0 0% 100%` (Pure white)

**Accent Colors:**
- Success/CTA: `142 76% 36%` (Emerald green for buttons)
- Warning: `25 95% 53%` (Vibrant orange for urgent CTAs)
- Info: `217 91% 60%` (Bright blue for informational elements)

**Neutral Scale:**
- Text Primary (Dark): `0 0% 98%`
- Text Secondary (Dark): `240 5% 65%`
- Text Primary (Light): `240 10% 15%`
- Text Secondary (Light): `240 6% 45%`

### B. Typography

**Font Families:**
- Headlines: 'Space Grotesk' (Google Fonts) - Bold, modern, attention-grabbing
- Body: 'Inter' (Google Fonts) - Clean, readable
- Accent/Numbers: 'Space Grotesk' for event dates and ticket prices

**Type Scale:**
- Hero Headline: text-6xl md:text-7xl lg:text-8xl font-bold
- Section Headers: text-4xl md:text-5xl font-bold
- Event Titles: text-2xl md:text-3xl font-semibold
- Body Text: text-base md:text-lg
- Captions: text-sm

### C. Layout System

**Spacing Primitives**: Use Tailwind units of **4, 6, 8, 12, 16, 24** (e.g., p-4, gap-6, py-12, my-24)

**Grid System:**
- Container: max-w-7xl mx-auto px-4 md:px-6 lg:px-8
- Event Cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
- City Quick Nav: grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4
- Content Sections: py-16 md:py-24

### D. Component Library

**1. Navigation:**
- Sticky header with backdrop blur on scroll
- Logo left, main nav center, CTA button right
- Mobile: Slide-in menu with city quick links

**2. Hero Section:**
- Full-width background image/video (h-[85vh])
- Gradient overlay (from black/50 to transparent)
- Centered content with bold headline + CTA
- City quick navigation tiles below (absolute positioned or next section)

**3. Event Cards:**
- Rounded-2xl with hover lift effect (transition-transform hover:scale-[1.02])
- Event image (aspect-video, object-cover)
- Gradient overlay on image for text readability
- Date badge (absolute top-4 left-4, vibrant background)
- Location + ticket price in footer
- "View Details" CTA button

**4. City Navigation Tiles:**
- Interactive cards with city imagery
- Hover effect: subtle scale + shadow increase
- City name overlay with event count

**5. Payment Modal:**
- Centered overlay with backdrop blur
- Bank details prominently displayed (large text)
- Step-by-step instructions
- File upload area with drag-and-drop
- Trust indicators (SSL badge, secure transfer messaging)

**6. Filter System:**
- Sticky sidebar on desktop (w-64)
- Collapsible filter drawer on mobile
- Checkbox groups for cities, dates, categories
- Clear active filters display

**7. Forms:**
- Generous spacing (p-6)
- Floating labels or top-aligned labels
- Focus states with emerald ring
- Clear error states with red text + icon

**8. Footer:**
- Multi-column layout (lg:grid-cols-4)
- Newsletter signup with inline form
- Social media icons (large, colorful)
- City links, quick navigation
- Trust badges (SSL, secure payment)

### E. Interaction Patterns

**Minimal Animations (use sparingly):**
- Card hover lifts: transform scale(1.02)
- Button press: scale(0.98) on active
- Modal entrance: fade + slide up
- Page transitions: None (instant navigation)

**Scroll Behavior:**
- Smooth scroll for anchor links
- Sticky filters on events page
- Parallax effect on hero (subtle, if any)

---

## Images

**Hero Section:**
- **Large hero image**: YES - Full-width, high-energy event photo showing Nigerian crowd, colorful celebration
- Overlay: Linear gradient from bottom (rgba(0,0,0,0.7)) to top (transparent)

**Event Cards:**
- Event posters/photos (16:9 aspect ratio)
- High energy, culturally relevant imagery

**City Tiles:**
- Representative city landmarks or event scenes
- Vibrant, inviting imagery

**About Page:**
- Team photos, past event highlights
- Trust-building imagery (happy attendees, successful events)

**Additional Images:**
- Partner logos (if applicable)
- Trust badges/payment security icons
- Social proof (testimonial photos)

---

## Page-Specific Guidelines

**Homepage:**
- Hero (85vh) with video/image background
- City quick nav tiles (6 columns on desktop)
- Featured events grid (3 columns)
- How it works section (3-step process)
- Newsletter + social proof
- Footer

**Events Page:**
- Sticky filter sidebar (desktop)
- Masonry or grid layout for event cards
- Load more or infinite scroll
- Active filters chip display

**Event Details:**
- Full-width event banner
- Two-column layout: Details left (60%), booking right (40%)
- Sticky booking card on scroll
- Map integration (embedded Google Maps)
- Share buttons prominently displayed

**About & Contact:**
- Asymmetric layouts with image + text blocks
- WhatsApp CTA floating button (bottom right)
- Contact form with trust indicators

---

## Dark Mode Implementation

- Maintain consistent dark backgrounds (charcoal, not pure black)
- Increase contrast for text elements
- Soften bright colors slightly (reduce saturation by 10%)
- Form inputs: dark with subtle borders, focus with emerald glow
- Images: Slight overlay to prevent harsh contrast