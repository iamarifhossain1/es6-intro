// Seal method use korle value change kora jabe but add or remove kora jabe nah

const person = {
  name: "Arif Hossain",
  designation: "Web Dev",
  salary: 20000,
  experience: 1,
  age: 22,
};

Object.seal(person);
person.salary = person.salary + 5000;
person.location = "Dhaka";
delete person.experience;
// delete person.salary;
console.log(person);
