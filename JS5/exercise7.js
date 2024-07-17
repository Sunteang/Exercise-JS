// Write a function that takes an object and a list of property names to filter out. Return a new object that contains all the properties of the original object except those specified in the list
// Example: object = {a:1, b:2, c:3, d:4}
//                    filterProps(object, “b”, “d”) // Should Return:  {a:1, c:3}

// const object = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4,
// };

// function filter(obj, ...input) {
//   let newArr = {};
//   for (key in obj) {
//     if (!input.includes(key)) {
//       newArr[key] = obj[key];
//     }
//   }
//   return newArr;
// }

// console.log(filter(object, "b", "d"));

// ex2:
const obj = { a: 1, b: 2, c: 3, d: 4 };

function filter(object, ...properties) {
  const newObj = {};
  const keys = Object.keys(object);

  for (let i = 0; i < keys.length; i++) {
    let keep = true;
    for (let j = 0; j < properties.length; j++) {
      if (keys[i] === properties[j]) {
        keep = false;
        break;
      }
    }
    if (keep) {
      newObj[keys[i]] = object[keys[i]];
    }
  }
  return newObj;
}

console.log(filter(obj, "b", "d"));
