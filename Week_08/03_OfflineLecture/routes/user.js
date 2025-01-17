const { Router } = require("express");
const { userAuth } = require("../middlewares/userMiddleware");
const { User, Course } = require("../db");
const userRouter = Router();

userRouter.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  await User.create({
    username: username,
    password: password,
  });

  res.json({
    message: "User signed Up successfully",
  });
});

userRouter.get("/courses", userAuth, async (req, res) => {
  const courses = await Course.find({});

  res.json({
    message: "All courses are :",
    courses,
  });
});

userRouter.get("/purchasedCourses", userAuth, async (req, res) => {
  const courseId = req.params.courseId;
  const username = req.headers.username;

  await User.updateOne(
    {
      username: username,
    },
    {
      purchasedCourses: {
        $push: courseId,
      },
    }
  );

  res.json({
    message: "Purchase Successfully",
  });
});

userRouter.post("/courses/:courseId", userAuth, (req, res) => {});

module.exports = {
  userRouter,
};
