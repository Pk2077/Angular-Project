const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "dist", "project");
const target = path.join(outDir, ".nojekyll");

try {
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(target, "");
  console.log(".nojekyll file created at", target);
} catch (err) {
  console.error("Failed to create .nojekyll", err);
  process.exit(1);
}
