# Media Workflow

This portfolio is designed to work without Wix. All production media should live in `public/` and be referenced with local paths such as `/images/...`, `/videos/...`, `/reports/...`, or `/resume/...`.

## Current Media Locations

- Home headshot: `public/images/profile/filippo-marcantoni.png`
- Project covers and plots: `public/images/projects/`
- Research covers and diagrams: `public/images/research/`
- Work-experience photos and logos: `public/images/experience/`
- Project videos: `public/videos/projects/`
- Research videos: `public/videos/research/`
- Project reports: `public/reports/projects/`
- Research reports: `public/reports/research/`
- Full-resolution source videos not deployed: `media-source/originals/`

Hand-curated gallery media is registered in `src/data/localMedia.ts`. Core page content, covers, reports, and links are registered in:

- `src/data/projects.ts`
- `src/data/research.ts`
- `src/data/experience.ts`

## Verify Media

Run this before deployment:

```bash
cd /Users/pippo/Desktop/website/fmarcantoni-portfolio
npm run media:check
npm run build
```

## Add Or Replace The Home Headshot

```bash
cd /Users/pippo/Desktop/website/fmarcantoni-portfolio
mkdir -p public/images/profile
cp /Users/pippo/Desktop/headshot.png public/images/profile/filippo-marcantoni.png
npm run build
```

The hero automatically checks these paths, in this order:

- `public/images/profile/filippo-marcantoni.jpg`
- `public/images/profile/filippo-marcantoni.png`
- `public/images/profile/filippo-marcantoni.webp`

## Add A Project Cover

1. Copy the image into `public/images/projects/`.
2. Update the matching `image` field in `src/data/projects.ts`.
3. Run the media check and build.

Example:

```bash
cd /Users/pippo/Desktop/website/fmarcantoni-portfolio
cp ~/Downloads/my-project-cover.png public/images/projects/my-project-cover.png
npm run media:check
npm run build
```

Then set:

```ts
image: "/images/projects/my-project-cover.png",
```

## Add A Project Video

Keep deployed videos reasonably short and web-compressed. For a full-resolution source video, store the original in `media-source/originals/`, then create a deployable preview in `public/videos/projects/`.

```bash
cd /Users/pippo/Desktop/website/fmarcantoni-portfolio
mkdir -p media-source/originals public/videos/projects public/images/projects
cp ~/Downloads/full-demo.mp4 media-source/originals/full-demo.mp4
ffmpeg -i media-source/originals/full-demo.mp4 -t 90 -vf scale=1280:-2,fps=24 -c:v libx264 -preset veryfast -crf 30 -movflags +faststart -an public/videos/projects/my-project-demo.mp4
ffmpeg -ss 00:00:03 -i public/videos/projects/my-project-demo.mp4 -frames:v 1 -q:v 3 public/images/projects/my-project-demo-poster.jpg
npm run media:check
npm run build
```

Then add either a primary video in `src/data/projects.ts`:

```ts
video: "/videos/projects/my-project-demo.mp4",
```

or a gallery item in `src/data/localMedia.ts`:

```ts
"my-project-slug": [
  {
    type: "video",
    src: "/videos/projects/my-project-demo.mp4",
    title: "Project Demo",
    description: "Short local demo clip.",
    poster: "/images/projects/my-project-demo-poster.jpg"
  }
]
```

## Add Images Or Videos From A Local Repo

Copy outputs directly from the repo into `public/`. For example:

```bash
cd /Users/pippo/Desktop/website/fmarcantoni-portfolio
cp /path/to/repo/output/plot.png public/images/projects/my-project-plot.png
cp /path/to/repo/output/demo.mp4 public/videos/projects/my-project-demo.mp4
npm run media:check
npm run build
```

Then register the plot or video in `src/data/localMedia.ts`.

## Add Work-Experience Photos

Copy company photos, logos, or non-confidential internship photos into `public/images/experience/`.

```bash
cd /Users/pippo/Desktop/website/fmarcantoni-portfolio
cp ~/Downloads/company-photo.jpg public/images/experience/company-photo.jpg
npm run media:check
npm run build
```

Use the file as a cover by updating `src/data/experience.ts`, or add it to the detail-page gallery in `src/data/localMedia.ts`.

## Add Reports

Project reports go in `public/reports/projects/`. Research reports go in `public/reports/research/`.

```bash
cd /Users/pippo/Desktop/website/fmarcantoni-portfolio
mkdir -p public/reports/projects public/reports/research
cp ~/Downloads/project-report.pdf public/reports/projects/project-report.pdf
npm run media:check
npm run build
```

Then add the local link in the matching data file:

```ts
links: [
  {
    label: "Technical Report",
    href: "/reports/projects/project-report.pdf"
  }
]
```

## Current Localized Media Pass

This pass added or corrected:

- Home hero headshot sizing and local headshot path.
- B&R work-experience cover and supporting company-site images.
- VIO cover from the trajectory comparison plot.
- Einstein Vision additional local visualization video.
- VR teleoperation local demo clip.
- Seats4u local demo clip and cover.
- Valid local covers for Active Neck, Exploring Flora, Seats4u, Robotic Pick-and-Place, Bench Press CAD, and Robotic Maze Escape.
- Expanded MaxCal results media, including coverage, information diffusion, hierarchical linear, hierarchical quadratic, validation, and frequency-analysis plots.
- Local reports under `public/reports/`, with replaced draft files preserved outside the deployed bundle.
- Added physical-robot solar panel replacement videos from the previous Wix portfolio.
- Oversized original reports are kept outside deployment in `media-source/originals/reports/`, which is ignored by git.
- The Einstein Vision report is the actual local report requested for the portfolio and is currently larger than Cloudflare Pages' 25 MiB single-file limit. Use Vercel as-is, or compress/host that one PDF separately before a Cloudflare Pages deployment.

## Deployment Checklist

```bash
cd /Users/pippo/Desktop/website/fmarcantoni-portfolio
npm install
npm run media:check
npm run build
npm run preview
```

If the preview looks good, push the project to GitHub and deploy to Cloudflare Pages or Vercel with:

- Framework: `Astro`
- Build command: `npm run build`
- Output directory: `dist`
