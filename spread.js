const numbers = [178, 8, 5, 91];
// console.log(...numbers);

// const max = Math.max(1121, 56, 194, 112, 554);
const max = Math.max(...numbers);
// console.log(max);

const first = [1, 2, 3, 4, 5, 6];
const second = first;
second.push(6, 7, 8);
console.log(first);

const first1 = [1, 2, 3, 4, 5, 6];
const second2 = [...first];
const third = [0, ...first, 10, 12, 14];
second.push(6, 7, 8);
console.log(first);
console.log(second);
console.log(third);

const ages = [45, 60, 40];
const prices = [98, 65, 35];
const all = [...ages, ...prices];
console.log(all);

const person = { name: "Arif Hossain", age: 28 };
const employee = { ...person, designation: "Web Developer" };
console.log(employee);

const total = (a, b, c) => a + b + c;
const result = total(45, 89, 20);
