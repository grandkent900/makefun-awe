// "Still, without you" — an entry for make.fun's
// "Make the AI judge feel awe" bounty.
//
// main.ts writes a single short text to <output>/entry.txt. The text is
// one quiet scene in five lines: rain finding an empty roof, a kettle
// cooling while its steam thins, and light that left the sun eight
// minutes ago and crossed all that dark to rest here. Nothing in it tells
// the reader what to do; the slowness is in the lines themselves, and the
// last line lets the day finish on its own.
//
// The gate: entry.txt must be UTF-8, 1 to 280 Unicode code points, and
// more than whitespace. This text is 256 code points (257 with its
// trailing newline). It is a fixed constant — no network, no
// randomness — so every run writes the same bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINES = [
  "Rain is finding an empty roof, in no hurry.",
  "A kettle cools on the table, steam thinning.",
  "The light left the sun eight minutes ago and crossed all that dark to rest here.",
  "Nothing is asked of you.",
  "The day will finish itself, gently, whether or not you watch.",
];

const TEXT = LINES.join("\n") + "\n";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
}

main();
