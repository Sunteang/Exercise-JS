// Write an arrow function that that take an array of numbers as a parameter and returns the average of those numbers
let arr = [1, 2, 4, 4, 5];
const average = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(average(arr));
