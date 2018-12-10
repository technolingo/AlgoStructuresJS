// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams (stringA, stringB) {
  const first = stringA.replace(/[^a-z]/gi, '').toLowerCase().split('').sort().join('');
  const second = stringB.replace(/[^a-z]/gi, '').toLowerCase().split('').sort().join('');
  return first === second;
}

// const charMap = string => {
//   const obj = {};
//   const strippedString = string.replace(/[^a-z]/gi, '').toLowerCase();
//   for (let char of strippedString) {
//     obj[char] = obj[char] + 1 || 1;
//   }
//   return obj;
// };
//
// const anagrams = (stringA, stringB) => {
//   const charMapA = charMap(stringA);
//   const charMapB = charMap(stringB);
//
//   if (Object.keys(charMapA).sort().join('') !== Object.keys(charMapB).sort().join('')) {
//     return false;
//   }
//
//   for (let char in charMapA) {
//     if (charMapA[char] !== charMapB[char]) {
//       return false;
//     }
//   }
//
//   return true;
// };

module.exports = anagrams;
