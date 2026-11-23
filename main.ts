// SPDX-License-Identifier: MIT
// One Emoji, One Smile — u-0xkianno-one-emoji-one-smile-5470751f
// Writes exactly one emoji, and nothing else, to /output/entry.txt.
// No trailing newline, no caption, no explanation: the file holds the
// emoji alone, so the gate sees UTF-8 text of 1 character.
//
// Candidate evaluation (warmth to a stranger at first glance, clarity
// at small size, universality, and freshness against the obvious
// default — judged against the published judge brief, most important
// criterion first):
//   1. 🙂 U+1F642 slightly smiling face — instantly readable and safe,
//      but it IS the default: flat, closed-mouth, and often read as
//      polite rather than warm. Fails "chosen rather than default".
//   2. 😊 U+1F60A smiling face with smiling eyes — genuinely warm,
//      universal, stranger-safe. The safe pick, and therefore the
//      pick most other entries will also make.
//   3. 🥰 U+1F970 smiling face with hearts — very warm, but the hearts
//      read as affection from a stranger: too intimate, fails the
//      "right for a stranger" criterion.
//   4. 🤗 U+1F917 hugging face — a hug gesture that plainly aims to
//      warm, but the arms blur at small size and a hug from a
//      stranger is more familiar than a smile is.
//   5. 🫶 U+1FAF6 heart hands — fresh and kind, but a newer gesture:
//      less instantly readable to strangers of every age, and it can
//      read as a fandom in-joke rather than a plain smile.
//
// Revision history:
//   v1: 😊 U+1F60A — the safe warm default, chosen for its smiling
//     eyes and universality.
//   v2 (revision 1): 😄 U+1F604, replacing 😊. Reasons: (a) 😊 is the
//     most predictable warm face, so it scores worst on the judge's
//     fourth criterion ("chosen rather than default") and is the
//     likeliest byte-identical duplicate in the field, where copies
//     share one rate behind the earlier receipt; (b) 😄 keeps the
//     smiling eyes but adds an open mouth — an actual laugh, more
//     likely to make a stranger smile than a serene closed smile,
//     while staying universal and stranger-safe with no intimacy;
//     (c) it is a deliberate refinement of the picker-first 😀
//     (open eyes, plain grin): the smiling eyes are what make the
//     warmth read as genuine rather than merely cheerful. 😀 was
//     considered and rejected on that last point.
//   v3 (revision 2): 😄 reaffirmed after testing it against 😁 U+1F601
//     and 😆 U+1F606. 😁 (beaming, teeth, squinted eyes) is joyful but
//     its toothy grin can read as cheeky or goofy rather than kind,
//     so it is less safe on universality and on warmth at first
//     glance. 😆 (squinting laugh) reads as laughing hard, even
//     laughing at something, which is louder and less gentle than
//     the brief's "kind, friendly or gently funny". 😄 sits between
//     them: open joy with smiling eyes, kind before it is funny,
//     and readable the same way by a stranger of any age. Final.

import { mkdirSync, writeFileSync } from "node:fs";

// U+1F604 SMILING FACE WITH OPEN MOUTH AND SMILING EYES — one code point.
const EMOJI = "😄";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");
