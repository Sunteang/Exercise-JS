// Write a function that takes a non negative number as a parameter and returns the factorial of that parameter
function factorial(num) {
  if (num < 0) {
    return "negative number";
  } else if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(2));
console.log(factorial(-2));
