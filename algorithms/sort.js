"use strict";

// Stable sort. Return a new array, leaving the input untouched.
function mergeSort(values, compare = (a, b) => a - b) {
  if (values.length < 2) return values.slice();
  const mid = Math.floor(values.length / 2);
  const left = mergeSort(values.slice(0, mid), compare);
  const right = mergeSort(values.slice(mid), compare);
  const merged = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (compare(left[i], right[j]) <= 0) merged.push(left[i++]);
    else merged.push(right[j++]);
  }
  return merged.concat(left.slice(i), right.slice(j));
}

module.exports = { mergeSort };
