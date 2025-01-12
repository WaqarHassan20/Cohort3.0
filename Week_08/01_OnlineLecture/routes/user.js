const { Router } = require("express");
const userRouter = Router();
const { userModel } = require("../db");

userRouter.post("/signup", (req, res) => {
  res.json({
    message: "User Signup Route",
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
