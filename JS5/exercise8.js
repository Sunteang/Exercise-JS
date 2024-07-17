function count(...nums) {
  return nums.reduce((acc, current) => {
    if (!acc[current]) {
      acc[current] = 1;
    } else {
      acc[current]++;
    }
    return acc;
  }, {});
}

console.log(count(1, 2, 3, 5, 6, 7, 8, 4, 2, 3, 4, 2, 5, 6, 7, 4));
