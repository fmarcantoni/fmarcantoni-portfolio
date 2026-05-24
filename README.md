# Filippo Marcantoni Portfolio

Professional portfolio website for Filippo Marcantoni, a Robotics Engineer focused on computer vision, robot learning, physical AI, swarm robotics, VR teleoperation, industrial automation, and autonomous systems.

## Tech Stack

- Astro
- TypeScript
- Tailwind CSS
- Static site generation
- No backend or paid services

## Run Locally

```bash
npm install
npm run dev
```

The development server will print the local URL, usually `http://localhost:4321`.

## Build

```bash
npm run build
```

The production build is generated in `dist/`.

## Preview Production Build

```bash
npm run preview
```

## Add Images and Videos

Run these commands from the project root:

```bash
cd /Users/pippo/Desktop/website/fmarcantoni-portfolio
mkdir -p public/images/projects public/images/research public/images/experience public/videos/projects public/videos/research
```

The full media workflow is documented in [MEDIA.md](MEDIA.md). The site now uses local files under `public/`, so it remains deployable even if the old Wix site is deleted.

To check that every referenced local asset exists:

```bash
npm run media:check
npm run build
```

To add the home snapshot:

```bash
mkdir -p public/images/profile
cp /Users/pippo/Desktop/headshot.png public/images/profile/filippo-marcantoni.png
npm run build
```

Use `src/data/localMedia.ts` for hand-curated GitHub repo media, company photos, or company logos. Use `src/data/portfolioMedia.ts` for the larger gallery set that was migrated from the previous portfolio and now lives locally.

Project cover images should match the `image` paths in `src/data/projects.ts`. Example:

```bash
cp ~/Downloads/quadrotor-cover.jpg public/images/projects/quadrotor-controller-design.jpg
cp ~/Downloads/robotic-maze-cover.png public/images/projects/robotic-maze-escape.png
npm run build
```

Research images work the same way:

```bash
cp ~/Downloads/pielo-cover.png public/images/research/pielo-swarm-language.png
npm run build
```

Experience entries use local B&R and Makro images stored in `public/images/experience/`. To replace one with a newer company photo or logo, copy the file into `public/images/experience/`, then update the matching `image` path in `src/data/experience.ts`.

For a local video file, place it in `public/videos/projects/`:

```bash
cp ~/Downloads/robotic-pick-and-place-demo.mp4 public/videos/projects/robotic-pick-and-place-demo.mp4
```

Then add or update the matching project entry in `src/data/projects.ts`:

```ts
video: "/videos/projects/robotic-pick-and-place-demo.mp4",
```

Recommended media format:

- Use the filename and extension already listed in `src/data/*.ts`.
- Use `.jpg`, `.png`, or `.webp` for images, but keep the extension aligned with the path in the data file.
- Use 1600px wide images for large visuals.
- Keep each image under roughly 500 KB when practical.
- Keep local videos short and compressed. Put full-resolution originals in `media-source/originals/` instead of `public/`.

## Deploy

### Cloudflare Pages

Cloudflare Pages has a 25 MiB single-file asset limit. The current local Einstein Vision report is the actual report file and is slightly above that limit, so either compress/replace that one PDF before using Cloudflare Pages or deploy the site to Vercel as-is.

Prepare the repo:

```bash
cd /Users/pippo/Desktop/website/fmarcantoni-portfolio
npm run media:check
npm run build
git init
git add .
git commit -m "Build Filippo Marcantoni portfolio"
```

Create a GitHub repository, then push:

```bash
git remote add origin https://github.com/YOUR_USERNAME/fmarcantoni-portfolio.git
git branch -M main
git push -u origin main
```

In Cloudflare Pages:

1. Open Cloudflare Dashboard.
2. Go to Workers & Pages.
3. Choose Create application.
4. Choose Pages.
5. Connect the GitHub repository.
6. Set Framework preset to `Astro`.
7. Set Build command to `npm run build`.
8. Set Build output directory to `dist`.
9. Deploy.

### Vercel

Using the same GitHub repository is preferred for this media-heavy static site:

1. Open Vercel.
2. Choose Add New Project.
3. Import `fmarcantoni-portfolio`.
4. Keep Framework preset as `Astro`.
5. Set Build command to `npm run build`.
6. Set Output directory to `dist`.
7. Deploy.
