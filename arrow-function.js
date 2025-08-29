// Function  Declaration
function add(num1, num2) {
  return num1 + num2;
}

// Function Expression

const addition = function (num1, num2) {
  return num1 + num2;
};

const result = addition(10, 12);
console.log(result);

// Arrow Function  --> ES6

const add2 = (num1, num2) => num1 + num2;
const multiply = (a, b) => a * b;
const isFirstBig = (x, y) => x > y;
const mult = multiply(5, 8);
console.log(mult);
const res = add2(10, 15);
console.log(res);
const isBig = isFirstBig(52, 50);
console.log(isBig);

// Multi Line Arrow Function

const doMath = (x, y) => {
  const makeDouble = x * 2;
  const againDouble = y * 2;
  const result = makeDouble + againDouble;
  return result;
};
