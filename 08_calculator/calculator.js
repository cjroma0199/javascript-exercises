const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (numbers) {
  return numbers.reduce((total, number) => total + number, 0);
};

const multiply = function (...numbers) {
  return numbers.reduce((product, number) => product * number, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (number) {
  const ans = 1;
  if (number == 1 || number == 0) return 1;

  return number * factorial(number - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
