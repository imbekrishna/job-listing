const mongoose = require("mongoose");

/**
 * UserSchema schema
 * @constructor UserSchema
 */
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minLength: 3,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
