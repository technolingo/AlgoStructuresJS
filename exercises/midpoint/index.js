// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// * Do not use a counter variable,
// * do not retrieve the size of the list,
// * and only iterate through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

const midpoint = list => {
  // if (!list.head) {
  //   return null;
  // } else if (!list.head.next || !list.head.next.next) {
  //   // when the list has 1 or 2 elements
  //   return list.head;
  // }
  // // when the list has more than 2 elements
  // let slow = list.head;
  // let fast = list.head;
  // for (let node of list) {
  //   slow = node;
  //   fast = fast.next.next;
  //   if (!fast.next || !fast.next.next) {
  //     return slow.next;
  //   }
  // }
  if (!list.getFirst()) {
    return null;
  }
  let slow = list.getFirst();
  let fast = list.getFirst();
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

module.exports = midpoint;
