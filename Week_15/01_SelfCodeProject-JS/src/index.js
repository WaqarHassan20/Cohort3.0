const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { ContentRouter } = require("./routes/content");
const { UserRouter } = require("./routes/user");
dotenv.config();

const DB_KEY = process.env.DATABASE_KEY;
if (!DB_KEY) {
  response.status(400).send({
    message: "DATABASE_KEY is not defined",
  });
}

app.use(express.json());

app.use("/user", UserRouter);
app.use("/content", ContentRouter);

(async function call() {
  try {
    await mongoose.connect(DB_KEY);
    console.log("DataBase is connected successfully");
    app.listen(3000, () => {
      console.log("Server is running on the port 3000");
    });
  } catch (error) {
    console.log("Error : ", error);
  }
})();
