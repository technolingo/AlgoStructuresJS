// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor (data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor (head = null) {
    this.head = head;
  }

  insertFirst (data) {
    this.insertAt(data, 0);
  }

  size () {
    let quantity = 0;
    let node = this.head;
    while (node) {
      quantity++;
      node = node.next;
    }
    return quantity;
  }

  getFirst () {
    return this.getAt(0);
  }

  getLast () {
    let last = null;
    let node = this.head;
    while (node) {
      last = node;
      node = node.next;
    }
    return last;
  }

  clear () {
    this.head = null;
  }

  removeFirst () {
    this.removeAt(0);
  }

  removeLast () {
    let node = this.head;
    if (!node || !node.next) {
      this.head = null;
      return;
    }
    while (node) {
      if (!node.next.next) {
        node.next = null;
      }
      node = node.next;
    }
  }

  insertLast (data) {
    // let node = this.head;
    const newNode = new Node(data);
    // if (!node) {
    //   this.head = newNode;
    // }
    // while (node) {
    //   if (!node.next) {
    //     node.next = newNode;
    //     return;
    //   }
    //   node = node.next;
    // }
    let last = this.getLast();
    if (!last) {
      this.head = newNode;
    } else {
      last.next = newNode;
    }
  }

  getAt (index) {
    if (index < 0 || !this.head) {
      return null;
    }

    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null; // out of the upper bound
  }

  removeAt (index) {
    if (index < 0 || !this.head) {
    } else if (index === 0) {
      this.head = this.head.next;
    } else {
      // let counter = 0;
      // let node = this.head;
      // while (node) {
      //   if (counter + 1 === index) {
      //     const target = node.next;
      //     if (target) {
      //       node.next = target.next;
      //     }
      //     return;
      //   }
      //   counter++;
      //   node = node.next;
      // }
      const prevNode = this.getAt(index - 1);
      if (prevNode) {
        prevNode.next = prevNode.next ? prevNode.next.next : null;
      }
    }
  }

  insertAt (data, index) {
    const target = new Node(data);
    if (index < 0) {
    } else if (index === 0) {
      target.next = this.head;
      this.head = target;
    } else {
      const prevNode = this.getAt(index - 1);
      if (prevNode) {
        const nextNode = prevNode.next;
        prevNode.next = target;
        target.next = nextNode;
      } else {
        this.insertLast(data); // out of the upper bound
      }
    }
  }

  forEach (fn) {
    let node = this.head;
    while (node) {
      fn(node);
      node = node.next;
    }
  }

  * [Symbol.iterator] () {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

// LinkedList.prototype[Symbol.iterator] = function * () {
//   let node = this.head;
//   while (node) {
//     yield node;
//     node = node.next;
//   }
// };

module.exports = { Node, LinkedList };
