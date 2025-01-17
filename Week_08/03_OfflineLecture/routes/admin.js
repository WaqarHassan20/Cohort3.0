const { Router } = require("express");
const { Admin, Course } = require("../db");
const { adminAuth } = require("../middlewares/adminMiddleware");
const adminRouter = Router();

adminRouter.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  Admin.create({
    username: username,
    password: password,
  })
    .then(() => {
      res.status(200).send({
        message: "Admin created successfully",
      });
    })
    .catch(() => {
      res.status(403).send({
        message: "Some error occured",
      });
    });
  console.log("Request Body:", req.body);
  console.log("Username:", username, "Password:", password);
});

adminRouter.post("/courses", adminAuth, async (req, res) => {
  const { title, description, price, imageURL } = req.body;
  try {
    const course = await Course.create({
      title: title,
      description: description,
      price: price,
      imageURL: imageURL,
    });

    res.json({
      message: "Course is created successfully by ADMIN",
      courseId: course._id,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error creating course",
      error: error.message,
    });
  }
});

adminRouter.get("/courses", adminAuth, async (req, res) => {
  const allCourses = await Course.find({});

  res.json({
    message: "All courses : ",
    allCourses,
  });
});

module.exports = {
  adminRouter,
};
