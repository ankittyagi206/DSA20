/**
            * @function largestSum
            * @return Number
            * @params Array,Number
            *
            * @description we need to calculate the sum of the consecutive elements,
             we have the length of till which we need to calculate the sum,
            then we need to calculate the maximum sum
            *
            */

function largestSum(array, num) {
  if (array.length > num) {
    let max = 0;
    for (let i = 0; i <= array.length - num; i++) {
      let sum = 0;
      for (let j = 0; j < num; j++) {
        sum += array[i + j];
      }
      if (sum > max) {
        max = sum;
      }
    }
    return max;
  } else {
    throw Error("array length is less than number");
  }
}

const res = largestSum([1, 2, 3, 4, 3, 5, 4, 6, 7, 8], 4);
console.log(res);
