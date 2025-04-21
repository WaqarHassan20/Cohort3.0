const { Router } = require("express");
const userRouter = Router();
const { userModel, purchaseModel } = require("../db");
const jwt = require("jsonwebtoken");
require("dotenv").config();

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
    const token = jwt.sign({ id: user._id }, process.env.JWT_USER_SECRET);
    res.json({
      token: token,
    });
  } else {
    res.status(403).send({
      message: "Incorrect Credentials",
    });
  }
});

userRouter.get("/purchases", async (req, res) => {
  const userId = req.userId;

  const courses = await purchaseModel.find({
    userId,
  });

  res.json({
    message: "Purchased Courses",
    courses,
  });
});

module.exports = {
  userRouter: userRouter,
};
