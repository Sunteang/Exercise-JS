// Use Node.js's fs module to read a file asynchronously:`fs.readFile`. Write a function that takes a file path and a callback. Use the callback to print the contents of the file to the console.
const fs = require("fs");
const filePath = "example/input.txt";

function readPrintFile(filePath, callback) {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.log("Error read file:\n ", err);
    }
    callback(data);
  });
}

readPrintFile(filePath, (data) => {
  console.log(data);
});

module.exports = readPrintFile;
