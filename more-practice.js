/**
 * 1. Template String ব্যবহার করে একটি বাক্য তৈরি করো
 * দুটি ভেরিয়েবল নাও: name = "Arif", age = 24
 *
 * আউটপুট হবে:
 * Hello, my name is Arif and I am 28 years old.
 * Template string ব্যবহার করো।
 */

const name = "Arif";
const age = 28;
const string = `Hello, my name is ${name} and i am ${age} years old. `;

console.log(string);

/**
 * 2. Arrow Function দিয়ে একটি sum ফাংশন বানাও
 * একটি ফাংশন লেখো যেটি দুইটি সংখ্যা নিবে এবং তাদের যোগফল return করবে।
 * Arrow function format ব্যবহার করতে হবে।
 */

const addition = (num1, num2) => num1 + num2;
console.log(addition(35, 39));


const greet(name = "Hello");
console.log(greet(`Hello`, $name(greet)!));
