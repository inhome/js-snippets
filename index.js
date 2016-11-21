"use strict";

function nonEmptyLines(text) {
  return String(text).split(/\r?\n/).map(function (line) { return line.trim(); }).filter(Boolean);
}

function uniqueWords(text) {
  var seen = Object.create(null);
  return String(text).trim().split(/\s+/).filter(function (word) {
    if (!word || seen[word]) return false;
    seen[word] = true; return true;
  });
}

function escapeHtml(text) {
  var entities = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  return String(text).replace(/[&<>"']/g, function (character) { return entities[character]; });
}

function limitText(text, maximum) {
  if (maximum < 0 || maximum % 1 !== 0) throw new RangeError("Invalid maximum");
  return Array.from(String(text)).slice(0, maximum).join("");
}

module.exports = { nonEmptyLines: nonEmptyLines, uniqueWords: uniqueWords, escapeHtml: escapeHtml, limitText: limitText };
