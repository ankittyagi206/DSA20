/**
 * ANAGRAM
 *
 * "hello" ---> "lleho" , same character same occurrence
 *
 *
 */

/**
 * @function isAnangram
 * @return Boolean
 * @params --> string1,string2
 *
 * @description
 * both strings must have same length
 * isAnagram will iterate both strings
 * will create a Map for the first string on the first Iteration
 * will remove the character from the Map in the second Iteration
 * if char is not present in the map it will return false
 * if it is a ANAGRAM it will return true after all Iteration
 */
function isAnagram(string1, string2) {
  let counter = {};

  if (string1.length !== string2.length) return false;

  for (let item of string1) {
    console.log(item);
    counter[item] = (counter[item] || 0) + 1;
  }

  for (let item2 of string2) {
    //this condition will become true in case of undefined and -1
    if (!counter[item2]) {
      console.log(counter);
      return false;
    }
    counter[item2] -= 1;
    console.log(counter);
  }
  return true;
}

const res = isAnagram("hello", "hhllo");
console.log(res);
