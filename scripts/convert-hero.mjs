import sharp from "sharp";
import { readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const SRC = path.resolve("images");
const OUT = path.resolve("public/images");
const TARGET = 200 * 1024; // ~200 KB
const MAX_W = 1600;

const files = (await readdir(SRC)).filter((f) => /\.(png|jpe?g|webp)$/i.test(f)).sort();

let idx = 0;
for (const f of files) {
  idx++;
  const inPath = path.join(SRC, f);
  const outPath = path.join(OUT, `hero-${idx}.webp`);

  const base = sharp(inPath).rotate().resize({ width: MAX_W, withoutEnlargement: true });

  // Binary-search quality to land near the target size.
  let lo = 30, hi = 90, best = null, bestQ = 30;
  for (let i = 0; i < 7; i++) {
    const q = Math.round((lo + hi) / 2);
    const buf = await base.clone().webp({ quality: q, effort: 6 }).toBuffer();
    if (buf.length <= TARGET) { best = buf; bestQ = q; lo = q + 1; }
    else { hi = q - 1; }
  }
  if (!best) { // even q=30 too big -> take smallest we can
    best = await base.clone().webp({ quality: 30, effort: 6 }).toBuffer();
    bestQ = 30;
  }
  await writeFile(outPath, best);
  const { size } = await stat(outPath);
  console.log(`hero-${idx}.webp  <= ${f}  q=${bestQ}  ${(size / 1024).toFixed(0)} KB`);
}
console.log("done");
