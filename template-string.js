const poem =
  //   "Aam pata jora jora \n" +
  //   "Marbo chabuk chorbe ghora \n" +
  //   "oree bubu shore dara";

  `Aam pata jora jora 
marbo chabuk chorbe ghora
ore bubu shore dara
ashche amar pagla ghora`;

// console.log(poem);

function sum(num1, num2) {
  const result = num1 + num2;
  //   const output = "sum of" + num1 + "and" + num2 + "is equal to" + result;

  const output = `sum of ${num1}  and ${num2}  is equal to  ${result}`;

  console.log(output);
}

sum(10, 30);

const price = 100;
const discountedPrice = `Discounted price of ${price} after 20% ${
  price * 0.8
} Taka`;
console.log(discountedPrice);
