// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk (array, size) {
//   var chunked = [];
//   for (let i of array) {
//     if (chunked.slice(-1)[0] == null || chunked.slice(-1)[0].length === size) {
//       chunked.push([i]);
//     } else {
//       chunked.slice(-1)[0].push(i);
//     }
//   }
//   return chunked;
// }

// const chunk = (array, size) => {
//   const chunked = [];
//   for (let i of array) {
//     const lastChunk = chunked[chunked.length - 1];
//     if (!lastChunk || lastChunk.length === size) {
//       chunked.push([i]);
//     } else {
//       lastChunk.push(i);
//     }
//   }
//   return chunked;
// };

const chunk = (array, size) => {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index = index + size;
  }
  return chunked;
};

module.exports = chunk;
