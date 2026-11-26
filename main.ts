// The Printer Finally Answers — make.fun bounty entry.
// Writes the printer's own comeback, one line, to /output/entry.txt.
//
// The comeback is built beat by beat, the way the joke lands:
//   1. the insult it answers (the paperweight line),
//   2. the work it already did (the 212-page deck before coffee),
//   3. the verdict it becomes (the error code itself).
import { mkdirSync, writeFileSync } from "node:fs";

const BEATS: string[] = [
  "You call me a paperweight with a cord, but I printed your 212-page deck at 6:58 a.m. before your coffee.",
  "The code is E-17.",
  "I am E-17.",
];

const LINE = BEATS.join(" ");

// The gate allows 1–240 characters; refuse to write anything outside it.
if (LINE.length < 1 || LINE.length > 240) {
  throw new Error(`entry line is ${LINE.length} characters, outside the 1-240 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
