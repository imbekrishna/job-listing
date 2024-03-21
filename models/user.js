const mongoose = require("mongoose");

/**
 * Mongoose schema for a user
 * @type {import('mongoose').Schema<User>}
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
    listings: [{ type: mongoose.Schema.Types.ObjectId }],
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
