// Given an array of user objects which include property name and age, use the `map` method to create a new array that contains just the names of the users
const people = [
  { name: "Chhin Udom", age: 24 },
  { name: "Kum Piseth", age: 25 },
  { name: "Ben Chesda", age: 18 },
  { name: "Num Somnang", age: 15 },
  { name: "Chork Dina", age: 17 },
  { name: "Meas Seyha", age: 28 },
];

function newArr(people) {
  return people.map((p) => {
    return p.name;
  });
}

console.log(newArr(people));
