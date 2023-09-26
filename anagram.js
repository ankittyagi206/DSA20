/**
 * Anagram
 * what is an anagram ?
 *
 * @function isAnagram
 * @return Boolean
 * @param String1,String2
 *
 * @description
 * An anagram is string which use same set of characters, in different arrangements
 * 'hello' --> 'ellho'
 */

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let Map = {};
  for (let i = 0; i < str1.length; i++) {
    Map[str1[i]] = (Map[str1[i]] || 0) + 1;
  }
  for (let j = 0; j < str2.length; j++) {
    if (!Map[str2[j]]) {
      return false;
    } else {
      Map[str2[j]] -= 1;
    }
  }
  return true;
}

const res = isAnagram("hello", "lllho");
console.log(res);
