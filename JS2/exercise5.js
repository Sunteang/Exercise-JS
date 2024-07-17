// Write a function that could take a parameter that is an array of objects representing products with `name`, `price` and `quantity` property and filter out products with a quantity of zero
const products = [
  { name: "apple", price: 1.2, quantity: 0 },
  { name: "orange", price: 2.3, quantity: 10 },
  { name: "banana", price: 0.8, quantity: 20 },
  { name: "watermelon", price: 2.1, quantity: 0 },
];

function filterZeroQuantity(products) {
  return products.filter((products) => products.quantity > 0);
}

const filterProducts = filterZeroQuantity(products);
console.log(filterProducts);
