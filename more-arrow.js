const getMax = (amount, taxRate) => (amount * taxRate) / 100;
const getMaxResult = getMax(50, 20);
// console.log(getMaxResult);

const add = (p, q) => p + q;

const tax = getMax(100, 2);
console.log(tax);

// single parameter

const getSquare = (x) => x * x;
const getHalf = (num) => num / 2;
const getArray = (nums) => nums[0];
const logIt = () => console.log(78);

console.log(getHalf(6));
console.log(getSquare(8));
console.log(getArray([9, 19, 52, 20, 28]));
console.log(logIt());

// Annonymous Function

// document.getElementById('').addEventListener('click', () => {

// })

// document.getElementById("btn-click").addEventListener("click", (event) => {});
