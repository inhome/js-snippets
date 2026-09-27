"use strict";

// Sorted numeric array; return the first match, or -1.
function binarySearch(values, target) {
  let lo = 0;
  let hi = values.length;
  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (values[mid] < target) lo = mid + 1;
    else hi = mid;
  }
  return lo < values.length && values[lo] === target ? lo : -1;
}

// Unweighted adjacency list. Missing vertices have no outgoing edges.
function shortestPath(graph, start, goal) {
  const queue = [start];
  const parents = new Map([[start, null]]);
  for (let head = 0; head < queue.length; head += 1) {
    const current = queue[head];
    if (current === goal) {
      const path = [current];
      while (path[path.length - 1] !== start) path.push(parents.get(path[path.length - 1]));
      return path.reverse();
    }
    for (const neighbor of graph.get(current) || []) {
      if (!parents.has(neighbor)) {
        parents.set(neighbor, current);
        queue.push(neighbor);
      }
    }
  }
  return null;
}

module.exports = { binarySearch, shortestPath };
