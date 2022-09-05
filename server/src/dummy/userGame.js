const { faker } = require("@faker-js/faker");

const makeUserGames = function () {
    let userGame = {
      score: 0,
      isWon: false,
      game: [],
    };
  return userGame;
};

module.exports = makeUserGames;
