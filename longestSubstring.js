const userInput = document.getElementById("userInput");
const submitButton = document.getElementById("submitButton");
const outputMessage = document.getElementById("outputMessage");

/**
 * @function longestSubstring
 * @param {String} inputValue
 * @return {number}
 */

const longestSubstring = (inputValue) => {
  let start = 0;
  let end = 0;
  let max = 0;
  let uniqueChar = new Set();

  while (end < inputValue.length) {
    if (!uniqueChar.has(inputValue[end])) {
      uniqueChar.add(inputValue[end]);
      end++;
      max = Math.max(max, uniqueChar.size);
    } else {
      delete uniqueChar.delete(inputValue[start]);
      start++;
    }
  }
  return max;
};

submitButton.addEventListener("click", () => {
  const inputText = longestSubstring(userInput.value);
  if (inputText) {
    outputMessage.innerText = `longest Substring is "${inputText}"`;
  }
});

userInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    const inputText = longestSubstring(userInput.value);
    if (inputText) {
      outputMessage.innerText = `longest Substring is "${inputText}"`;
    }
  }
});
