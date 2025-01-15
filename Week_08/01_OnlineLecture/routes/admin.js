const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");
const { adminMiddleWare } = require("../middlewares/adminMiddleware");
const jwt = require("jsonwebtoken");
require("dotenv").config();

adminRouter.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  await adminModel.create({
    email,
    password,
    firstName,
    lastName,
  });

  res.json("You are successfully Signed-Up as ADMIN");
});

adminRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const admin = await adminModel.findOne({
    email,
    password,
  });

  if (!admin) {
    res.json({
      message: "You does not exist in the DataBase",
    });
    return;
  }

  if (admin) {
    const token = jwt.sign({ id: admin_id }, process.env.JWT_ADMIN_SECRET);
    res.status(200).send({
      token: token,
    });
  } else {
    res.status(403).send({
      message: "Incorrect Credentials",
    });
  }
});

adminRouter.get("/createCourse", adminMiddleWare, async (req, res) => {
  const userId = req.userId;
  // this user id comes from the middleware as it executes the next function
  // and received at the request of the get functoin of Fcreate course

  const { title, description, price, imageURL } = req.body;

  const course = await adminModel.create({
    title,
    description,
    price,
    imageURL,
    userId,
  });

  res.json({
    message: "Course is created Successfully",
    courseId: course.id,
  });
});

adminRouter.put("/addCourse", adminMiddleWare, async (req, res) => {
  const adminId = req.adminId;
  const { title, description, price, imageURL, courseId } = req.body;
  const course = adminModel.findOneAndUpdate(
    {
      _id: courseId,
      creatorId: adminId,
    },
    {
      title,
      description,
      price,
      imageURL,
    }
  );
  if (!course) {
    res.json({
      message: "Course not found",
    });
  }

  res.json({
    message: "Admin course Updated ",
    courseId,
    creatorId,
  });
});

adminRouter.get("seeAllCourses", async (req, res) => {
  const adminId = req.adminId;
  const courses = await adminModel.find({
    adminId,
  });

  res.json({
    message: "All courses founded",
    course: courses,
  });
});

module.exports = {
  adminRouter: adminRouter,
};
