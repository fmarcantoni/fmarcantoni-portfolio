#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const filesToScan = [
  "src/data/experience.ts",
  "src/data/research.ts",
  "src/data/projects.ts",
  "src/data/portfolioMedia.ts",
  "src/data/localMedia.ts"
];

const localAssetPattern = /["'](\/(?:images|videos|resume|reports)\/[^"']+)["']/g;
const missing = [];
const invalid = [];
const found = [];

for (const file of filesToScan) {
  const fullPath = path.join(root, file);
  if (!fs.existsSync(fullPath)) continue;
  const source = fs.readFileSync(fullPath, "utf8");
  for (const match of source.matchAll(localAssetPattern)) {
    const asset = match[1];
    const diskPath = path.join(root, "public", asset.slice(1));
    const entry = { file, asset };
    if (fs.existsSync(diskPath)) {
      const buffer = fs.readFileSync(diskPath);
      const sample = buffer.subarray(0, 128).toString("utf8").trim();
      const isForbiddenPayload = sample === "Forbidden" || sample === "Not Found";
      const isImage = asset.startsWith("/images/");
      const isSvg = buffer.subarray(0, 256).toString("utf8").includes("<svg");
      const isPng = buffer.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]));
      const isJpeg = buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff;
      const isGif = buffer.subarray(0, 3).toString("ascii") === "GIF";
      const isWebp = buffer.subarray(0, 4).toString("ascii") === "RIFF" && buffer.subarray(8, 12).toString("ascii") === "WEBP";

      if (buffer.length === 0 || isForbiddenPayload || (isImage && !(isSvg || isPng || isJpeg || isGif || isWebp))) {
        invalid.push(entry);
      }
      found.push(entry);
    } else {
      missing.push(entry);
    }
  }
}

const snapshotCandidates = [
  "/images/profile/filippo-marcantoni.jpg",
  "/images/profile/filippo-marcantoni.png",
  "/images/profile/filippo-marcantoni.webp"
];

const hasSnapshot = snapshotCandidates.some((asset) =>
  fs.existsSync(path.join(root, "public", asset.slice(1)))
);

console.log(`Local media found: ${found.length}`);

if (!hasSnapshot) {
  console.log("\nOptional home snapshot not found. Add one of:");
  for (const asset of snapshotCandidates) console.log(`  ${asset}`);
}

if (missing.length === 0 && invalid.length === 0) {
  console.log("\nAll referenced local media files exist.");
  process.exit(0);
}

if (missing.length > 0) {
  console.log("\nMissing referenced local media:");
  for (const item of missing) {
    console.log(`  ${item.asset}  (${item.file})`);
  }
}

if (invalid.length > 0) {
  console.log("\nInvalid referenced local media:");
  for (const item of invalid) {
    console.log(`  ${item.asset}  (${item.file})`);
  }
}

process.exit(1);
