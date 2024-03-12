const { body } = require("express-validator");

const signupValidator = [
  body("name", "Name cannot be empty").notEmpty(),
  body("email")
    .notEmpty()
    .withMessage("Email Cannot be empty")
    .isEmail()
    .withMessage("Invalid email address"),
  body("mobile", "Invalid mobile number").isMobilePhone("en-IN"),

  /* Anything with less than eight characters OR anything with no numbers OR anything with no uppercase OR or anything with no lowercase OR anything with no special characters is a valid password */

  body("password", "Invalid password")
    .not()
    .matches(/^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/)
    .withMessage(
      "Password must be at least 8 characters long and contain a lowercase letter, an uppercase letter, a number and a special character"
    ),
];

module.exports = {
  signupValidator,
};
