const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const debug = require("debug");
const { Router } = require("express");
const { validationResult } = require("express-validator");
const {
  signupValidator,
  loginValidator,
} = require("../middlewares/validators");
const {
  createUser,
  findUserByEmailWithPassword,
} = require("../controllers/userController");

const authRouter = Router();
const log = debug("app:authRoute");

authRouter.post("/signup", signupValidator, async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ erros: errors.array() });
  }

  const { name, email, mobile, password } = req.body;

  const passwordHash = await bcrypt.hash(password, 10);
  const userId = await createUser({
    name,
    email,
    mobile,
    password: passwordHash,
  });

  res.status(201).json({ message: "User created", id: userId });
});

authRouter.post("/login", loginValidator, async (req, res) => {
  const { email, password } = req.body;

  const user = await findUserByEmailWithPassword(email);

  if (!user) {
    return res.status(401).json({ message: "User doesn't exists." });
  }

  const passwordValid = await bcrypt.compare(password, user.password);
  if (!passwordValid) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = jwt.sign(
    { id: user._id, email: user.email, name: user.name },
    process.env.SECRET_KEY,
    {
      expiresIn: "14d",
    }
  );

  res.status(200).json({ message: "Login success", token });
});

// TODO: implement refresh token for invalidation

module.exports = authRouter;
