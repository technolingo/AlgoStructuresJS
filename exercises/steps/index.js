// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

const steps = n => {
  for (let i = 1; i <= n; i++) {
    console.log('#' * i + ' ' * (n - i));
  }
};

// const steps = n => {
//   for (let row = 1; row <= n; row++) {
//     let stair = '';
//     for (let col = 1; col <= n; col++) {
//       if (col <= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }
//     console.log(stair);
//   }
// };

// const steps = (n, row = 0, stair = '') => {
//   if (row === n) {
//     return;
//   }
//
//   // recurse at the end of every row
//   if (stair.length === n) {
//     console.log(stair);
//     steps(n, row + 1); // only change row
//     return;
//   }
//
//   if (stair.length <= row) {
//     stair += '#';
//   } else {
//     stair += ' ';
//   }
//
//   // recurse through every row
//   steps(n, row, stair); // only change stair
// };

module.exports = steps;
