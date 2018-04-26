'use strict'

function sort(input) {
  var lengthInput = input.length;
  if (lengthInput >= 2) {
      if (input[0] >= input[1]) {
          var returnArray = [input[1], input[0]];
      } else {
          var returnArray = [input[0], input[1]];
      }
  } else {
      if (lengthInput == 0) {
          return [];
      } else {
          return input[0];
      }
  }
  for (var i = 2; i < lengthInput; i++) {
      if (input[i] >= returnArray[returnArray.length - 1]) {
          returnArray.splice(i, 0, input[i]);
      } else if (input[i] <= returnArray[0]) {
          returnArray.splice(0, 0, input[i]);
      } else {
          var _length = returnArray.length;
          for (var j = 0; j < _length; j++) {
              if (returnArray[j] <= input[i] && input[i] <= returnArray[j + 1]) {
                  returnArray.splice(j + 1, 0, input[i]);
                  break;
              }
          }
      }
  }

  return returnArray;
  // return input.sort((a,b) => a-b); // Remove this line and change to your own algorithm
}

module.exports = sort

