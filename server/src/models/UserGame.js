const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let UserGamesSchema = new Schema({
    score: Number,
    isWon: Boolean,
    game: { type: Schema.Types.ObjectId, ref: 'Game' },
    userId: String,
});

const UserGame = mongoose.model('UserGame', UserGamesSchema);

module.exports = UserGame;
