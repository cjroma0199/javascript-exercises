const repeatString = function (word, repeat) {
  let repeatedWord = word;

  if (repeat < 0) return "ERROR";
  if (repeat == 0) return "";

  for (let i = 1; i < repeat; i++) {
    repeatedWord += word;
  }
  return repeatedWord;
};

// Do not edit below this line
module.exports = repeatString;
