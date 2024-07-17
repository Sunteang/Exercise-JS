// Use the example 3 & 4, write in the below scenario:
// Read the context of `input.txt`
// Append “First modification” to the content and write it to `output1.txt`
// Read `output1.txt` and append “SEcond modification” to the file `output2.txt`
// Finally read `output2.txt` and print to the console

const readPrintFile = require("./exercise3");
const writeToFilePath = require("./exercise4");

readPrintFile("example/input.txt", (data) => {
  console.log("Reading File: ", data);

  writeToFilePath(
    "example/output1.txt",
    data + "\nFirst modification",
    (message) => {
      console.log(message);

      readPrintFile("example/output1.txt", (data) => {
        console.log("Reading File: ", data);

        writeToFilePath(
          "example/output2.txt",
          data + "\nSEcond modification",
          (message) => {
            console.log(message);

            readPrintFile("example/output2.txt", (data) => {
              console.log("Reading File: ", data);
            });
          }
        );
      });
    }
  );
});
