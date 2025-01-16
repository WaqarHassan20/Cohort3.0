const express = require("express");
const mongoose = require("mongoose");
const { DATABASE_CONNECTION } = require("./imports");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(cors());
const { userRouter } = require("./routes/user");
const { adminRouter } = require("./routes/admin");
const { courseRouter } = require("./routes/course");

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);

(async () => {
  try {
    await mongoose.connect(DATABASE_CONNECTION);
    console.log("DataBase is connected successfully");
    app.listen(3000, () => {
      console.log("Server is running on the port 3000");
    });
  } catch (error) {
    console.log("Error : ", error);
  }
})();
