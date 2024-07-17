const fs = require("fs");
const filePath = "write.txt";
const content = "Nice to see you!";

function writeFiles(filePath, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve("successful write file");
      }
    });
  });
}

writeFiles(filePath, content)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = writeFiles;
