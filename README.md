# Raghav Senthilkumar — personal site

A single-page portfolio for [Raghav Senthilkumar](https://github.com/raghavs6), built with [Astro](https://astro.build).

[View the live site](https://raghav-s.fyi).

## Preview locally

```sh
npm install
npm run dev
```

Visit `http://localhost:4321/`. Run `npm run build` to produce the static site in `dist/`, and `npm run preview` to serve that build.

## Edit

- `src/data/site.ts` holds the links, experience, projects, and writing entries.
- `src/pages/index.astro` lays out the page, and `src/layouts/Base.astro` holds the `<head>`.
- `src/styles/global.css` contains the responsive styles.
- `public/CNAME` keeps the custom domain.
- `.github/workflows/pages.yml` builds the site and deploys `dist/` to GitHub Pages on every push to `main`.

Project descriptions are based on their linked public repositories. The built page ships no client-side scripts or external assets.
