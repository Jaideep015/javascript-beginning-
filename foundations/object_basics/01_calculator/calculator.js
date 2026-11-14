const add = function (num1, num2) {
  num1 = +num1
  num2 = +num2
  let num3 = num1 + num2
  return num3
};

const subtract = function (num1, num2) {
  num1 = +num1
  num2 = +num2
  let num3 = num1 - num2
  return num3
};

const sum = function (arr) {
  let total = 0
  for (let i = 0; i < arr.length; i++) {
    total += Number(arr[i])
  }
  return total
};

const multiply = function (arr) {
  let product = 1
  for (let i = 0; i < arr.length; i++) {
    product *= Number(arr[i])
  }
  return product
};

const power = function (a, b) {
  a = +a
  b = +b
  c = a ** b
  return c
};

const factorial = function (n) {
  let fact = 1
  for (let i = 1; i <= n; i++) {
    fact *= [i]
  }
  return fact
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
