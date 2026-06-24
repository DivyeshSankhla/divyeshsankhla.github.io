# Divyesh Sankhla — Portfolio

Single-page academic portfolio inspired by [souravjena.github.io](https://souravjena.github.io/), built with [Astro](https://astro.build/).

Live site: **https://divyeshsankhla.github.io**

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:4321

## Build

```bash
npm run build
npm run preview
```

## Content

Edit YAML files in `src/data/`:

| File | Contents |
|------|----------|
| `profile.yml` | Name, bio, quote, contact, CV link |
| `experience.yml` | Work history (USA / India) |
| `education.yml` | Degrees |
| `projects.yml` | Projects by category |
| `publications.yml` | Papers |
| `awards.yml` | Honors |
| `volunteer.yml` | Volunteer experience |

Source PDFs are archived in `data_inputs/`.

## Deploy to GitHub Pages

1. Create a GitHub repository named `divyeshsankhla.github.io`
2. Push this project to the `main` branch
3. In repo **Settings → Pages**, set **Source** to **GitHub Actions**
4. Push to `main` — the workflow in `.github/workflows/deploy.yml` builds and deploys automatically

## Assets

- Replace `public/images/profile.svg` with your photo (`profile.png` recommended; update `profile.yml` avatar path)
- Update `public/files/cv.pdf` when your resume changes
- Optional company logos: add to `public/images/logos/` and reference in YAML `logo` fields
