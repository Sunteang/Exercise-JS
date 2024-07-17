// Input: "George Raymond Richard Martin"
// Output: "GRRM"

const inputName = "George Raymond Richard Martin";

function mergeName(inputName) {
  const arrName = inputName.split(" ");

  const mapName = arrName.map(function (indexName) {
    return indexName[0];
  });
  const resultMerge = mapName.reduce((acc, curr) => acc + curr);
  return resultMerge;
}

console.log(mergeName(inputName));
