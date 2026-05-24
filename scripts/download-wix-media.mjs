#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const cacheDir = path.join(root, ".wix-media-cache");
const baseUrl = "https://filippomarcantoni.wixsite.com/portfolio-fmarca29";
const collectionBase = `${baseUrl}/portfolio-collections/my-portfolio`;
const fresh = process.argv.includes("--fresh");

const slugMap = {
  "stl-to-fluoroscopy-image-registration-for-autonomous-navigation-in-vascular-interventions": {
    slug: "fluoroscopy-registration",
    section: "research",
    primaryImage: "/images/research/fluoroscopy-registration.png"
  },
  "quadrotor-controller-design-robot-control": {
    slug: "quadrotor-controller-design",
    section: "projects",
    primaryImage: "/images/projects/quadrotor-controller-design.jpg",
    primaryVideo: "/videos/projects/quadrotor-controller-design.mp4"
  },
  "comparing-inverse-kinematics-for-a-6-dof-manipulator-controlled-by-a-vr-headset": {
    slug: "vr-inverse-kinematics",
    section: "projects",
    primaryImage: "/images/projects/vr-inverse-kinematics.png"
  },
  "vr-multi-camera-control-with-voice-commands-and-autonomous-view-selection-for-robotic-nursing-assist": {
    slug: "vr-teleoperation-interface",
    section: "research",
    primaryImage: "/images/research/vr-teleoperation-interface.png"
  },
  "pielo-a-reactive-infrastructure-for-swarm-programming": {
    slug: "pielo-swarm-language",
    section: "research",
    primaryImage: "/images/research/pielo-swarm-language.png"
  },
  "iona-20": {
    slug: "active-neck-iona",
    section: "projects",
    primaryImage: "/images/projects/active-neck-iona.png"
  },
  "interactive-qualifying-project-exploring-flora-as-nature-based-solution-to-combat-beach-erosion": {
    slug: "beach-erosion-flora-iqp",
    section: "projects",
    primaryImage: "/images/projects/beach-erosion-flora-iqp.png"
  },
  "seats4u-software-engineering": {
    slug: "seats4u",
    section: "projects",
    primaryImage: "/images/projects/seats4u.png"
  },
  "square-push-ninjase-software-engineering": {
    slug: "square-push-ninjase",
    section: "projects",
    primaryImage: "/images/projects/square-push-ninjase.png"
  },
  "robotic-pick-and-place-system": {
    slug: "robotic-pick-and-place",
    section: "projects",
    primaryImage: "/images/projects/robotic-pick-and-place.png"
  },
  "bench-press-solidworks": {
    slug: "bench-press-solidworks",
    section: "projects",
    primaryImage: "/images/projects/bench-press-solidworks.png"
  },
  "maze-escaping": {
    slug: "robotic-maze-escape",
    section: "projects",
    primaryImage: "/images/projects/robotic-maze-escape.png"
  },
  "msp430-hero-embedded-systems": {
    slug: "msp430-hero",
    section: "projects",
    primaryImage: "/images/projects/msp430-hero.jpg"
  },
  "simon-game-embedded-systems": {
    slug: "simon-game",
    section: "projects",
    primaryImage: "/images/projects/simon-game.png"
  },
  "robotic-pizza-delivery": {
    slug: "robotic-pizza-delivery",
    section: "projects",
    primaryImage: "/images/projects/robotic-pizza-delivery.png"
  },
  "robotic-replacement-of-solar-collector-panels": {
    slug: "solar-collector-panel-replacement",
    section: "projects",
    primaryImage: "/images/projects/solar-collector-panel-replacement.png"
  }
};

fs.mkdirSync(cacheDir, { recursive: true });
for (const folder of [
  "public/images/projects",
  "public/images/research",
  "public/images/experience",
  "public/videos/projects",
  "public/videos/research"
]) {
  fs.mkdirSync(path.join(root, folder), { recursive: true });
}

