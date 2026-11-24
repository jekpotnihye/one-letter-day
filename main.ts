// One Letter for Your Day — entry program.
// Hidden word behind the letter: chaos.
// The letter C is the whole entry, reaffirmed: C for chaos. It is written
// byte-for-byte, with no trailing newline, so /output/entry.txt holds
// exactly one character.
import { mkdirSync, writeFileSync } from "node:fs";

const LETTER = "C"; // C — chaos
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LETTER, "utf8");
