// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,  2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

const matrix = n => {
  const mat = [];
  for (let i = 0; i < n; i++) {
    mat.push([]);
  }

  let counter = 1;
  let startRow = 0;
  let endRow = n - 1;
  let startCol = 0;
  let endCol = n - 1;
  while (startRow <= endRow && startCol <= endCol) {
    // top current row
    for (let i = startCol; i <= endCol; i++) {
      mat[startRow][i] = counter;
      counter++;
    }
    startRow++;
    // rightmost col top-down
    for (let i = startRow; i <= endRow; i++) {
      mat[i][endCol] = counter;
      counter++;
    }
    endCol--;
    // bottom row right-left
    for (let i = endCol; i >= startCol; i--) {
      mat[endRow][i] = counter;
      counter++;
    }
    endRow--;
    // leftmost col down-top
    for (let i = endRow; i >= startRow; i--) {
      mat[i][startCol] = counter;
      counter++;
    }
    startCol++;
  }

  return mat;
};

module.exports = matrix;
