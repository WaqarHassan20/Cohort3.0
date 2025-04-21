const { Router } = require("express");
const courseRouter = Router();
const { courseModel, purchaseModel } = require("../db");

courseRouter.post("/purchase", async (req, res) => {
  const courseId = req.query.courseId;
  const userId = req.userId;

  try {
    const course = await courseModel.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    const purchases = await purchaseModel.create({
      creatorId: userId,
      _id: courseId,
    });

    const courseData = await courseModel.find({
      _id: {
        $in: purchases.map((p) => p.courseId),
      },
    });

    res.status(200).json({
      message: "Course Detail:",
      courseData: courseData,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error purchasing course", error: error.message });
  }
});
courseRouter.get("/preview", async (req, res) => {
  try {
    const courses = await courseModel.find({});
    res.status(200).json({
      message: "Courses Preview",
      courses: courses,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching courses",
      error: error.message,
    });
  }
});

module.exports = {
  courseRouter: courseRouter,
};
