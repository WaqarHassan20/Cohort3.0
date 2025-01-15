const mongoose = require("mongoose");
const express = require("express");
require("dotenv").config();

const app = express();

const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");

app.use(express.json());

app.use("/api/v1/user", userRouter);
//if any request will come at /user route then it will get routed to userRouter and will implement the code present in the user.js

app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);

(async () => {
  try {
    await mongoose.connect(process.env.DATABASE_CONNECTION);
    console.log("DataBase is connected successfully");
    app.listen(3000, () => {
      console.log("Server is running on the port 3000");
    });
  } catch (error) {
    console.log("Error : ", error);
  }
})();
