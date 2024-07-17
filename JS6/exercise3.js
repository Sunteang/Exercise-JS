const readInputFile = require("./test1");
const writeFiles = require("./test2");

async function main() {
  try {
    let message = await readInputFile("input.txt");
    console.log(message);

    const write1 = message + "\nHii There!";
    await writeFiles("output3.txt", write1);
    console.log(write1);

    let message2 = await readInputFile("output3.txt");
    console.log(message2);

    const write2 = message2 + "\nSee you next time!";
    await writeFiles("output4.txt", write2);
    console.log(write2);

    let message3 = await readInputFile("output4.txt");
    console.log(message3);
  } catch (error) {}
}

main();
