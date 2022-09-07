const { faker } = require('@faker-js/faker');
const Game = require('../models/Game');

const makeGames = function () {
    let games = [
        {
            name: 'Tic Tac Toe',
            thumbnail:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/280px-Tic_tac_toe.svg.png',
            description: 'Play with your friens or computer AI',
            time: faker.date.recent(),
        },
        {
            name: 'Flappy Bird',
            thumbnail: 'http://nebez.github.io/floppybird/assets/thumb.png',
            description: 'Fly with limits',
            time: faker.date.recent(),
        },
    ];

    return games;
};

const onInsert = function (err, docs) {
    if (err) {
        console.log(err);
    } else {
        console.info('Done');
    }
};

const insertAllGames = function () {
    const games = makeGames();
    Game.insertMany(games, onInsert);
};

module.exports = insertAllGames;
