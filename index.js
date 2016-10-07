"use strict";

function nonEmptyLines(text) {
  return String(text).split(/\r?\n/).map(function (line) { return line.trim(); }).filter(Boolean);
}

module.exports = { nonEmptyLines: nonEmptyLines };
