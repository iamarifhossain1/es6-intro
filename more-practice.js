/**
 * 1. Template String ব্যবহার করে একটি বাক্য তৈরি করো
 * দুটি ভেরিয়েবল নাও: name = "Arif", age = 24
 *
 * আউটপুট হবে:
 * Hello, my name is Arif and I am 28 years old.
 * Template string ব্যবহার করো।
 */

const name = "Arif Hossain";
const age = 28;
const result = `Hello, my name is ${name} and i am ${age} years old`;
console.log(result);

/**
 * 2. Arrow Function দিয়ে একটি sum ফাংশন বানাও
 * একটি ফাংশন লেখো যেটি দুইটি সংখ্যা নিবে এবং তাদের যোগফল return করবে।
 * Arrow function format ব্যবহার করতে হবে।
 */

const addition = (num1, num2) => num1 + num2;
console.log(addition(15, 85));

/**
 * একটি ফাংশন বানাও যেটি নাম নিবে, default হবে "Guest".
 * যদি কোনো নাম না দেওয়া হয়, আউটপুট হবে:
 * Hello, Guest!
 */

function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

/**
 * Destructuring ব্যবহার করে object থেকে value বের করো
 * Object: const person = { name: "Arif", age: 24, city: "Dhaka" };
 * Destructuring করে name এবং city প্রিন্ট করো।
 */

const { name1, city } = { name1: "Arif", age: 24, city: "Dhaka" };
console.log(name, city);

/**
 * Spread Operator ব্যবহার করে দুইটা array combine করো
 * Array:
 * const arr1 = [1, 2, 3];
 * const arr2 = [4, 5, 6];
 * Spread operator দিয়ে newArr = [1, 2, 3, 4, 5, 6] বানাও।
 */

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const newArr = [...arr1, ...arr2];
console.log(newArr);

/**
 * Object.freeze() এবং Object.seal() এর পার্থক্য দেখাও
 * একটি object নাও।
 * Freeze করলে নতুন property add করার চেষ্টা করো।
 * Seal করলে property delete করার চেষ্টা করো।
 * Output console এ লিখো।
 */

// Freeze || Can't Change Value, Add, or Delete

const arif = {
  name: "Arif Hossain",
  Designation: "Web Dev",
  LookingFor: "Internship",
  Salary: 25000,
};

Object.freeze(arif);
arif.Salary = arif.Salary = 1000;
console.log(arif);

// Seal || Can Change Value but Can't  Add, or Delete

const anotherArif = {
  name: "Arif Hossain",
  Designation: "Front-End-Developer",
  Location: "Dhaka",
  Sex: "Male",
};
Object.seal(anotherArif);
anotherArif.Location = "Cumilla";
console.log(anotherArif);
