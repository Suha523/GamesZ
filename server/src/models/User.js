const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: String,
    userName: String,
    email: String,
    password: String,
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
