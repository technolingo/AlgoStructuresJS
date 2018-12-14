// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the first element (the next
// one to be dequeued) from the queue *without*
// removing it.

class Queue {
  constructor () {
    this.data = [];
  }

  add (record) {
    this.data.unshift(record);
  }

  remove () {
    return this.data.pop();
  }

  peek () {
    // return the first element in the queue
    // (return the one to be dequeued next w/o actually dequeuing it)
    return this.data[this.data.length - 1];
  }
}

module.exports = Queue;
