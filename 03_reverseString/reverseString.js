const reverseString = function (word) {
  return word.split("").reverse().toString().replaceAll(",", "");
};

// Do not edit below this line
module.exports = reverseString;
