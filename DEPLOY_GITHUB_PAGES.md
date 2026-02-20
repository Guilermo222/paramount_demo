# GitHub Pages Deploy (guilermo222.github.io)

This app is configured to deploy to your root GitHub Pages repo (`guilermo222.github.io`).

## 1. Push this app into that repo

This Vite app folder should be the repository root when pushed to GitHub Pages.

## 2. Add repo secret

In GitHub -> Settings -> Secrets and variables -> Actions, add:

- `VITE_STATSIG_CLIENT_KEY` = your Statsig client key (`client-...`)

## 3. Enable Pages via GitHub Actions

In GitHub -> Settings -> Pages:

- Source: `GitHub Actions`

## 4. Deploy

Push to `main`, or run the `Deploy to GitHub Pages` workflow manually.

## Notes

- This workflow builds with `VITE_BASE_PATH=/` because `guilermo222.github.io` is a root Pages repo.
- If you later move this app to a project repo (for example `paramountplus-clone`), set `VITE_BASE_PATH=/paramountplus-clone/` in the workflow.
- The local `.env` file is not used by GitHub Actions; the secret is used at build time instead.
