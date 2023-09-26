/**
 * Palindrome-> String
 *  example  -> NITIN, MOM, DAD,
 *
 * By using predefined method of JS--> reverse
 */

const getname = "Nitin";
console.log(
  getname.toLowerCase().split("").reverse().join("") === getname.toLowerCase()
);

/**
 * w/o using Predefined mehod of JS
 */

/**
 * @params string
 * @function checkPalindrome
 * @return true/false or boolean
 */
function checkPalindrome(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i].toLowerCase();
  }
  return newStr === str.toLowerCase();
}

console.log(checkPalindrome(getname));

/**
 * @params string
 * @function checkPalindrome2
 * @return true/false or boolean
 */
const checkPalindrome2 = (str) => {
  const newStr = str.toLowerCase();

  let left = 0;
  let right = newStr.length - 1;

  while (left < right) {
    if (newStr[left] !== newStr[right]) return false;
    else {
      left++;
      right--;
    }
  }
  return true;
};

console.log(checkPalindrome2("mom"));
