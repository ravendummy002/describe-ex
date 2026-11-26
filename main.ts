// Describe Your Ex in One Word — one word describing an ex.
// make.fun entry for
// u-puan-describe-your-ex-in-one-word-9fc6ebe7.
// Writes the word, one line, to /output/entry.txt.
//
// The word is "unpaid-internship": the ex was an unpaid
// internship — the author worked for free, learned nothing
// useful, and left with no reference letter. The hyphenated
// word is unusual, which dodges the one-word duplicate trap
// (a plain common word would be submitted by many accounts).

import * as fs from "node:fs";

const word = "unpaid-internship-with-no-reference";

const LIMIT = 111;

if (word.length < 1 || word.length > LIMIT) {
  throw new Error(`word must be 1-${LIMIT} characters; got ${word.length}`);
}
if (word.includes("\n") || word.trim().length === 0 || word.split(" ").length !== 1) {
  throw new Error("word must be a single non-blank word on one line");
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", word, "utf8");
console.log(`wrote /output/entry.txt (${word.length} characters)`);
console.log(word);
