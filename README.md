# Pradeep & Bhanumathi — Wedding Invitation Site

Next.js 14 + TypeScript + Tailwind + Framer Motion. Fully responsive (mobile-first), animated, with proper WhatsApp/social link previews built in.

---

## 1. Run it locally

You need **Node.js 18.18+** installed (check with `node -v`).

```bash
# 1. unzip this folder, then open a terminal inside it
cd wedding-invite

# 2. install dependencies
npm install

# 3. start the dev server
npm run dev
```

Open **http://localhost:3000** — you'll see it live, editable with hot-reload.

---

## 2. What to edit before going live

| What | File | What to change |
|---|---|---|
| Venue address | `src/app/page.tsx` | `venueAddress` props — filled in with the venue names from your card, but I don't have the exact street address, so **please verify/complete it** before sending this out |
| Wedding countdown target | `src/components/CountdownTimer.tsx` | `TARGET_DATE` — already set to 31 Aug 2026, 11:00 AM IST |
| Your real domain | `src/app/layout.tsx` | `SITE_URL` — required for the WhatsApp preview image to work correctly |
| Preview image (shown in WhatsApp) | `public/og-image.jpg` | Already generated from your card — swap it for a nicer 1200×630 photo any time |

**Note on sharing:** this version has no "RSVP to a fixed number" flow. Instead, the footer has a **"Share on WhatsApp"** button that opens WhatsApp's contact picker with the link pre-filled, so guests (or you) can forward it to anyone in one tap — plus a "Copy Link" fallback for other apps.

---

## 3. Why your WhatsApp link will now look "standard"

The reason a shared link normally shows just plain blue text is that the page has no **Open Graph meta tags**. This project already has them configured in `src/app/layout.tsx` (`openGraph` + `twitter` blocks) — once deployed, WhatsApp will show a card with:
- Your `og-image.jpg` as a preview photo
- The title "Pradeep & Bhanumathi | Wedding Invitation"
- A short description line

**Important:** WhatsApp caches previews aggressively. After you deploy or change `og-image.jpg`, test the fresh preview using Facebook's debugger (WhatsApp uses the same crawler): https://developers.facebook.com/tools/debug/ — paste your link and click "Scrape Again" to force-refresh it.

---

## 4. Deploying it (so you have a real live link)

**Easiest option — Vercel (made by the creators of Next.js):**

1. Push this folder to a GitHub repo (or use `vercel` CLI directly without git — see below)
2. Go to https://vercel.com → sign up free → "Add New Project" → import your repo
3. Vercel auto-detects Next.js, click **Deploy**
4. You'll get a live link in ~60 seconds like `pradeep-bhanumathi.vercel.app`

**No-GitHub option (deploy straight from your laptop):**
```bash
npm install -g vercel
vercel login
vercel --prod
```

Vercel's free "Hobby" tier is enough for this — no credit card needed, handles the traffic of a wedding invite easily.

---

## 5. Domain name suggestions

For something people will actually type/remember/see in a WhatsApp preview, short and personal beats clever:

- `pradeepweds bhanumathi.com` → `pradeepwedsbhanumathi.com`
- `pradeepandbhanu.in`
- `p-and-b-wedding.com`
- `pradeepbhanumathi.wedding` *(the `.wedding` TLD is literal and looks great on an invite, slightly pricier)*

**Where to buy (India-friendly, small budget):**

| Provider | `.com` (1st yr) | `.in` (1st yr) | `.wedding` | Notes |
|---|---|---|---|---|
| **Namecheap** | ~₹700–900 | ~₹500–700 | ~₹2,500–3,500 | Cheapest reliable option, easy DNS-to-Vercel setup |
| **GoDaddy India** | ~₹800–1,200 | ~₹600–800 | ~₹3,000–4,000 | Most familiar UI, phone support in India |
| **Hostinger** | ~₹650–900 | ~₹500 | ~₹2,800 | Often bundles cheap first-year deals |

*Prices fluctuate with promos — check at purchase time. `.in` is usually the cheapest credible option if `.com` is taken.*

**Connecting the domain to Vercel:** Vercel → your project → Settings → Domains → add your domain → it gives you either an A record or nameservers to paste into your registrar. Takes 10 minutes, propagates within a few hours.

---

## 6. Notes on the design

- Palette pulls from your actual card: temple maroon, gold, ivory, brass
- The hero's arch motif echoes the arch drawn on your reception card
- Falling marigold petals and diya flicker are subtle and respect `prefers-reduced-motion`
- Fully responsive: test breakpoints are mobile-first (this is the primary use case since guests will open it from WhatsApp on phones)
