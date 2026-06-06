import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const sourcePath = path.join(root, "public", "campaign", "tombra-portrait.jpg");
const outputPath = path.join(root, "public", "og-image.png");
const draftSize = { width: 2400, height: 1260 };
const finalSize = { width: 1200, height: 630 };

const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const portraitBuffer = await fs.readFile(sourcePath);
const portraitMetadata = await sharp(portraitBuffer).metadata();
const portraitDataUrl = `data:image/jpeg;base64,${portraitBuffer.toString("base64")}`;

const svg = `
<svg width="${draftSize.width}" height="${draftSize.height}" viewBox="0 0 ${draftSize.width} ${draftSize.height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="portraitClip">
      <rect x="1238" y="218" width="1124" height="792" rx="46" ry="46"/>
    </clipPath>
    <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="20" stdDeviation="24" flood-color="#000000" flood-opacity="0.35"/>
    </filter>
    <filter id="textShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="8" dy="8" stdDeviation="3" flood-color="#000000" flood-opacity="0.35"/>
    </filter>
  </defs>

  <rect width="2400" height="1260" fill="#063f2a"/>
  <polygon points="0,0 960,0 780,1260 0,1260" fill="#083820"/>
  <polygon points="880,0 1220,0 1060,1260 720,1260" fill="#0a5a39"/>
  <polygon points="0,980 1160,850 2400,1000 2400,1260 0,1260" fill="#052f22"/>
  <rect x="0" y="0" width="30" height="1260" fill="#f7ce4f"/>

  <rect x="1238" y="218" width="1124" height="792" rx="46" fill="#082b1f" filter="url(#softShadow)"/>
  <image href="${portraitDataUrl}" x="1238" y="218" width="1124" height="792" preserveAspectRatio="xMidYMid slice" clip-path="url(#portraitClip)"/>
  <rect x="1230" y="210" width="1140" height="808" rx="56" fill="none" stroke="#f7ce4f" stroke-width="12"/>

  <rect x="136" y="150" width="356" height="18" rx="9" fill="#f7ce4f"/>
  <g filter="url(#textShadow)" font-family="Arial, Helvetica, sans-serif" font-weight="800">
    <text x="136" y="305" font-size="66" fill="#f7ce4f" letter-spacing="2">TOMBRA 2027</text>
    <text x="136" y="570" font-size="168" fill="#ffffff">Tombra</text>
    <text x="136" y="735" font-size="168" fill="#ffffff">Mohammed</text>
    <text x="144" y="850" font-size="72" fill="#ffffff">A Stronger Voice for</text>
    <text x="144" y="995" font-size="102" fill="#f7ce4f">Bayelsa West</text>
  </g>

  <rect x="136" y="1068" width="820" height="108" rx="54" fill="#ffffff"/>
  <text x="214" y="1138" font-family="Arial, Helvetica, sans-serif" font-size="42" font-weight="800" fill="#07543a">Jobs • Representation • Grassroots</text>
</svg>`;

const draftBuffer = await sharp(Buffer.from(svg)).png().toBuffer();

await sharp(draftBuffer)
  .resize(finalSize.width, finalSize.height, {
    kernel: sharp.kernel.lanczos3,
  })
  .png({
    compressionLevel: 6,
    adaptiveFiltering: true,
  })
  .toFile(outputPath);

const outputMetadata = await sharp(outputPath).metadata();
const outputStats = await fs.stat(outputPath);

console.log(
  `Source: ${escapeHtml(path.relative(root, sourcePath))} (${portraitMetadata.width}x${portraitMetadata.height})`,
);
console.log(`Draft: ${draftSize.width}x${draftSize.height}`);
console.log(`Output: ${escapeHtml(path.relative(root, outputPath))} (${outputMetadata.width}x${outputMetadata.height})`);
console.log(`Size: ${outputStats.size.toLocaleString()} bytes`);
