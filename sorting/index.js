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
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }
    if (indexOfMin !== i) {
      const min = arr[indexOfMin];
      const current = arr[i];
      arr[i] = min;
      arr[indexOfMin] = current;
    }
  }
  return arr;
};

const merge = (left, right) => {
  const merged = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }

  return [...merged, ...left, ...right];
};

const mergeSort = arr => {
  if (arr.length <= 1) {
    return arr;
  }

  const centre = Math.floor(arr.length / 2);
  const left = arr.slice(0, centre);
  const right = arr.slice(centre);

  return merge(mergeSort(left), mergeSort(right));
};

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
