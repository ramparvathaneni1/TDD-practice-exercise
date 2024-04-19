const { getUser } = require("./module/userAPI");

const add = (a, b) => {
  return a + b;
};

const multiply = (a, b) => {
  return a * b;
};

const getUserByID = async (userId) => {
  return await getUser(userId);
};

module.exports = { add, multiply, getUserByID };
