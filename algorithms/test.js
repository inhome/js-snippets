"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { binarySearch, shortestPath } = require("./search");
const { mergeSort } = require("./sort");
const { balancedBrackets, longestUniqueSubstring } = require("./strings");

test("binary search handles empty arrays, duplicates and absent boundaries", () => {
  assert.equal(binarySearch([], 1), -1);
  assert.equal(binarySearch([1, 2, 2, 4], 2), 1);
  for (const target of [0, 3, 5]) assert.equal(binarySearch([1, 2, 4], target), -1);
  assert.equal(binarySearch([1, 2, 4], 4), 2);
});
test("merge sort is stable and does not mutate input", () => {
  const input = [{ n: 2, id: "a" }, { n: 1, id: "b" }, { n: 2, id: "c" }];
  assert.deepEqual(mergeSort(input, (a, b) => a.n - b.n).map(x => x.id), ["b", "a", "c"]);
  assert.deepEqual(input.map(x => x.id), ["a", "b", "c"]);
  assert.deepEqual(mergeSort([]), []);
  for (let length = 0; length < 80; length += 1) {
    const values = Array.from({ length }, (_, i) => ((i * 17 + length) % 23) - 11);
    assert.deepEqual(mergeSort(values), values.slice().sort((a, b) => a - b));
  }
});
test("BFS finds the shortest path and terminates on cycles", () => {
  const graph = new Map([["a", ["b", "c"]], ["b", ["a", "d"]], ["c", ["e"]], ["d", ["e"]]]);
  assert.deepEqual(shortestPath(graph, "a", "e"), ["a", "c", "e"]);
  assert.deepEqual(shortestPath(graph, "a", "a"), ["a"]);
  assert.equal(shortestPath(graph, "e", "a"), null);
});
test("bracket stack rejects crossing or unfinished pairs", () => {
  for (const text of ["", "a(b[c]{d})", "plain"]) assert.equal(balancedBrackets(text), true);
  for (const text of ["([)]", "(", ")(", "(()"]) assert.equal(balancedBrackets(text), false);
});
test("sliding window never moves its left boundary backwards", () => {
  for (const [text, expected] of [["", 0], ["abba", 2], ["abcabcbb", 3], ["bbbb", 1], ["😀a😀b", 3]]) {
    assert.equal(longestUniqueSubstring(text), expected);
  }
});
