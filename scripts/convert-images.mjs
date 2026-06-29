import sharp from "sharp";
import { readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const SRC = path.resolve("images");
const OUT = path.resolve("public/images");
const TARGET = 200 * 1024; // ~200 KB
const MAX_W = 1600;

// Explicit source -> output mapping so slide order is deterministic.
const MAP = [
  ["WhatsApp Image 2026-06-25 at 23.53.40.jpeg", "hero-1.webp"],        // Radharani in flowers (pair)
  ["WhatsApp Image 2026-06-29 at 19.38.04.jpeg", "hero-2.webp"],        // Krishna with flute (pair)
  ["WhatsApp Image 2026-06-29 at 19.24.27.jpeg", "hero-3.webp"],        // Radha-Krishna amid marigolds
  ["WhatsApp Image 2026-06-29 at 19.24.18.jpeg", "hero-4.webp"],        // Radharani close-up
  ["WhatsApp Image 2026-06-29 at 19.24.18 (1).jpeg", "hero-5.webp"],    // Deity close-up
  ["WhatsApp Image 2026-06-25 at 23.53.48.jpeg", "hero-6.webp"],        // acharya murti (cropped)
  ["WhatsApp Image 2026-06-29 at 19.20.28.jpeg", "narayana-gosvami.webp"], // Narayana Gosvami Maharaja (blog)
];

const present = new Set(await readdir(SRC));

for (const [srcName, outName] of MAP) {
  if (!present.has(srcName)) {
    console.warn(`SKIP (missing): ${srcName}`);
    continue;
  }
  const inPath = path.join(SRC, srcName);
  const outPath = path.join(OUT, outName);
  const base = sharp(inPath).rotate().resize({ width: MAX_W, withoutEnlargement: true });

  // Binary-search quality to land near the target size.
  let lo = 30, hi = 92, best = null, bestQ = 30;
  for (let i = 0; i < 7; i++) {
    const q = Math.round((lo + hi) / 2);
    const buf = await base.clone().webp({ quality: q, effort: 6 }).toBuffer();
    if (buf.length <= TARGET) { best = buf; bestQ = q; lo = q + 1; }
    else { hi = q - 1; }
  }
  if (!best) {
    best = await base.clone().webp({ quality: 30, effort: 6 }).toBuffer();
    bestQ = 30;
  }
  await writeFile(outPath, best);
  const { size } = await stat(outPath);
  console.log(`${outName}  <= ${srcName}  q=${bestQ}  ${(size / 1024).toFixed(0)} KB`);
}
console.log("done");
