const { Router } = require("express");
const userRouter = Router();
const { userModel } = require("../db");

userRouter.post("/signup", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  await userModel.create({
    email: email,
    password: hashedPassword,
    name: name,
  });
});

userRouter.post("/login", (req, res) => {
  res.json({
    message: "User Login Route",
  });
});

userRouter.get("/purchases", (req, res) => {
  res.json({
    message: "User Purchased Route",
  });
});

module.exports = {
  userRouter: userRouter,
};
