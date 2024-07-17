const mockDatabase = [
  { id: 1, name: "sok" },
  { id: 2, name: "sao" },
  { id: 3, name: "pisey" },
];

// step 1
// function getUserId(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const user = mockDatabase.find((user) => user.id === id);
//       if (user) {
//         resolve(user);
//       } else {
//         reject("user not found");
//       }
//     }, 2000);
//   });
// }

// step 2
// function capitalizeWord(word) {
//   return word
//     .split(" ")
//     .map((name) => {
//       return name.charAt(0).toUpperCase() + name.slice(1);
//     })
//     .join(" ");
// }

// step 3
// function processingData(user) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const processUser = { ...user, name: capitalizeWord(user.name) };
//       if (processUser) {
//         resolve(processUser);
//       } else {
//         reject("Error!");
//       }
//     }, 1500);
//   });
// }

// step 4
// function getAllUser() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(mockDatabase);
//     }, 1000);
//   });
// }

// step 5 : add new user
// function addNewUser(newUser) {
//   return new Promise((resolve, reject) => {
//     const lastId = mockDatabase[mockDatabase.length - 1].id;
//     const newId = lastId + 1;
//     const newUserWithId = { id: newId, ...newUser };
//     setTimeout(() => {
//       mockDatabase.push(newUserWithId);
//       if (mockDatabase.includes(newUserWithId)) {
//         resolve(newUserWithId);
//       } else {
//         reject("no new user");
//       }
//     }, 1500);
//   });
// }

// getUserId("joseph");

// update user by id
// function updateUserById(id, updateName) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const userIndex = mockDatabase.findIndex(
//         (userIndex) => userIndex.id === id
//       );
//       if (userIndex != -1) {
//         mockDatabase[userIndex] = { id: id, ...updateName };
//         resolve(userIndex);
//       } else {
//         reject("user id not found");
//       }
//     }, 1000);
//   });
// }

// updateUserById(3, { name: "kriz" })
//   .then((data) => {
//     console.log("data update", data);
//     console.log(mockDatabase);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// delete user by id
function deleteUserById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userID = mockDatabase.findIndex((user) => user.id === id);
      if (userID != -1) {
        mockDatabase.splice(userID, 1);
        resolve(userID);
      } else {
        reject("id not found");
      }
    }, 1000);
  });
}

deleteUserById(2)
  .then((data) => {
    console.log("User deleted at index:", data);
    console.log("Updated database:", mockDatabase);
  })
  .catch((error) => {
    console.log(error);
  });

// getUserId(3)
//   .then((response) => {
//     console.log("user info: ", response);
//     return processingData(response);
//   })
//   .then((response2) => {
//     console.log("process user data:", response2);
//     return getAllUser(response2);
//   })
//   .then((response3) => {
//     console.log("all user info: ", response3);
//   })
//   .catch((err) => {
//     console.log("error: ", err);
//   });
