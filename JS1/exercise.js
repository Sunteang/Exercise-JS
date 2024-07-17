// exercise1
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// exercise2
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// exercise3
let score = 85;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else if (score >= 50) {
  console.log("E");
} else {
  console.log("F");
}

// exercise4
// Ex1
let employees = ["Lara", "Evee", "Simi"];
let salaries = [1000, 2000, 120.9];

let employeesSalary = {};

for (let i = 0; i < employees.length; i++) {
  employeesSalary[employees[i]] = salaries[i];
}
console.log(employeesSalary);

// Ex2
//   let employees = ["Lara", "Evee", "Simi"];
//   let salaries = [1000, 2000, 120.9];

//   let employeesSalary = {};

//   for (let i = 0; i < employees.length; i++) {
//     console.log(employees[i] + ":" + salaries[i]);
//   }

// for (let i = 0; i < employees.length; i++) {
//   console.log(employees[i] + ":" + salaries[i]);
// }

// exercise5
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// exercise6
let evenNum = 0;
let oddNum = 0;

for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    evenNum++;
  } else {
    oddNum++;
  }
}
console.log("Even Number: ", evenNum);
console.log("Odd Number: ", oddNum);

// exercise7
let fizz = 0;
let buzz = 0;
let fizzbuzz = 0;
let notfizzbuzz = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    fizzbuzz++;
  } else if (i % 3 === 0) {
    fizz++;
  } else if (i % 5 === 0) {
    buzz++;
  } else {
    notfizzbuzz++;
  }
}

console.log("Fizz: ", fizz);
console.log("Buzz: ", buzz);
console.log("FizzBuzz: ", fizzbuzz);
console.log("Not FizzBuzz: ", notfizzbuzz);

// exercise8
let arrNum = [23, 13, 43, 22, 33];

let sumNum = 0;

for (let i = 0; i < arrNum.length; i++) {
  sumNum = sumNum + arrNum[i];
}
console.log("Sum: ", sumNum);

// exercise9
let primeNum = [];

for (let i = 2; i <= 100; i++) {
  let isPrimeNum = true;

  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrimeNum = false;
      break;
    }
  }
  if (isPrimeNum) {
    primeNum.push(i);
  }
}

console.log("Prime Number: ", primeNum.join(", "));

// for (let i = 2; i <= 100; i++) {
//   let isPrimeNum = true;

//   for (let j = 2; j < i ; j++) {
//     if (i % j === 0) {
//       isPrimeNum = false;
//       break;
//     }
//   }
//   if (isPrimeNum) {
//     console.log(i);
//   }
// }

// console.log("Prime Number: ", primeNum.join(", "));

// exercise10
let arrNumber = [23, 13, 43, 56, 22, 33];

let largestNum = arrNumber[0];

for (let i = 0; i < arrNumber.length; i++) {
  if (arrNumber[i] > largestNum) {
    largestNum = arrNumber[i];
  }
}
console.log("Largest Number: ", largestNum);
