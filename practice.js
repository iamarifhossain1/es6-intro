// traditional function

function add(num1, num2) {
  const addition = num1 + num2;
  return addition;
}

const output = add(10, 15);
console.log(output);

// single line arrow fucntion

const multiply = (num1, num2) => num1 * num2;
const multiplyOutput = multiply(5, 10);
console.log(multiplyOutput);

const addition = function (add1, add2) {
  return add1 + add2;
};

const additionOutput = addition(6, 15);
console.log(additionOutput);

const nums = (numberOne, numberTwo) => numberOne * numberTwo;
const numsRes = nums(5, 20);
console.log(numsRes);

// multiline arrow function

const doMath = (number1, number2) => {
  const num1 = number1 * 10;
  const num2 = number2 * 20;
  const res = num1 + num2;
  return res;
};

console.log(doMath(10, 10));

// more arrow function

const singleLine = (num1, num2) => num1 * num2;
console.log(singleLine(5, 15));

const whoIsBigger = (x, y) => x > y;
console.log(whoIsBigger(15, 26));

const anotherSingleLine = (x) => x * x;
console.log(anotherSingleLine(15));

const arrayNums = (nums) => nums[2];
console.log(arrayNums([10, 20, 30]));

// template string

// const kobita = `amar shonar bangla.
//                 ami tomay valobashi.
//                 chiro din tomar akash.
//                 tomar batash amar prane.
//                 `;
// console.log(kobita);

const price = 100;
const discount = `total discount price of ${price} and new price is ${
  price * 0.8
}`;

console.log(discount);

// spread

const array = [10, 3, 58, 14, 36];
// console.log(...array);

const getMax = Math.max(...array);
// console.log(getMax);

const first = [1, 2, 3, 4, 5];
const second = [...first, 6, 7, 8, 9, 10];
console.log(second);

const person = { name: "arif hossain", age: 28 };
const designation = { ...person, designation: "Web Developer" };
console.log(designation);
