// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

const circular = list => {
  if (!list.getFirst() || !list.getFirst().next || !list.getFirst().next.next) {
    // empty, one, or two elements
    return false;
  }
  let slow = list.getFirst();
  let fast = list.getFirst();
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      // if the linked list is circular, eventually the two pointers will
      // point to the same node regardless whether the length is odd or even
      return true;
    }
  }
  return false;
};

module.exports = circular;
