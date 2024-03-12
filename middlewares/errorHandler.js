const mongoose = require("mongoose");

/**
 * Express middleware for handling errors.
 * @param {Error} error - The error object.
 * @param {import('express').Request} req - The Express request object.
 * @param {import('express').Response} res - The Express response object.
 * @param {import('express').NextFunction} next - The next middleware function in the stack.
 * @returns {void}
 */
const errorHandler = (error, req, res, next) => {
  console.error(error);
  const { name, message } = error;

  if (
    name === "MongoServerError" &&
    message.includes("E11000 duplicate key error collection")
  ) {
    return res.status(400).json({
      error: ["User with email already exists."],
    });
  } else if (error instanceof mongoose.Error.ValidationError) {
    return res.status(400).json({
      error: [error.errors],
    });
  } else {
    return res.status(500).json({
      error: ["Internal Server Error"],
    });
  }
  next();
};

module.exports = errorHandler;
