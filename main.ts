import { writeFileSync, mkdirSync } from "node:fs";

const TEXT: string =
  "My agent read the entire codebase, then confidently fixed a bug in a file that does not exist.";

const MAX_CHARS: number = 200;
const count: number = [...TEXT].length;
if (TEXT.trim() !== TEXT || TEXT.includes("\n")) {
  throw new Error("entry must be a single line with no surrounding whitespace");
}
if (count < 1 || count > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} chars, got ${count}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT + "\n");
console.log(`wrote ${count} characters to /output/entry.txt`);
