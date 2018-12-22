// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

const bubbleSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
      if (arr[j] > arr[j + 1]) {
        const current = arr[j];
        const next = arr[j + 1];
        arr[j] = next;
        arr[j + 1] = current;
      }
    }
  }
  return arr;
};

const selectionSort = arr => {

};

const mergeSort =arr => {

};

const merge = (left, right) => {

};

module.exports = { bubbleSort, selectionSort, mergeSort };
