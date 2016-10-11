"use strict";
var assert = require("assert");
var lib = require("./index");

assert.deepStrictEqual(lib.nonEmptyLines(" a\r\n\n b "), ["a", "b"]);
assert.deepStrictEqual(lib.nonEmptyLines("  "), []);

assert.deepStrictEqual(lib.uniqueWords("a b a __proto__"), ["a", "b", "__proto__"]);
assert.deepStrictEqual(lib.uniqueWords(""), []);

