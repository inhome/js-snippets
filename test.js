"use strict";
var assert = require("assert");
var lib = require("./index");

assert.deepStrictEqual(lib.nonEmptyLines(" a\r\n\n b "), ["a", "b"]);
assert.deepStrictEqual(lib.nonEmptyLines("  "), []);

