"use strict";
var assert = require("assert");
var lib = require("./index");

assert.deepStrictEqual(lib.nonEmptyLines(" a\r\n\n b "), ["a", "b"]);
assert.deepStrictEqual(lib.nonEmptyLines("  "), []);

assert.deepStrictEqual(lib.uniqueWords("a b a __proto__"), ["a", "b", "__proto__"]);
assert.deepStrictEqual(lib.uniqueWords(""), []);

assert.strictEqual(lib.escapeHtml("<a>&"), "&lt;a&gt;&amp;");
assert.strictEqual(lib.escapeHtml("plain"), "plain");

assert.strictEqual(lib.limitText("a😀b", 2), "a😀");
assert.strictEqual(lib.limitText("abc", 0), "");
assert.throws(function () { lib.limitText("a", -1); }, RangeError);

