// Given two arrays of nums1 and nums2, merge them into a new array:
// Nums1 = [1, 2, 3]
// Nums2 = [4, 5, 6]
// Output: [1, 2, 3, 4, 5, 6]

const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];

const mergeNums = [...nums1, ...nums2];

console.log(mergeNums);
