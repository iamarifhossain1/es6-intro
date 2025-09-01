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

guest();
guest("Arif Hossain");
