// Given an array of numbers which includes duplicates, use `filter` method to create a new array that contains only unique valu

const numbers = [1, 2, 3, 3, 4, 5, 5, 6, 7, 7];

function uniqueValue(numbers) {
  return numbers.filter((unique, index, array) => {
    return array.indexOf(unique) === index;
  });
}

console.log(uniqueValue(numbers));
