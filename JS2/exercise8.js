// Write a function that could sort a list of numbers in ascending order.
let listNumber = [3, 1, 8, 7, 9, 5, 6, 12, 34, 2, 4, 23, 67, 43, 56];

function sortNumber(listNumber) {
  for (let i = 0; i < listNumber.length; i++) {
    for (let j = i + 1; j < listNumber.length; j++) {
      if (listNumber[i] > listNumber[j]) {
        let storeNumber = listNumber[i];
        listNumber[i] = listNumber[j];
        listNumber[j] = storeNumber;
      }
    }
  }
  return listNumber;
}

console.log(
  " sort a list of numbers in ascending order",
  sortNumber(listNumber)
);
