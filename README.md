# InkWell Publishings — complete static preview

Preview: https://khawermirza65-ctrl.github.io/my-publishing-website/?v=6
Illustrations: https://khawermirza65-ctrl.github.io/my-publishing-website/illustrations/?v=6

## Changes

Removed repeated footer enquiry sections and retained each original hero form. All enquiry buttons target that form. Rebuilt the footer across all current pages with seven social SVG icons, five payment marks, the address placeholder, service regions and both clickable emails. Added Illustrations to main navigation and footer links. The new gallery contains all eight supplied images, category filters, a 4/2/1-column layout and an accessible original-size lightbox with arrow keys, Escape, focus trapping and restoration. Images load lazily using responsive WebP files. Without JavaScript, the whole gallery remains visible and its links open the original JPGs. Existing palette, fonts, header and other page content are preserved. The new page has a unique title, description, canonical, structured data, descriptive alt text and sitemap entry.

## Installation and exact asset locations

Use the complete `my-publishing-website/` folder from the handover ZIP and replace matching project files. It contains the full website, not a patch. Keep these paths:

- New page: `illustrations/index.html`
- Shared stylesheet: `assets/style.css`
- Existing shared behavior: `assets/site.js`
- New gallery behavior: `assets/illustrations.js`
- Local social/payment/contact SVG sprite: `assets/footer-icons.svg`
- All eight responsive image pairs: `assets/illustrations/{name}-480.webp` and `{name}-960.webp`
- All eight full-resolution JPGs: `assets/illustrations/originals/{name}.jpg`
- Filename mapping, labels, dimensions and categories: `assets/illustrations/manifest.json`

Image names are `city-after-dark`, `creative-corner`, `artist-at-work`, `little-playroom`, `sunlit-kitchen`, `bakery-morning`, `cooking-together` and `cookie-jar`.

The gallery references images with relative paths, for example `../assets/illustrations/city-after-dark-480.webp` and `../assets/illustrations/originals/city-after-dark.jpg`. The new navigation link is `/my-publishing-website/illustrations/` for GitHub Pages; it becomes `/illustrations/` at the production domain root. It is already present across the current site.

The handover also includes `FULL-UPDATED-CODE.md` with the entire contents of every changed text file, `CHANGED-FILES.txt` with all changed/new paths, and the verification result. No source code has been shortened or replaced with placeholders.

## Local viewing

Extract the ZIP and open a terminal in the directory **containing** `my-publishing-website/`. Run:

```sh
python -m http.server 8000
```

Visit `http://localhost:8000/my-publishing-website/` or `http://localhost:8000/my-publishing-website/illustrations/`. Use a local server rather than opening an HTML file directly, so directory routes and SVG references work correctly.

## Owner-editable fields

Replace social `href="#"` placeholders with your account links and `[YOUR COMPANY ADDRESS HERE]` with your address in each footer. The second email is **care@inkwellpubishings.com**, exactly as supplied. Its domain spelling differs from **info@inkwellpublishings.com**; change it if that was a typo. Footer and gallery CSS is appended at the end of `assets/style.css`. Contact/payment/social icons use the local symbol sprite, with no runtime icon CDN.

## Form behavior and production

This is a static preview. Forms validate but do not transmit, store or email enquiries; they state this explicitly. Email and telephone links work normally. Your developer must connect a backend and verify delivery before changing the preview notice. The GitHub preview remains noindex.

For the production domain, change `/my-publishing-website/` prefixes to `/`, replace GitHub social-preview image URLs with production URLs, complete the draft legal pages, connect the form backend and plan redirects from current PHP URLs. Keep the existing www canonical convention consistent. Remove noindex only on production pages ready for indexing. Search Console setup and indexing verification follow deployment.

## Verification and assets

Browser checks passed on 22 current pages at widths 1440, 768, 390 and 320 pixels: no horizontal overflow, one retained form where present, working CTA targets, social/payment icons, filters, lightbox navigation, keyboard/focus handling, mobile menu, form validation and the JavaScript-disabled gallery. No failed network requests or script errors were recorded. Structured data was checked. The preserved legacy `publishing_website.html` is outside current navigation.

Illustrations are labelled as supplied visual references, not verified InkWell client work. See `ASSETS.md` for attribution and existing image/font notes.
