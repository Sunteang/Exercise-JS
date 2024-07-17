// Create a function that could take an argument which is an array of objects. Each object should contain property name and age. The function should return a new list which only contains the user who have higher than 18 years old
const people = [
  { name: "Chhin Udom", age: 24 },
  { name: "Kum Piseth", age: 25 },
  { name: "Ben Chesda", age: 18 },
  { name: "Num Somnang", age: 15 },
  { name: "Chork Dina", age: 17 },
];

function newPeople(people) {
  return people.filter((p) => p.age > 18);
}

console.log(newPeople(people));

// second:
// const people = [
//   { name: "Chhin Udom", age: 24 },
//   { name: "Kum Piseth", age: 25 },
//   { name: "Ben Chesda", age: 18 },
//   { name: "Num Somnang", age: 15 },
//   { name: "Chork Dina", age: 17 },
//   { name: "Meas Seyha", age: 28 },
// ];

// function newPeopleLists(people) {
//   const newPeople = [];
//   for (let i = 0; i < people.length; i++) {
//     if (people[i].age > 18) {
//       newPeople.push(people[i]);
//     }
//   }
//   return newPeople;
// }

// console.log(newPeopleLists(people));
