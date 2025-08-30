const numbers = [1, 2, 3, 4, 5, 6, 7];
for (const number of numbers) {
  // console.log(number);
}

const person = {
  name: "Arif Hossain",
  designation: "Web Dev",
  salary: 20000,
  experience: 1,
  age: 22,
};

for (const key in person) {
  const value = person[key];
  console.log(key, value);
}

const keys = Object.keys(person);
for (const key of keys) {
  const value = person[key];
  console.log(key, value);
}
