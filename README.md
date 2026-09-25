# Souryajeet Singh — Portfolio

Static HTML, CSS, and JavaScript portfolio. Tailwind CSS is compiled locally.

## Structure

- `index.html` — homepage with MessMate and CampusLive featured.
- `projects/index.html` — all projects.
- `projects/{messmate,campuslive,krishilink}/index.html` — canonical case studies.
- `projects.html` and `projects/*.html` — small redirects preserving existing URLs.
- `assets/css/` — shared styles and Tailwind input/output.
- `js/` — shared interactions, components, and project data.
- `assets/images/portraits/` — optimized responsive portraits.
- `assets/projects/` — current project covers, screenshots, and source notes.
- `assets/logos/` — technology icons and attribution.
- `docs/reference/` — retained personal reference document, not used by the site.

## Development

```sh
npm ci
npm run build
npm run preview
```

Open http://localhost:5173. Rebuild after changing Tailwind utility classes.
GitHub Pages publishes the repository on pushes to `main`.
The contact form opens an email draft; it does not send or store messages.

## Author

Souryajeet Singh · [GitHub](https://github.com/souryajeet10) · [LinkedIn](https://www.linkedin.com/in/souryajeet10/)
