const { faker } = require("@faker-js/faker");
const User = require("../models/User");

const makeUsers = function () {
  const users = [];
  const numberOfUsers = 3;
  for (let i = 1; i <= numberOfUsers; i++) {
    let user = {
      name: faker.name.firstName(),
      userName: faker.name.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      userGames: [],
    };
    users.push(user);
  }
  return users;
};

const onInsert = function (err, docs) {
  if (err) {
    console.log(err);
  } else {
    console.info("Done");
  }
};

const insertAllUsers = function () {
  const users = makeUsers();
  User.insertMany(users, onInsert);
};

module.exports = insertAllUsers;
