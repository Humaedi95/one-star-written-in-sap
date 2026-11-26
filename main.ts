// One Star, Written in Sap — a houseplant's one-star review of its human owner.
import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW =
  "One star. He waters me like a guilty apology, shoves me into a sunless corner for the aesthetic, then tells guests I'm 'low-maintenance' while I photosynthesize in the dark.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, REVIEW, "utf8");
console.log(REVIEW);
console.log(`chars: ${REVIEW.length}`);
