/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s) {

//   // * Sliding Window --> Pointer Technique

//   let maxLength = 0;
//   let start = 0;
//   let end = 0;
//   let uniqueChar = new Set();
//   /**
//    * if s is undefined or it's length is 0, then return 0
//    * @return 0
//    */
//   if (!s) {
//     return 0;
//   }

//   while (end < s.length) {
//     debugger;
//     if (!uniqueChar.has(s[end])) {
//       uniqueChar.add(s[end]);
//       maxLength = Math.max(maxLength, uniqueChar.size);
//       end++;
//     } else {
//       uniqueChar.delete(s[start]);
//       start++;
//     }
//   }
//   console.log(uniqueChar);
//   return maxLength;
// };

var lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  let start = 0;
  let end = 0;
  let uniqueChar = new Set();
  let longestSubstringStart = 0;
  let longestSubstringEnd = 0;

  if (!s) {
    return 0;
  }

  while (end < s.length) {
    debugger;
    if (!uniqueChar.has(s[end])) {
      uniqueChar.add(s[end]);
      if (uniqueChar.size > maxLength) {
        maxLength = uniqueChar.size;
        longestSubstringStart = start;
        longestSubstringEnd = end;
      }
      end++;
    } else {
      uniqueChar.delete(s[start]);
      start++;
    }
  }

  const longestSubstring = s.substring(
    longestSubstringStart,
    longestSubstringEnd + 1
  );
  return { length: maxLength, substring: longestSubstring };
};

const res = lengthOfLongestSubstring("abcabcdbb");
console.log(res);

// const res = lengthOfLongestSubstring("abcabcbb");

// console.log(res);
