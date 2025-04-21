const { UserModel } = require("../database/db");
const { Router } = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const { z } = require("zod");
const UserRouter = Router();
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined");
}

UserRouter.post("/sign-up", async (req, res) => {
  // const requiredBody = z.object({
  //   name: z.string().min(4).max(20),
  //   password: z.string().min(4).max(20),
  // });

  // const parsedData = requiredBody.safeParse(req.body);
  // if (!parsedData.success) {
  //   return res.status(400).send({
  //     message: "Invalid Input Data",
  //     Error: parsedData.error,
  //   });
  // }

  try {
    // const { username, password } = parsedData.data;
    const { username, password } = req.body;

    const user = await UserModel.findOne({ username: username });
    if (user) {
      return res.json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await UserModel.create({
      username: username,
      password: hashedPassword,
    });

    return res.status(201).send({
      message: "User signed Up successfully",
    });
  } catch (error) {
    res.status(500).send({
      message: "Error Occured",
      Error: error,
    });
  }
});

UserRouter.post("/sign-in", async (req, res) => {
  // const requiredBody = z.object({
  //   name: z.string().min(4).max(20),
  //   password: z
  //     .string()
  //     .min(4)
  //     .max(20)
  //     .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
  // });

  // const parsedData = requiredBody.safeParse(req.body);
  // if (!parsedData.success) {
  //   return res.status(400).send({
  //     message: "Invalid Input Data",
  //     Error: parsedData.error,
  //   });
  // }

  try {
    // const { username, password } = parsedData.data;
    const { username, password } = req.body;
    const user = await UserModel.findOne({
      username: username,
    });

    if (!user) {
      return res.status(404).send({
        message: "User not found",
      });
    }

    const matchedPassword = await bcrypt.compare(password, user.password);

    if (!matchedPassword) {
      return res.json({
        message: "Password Incorrect",
      });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET);
    res.status(200).send({ message: "User Signed In", Token: token });
  } catch (error) {
    res.status(401).send({ message: "Error during Signing In" });
  }
});

module.exports = { UserRouter };
