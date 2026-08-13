# Am I Nima? — official showcase site

Responsive Next.js App Router site for Ho Games Studio's *Am I Nima?*, built from the supplied Figma desktop, tablet, and phone frames.

## Run locally

```bash
npm install
npm run dev
```

The production checks are:

```bash
npm run typecheck
npm run lint
npm run build
```

The build uses `output: "export"` and writes the deployable static site to `out/`.

## Content that still needs Jeremy's links

All unfinished links are deliberately `null` in [`app/content.ts`](./app/content.ts) so the page never sends visitors to invented destinations. Replace these values when they are available:

- `videoUrl`: the YouTube embed URL. Use `https://www.youtube-nocookie.com/embed/<VIDEO_ID>`.
- `steam.demoUrl`: the Play demo Steam URL.
- `steam.wishlistUrl`: the Steam wishlist URL.
- `socials`: the eight platform URLs.

The supplied Figma frame contains one real screenshot, so the gallery is an extensible array with navigation disabled until more real screenshots are provided. Add additional entries to `siteContent.gallery` when they are available.

## GitHub Pages

The workflow at [`.github/workflows/deploy-pages.yml`](./.github/workflows/deploy-pages.yml) runs on pushes to `main` and manual dispatches. It derives the repository subpath automatically, while `username.github.io` repositories and future custom domains use the root path. In the repository settings, set **Pages → Source** to **GitHub Actions**.

For a local build, set `NEXT_PUBLIC_SITE_URL` if you want Open Graph URLs to point at a deployed origin instead of the local default.

The page currently uses the Google-hosted Signika Negative font requested by the design. If licensed local font files become available, add them under `public/fonts` and switch the font declaration in `app/globals.css`.
