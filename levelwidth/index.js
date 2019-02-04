// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]
const Node = require('./node');

const levelWidth = root => {
  const counters = [0];
  const nodes = [root, 'x']; // use 'x' to seperate each level

  while (nodes.length > 1) {
    const node = nodes.shift();
    if (node === 'x') {
      nodes.push('x');
      counters.push(0);
    } else {
      counters[counters.length - 1]++;
      nodes.push(...node.children);
    }
  }

  return counters;
};

module.exports = levelWidth;
