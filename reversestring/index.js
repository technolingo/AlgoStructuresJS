// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   //return str.split('').reverse().join('');
//   let reversed = '';
//   for (let c of str) {
//     reversed = c + reversed;
//   }
//   return reversed;
// }
//

const reverse = str => (
  str.split('').reduce((acc, val) => (
    val + acc
  ), '')
);

module.exports = reverse;
