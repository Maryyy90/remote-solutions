# Remote Solutions — Landing Page

> **People. Process. Performance.**  
> Elite remote teams for growing businesses worldwide.

🌐 **Live:** [remotesolutionss.com](https://www.remotesolutionss.com)

---

## Tech Stack

- **Framework:** Next.js 16.2.9 (App Router + Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Email:** Resend
- **Scheduling:** Calendly
- **Deployment:** Vercel

---

## Pages

| Route | Description |
|---|---|
| `/` | Main landing page |
| `/privacy-policy` | Privacy Policy |
| `/api/contact` | Contact form API route |

---

## Sections

- **Hero** — Animated particles + floating logo + typewriter effect
- **Services** — 6 service cards with hover animations
- **Who We Help** — 9 industry cards
- **Process** — 5-step animated timeline
- **Packages** — 5 pricing tiers (Bronze → Wholesaling)
- **Success Stories** — Auto-rotating testimonials carousel
- **Contact** — Form with email delivery + Calendly booking

---

## Getting Started

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Environment Variables

Create a `.env.local` file in the root directory:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx
```

Get your free API key at [resend.com](https://resend.com) (3,000 emails/month free).

---

## Project Structure

```
remote-solutions/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts        # Email API endpoint
│   ├── privacy-policy/
│   │   ├── page.tsx
│   │   └── PrivacyContent.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── WhoWeHelp.tsx
│   │   ├── Process.tsx
│   │   ├── Packages.tsx
│   │   ├── SuccessStories.tsx
│   │   └── Contact.tsx
│   ├── ui/
│   │   └── SectionHeader.tsx
│   ├── Navbar.tsx
│   └── Footer.tsx
└── public/
    └── logo.png
```

---

## Deployment

Deployed on **Vercel** with automatic deployments on every push to `main`.

### Deploy your own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push to GitHub
2. Import on Vercel
3. Add `RESEND_API_KEY` in Environment Variables
4. Deploy ✅

---

## Features

- ⚡ Next.js 16 with Turbopack
- 🎨 Dark / Light mode
- 📱 Fully responsive
- 🌐 SEO optimized
- 📧 Contact form with email delivery
- 📅 Calendly booking integration
- 🔒 SSL via Vercel
- 🚀 Edge-ready deployment

---

## Built by

[Mohamed Ahmed](https://m7md-a7md.github.io/links/)
