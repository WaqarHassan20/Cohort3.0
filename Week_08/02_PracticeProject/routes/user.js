const { Router } = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userRouter = Router();
const z = require("zod");
const { userModel, courseModel } = require("../db");
const { userMiddleware } = require("../middlewares/userMiddleware");
const { JWT_USER_SECRET } = require("../imports");

userRouter.post("/signup", async (req, res) => {
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

  const parsedData = requiredBody.safeParse(req.body);
  if (!parsedData.success) {
    return res.status(400).json({
      message: "Invalid Input Format",
      error: parsedData.error.errors,
    });
  }

  try {
    const { email, password, firstName, lastName } = parsedData.data;

    const user = await userModel.findOne({
      email: email,
    });
    if (user) {
      return res.status(403).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await userModel.create({
      email: email,
      password: hashedPassword,
      firstName: firstName,
      lastName: lastName,
    });

    return res.status(201).json({ message: "User Signed Up" });
  } catch (error) {
    res.status(500).send({
      message: "An error occurred during signup",
      Error: error.message,
    });
  }
});

userRouter.post("/signin", async (req, res) => {
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
    return res.status(400).send({
      message: "Invalid Input format",
      Error: parsedData.error,
    });
  }

  const { email, password } = parsedData.data;

  try {
    const user = await userModel.findOne({
      email: email,
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const matchedPassword = await bcrypt.compare(password, user.password);
    if (!matchedPassword) {
      return res.json({ message: "Incorrect Password" });
    }

    const token = jwt.sign({ id: user._id }, JWT_USER_SECRET);
    res.status(200).send({
      token: token,
      message: "USER Signed In",
    });
  } catch (error) {
    res.status(401).send({
      message: "Error occured during sign In",
      Error: error.message,
    });
  }
});

userRouter.get("/purchases", userMiddleware, async (req, res) => {
  try {
    const userId = req.userId;
    const courses = await courseModel.find({
      userId: userId,
    });
    return res.json({
      message: "Purchased Courses",
      courses: courses,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Failed to retrieve purchased courses",
      Error: error.message,
    });
  }
});

module.exports = {
  userRouter: userRouter,
};
