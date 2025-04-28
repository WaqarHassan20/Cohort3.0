import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { DATABASE_URL } from "./config.js";
import { mainRouter } from "./routes/index.js";
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1", mainRouter);

(async () => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log("Database connected successfully");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (error) {
    console.error("Error:", error);
  }
})();
