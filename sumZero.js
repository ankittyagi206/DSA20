/**
 * @function sumZero
 * @return [number,number]
 * @params Array
 *
 * @description
 * [-5,-4,-3,-2,0,2,4,6,8]
 * we will have a sorted array
 * now find the first pair whose sum is zero and return them
 */

//------------------------------------------BRUTE FORCE------------------------------------------

function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

function sumZero3(arr) {
  for (let num of arr) {
    for (let j = 1; j < arr.length; j++) {
      if (num + arr[j] === 0) {
        return [num, arr[j]];
      }
    }
  }
}
const res = sumZero3([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
const res3 = sumZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(res, res3);

/**
 * OPTIMIZED APPROACH
 */

/**
 * let i=0; j= arr.length-1;
 * -5+8 =3 which is positive j--
 * -5+6 =1 which is also positive j--
 * -5+4 =-1 which is negative i++
 *  -4+4 =0 which is equal to 0 , return the values
 *
 * if zero --> return
 * if negative --> i++
 * if positive -->j--
 *
 */
function sumZero2(arr) {
  let i = 0,
    j = arr.length - 1;

  while (i < j) {
    if (arr[i] + arr[j] === 0) {
      return [arr[i], arr[j]];
    }
    if (arr[i] + arr[j] > 0) {
      j--;
    }
    if (arr[i] + arr[j] < 0) {
      i++;
    }
  }
}

const res2 = sumZero2([-5, -4, -3, -2, 0, 2, 4, 6, 8]);

console.log(res2, "optimized");
