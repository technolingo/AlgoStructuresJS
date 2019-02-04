// --- Directions
// Given a root node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

const validate = (node, min = null, max = null) => {
  if (node !== null) {
    if (max !== null && node.data >= max) {
      return false;
    } else if (min !== null && node.data <= min) {
      return false;
    } else if (node.left !== null) {
      return validate(node.left, min, node.data);
    } else if (node.right !== null) {
      return validate(node.right, node.data, max);
    }
    return true;
  }
  return false;
};

module.exports = validate;
