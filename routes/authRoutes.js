const bcrypt = require("bcrypt");
const { Router } = require("express");
const { validationResult } = require("express-validator");
const { signupValidator } = require("../middlewares/validators");
const { createUser } = require("../controllers/userController");

const authRouter = Router();

authRouter.post("/signup", signupValidator, async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ erros: errors.array() });
  }

  const { name, email, mobile, password } = req.body;

  const passwordHash = await bcrypt.hash(password, 10);

  const userId = createUser({
    name,
    email,
    mobile,
    password: passwordHash,
  });

  res.status(201).json({ message: "User created", id: userId });
});

module.exports = authRouter;
