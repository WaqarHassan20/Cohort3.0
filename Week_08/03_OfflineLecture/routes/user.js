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

// this is the course purchasing route . that user is purchasing the course
userRouter.post("/courses/:courseId", userAuth, async (req, res) => {
  const courseId = req.params.courseId;
  const username = req.headers.username;

  await User.updateOne(
    {
      username: username,
    },
    {
      $push: {
        purchasedCourses: courseId,
      },
    }
  );

  res.json({
    message: "Purchased Successfully",
  });
});

// this is showing the all purchased courses
userRouter.get("/purchasedCourses", userAuth, async (req, res) => {
  const username = req.headers.username;
  const user = await User.findOne({
    username: username,
  });

  const purchasedCourses = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });

  res.json({
    message: "All purchased Courses : ",
    purchasedCourses: purchasedCourses,
  });
});

module.exports = {
  userRouter,
};
