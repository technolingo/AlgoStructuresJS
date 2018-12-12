// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// patern analysis
//       '  #  '
//       ' ### '
//       '#####'
//      '#######'
//     '#########'
//    '###########'
// if we count from 1
// n: 1, 2, 3, 4, 5, 6, 7
// l: 1, 3, 5, 7, 9, 11, 13
// length is n * 2 - 1, always odd
// each side is n - i, centre is i * 2 - 1

const pyramid = n => {
  for (let i = 1; i <= n; i++) {
    const side = n - i;
    const centre = i * 2 - 1;
    console.log(' '.repeat(side) + '#'.repeat(centre) + ' '.repeat(side));
  }
};

// const pyramid = n => {
//   for (let row = 1; row <= n; row++) {
//     let layer = '';
//     for (let col = 1; col <= 2 * n - 1; col++) {
//       if (col <= n - row || col > (n - row) + (row * 2 - 1)) {
//         layer += ' ';
//       } else {
//         layer += '#';
//       }
//     }
//     console.log(layer);
//   }
// };

// const pyramid = (n, row = 1, layer = '') => {
//   if (row >= n + 1) {
//     return;
//   }
//
//   if (layer.length === n * 2 - 1) {
//     console.log(layer);
//     pyramid(n, row + 1);
//     return;
//   }
//
//   if (layer.length < n - row || layer.length >= (n - row) + (row * 2 - 1)) {
//     layer += ' ';
//   } else {
//     layer += '#';
//   }
//   pyramid(n, row, layer);
// };

module.exports = pyramid;
