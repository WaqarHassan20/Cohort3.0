import { middleware } from "./middleware";
import { JWT_TOKEN } from "@repo/backend-common/config";
import {
  CreateUserSchema,
  SignInSchema,
  CreateRoomSchema,
} from "@repo/common/types";
import jwt from "jsonwebtoken";
import express from "express";
const app = express();

app.use(express.json());

app.use("/signup", (req, res) => {
  const data = CreateUserSchema.safeParse(req.body);

  if (!data.success) {
    res.json({ message: "Invalid Inputs" });
    return;
  }
});

app.use("/signin", (req, res) => {
  const data = SignInSchema.safeParse(req.body);
  if (!data.success) {
    res.json({ message: "Invalid Inputs" });
    return;
  }

  const userId = 1;
  const token = jwt.sign({ userId }, JWT_TOKEN);

  res.json({ token });
});

app.use("/room", middleware, (req, res) => {
  const data = CreateRoomSchema.safeParse(req.body);
  if (!data.success) {
    res.json({ message: "Invalid Inputs" });
    return;
  }
  res.json({ roomId: 123 });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