const toFile = (publicPath) => path.join(root, "public", publicPath.replace(/^\//, ""));

const slugify = (value) =>
  (value || "media")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 52) || "media";

const extensionFrom = (value, fallback) => {
  const clean = decodeURIComponent(String(value || "")).split("?")[0].split("#")[0];
  const match = clean.match(/\.([a-z0-9]+)$/i);
  if (!match) return fallback;
  return match[1].toLowerCase() === "jpeg" ? "jpg" : match[1].toLowerCase();
};

const fetchToCache = (url, name) => {
  const out = path.join(cacheDir, name);
  if (!fresh && fs.existsSync(out)) return fs.readFileSync(out, "utf8");
  console.log(`Fetching ${url}`);
  execFileSync("curl", ["-L", "--fail", "--retry", "2", "-o", out, url], { stdio: "inherit" });
  return fs.readFileSync(out, "utf8");
};

const download = (url, publicPath) => {
  const out = toFile(publicPath);
  if (!fresh && fs.existsSync(out)) {
    console.log(`Keeping ${publicPath}`);
    return true;
  }
  fs.mkdirSync(path.dirname(out), { recursive: true });
  console.log(`Downloading ${publicPath}`);
  try {
    execFileSync("curl", ["-L", "--fail", "--retry", "2", "-o", out, url], { stdio: "inherit" });
    return true;
  } catch (error) {
    console.warn(`Skipping unavailable Wix asset: ${url}`);
    if (fs.existsSync(out)) fs.rmSync(out);
    return false;
  }
};

const scriptJson = (html, id) => {
  const match = html.match(new RegExp(`<script[^>]*id="${id}"[^>]*>([\\s\\S]*?)<\\/script>`));
  return match ? JSON.parse(match[1]) : undefined;
};

const findPortfolioApp = (warmup) =>
  Object.values(warmup?.appsWarmupData || {}).find((value) =>
    Array.isArray(value?.portfolioCollectionProjects)
  );

const walk = (value, visitor) => {
  if (!value || typeof value !== "object") return;
  visitor(value);
  if (Array.isArray(value)) {
    for (const item of value) walk(item, visitor);
    return;
  }
  for (const nested of Object.values(value)) walk(nested, visitor);
};

const parseQuery = (queryString = "") => {
  const clean = queryString.replace(/^#/, "");
  const params = new URLSearchParams(clean);
  return params;
};

const imageFromWixSrc = (src, fallbackTitle, description) => {
  const match = src?.match(/^wix:image:\/\/v1\/([^/]+)\/([^#]+)#?(.*)$/);
  if (!match) return undefined;
  const [, id, fileName, query] = match;
  const params = parseQuery(query);
  const width = params.get("originWidth") || "1600";
  const height = params.get("originHeight") || "1000";
  const decodedFile = decodeURIComponent(fileName);
  return {
    type: "image",
    key: decodedFile || id,
    sourceUrl: `https://static.wixstatic.com/media/${id}/v1/fill/w_${width},h_${height},al_c/${decodedFile || id}`,
    title: fallbackTitle || "Image",
    description,
    ext: extensionFrom(decodedFile || id, "png")
  };
};

const videoFromWixSrc = (src, fallbackTitle, description) => {
  const match = src?.match(/^wix:video:\/\/v1\/([^/]+)\/[^#]*#?(.*)$/);
  if (!match) return undefined;
  const [, token, query] = match;
  const params = parseQuery(query);
  const posterUri = params.get("posterUri");
  const posterWidth = params.get("posterWidth") || "1280";
  const posterHeight = params.get("posterHeight") || "720";
  return {
    type: "video",
    key: token,
    sourceUrl: `https://video.wixstatic.com/video/${token}/480p/mp4/file.mp4`,
    title: fallbackTitle || "Video",
    description,
    ext: "mp4",
    poster: posterUri
      ? {
          sourceUrl: `https://static.wixstatic.com/media/${posterUri}/v1/fill/w_${posterWidth},h_${posterHeight},al_c/${posterUri}`,
          ext: extensionFrom(posterUri, "jpg")
        }
      : undefined
  };
};

const assetFromCoverImage = (project) => {
  const imageInfo = project.coverImage?.imageInfo;
  if (!imageInfo?.url) return undefined;
  const filename = imageInfo.filename || imageInfo.id || project.slug;
  return {
    type: "image",
    key: filename,
    sourceUrl: imageInfo.url,
    title: imageInfo.altText || `${project.title} cover`,
    description: "Cover image from the previous Wix portfolio.",
    ext: extensionFrom(filename, "png"),
    primary: true
  };
};

const assetFromCoverVideo = (project) => {
  const videoInfo = project.coverVideo?.videoInfo;
  if (!videoInfo) return undefined;
  const token = videoInfo.filename || videoInfo.id;
  const poster = videoInfo.posters?.[0];
  return {
    type: "video",
    key: token,
    sourceUrl: `https://video.wixstatic.com/video/${token}/480p/mp4/file.mp4`,
    title: `${project.title} cover video`,
    description: "Cover video from the previous Wix portfolio.",
    ext: "mp4",
    poster: poster?.url
      ? {
          sourceUrl: poster.url,
          ext: extensionFrom(poster.filename || poster.id, "jpg")
        }
      : undefined,
    primary: true
  };
};

const collectDetailAssets = (html) => {
  const warmup = scriptJson(html, "wix-warmup-data");
  const assets = [];
  walk(warmup?.platform?.ssrPropsUpdates || [], (value) => {
    if (!Array.isArray(value.wixSDKItems)) return;
    for (const item of value.wixSDKItems) {
      if (item.type === "image") {
        const asset = imageFromWixSrc(item.src, item.title || item.alt, item.description);
        if (asset) assets.push(asset);
      }
      if (item.type === "video") {
        const asset = videoFromWixSrc(item.src, item.title, item.description);
        if (asset) assets.push(asset);
      }
    }
  });
  return assets;
};

const portfolioHtml = fetchToCache(`${baseUrl}/portfolio`, "portfolio.html");
const portfolioWarmup = scriptJson(portfolioHtml, "wix-warmup-data");
const app = findPortfolioApp(portfolioWarmup);

if (!app) {
  throw new Error("Could not find Wix portfolio project data.");
}

const manifest = {};

for (const row of app.portfolioCollectionProjects) {
  const project = row.project || row;
  const mapping = slugMap[project.slug];
  if (!mapping) {
    console.log(`Skipping unmapped Wix slug: ${project.slug}`);
    continue;
  }

  const detailHtml = fetchToCache(
    `${collectionBase}/${project.slug}`,
    `detail-${project.slug}.html`
  );

  const rawAssets = [
    assetFromCoverImage(project),
    assetFromCoverVideo(project),
    ...collectDetailAssets(detailHtml)
  ].filter(Boolean);

  const seen = new Set();
  let index = 0;
  for (const asset of rawAssets) {
    if (seen.has(asset.key)) continue;
    seen.add(asset.key);

    let publicPath;
    if (asset.primary && asset.type === "image" && mapping.primaryImage) {
      publicPath = mapping.primaryImage;
    } else if (asset.primary && asset.type === "video" && mapping.primaryVideo) {
      publicPath = mapping.primaryVideo;
    } else {
      index += 1;
      const safeTitle = slugify(asset.title);
      const mediaRoot = asset.type === "image" ? "images" : "videos";
      publicPath = `/${mediaRoot}/${mapping.section}/${mapping.slug}-${String(index).padStart(2, "0")}-${safeTitle}.${asset.ext}`;
    }

    const downloaded = download(asset.sourceUrl, publicPath);
    if (!downloaded) continue;

    let posterPath;
    if (asset.poster?.sourceUrl) {
      posterPath = `/${"images"}/${mapping.section}/${mapping.slug}-${String(index).padStart(2, "0")}-${slugify(asset.title)}-poster.${asset.poster.ext}`;
      const posterDownloaded = download(asset.poster.sourceUrl, posterPath);
      if (!posterDownloaded) posterPath = undefined;
    }

    if (publicPath !== mapping.primaryImage && publicPath !== mapping.primaryVideo) {
      manifest[mapping.slug] ||= [];
      manifest[mapping.slug].push({
        type: asset.type,
        src: publicPath,
        title: asset.title,
        ...(asset.description ? { description: asset.description } : {}),
        ...(posterPath ? { poster: posterPath } : {})
      });
    }
  }
}

const mediaFile = path.join(root, "src/data/portfolioMedia.ts");
const source =
  `export interface PortfolioMediaItem {\n` +
  `  type: "image" | "video";\n` +
  `  src: string;\n` +
  `  title: string;\n` +
  `  description?: string;\n` +
  `  poster?: string;\n` +
  `}\n\n` +
  `export const portfolioMediaBySlug: Record<string, PortfolioMediaItem[]> = ${JSON.stringify(manifest, null, 2)};\n`;

fs.writeFileSync(mediaFile, source);
console.log(`Wrote ${path.relative(root, mediaFile)}`);
console.log("Done. Run npm run build to verify the site.");
