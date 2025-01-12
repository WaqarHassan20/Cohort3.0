const { Router } = require("express");
const courseRouter = Router();
const { courseModel } = require("../db");

courseRouter.post("/purchase", async (req, res) => {
  res.json({
    message: "Course Purchase Route",
  });
});
courseRouter.get("/preview", async (req, res) => {
  res.json({
    message: "Course Preivew Route",
  });
});

module.exports = {
  courseRouter: courseRouter,
};
