// --- Directions
// Given a linked list, return the n-th element counting from the tail.
// * Do not call the 'size' method of the linked list.
// Assume that n is less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

const fromLast = (list, n) => {
  const chain = '.next'.repeat(n + 1);
  const expString = '!node' + chain + ';';
  let node = list.getFirst();
  while (node) {
    if (eval(expString)) {
      return node;
    }
    node = node.next;
  }
};

module.exports = fromLast;
