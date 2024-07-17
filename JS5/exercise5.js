// Write a function that could take any number of arguments and calculates their sum and return it
// Example: console.log(sumAll(1, 2)) // 3
//                   console.log(sumAll(1, 2, 3, 4, 5)) // 15

// function sumAll(...numbers) {
//   return numbers.reduce((acc, curr) => acc + curr);
// }

// console.log(sumAll(1, 2, 3, 4, 5));

// ex2:
function sumAll(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}

console.log(sumAll(1, 2, 3, 4, 5));
