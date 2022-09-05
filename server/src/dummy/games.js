const { faker } = require("@faker-js/faker");
const Game = require("../models/Game");

const makeGames = function () {
  let games = []
  let gamesNumber = 3;
  for(let i = 0; i < gamesNumber; i++){
    let game = {
      name: faker.word.noun(),
      thumbnail: faker.image.image(),
      description: faker.random.words(10),
      time: faker.date.recent(),
    };
    games.push(game)
  }
  return games;
};

const onInsert = function (err, docs) {
  if (err) {
    console.log(err);
  } else {
    console.info("Done");
  }
};

const insertAllGames = function () {
  const games = makeGames();
  Game.insertMany(games, onInsert)
};

module.exports = insertAllGames;
