// Write a function that count vowels of a string that provided as an input and return the count of vowels (a, e, i, o, u)
let string = "New network connection detected";

function countVowels(string) {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (string[i] === vowels[j]) {
        count++;
      }
    }
  }
  return count;
}
console.log("Count Vowels: ", countVowels(string));
