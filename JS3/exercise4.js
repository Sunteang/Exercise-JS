// Use Node.js's fs module to write a file asynchronously `fs.writeFile`. Write a function that takes a file path and a callback. Use the callback to write the contents of the file to the file path.
const fs = require("fs");
const filePath = "example/reply.txt";

function writeToFilePath(filePath, content, callback) {
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.log("Data error: \n", err);
    } else {
      callback("write file completed successful");
    }
  });
}
writeToFilePath(
  filePath,
  "Hello There!! Nice to see you again. Good Bye.",
  (data) => {
    console.log(data);
  }
);

module.exports = writeToFilePath;
