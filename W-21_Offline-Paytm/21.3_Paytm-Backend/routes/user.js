import jwt from "jsonwebtoken";
import express from "express";
const userRouter = express.Router();
import { z } from "zod";
import bcrypt from "bcrypt";
import { Account, User } from "../db.js";
import { JWT_SECRET } from "../config.js";

const requiredObject = z.object({
  username: z.string().min(3).max(30).trim().toLowerCase(), // Note: This transforms input to lowercase
  password: z.string().min(6),
  firstName: z.string().max(50).trim(),
  lastName: z.string().max(50).trim(),
});

// ========================================= //
// Sign Up route for user //
// ========================================= //

userRouter.post("/signup", async (req, res) => {
  const parsedData = requiredObject.safeParse(req.body);

  if (!parsedData.success) {
    return res.json("Invalid Input data");
  }

  const { username, password, firstName, lastName } = parsedData.data;
  try {
    const user = await User.findOne({
      username: username,
    });

    if (user) {
      return res.json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username: username,
      password: hashedPassword,
      firstName: firstName,
      lastName: lastName,
    });

    // ====================================== //
    // for new user, created a new account //

    const userId = newUser._id;

    const balance = Math.floor(Math.random() * 10000 + 1);

    await Account.create({
      userId: userId,
      balance: balance,
    });

    console.log("Balance created for new user is : ", balance);

    // ====================================== //

    return res.json({
      message: "You have Sign-Up Sucessfully",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({ message: "Server Error" });
  }
});

// ========================================= //
// Sign In route for user //
// ========================================= //

userRouter.post("/signin", async (req, res) => {
  const parsedData = requiredObject.safeParse(req.body);

  const { username } = parsedData.data;

  if (!parsedData.success) {
    return res.json("Invalid Input data");
  }

  const user = await User.findOne({
    username: username,
  });

  if (!user) {
    return res.json({
      message: "User does not exist, please sign up",
    });
  }

  const token = jwt.sign({ userId: user._id }, JWT_SECRET);

  return res.json({
    message: "You have Sign-in Sucessfully",
    token: token,
  });
});

// ========================================= //
// Bulk search route for user //
// ========================================= //
// This will work when the query is passed by firstname or lastname
// only not the username or any of its combination of letters

userRouter.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";

  const users = await User.find({
    $or: [
      {
        firstName: {
          $regex: filter,
        },
      },
      {
        lastName: {
          $regex: filter,
        },
      },
    ],
  });

  res.json({
    user: users.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});

export { userRouter };
