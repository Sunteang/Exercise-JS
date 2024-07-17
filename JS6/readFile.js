// Following from the exercise 3, 4 (JS-P4), convert all the readFile and writeFile function
// to Promise, then use it to complete the process like in exercise 5 (JS-P4).
// Noted in this exercise, must use .then and catch.

const fs = require("fs");
const filePath = "input.txt";

function readInputFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

readInputFile(filePath)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = readInputFile;
