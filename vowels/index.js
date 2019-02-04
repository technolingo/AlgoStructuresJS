// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels: 'a', 'e', 'i', 'o', & 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// const vowels = str => {
//   const vowelArray = ['a', 'e', 'i', 'o', 'u'];
//   let count = 0;
//   for (let char of str.toLowerCase()) {
//     if (vowelArray.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// };

// const vowels = str => {
//   const vowelArray = ['a', 'e', 'i', 'o', 'u'];
//   return str.toLowerCase().split('').filter((c) => (
//     vowelArray.includes(c)
//   )).length;
// };

const vowels = str => (Array.from(str.match(/[aeiou]/gi) || []).length);

module.exports = vowels;
