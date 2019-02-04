// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar (str) {
//   var charMap = {};
//   var maxChar = '';
//   var maxCount = 0;
//
//   for (let char of str) {
//     if (char in charMap) {
//       charMap[char] += 1;
//     } else {
//       charMap[char] = 1;
//     }
//   }
//
//   for (let char in charMap) {
//     if (charMap[char] > maxCount) {
//       maxChar = char;
//       maxCount = charMap[char];
//     }
//   }
//
//   return maxChar;
// }

const maxChar = str => {
  const charMap = {};
  let maxChar = '';
  let maxCount = 0;

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  for (let char in charMap) {
    if (charMap[char] > maxCount) {
      maxChar = char;
      maxCount = charMap[char];
    }
  }

  return maxChar;
};

module.exports = maxChar;
