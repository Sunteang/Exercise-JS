// You have an array of objects where each object has properties `name` and `category`. Use the `reduce` method to group these objects by category.
// Input: [ {name: “Bread”, category: “Grocery”}, {name: “Butter”, category: “Grocery”}, {name: “Shampoo”, category: “Personal Care”}]
// Output: { “Grocery”: [“Bread”, “Butter”], “Personal Care”: [“Shampoo”]}

const properties = [
  { name: "Bread", category: "Grocery" },
  { name: "Soap", category: "Personal Care" },
  { name: "Butter", category: "Grocery" },
  { name: "Shampoo", category: "Personal Care" },
];

function groupNumber(properties) {
  return properties.reduce(function (acc, current) {
    if (!acc[current.category]) {
      acc[current.category] = [];
    }
    acc[current.category].push(current.name);
    return acc;
  }, {});
}

console.log(groupNumber(properties));
