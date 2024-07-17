const mockDatabase = [
  { id: 1, name: "sok" },
  { id: 2, name: "sao" },
  { id: 3, name: "pisey" },
];

// Delete user by id
function deleteUserById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userID = mockDatabase.findIndex((user) => user.id === id);
      if (userID !== -1) {
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
