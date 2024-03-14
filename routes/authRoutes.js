const debug = require("debug");
const { Router } = require("express");
const {
  signupValidator,
  loginValidator,
} = require("../middlewares/validators");

const { registerUser, loginUser } = require("../controllers/userController");

const authRouter = Router();
const log = debug("app:authRoute");

authRouter.post("/signup", signupValidator, registerUser);

authRouter.post("/login", loginValidator, loginUser);

// TODO: implement refresh token for invalidation

module.exports = authRouter;
