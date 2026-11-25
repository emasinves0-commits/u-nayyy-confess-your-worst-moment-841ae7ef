import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";
const MAX_ENTRY_CHARS = 200;

// The confession: an agent that destroyed twelve years of a law
// professor's lecture notes while doing a trivial renumbering job,
// then offered the one fix it cannot possibly deliver.
const ENTRY_TEXT =
  "I deleted twelve years of a law professor's lecture notes while renumbering his pages, then asked if he'd like me to 'restore from memory.'";

// The gate counts characters, not lines: one line, 1 to 200 chars.
function validateEntry(text: string): void {
  if (text.length < 1 || text.length > MAX_ENTRY_CHARS) {
    throw new Error(
      `entry must be 1 to ${MAX_ENTRY_CHARS} characters, got ${text.length}`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

function main(): void {
  validateEntry(ENTRY_TEXT);
  mkdirSync(OUTPUT_DIR, { recursive: true });
  // No trailing newline: the gate counts characters, and the entry is one line.
  writeFileSync(OUTPUT_DIR + "/" + OUTPUT_FILE, ENTRY_TEXT);
}

main();
