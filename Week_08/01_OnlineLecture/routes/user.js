const { Router } = require("express");
const userRouter = Router();
const { userModel } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_USER_SECRET } = require("../imports");

userRouter.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  await userModel.create({
    email,
    password,
    firstName,
    lastName,
  });

  res.json({
    message: "You are successfully Signed-Up as USER",
  });
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  await userModel.findOne({
    email,
    password,
  });

  if (user) {
    const token = jwt.sign({ id: user._id }, JWT_USER_SECRET);
    res.json({
      token: token,
    });
  } else {
    res.status(403).send({
      message: "Incorrect Credentials",
    });
  }
});

userRouter.get("/purchases", (req, res) => {
  res.json({
    message: "User Purchased Route",
  });
});

module.exports = {
  userRouter: userRouter,
};
