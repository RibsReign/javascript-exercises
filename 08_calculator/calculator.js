const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  if (arr === undefined || arr.length == 0) {
    return 0;
  }
  return arr.reduce((previous, current) => previous += current);
};

const multiply = function (arr) {
  return arr.reduce((previous, current) => previous *= current);
};

const power = function (a, b) {
  return a ** b
};

const factorial = function (n) {
  let result = 1; // Start with 1, the multiplicative identity
  for (let i = n; i > 1; i--) { // Loop from n down to 2
    result *= i;
  }
  return result;
};
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
