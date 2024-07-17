// Given the array ‘points’, extract the first point into a variable and store remaining points in an array
// Example: points = [{x: 1, y:2}, {x:2, y:3}, {x:3, y:4}]
//                    console.log(firstPoint) // {x: 1, y: 2}
//                    console.log(otherPoints) // [{x:2, y:3}, {x:3, y:4}]
const point = [
  { x: 1, y: 2 },
  { x: 2, y: 3 },
  { x: 3, y: 4 },
];

const [firstPoint, ...otherPoints] = point;

console.log(firstPoint);
console.log(otherPoints);
