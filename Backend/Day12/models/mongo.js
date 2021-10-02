const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  fullName: { type: String, default: "" },
  email: { type: String, default: "" },
  pasword: { type: String, default: "" },
});

module.exports = User = mongoose.model("User", UserSchema);
