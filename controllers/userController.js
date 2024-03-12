const User = require("../models/user");

/**
 * Controller for creating new users
 * @param {Object} userData - The user object.
 * @param {string} user.name - Name of the user.
 * @param {string} user.email - Email of the user.
 * @param {string} user.mobile - Mobile of the user.
 * @param {string} user.password - Password of the user.
 * @returns {import ('mongoose').Schema.Types.ObjectId} Id of the newly created user
 */
const createUser = async ({ name, email, mobile, password }) => {
  const newUser = new User({ name, email, mobile, password });
  await newUser.save();

  return newUser._id;
};

module.exports = {
  createUser,
};
