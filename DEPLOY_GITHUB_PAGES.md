# GitHub Pages Deploy (`Guillermo222/paramount_demo`)

This app is configured to deploy to your project GitHub Pages repo (`Guillermo222/paramount_demo`).

## 1. Push this app into that repo

This Vite app folder should be the repository root when pushed to the `paramount_demo` repository.

## 2. Add repo secret

In GitHub -> Settings -> Secrets and variables -> Actions, add:

- `VITE_STATSIG_CLIENT_KEY` = your Statsig client key (`client-...`)

## 3. Enable Pages via GitHub Actions

In GitHub -> Settings -> Pages:

- Source: `GitHub Actions`

## 4. Deploy

Push to `main`, or run the `Deploy to GitHub Pages` workflow manually.

## Notes

- This workflow builds with `VITE_BASE_PATH=/paramount_demo/` because the site will be served from `https://guilermo222.github.io/paramount_demo/`.
- The local `.env` file is not used by GitHub Actions; the secret is used at build time instead.
