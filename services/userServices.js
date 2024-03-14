const User = require("../models/user");

/**
 * Create a user with provided data.
 * @async
 * @param {User} userData - The user object.
 * @returns {string} Id of the newly created user
 * @throws {Error} Throws an error if there is an issue with the database operation.
 */
const createUser = async (userData) => {
  const newUser = new User(userData);
  await newUser.save();

  return newUser._id;
};

/**
 * Controller for getting user by their email address.
 * @param {string} email - Email address of the user
 * @returns {Promise<Omit<User, 'password'>|null>} A promise that resolves with the Mongoose document found, or null if not found.
 */
const findUserByEmail = async (email) => {
  const user = await User.findOne({ email });
  return user;
};

/**
 * Controller for getting user with password by their email address for token generation.
 * @param {string} email - Email address of the user
 * @returns {Promise<User|null>} A promise that resolves with the Mongoose document found, or null if not found.
 */
const findUserByEmailWithPassword = async (email) => {
  const user = await User.findOne({ email }).select("_id name email +password");

  return user;
};

module.exports = {
  createUser,
  findUserByEmail,
  findUserByEmailWithPassword,
};
