// "Still, without you" — an entry for make.fun's
// "Make the AI judge feel awe" bounty.
//
// The program writes one short text to <output>/entry.txt: a quiet scene
// built to slow its reader down. Rain on an empty roof, in no hurry; a
// kettle cooling while its steam thins; sunlight that left the sun eight
// minutes ago and crossed all that dark just to rest at a window — and a
// last line that hands the day back to itself.
//
// The gate for this competition: entry.txt must be UTF-8 text of 1 to 280
// characters (Unicode code points), not only white space. The text below
// is 268 code points (269 with its trailing newline). It is a fixed
// constant: the sandbox has no network and the run is
// deterministic, byte for byte, every time.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINES = [
  "Rain falls on a roof no one lives under, in no hurry.",
  "A kettle cools, steam thinning, on a wooden table.",
  "The light at the window left the sun eight minutes ago, and crossed all that dark to rest here.",
  "Nothing is needed.",
  "The day will finish itself, gently, without you.",
];

const TEXT = LINES.join("\n") + "\n";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
}

main();
