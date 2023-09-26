/**
 * @question Find the maximum occurring character in a given string
 * @input string :"Hello World"
 * @output string :'l'
 */

/**
 * @function maximumOccurrence
 * @param string
 * @return string
 */
const maximumOccurrence = (str) => {
  const strArr = str.split("");
  let maxLength = 0;
  let maxOccurChar = "";
  const getAllOccurrences = strArr.reduce((acc, curr) => {
    if (curr.length > 0 && curr !== " ") {
      if (acc[curr.toLowerCase()]) {
        acc[curr.toLowerCase()] += 1;
      } else {
        acc[curr.toLowerCase()] = 1;
      }
    }
    return acc;
  }, {});
  console.log(getAllOccurrences);
  Object.entries(getAllOccurrences).forEach(([key, value]) => {
    if (value > maxLength) {
      maxLength = value;
      maxOccurChar = key;
    }
  });
  return maxOccurChar;
};
const res = maximumOccurrence("Hello Word");
console.log(res);
