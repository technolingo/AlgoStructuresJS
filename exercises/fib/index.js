// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// // iterative solution
// const fib = n => {
//   const array = [0, 1, 1];
//   if (n > 2) {
//     for (let i = 3; i <= n; i++) {
//       const a = array[array.length - 1];
//       const b = array[array.length - 2];
//       array.push(a + b);
//     }
//   }
//   return array[n];
// };

// recersion w/ memoization
const fib = n => {
  const memo = {};

  if (n <= 0) {
    return 0;
  } else if (n <= 2) {
    return 1;
  } else if (memo[n] !== undefined) {
    return memo[n];
  } else {
    const result = fib(n - 1) + fib(n - 2);
    memo[n] = result;
    return result;
  }
};

module.exports = fib;
