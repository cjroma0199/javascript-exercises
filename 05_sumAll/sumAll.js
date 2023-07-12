const sumAll = function (numberOne, numberTwo) {
  if (
    !Number.isInteger(numberOne) ||
    !Number.isInteger(numberTwo) ||
    numberOne < 0 ||
    numberTwo < 0
  ) {
    return "ERROR";
  }
  let higher = numberOne;
  let lower = numberTwo;
  let sum = 0;

  if (numberOne < numberTwo) {
    higher = numberTwo;
    lower = numberOne;
  }

  for (; lower <= higher; lower++) {
    sum += lower;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
