const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  name: String,
  userName: String,
  email: String,
  password: String,
  userGames: [{ type: Schema.Types.ObjectId, ref: "UserGames" }],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
