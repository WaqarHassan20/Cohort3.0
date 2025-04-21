const { Router } = require("express");
const adminRouter = Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { z } = require("zod");
const { adminMiddleware } = require("../middlewares/adminMiddleware");
const { adminModel, courseModel } = require("../db");
const { JWT_ADMIN_SECRET } = require("../imports");

adminRouter.post("/signup", async (req, res) => {
  const requiredBody = z.object({
    email: z.string().email().min(8).max(30),
    password: z
      .string()
      .min(8)
      .max(20)
      .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
    firstName: z.string().min(4).max(20),
    lastName: z.string().min(4).max(20),
  });

  console.log(req.body);

  const parsedData = requiredBody.safeParse(req.body);
  if (!parsedData.success) {
    return res.json({
      message: "Invalid format of Values",
      Error: parsedData.error,
    });
  }

  const { email, password, firstName, lastName } = req.body;

  const admin = await adminModel.findOne({
    email: email,
  });
  if (admin) {
    return res.status(403).send({
      message: "Email already exists",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 3);
  try {
    await adminModel.create({
      email: email,
      password: hashedPassword,
      firstName: firstName,
      lastName: lastName,
    });

    res.json({ message: "ADMIN : Signed Up" });
  } catch (error) {
    res.status(403).send({
      message: "Admin Error while signing up",
      Error: error,
    });
  }
});

adminRouter.post("/signin", async (req, res) => {
  const requiredBody = z.object({
    email: z.string().email().min(8).max(30),
    password: z
      .string()
      .min(8)
      .max(20)
      .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
  });

  const parsedData = requiredBody.safeParse(req.body);

  if (!parsedData.success) {
    return res.json({
      message: "Invalid format of Values",
      Error: parsedData.error,
    });
  }

  const { email, password } = req.body;

  const admin = await adminModel.findOne({
    email: email,
  });

  if (!admin) {
    return res.status(403).send({
      message: "Admin account not found",
    });
  }

  const matchedPassword = await bcrypt.compare(password, admin.password);
  if (!matchedPassword) {
    return res.json({ message: "Incorrect Password" });
  }

  try {
    const token = jwt.sign({ id: admin._id }, JWT_ADMIN_SECRET);
    res.status(200).send({
      message: "Admin : signed In ",
      token: token,
    });
  } catch (error) {
    res.status(403).send({
      message: "Incorrect Credentials",
      Error: error,
    });
  }
});

adminRouter.post("/add-course", adminMiddleware, async (req, res) => {
  const adminId = req.adminId;
  const { title, description, price, imageURL } = req.body;

  try {
    const course = await courseModel.create({
      title: title,
      description: description,
      price: price,
      imageURL: imageURL,
      creatorId: adminId,
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

adminRouter.put("/update-course", adminMiddleware, async (req, res) => {
  const adminId = req.adminId;
  const { title, description, price, imageURL, courseId } = req.body;
  try {
    const updatedCourse = await courseModel.findOneAndUpdate(
      {
        creatorId: adminId,
        _id: courseId, // will be search by the id as "_id"
      },
      {
        title: title,
        description: description,
        price: price,
        imageURL: imageURL,
      }
    );

    if (!updatedCourse) {
      return res.json({
        message: "Course not found to be Updated",
      });
    }

    res.status(200).send({
      message: "Course Updated",
      courseId: courseId,
      creatorId: adminId,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error updating course",
      error: error.message,
    });
  }
});

adminRouter.get("/preview", async (req, res) => {
  const adminId = req.adminId;

  try {
    const courses = await courseModel.find({
      creatorId: adminId,
    });

    res.json({
      message: "All courses :",
      courses: courses,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error finding courses",
      error: error.message,
    });
  }
});

module.exports = {
  adminRouter: adminRouter,
};
