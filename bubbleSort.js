/**
 * *BubbleSort --> A sorting algorithm where the largest element bubbles up to the top
 */

/**
 * @params number[]
 * @function BubbleSort
 * @return number[]
 */
const BubbleSort = (arr) => {
  for (let i = arr.length; i >= 0; i--) {
    let isSwapped;
    console.log(i);
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSwapped = true;
      }
    }
    if (!isSwapped) {
      break;
    }
  }
  return arr;
};
const res = BubbleSort([5, 1, 2, 3, 4]);
console.log(res);
