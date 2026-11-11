# Khusrow Imamyar · Developer portfolio

Next.js App Router, TypeScript, Tailwind CSS v4, Motion, and Lucide. A static, editable portfolio with ten résumé-backed project case studies. No database, paid API, form service, or account required.

## Open in VS Code

1. Extract this ZIP and open the `portfolio` folder in VS Code.
2. Install Node.js 24 LTS from the official Node.js website.
3. In the VS Code terminal, run `npm ci`.
4. Run `npm run dev` and open the address Next.js prints (usually http://localhost:3000).
5. Run `npm run check` before shipping. `npm run build` produces `out/`.

Keep `package-lock.json`. It records the exact tested dependency tree. Use `npm ci` for reproducible installation. Dependencies should be updated deliberately with another build and browser review.

## Edit content

| What | File |
| --- | --- |
| Name, email, social URLs, skills, employment, education, certificates | `src/data/profile.ts` |
| Projects, case studies, stacks, live project addresses | `src/data/projects.ts` |
| Home introduction and about copy | `src/app/page.tsx` |
| Colours, spacing, breakpoints | `src/app/globals.css` |
| Shared project illustrations | `src/components/project-visual.tsx` |
| Résumé | `public/resume/Khusrow-Imamyar-Resume.pdf` |
| Social preview | `public/social-preview.png` |

The résumé is an unchanged copy of the latest uploaded general résumé, `Khusrow Imamyar Resume(3).pdf`, uploaded November 3 local time / November 4 UTC. Employment uses the corrected June 2024 SDE start date. Do not replace it with an older three-role GrabOn résumé.

GitHub is deliberately blank because no verified username was found. Add its full URL to `profile.github`; the contact section will show it automatically. No fake link is displayed.

Project graphics are original illustrations of documented stacks, labelled as illustrations. They are not screenshots or claims about proprietary UI. To add approved screenshots, place images under `public/projects/`, update the visual component, give explicit dimensions and descriptive alt text, and prefix local image paths with `asset()` from `src/lib/site.ts`.

## GitHub Pages deployment

Repository: https://github.com/Khusrowimamyar/khusrowimamyar.github.io

Expected address after a successful deployment: https://khusrowimamyar.github.io/

1. Extract the upload ZIP and open the extracted folder. On macOS, press **Command + Shift + .** to show hidden files, including `.github` and `.gitignore`.
2. In the repository, choose **Add file → Upload files** (or **uploading an existing file** in an empty repository). Upload the contents of the extracted folder to branch `main`, with `package.json`, `package-lock.json`, `src`, `public`, and `.github` at the repository root. Upload the extracted contents, not the ZIP or its enclosing folder.
3. Make sure `.github/workflows/deploy.yml` was included. If the browser omitted the hidden folder, use **Add file → Create new file**, enter `.github/workflows/deploy.yml`, paste the supplied workflow, and commit it.
4. In **Settings → Pages → Build and deployment → Source**, select **GitHub Actions**.
5. Open **Actions → Deploy portfolio to GitHub Pages → Run workflow**, choose `main`, and run it. A push to `main` also triggers the workflow.
6. Once both build and deploy jobs are green, open https://khusrowimamyar.github.io/ and check the projects, résumé, phone link and theme toggle.

The workflow installs npm dependencies, runs lint/type/test checks, builds the static site, verifies exported links, and deploys `out/`. It reads the canonical address and base path from GitHub Pages, so no source edits or environment secrets are needed.

If the first automatic run fails before Pages is configured, complete step 4 and run the workflow again. The repository exists; this package has not been uploaded or deployed by the assistant.

Official setup: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages

## Test a project repository locally

On macOS/Linux:

```sh
NEXT_PUBLIC_BASE_PATH=/portfolio NEXT_PUBLIC_SITE_URL=https://YOUR-USERNAME.github.io/portfolio npm run build
```

The base path is set at build time. Next Link prefixes internal routes automatically; the `asset()` helper prefixes public files. Do not add the base path twice. Canonical links, sitemap, JSON-LD URL, robots sitemap URL, and social image paths use the configured address.

For a normal local build use `npm run build` without the variables. Local builds deliberately omit canonical URLs and disallow indexing when no `NEXT_PUBLIC_SITE_URL` is set; they do not invent a public address. GitHub Actions sets both automatically.

## Custom domain

Add your domain in repository **Settings → Pages → Custom domain** and follow GitHub's DNS verification steps. Add a `public/CNAME` file containing only the domain if required by your setup, then rerun the workflow. GitHub's configure-pages action supplies the public origin and appropriate base path. Verify the emitted canonical links after the switch. Enable HTTPS in Pages settings when available.

## View a local static build

The source upload ZIP excludes generated output. Run `npm ci` and `npm run build` to generate `out/`. With Python installed, run `python3 -m http.server 8080 --directory out` and open http://localhost:8080. Serve the folder over HTTP; double-clicking index.html does not resolve root asset paths correctly.

## Quality and accessibility

Semantic sections, a skip link, visible keyboard focus, real static mailto contact, accessible button names, reduced-motion CSS and Motion handling, persistent light/dark themes, responsive layouts, and HTML case-study routes are included. No runtime tracking or third-party font requests are used. Local system fonts avoid font loading failures.

See `docs/Quality Report.md` for actual checks and limitations and `docs/Content Evidence.md` for content provenance and remaining information. No Lighthouse score is claimed without an audit.
