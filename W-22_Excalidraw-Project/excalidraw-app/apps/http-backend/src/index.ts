import express from "express";
import jwt from "jsonwebtoken";
import { JWT_TOKEN } from "./config";
import { middleware } from "./middleware";
const app = express();

app.use(express.json());

app.use("/signup", (req, res) => {});

app.use("/signin", (req, res) => {
  const id = 1;
  const token = jwt.sign({ id }, JWT_TOKEN);

  res.json({ token });
});

app.use("/room", middleware, (req, res) => {
  res.json({ roomId: 123 });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
