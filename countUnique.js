/**
 * count unique elements
 * [1,1,2,2,3,4,4,5,6,7,8,8]
 * sorted array
 */

/**
 * @function countUnique
 * @param Array
 * @return number
 */

const countUnique = (arr) => {
  let i = 0;
  let j = 1;
  if (arr.length > 0) {
    for (let j = 1; i < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        i++;
        arr[i] = arr[j];
      }
    }
    return i + 1;
  } else {
    throw Error("Array length is less than 1");
  }
};
const res = countUnique([1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8]);

console.log(res);
