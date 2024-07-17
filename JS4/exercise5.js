// Given an array of numbers, use the `reduce` method to find the maximum number of the array

const numbers = [1, 3, 69, 40, 10, 9, 7, 3, 67, 2];

function maximumNumber(numbers) {
  return numbers.reduce(function (prev, curr) {
    if (curr > prev) {
      return curr;
    } else {
      return prev;
    }
  }, numbers[0]);
}

console.log(maximumNumber(numbers));
