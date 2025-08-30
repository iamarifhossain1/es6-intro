// Object Destructuring

const { price, quantity, tax = 7 } = { name: "Shirt", price: 500, quantity: 7 };
// console.log(price, quantity, tax);

// const discount = (product.price * 20) / 100;
// const vatAmount = (product.price * 10) / 100;
// const payAmount = product.price - discount + vatAmount;
// const totalPay = payAmount;

// const price = product.price;

// const discount = (price * 20) / 100;
// const vatAmount = (price * 10) / 100;
// const payAmount = product.price - discount + vatAmount;
// const totalPay = payAmount;

const discount = (price * 20) / 100;
const vatAmount = (price * 10) / 100;
const payAmount = price - discount + vatAmount;
const totalPay = payAmount;

const device = { name: "Phone", brand: "Samsung", price: 20000 };
const { brand } = device;
console.log(brand);

// Array Destructuring

const numbers = [25, 88, 100, 25];
const [first, second] = numbers;
console.log(first, second);
const [math, physics] = [80, 39];
console.log(physics);
