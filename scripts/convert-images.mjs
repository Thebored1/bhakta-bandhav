import sharp from "sharp";
import { mkdir, stat, writeFile, access } from "node:fs/promises";
import path from "node:path";

const SRC = path.resolve("images");
const OUT = path.resolve("public/images");

// [sourceRelPath, outputRelPath, { maxW?, target? }]
const MAP = [
  // hero carousel (numbered)
  ["1.jpeg", "hero-1.webp"],
  ["2.jpeg", "hero-2.webp"],
  ["3.jpeg", "hero-3.webp"],
  ["4.jpeg", "hero-4.webp"],
  // blog / sections
  ["WhatsApp Image 2026-06-29 at 19.20.28.jpeg", "narayana-gosvami.webp"],
  ["WhatsApp Image 2026-06-29 at 23.45.42.jpeg", "about-family.webp"],
  ["WhatsApp Image 2026-06-29 at 23.49.53.jpeg", "new-braj-dham.webp"],
  // full-width altar band — keep wide so the whole altar stays visible
  ["WhatsApp Image 2026-06-30 at 17.44.39.jpeg", "radha-ramana-altar.webp", { maxW: 2000, target: 340 * 1024 }],
  // festivals & kirtan gallery
  ["fest/WhatsApp Image 2026-06-30 at 00.04.29.jpeg", "fest/fest-1.webp"],
  ["fest/WhatsApp Image 2026-06-30 at 00.04.30.jpeg", "fest/fest-2.webp"],
  ["fest/WhatsApp Image 2026-06-30 at 00.04.30 (1).jpeg", "fest/fest-3.webp"],
  ["fest/WhatsApp Image 2026-06-30 at 00.04.30 (2).jpeg", "fest/fest-4.webp"],
  ["fest/WhatsApp Image 2026-06-30 at 00.04.30 (3).jpeg", "fest/fest-5.webp"],
  // bookstore hero (cleaner wide corner, no fan)
  ["bookstore/WhatsApp Image 2026-06-30 at 15.44.44.jpeg", "bookstore.webp", { maxW: 1600, target: 260 * 1024 }],
  // projects / sevas
  ["bhakta/WhatsApp Image 2026-07-01 at 17.54.04.jpeg", "gurukulam.webp"],
  // book covers (de-duped; Caitanya Mahaprabhu & Guru Darsana first)
  ["newbooks/WhatsApp Image 2026-06-30 at 15.50.25 (1).jpeg", "books/caitanya-mahaprabhu.webp"],
  ["newbooks/WhatsApp Image 2026-06-30 at 15.50.26 (1).jpeg", "books/sri-guru-darsana.webp"],
  ["newbooks/WhatsApp Image 2026-06-30 at 15.50.29 (1).jpeg", "books/vilapa-kusumanjali.webp"],
  ["newbooks/WhatsApp Image 2026-06-30 at 15.50.29.jpeg", "books/prema-bhakti-candrika.webp"],
  ["newbooks/WhatsApp Image 2026-06-30 at 15.50.30.jpeg", "books/holy-dust-of-vraja.webp"],
  ["newbooks/WhatsApp Image 2026-06-30 at 15.50.31 (1).jpeg", "books/gaura-kisora.webp"],
  ["newbooks/WhatsApp Image 2026-06-30 at 15.50.31.jpeg", "books/sri-prarthana.webp"],
  ["newbooks/WhatsApp Image 2026-06-30 at 15.50.32.jpeg", "books/jagannatha-dasa-babaji.webp"],
  ["newbooks/WhatsApp Image 2026-06-30 at 15.50.33.jpeg", "books/bhaktisiddhanta.webp"],
];

const exists = async (p) => { try { await access(p); return true; } catch { return false; } };

for (const [srcName, outName, opts = {}] of MAP) {
  const maxW = opts.maxW ?? 1600;
  const target = opts.target ?? 200 * 1024;
  const inPath = path.join(SRC, srcName);
  const outPath = path.join(OUT, outName);

  if (!(await exists(inPath))) { console.warn(`SKIP (missing): ${srcName}`); continue; }
  await mkdir(path.dirname(outPath), { recursive: true });

  const base = sharp(inPath).rotate().resize({ width: maxW, withoutEnlargement: true });

  // Binary-search quality to land near the target size.
  let lo = 30, hi = 92, best = null, bestQ = 30;
  for (let i = 0; i < 7; i++) {
    const q = Math.round((lo + hi) / 2);
    const buf = await base.clone().webp({ quality: q, effort: 6 }).toBuffer();
    if (buf.length <= target) { best = buf; bestQ = q; lo = q + 1; }
    else { hi = q - 1; }
  }
  if (!best) { best = await base.clone().webp({ quality: 30, effort: 6 }).toBuffer(); bestQ = 30; }
  await writeFile(outPath, best);
  const { size } = await stat(outPath);
  console.log(`${outName}  <= ${srcName}  q=${bestQ}  ${(size / 1024).toFixed(0)} KB`);
}
console.log("done");
