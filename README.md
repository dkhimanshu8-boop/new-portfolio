# Himanshu Mishra — portfolio

Static site, no build step. Deploys to Vercel as-is.

## Deploy to Vercel (3 minutes)

**Option A — GitHub (recommended, auto-deploys on every push)**

1. Push this folder to a GitHub repo (you can reuse `dkhimanshu8-boop/portfolio` — replace its contents).
2. Go to vercel.com → Add New → Project → Import that repo.
3. Framework preset: **Other**. Leave build command and output directory empty. Deploy.
4. Vercel gives you `<project>.vercel.app`. Rename the project in Settings if you want a cleaner name.

**Option B — no GitHub**

```
npm i -g vercel
cd portfolio
vercel --prod
```

## After the first deploy — do these three things

1. **Set your real URL.** Search-and-replace `https://himanshu-mishra.vercel.app` in
   `index.html`, `sitemap.xml` and `robots.txt` with the URL Vercel gave you
   (or your custom domain). This fixes the canonical, Open Graph and schema URLs.
2. **Wire the contact form.** Create a free form at formspree.io, copy the endpoint,
   and replace `YOUR_FORM_ID` in `index.html`. Until then the form opens the
   visitor's mail app with the message pre-filled, so it still works.
3. **Submit to Search Console.** Add the property, submit `/sitemap.xml`.

## Editing

| What                       | Where                                                    |
| -------------------------- | -------------------------------------------------------- |
| Copy, numbers, clients     | `index.html` — plain HTML, sections are labelled          |
| Colours, spacing, type     | `styles.css` — tokens at the top                          |
| Résumé                     | replace `assets/Himanshu_Mishra_Resume.pdf` (same name)   |
| Photo                      | replace `assets/himanshu.jpg` (square, ≥344px)            |
| Share image                | `assets/og.png` (1200×630)                                |

## What's in the box

- Semantic HTML, Person + WebSite JSON-LD, Open Graph and Twitter cards
- Self-hosted variable fonts (Bricolage Grotesque, IBM Plex Sans), preloaded
- No framework, no third-party scripts, ~190 KB total before compression
- `vercel.json`: clean URLs, immutable cache on fonts, security headers
- `sitemap.xml`, `robots.txt`, SVG favicon, Apple touch icon
- Mobile nav, keyboard focus styles, reduced-motion safe, print stylesheet
