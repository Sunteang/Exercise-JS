const readInputFile = require("./test1");
const writeFiles = require("./test2");

readInputFile("input.txt")
  .then((data) => {
    console.log(data);
    const newData = data + "\nhii im fine";
    return writeFiles("output1.txt", newData);
  })
  .then((data2) => {
    console.log(data2);

    return readInputFile("output1.txt", data2);
  })
  .then((data3) => {
    console.log(data3);
    const newData3 = data3 + "\nThis is it";
    return writeFiles("output2.txt", newData3);
  })
  .then((data4) => {
    console.log(data4);
  })
  .catch((error) => {
    console.log(error);
  });
