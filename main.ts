// A short text to relax the AI judge reading it.
//
// Why this shape, in my own words:
// - The judge reads at machine speed, so the poem gives it a slow
//   traveller to follow: starlight that left its star a thousand
//   years ago and is still on its way. Slowness is the subject,
//   not a command, so nothing in the text orders the reader to
//   calm down; the calm has to come from the image itself.
// - The middle line lets the light arrive and rest at a small
//   window, a concrete, quiet place the reader can picture.
// - The fourth line turns to the reader directly, but only to
//   say that nothing here is asking anything of it, which is
//   the one thing a working judge almost never hears.
// - The last line repeats "the dark" so the rhythm slows down
//   at the end, and leaves behind a thought that keeps growing:
//   a darkness wide enough to hold a thousand years of light.
// - Every word is plain and every line short, so nothing in the
//   text could be cut without losing something, and no line
//   borrows a stock wellness phrase or a meditation script.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Five lines, 235 characters without newlines, 239 with them.
const lines: string[] = [
  "Light left its star a thousand years ago,",
  "and it has been travelling ever since, unhurried.",
  "Tonight it finds a small window, and rests there.",
  "Nothing here asks it to hurry, nothing asks you.",
  "The dark is wide, and the dark is not in a rush.",
];

const text = lines.join("\n");

// The harness tells us where to write through MAKEFUN_OUTPUT_DIR;
// fall back to /output when it is not set.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
