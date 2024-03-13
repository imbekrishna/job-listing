const typedefs = require("../typedefs");
const User = require("../models/user");

/**
 * Controller for creating new users
 * @param {Object} userData - The user object.
 * @param {string} user.name - Name of the user.
 * @param {string} user.email - Email of the user.
 * @param {string} user.mobile - Mobile of the user.
 * @param {string} user.password - Password of the user.
 * @returns {string} Id of the newly created user
 */
const createUser = async ({ name, email, mobile, password }) => {
  const newUser = new User({ name, email, mobile, password });
  await newUser.save();

  return newUser._id;
};

/**
 * Controller for getting user by their email address.
 * @param {string} email - Email address of the user
 * @returns {Promise<typedefs.User|null>} A promise that resolves with the Mongoose document found, or null if not found.
 */
const findUserByEmail = async (email) => {
  const user = await User.findOne({ email });
  return user;
};

/**
 * Controller for getting user by their email address.
 * @typedef {Object} UserPassword
 * @property {string} password
 *
 * @param {string} email - Email address of the user
 * @returns {Promise<typedefs.User & UserPassword|null>} A promise that resolves with the Mongoose document found, or null if not found.
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
