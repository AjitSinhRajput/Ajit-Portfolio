# Deployment Guide

This portfolio is deployed as a GitHub Pages project site:

```text
https://AjitSinhRajput.github.io/Ajit-Portfolio/
```

## Important Configuration

`vite.config.ts` must keep this base path:

```ts
base: "/Ajit-Portfolio/"
```

This is required because GitHub Pages serves the site from the repository subpath, not the domain root.

`package.json` contains:

```json
"homepage": "https://AjitSinhRajput.github.io/Ajit-Portfolio/",
"deploy": "gh-pages -d dist"
```

## Deploy Steps

1. Install dependencies:

```bash
npm install
```

2. Run validation:

```bash
npm run lint
npm run build
```

3. Deploy the production build to GitHub Pages:

```bash
npm run deploy
```

The deploy command builds from the existing `dist` output and publishes it to the `gh-pages` branch.

## GitHub Pages Settings

In GitHub repository settings:

1. Go to `Settings` -> `Pages`.
2. Set source to `Deploy from a branch`.
3. Select branch `gh-pages`.
4. Select folder `/ (root)`.
5. Save.

## SEO/Crawling Files

The public folder includes:

- `public/robots.txt`
- `public/sitemap.xml`

Vite copies these into `dist` during `npm run build`, so they are published with the site.

## Production Verification

After deployment, verify:

```text
https://AjitSinhRajput.github.io/Ajit-Portfolio/
https://AjitSinhRajput.github.io/Ajit-Portfolio/robots.txt
https://AjitSinhRajput.github.io/Ajit-Portfolio/sitemap.xml
https://AjitSinhRajput.github.io/Ajit-Portfolio/AjitResume.pdf
```

## Common Issues

If assets fail to load, check that `base` in `vite.config.ts` is exactly:

```ts
base: "/Ajit-Portfolio/"
```

If the site does not update after deploying, wait a few minutes and hard refresh the browser.

