/**
 * @question checking sum zero
 * @input number[]
 * @return number[]
 */

/**
 * @function sumZero
 * @return Array[number,number]
 * @example [?,?] output
 * @param Array
 */

/**
 * BruteForce
 */
const input = [-5, -4, -3, -2, 0, 2, 4, 6, 8];
// const sumZero = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
// };

// const res = sumZero(input);
// console.log(res);

const sumZero2 = (arr) => {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    if (arr[start] + arr[end] === 0) {
      return [arr[start], arr[end]];
      break;
    }
    if (arr[start] + arr[end] > 0) {
      end--;
    } else {
      start++;
    }
  }
};

const result = sumZero2(input);
console.log(result);
