// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'enqueue' and 'dequeue'.
// --- Examples
//     const q = new Queue();
//     q.enqueue(1);
//     q.dequeue(); // returns 1;

class Queue {
  constructor () {
    this.array = [];
  }

  enqueue (elem) {
    this.array.unshift(elem);
  }

  dequeue () {
    return this.array.pop();
  }
}

module.exports = Queue;
