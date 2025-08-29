function sum(num1, num2 = 0) {
  const total = num1 + num2;
  // console.log(num1, num2, total);
}

// sum(10);

function multiply(num1 = 1, num2 = 1) {
  multi = num1 * num2;
  console.log(multi);
}

// multiply(10, 15);

function fullName(first, last = 1) {
  const name = first + " " + last;
  console.log(name);
}

fullName("Arif", "Hossain");

/**
 * Default value paoyar jonno parameter a default ekta value set kora jabe example --> parameter = 0 or parameter = 1
 * jodi amra default value use kori tahole parameter amader ekta value dibe otherwise undefined or NaN show korbe
 * some thumb role of default value. maybe useful
 * add, substract --> 0
 * multiply --> 1
 * string = ''
 * array --> []
 * object --> {}
 *
 */
