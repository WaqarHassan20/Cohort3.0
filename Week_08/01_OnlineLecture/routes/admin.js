const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");
const { JWT_ADMIN_SECRET, adminMiddleWare } = require("../imports");
const jwt = require("jsonwebtoken");

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
    const token = jwt.sign({ id: admin_id }, JWT_ADMIN_SECRET);
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
  const { title, description, price, imageURL, creatorId } = req.body;

  const course = await adminModel.create({
    title,
    description,
    price,
    imageURL,
    creatorId,
  });

  res.json({
    message: "Course is created Successfully",
    courseId: course.id,
  });
});

adminRouter.get("/deleteCourse", (req, res) => {
  res.json({
    message: "Admin deleteCourse Route",
  });
});

adminRouter.get("/addCourse", (req, res) => {
  res.json({
    message: "Admin addCourse Route",
  });
});

module.exports = {
  adminRouter: adminRouter,
};
