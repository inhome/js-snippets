"use strict";

// Only () [] {} participate; ordinary characters are ignored.
// This is a bracket exercise, not a JavaScript parser (quotes are not special).
function balancedBrackets(text) {
  const stack = [];
  const pairs = new Map([[")", "("], ["]", "["], ["}", "{"]]);
  for (const char of text) {
    if ("([{".includes(char)) stack.push(char);
    else if (pairs.has(char) && stack.pop() !== pairs.get(char)) return false;
  }
  return stack.length === 0;
}

// Sliding window over Unicode code points, not grapheme clusters.
function longestUniqueSubstring(text) {
  const characters = Array.from(text);
  const lastSeen = new Map();
  let start = 0;
  let best = 0;
  for (let end = 0; end < characters.length; end += 1) {
    const previous = lastSeen.get(characters[end]);
    if (previous !== undefined) start = Math.max(start, previous + 1);
    lastSeen.set(characters[end], end);
    best = Math.max(best, end - start + 1);
  }
  return best;
}

module.exports = { balancedBrackets, longestUniqueSubstring };
