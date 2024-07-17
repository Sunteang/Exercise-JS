// Write a function that takes an array of numbers as an input and returns the median value
let numberList1 = [7, 14, 5, 19, 26, 42, 13];
let numberList2 = [8, 21, 14, 36, 17, 2, 56, 41];

function findMedian(numberList1) {
  let median;

  for (let i = 0; i < numberList1.length; i++) {
    for (let j = i + 1; j < numberList1.length; j++) {
      if (numberList1[i] > numberList1[j]) {
        let storeNum = numberList1[i];
        numberList1[i] = numberList1[j];
        numberList1[j] = storeNum;
      }
    }
  }
  console.log(numberList1);
  if (numberList1.length % 2 !== 0) {
    median = numberList1[(numberList1.length + 1) / 2 - 1];
  } else {
    median =
      (numberList1[numberList1.length / 2 - 1] +
        numberList1[numberList1.length / 2]) /
      2;
  }
  return median;
}
console.log("Median of odd length of the element: ", findMedian(numberList1));
console.log("Median of even length of the element: ", findMedian(numberList2));
