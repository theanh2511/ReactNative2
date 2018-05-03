'use strict'

const compareArray = (inputArray, inputValue, index) => {
  return (inputArray.length == 0 || index == -1) ? -1 : (inputArray[index] == inputValue) ? index : compareArray(inputArray, inputValue, (index - 1));

}

function binarySearch(input, target) {
  const value = compareArray(input, target, input.length - 1)
  return value;
  // return input.indexOf(target);  // Remove this line and change to your own algorithm
}

module.exports = binarySearch