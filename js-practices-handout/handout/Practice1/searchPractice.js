'use strict'

function search(input, target) {
  var returnValue = -1;
  var lengthInput = input.length;
  for (var i = 0; i < lengthInput; i++) {
    if (input[i] == target) {
      return i;
    }
  }
  return returnValue;
  // return  input.indexOf(target);  // Remove this line and change to your own algorithm
}

module.exports = search
