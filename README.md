# PrimPro — one-page site (static)

This is a **static HTML** version of the PrimPro landing page. No build tools required.
Perfect for quick deploys on **Vercel** or GitHub Pages.

## Files
- `index.html` — the whole site
- `assets/favicon.svg` — simple P favicon
- `vercel.json` — optional; sets clean routing

## How to use (GitHub → Vercel)
1. Create a repo named `primpro-site` (public).
2. Upload all files in this folder to the repo root and commit.
3. In **Vercel**, click **New Project** → import the repo → Framework: **Other** (or automatic).
4. Deploy. You'll get a preview URL like `*.vercel.app`.
5. In Vercel **Settings → Domains**, add: `primpro.co.uk` and `www.primpro.co.uk`.
6. At your registrar, set DNS:
   - `A` record (root / @) → `76.76.21.21`
   - `CNAME` record for `www` → `cname.vercel-dns.com`
7. (Optional email) When your mailbox is ready, add MX/SPF/DKIM/DMARC and update the email shown on the site if needed.

_Last updated: 2025-10-21T11:00:28.932129Z_
