const { Router } = require("express");
const courseRouter = Router();
const { courseModel } = require("../db");
const { userMiddleWare } = require("../middlewares/userMiddleware");

courseRouter.post("/purchase", userMiddleWare, async (req, res) => {
  const uesrId = req.uesrId;
  const courseId = req.body.courseId;

  const purchases = await purchaseModel.create({
    uesrId,
    courseId,
  });

  const courseData = await courseModel.find({
    _id: {
      $in: purchases.map((p) => p.courseId),
    },
  });

  res.json({
    message: "Course Purchased Successfully",
    purchases,
    courseData,
  });
});

courseRouter.get("/preview", async (req, res) => {
  const courses = await courseModel.find({});

  res.json({
    message: "Course Preivew Route",
    courses,
  });
});

module.exports = {
  courseRouter: courseRouter,
};
