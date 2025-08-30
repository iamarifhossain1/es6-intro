/**
 * Freeze method use korle kono value change, delete or modify kora jabe nah
 * Delete operator use kore amra kono value delete korte parbo
 */

const person = {
  name: "Arif Hossain",
  designation: "Web Dev",
  salary: 20000,
  experience: 1,
  age: 22,
};

Object.freeze(person);
person.salary = person.salary + 5000;
person.location = "Dhaka";
delete person.experience;
// delete person.salary;
console.log(person);
