const express = require('express');
const router = express.Router();
const Game = require('../models/Game');
const User = require('../models/User');
const UserGame = require('../models/UserGame');
// const dummyUsers = require("../dummy/users");

// dummyUsers()

router.get('/users/:userId', function (req, res) {
    // to get a user for login
    let userId = req.params.userId;
    User.findById(userId, function (err, user) {
        res.send(user);
    });
});

router.get('/user', function (req, res) {
    console.log(req.session.userName);
    if (req.session.userName) {
    }
    // to get a user for login
    res.send(req.session.userName);
});
router.post('/login', async function (req, res) {
    let loginData = req.body;
    req.session.userName = loginData.userName;
    let userName = req.session.userName;
    req.session.password = loginData.password;
    let password = req.session.password;

    let userId = '';
    let status = '';
    let userInfo = await User.findOne({ userName: userName });
    if (userInfo !== null && userInfo.password === password) {
        userId = JSON.stringify(userInfo._id);
        status = 'Done';
    } else {
        status = 'Not Found';
    }
    let userStatus = {
        userName: userName,
        userId: userId,
        status: status,
    };
    console.log(userId);

    res.send(userStatus);
});

router.get('/logout', function (req, res) {
    req.session.destroy();

    res.send('Done Deleted');
});
router.post('/register', function (req, res) {
    let registrationInfo = req.body;
    console.log(registrationInfo);
    let newUser = new User(registrationInfo);
    newUser.save();
    res.end();
});

// router.post('/games', function (req, res) {
//     // add game
//     const games = dummyGames();
//     games.forEach((g) => {
//         let newGame = new Game(g);
//         newGame.save();
//     });
//     res.end();
// });

router.get('/games', function (req, res) {
    // to show all games
    Game.find({}, function (err, games) {
        res.send(games);
    });
});

router.get('/games/:gameId', function (req, res) {
    //to show game info
    let gameId = req.params.gameId;
    Game.findById(gameId, function (err, game) {
        res.send(game);
    });
});

router.post('/userGames', function (req, res) {
    // add user game when user start a game
    let userId = req.body.userId;
    let gameId = req.body.gameId;
    let userGame = { score: 0 };
    Game.findById(gameId, function (err, game) {
        userGame.game = game;
        userGame.userId = userId;
        let newUserGame = new UserGame(userGame);
        newUserGame.save().then(() => {
            User.findByIdAndUpdate(
                userId,
                {
                    $push: { userGames: newUserGame },
                },
                { new: true },
                function (err, user) {
                    res.send(newUserGame);
                }
            );
        });
    });
});

router.get('/userGames/:userId', function (req, res) {
    // to get all games and all its info for a user
    let userId = req.params.userId;
    User.findById(userId)
        .populate({
            path: 'userGames',
            model: 'UserGame',
            populate: {
                path: 'game',
                model: 'Game',
            },
        })
        .exec(function (err, user) {
            console.log(user.userGames);
            res.send(user.userGames);
        });
});
router.put('/userGames', function (req, res) {
    // update score or isWon from state ==> score and isWon from a query
    let userGameId = req.body.userGameId;
    let score = req.body.score;
    console.log(req.body);
    UserGame.findByIdAndUpdate(
        userGameId,
        {
            score: score,
        },
        { new: true },
        function (userGame) {
            res.send(userGame);
        }
    );
});

module.exports = router;
