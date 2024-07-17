// Callback Hell with Mock Database
// Implement a series of nested asynchronous functions to simulate querying a mock database, processing the data and then outputting the result. Each step should rely on the completion of the previous one.
// a. Create a mock database:
// [{id: 1, name: “sok”}, {id: 2, name; “sao”}, {id: 3, name: “pisey”}]
// b. Write a function that could get user info by its id. Note the user object should return after 2 seconds. If the user is not found, it should return an error.
// c. Write a function that could process the user data by capitalizing the user name. Note, the process data should be execute around 1.5 seconds
// d. Execute and Process: Use example b and c in order. Finally print the processed user data to the console

const mockDatabase = [
  { id: 1, name: "sok" },
  { id: 2, name: "sao" },
  { id: 3, name: "pisey" },
];

// step 1: get iD
function getInfoById(id, callback) {
  setTimeout(() => {
    const user = mockDatabase.find((user) => user.id === id);
    if (user) {
      callback(null, user);
    } else {
      callback("User not found");
    }
  }, 2000);
}

// step 2: turn name to capitalize
function capitalizeName(name) {
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// step 3: callback capitalize function to processing
function processUserData(user, callback) {
  setTimeout(() => {
    const processedUser = { ...user, name: capitalizeName(user.name) };
    callback(null, processedUser);
  }, 1500);
}

// step 4: Handle all result that is already completed and callback to getInfoById
function handleResult(error, result) {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("User information:", result);

    processUserData(result, (err, processedResult) => {
      if (err) {
        console.log("Error:", err);
      } else {
        console.log("Processing user data:", processedResult);
      }
    });
  }
}

getInfoById(3, handleResult);
