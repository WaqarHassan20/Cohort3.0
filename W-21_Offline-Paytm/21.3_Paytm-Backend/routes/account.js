import express from "express";
import { Account } from "../db.js";
import { authMiddleware } from "../middleware/auth.js";
import mongoose from "mongoose";
const accountRouter = express.Router();

accountRouter.get("/balance", authMiddleware, async (req, res) => {
  const userId = req.userId;

  const user = await Account.findOne({
    userId: userId,
  });

  console.log(userId);
  console.log(user);

  if (!user) {
    return res.status(404).json({
      message: "Account not found",
    });
  }

  return res.status(200).json({
    balance: user.balance,
  });
});

// ========================================= //
// adding new route for transfering money //
// ========================================= //

accountRouter.post("/transfer", authMiddleware, async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { to, amount } = req.body;

    const account = await Account.findOne({ userId: req.userId }).session(
      session
    );

    if (!account || account.balance < amount) {
      await session.abortTransaction();
      session.endSession();
      return res.json({
        message: "Insufficient balance",
      });
    }

    const toAccount = await Account.findOne({ userId: to }).session(session);

    if (!toAccount) {
      await session.abortTransaction();
      session.endSession();
      return res.json({
        message: "Invalid recipient, Account not found",
      });
    }

    await Account.updateOne(
      { userId: req.userId },
      { $inc: { balance: -amount } }
    ).session(session);

    await Account.updateOne(
      { userId: to },
      { $inc: { balance: amount } }
    ).session(session);

    await session.commitTransaction();
    session.endSession();

    return res.json({
      message: "Money transferred Successfully",
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
});

export { accountRouter };
