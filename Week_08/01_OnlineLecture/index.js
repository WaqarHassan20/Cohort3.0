const mongoose = require("mongoose");
const express = require("express");
const { DATABASE_CONNECTION } = require("./imports");

const app = express();

const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");

app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);

(async () => {
  await mongoose.connect(DATABASE_CONNECTION);
  console.log("DataBase is connected successfully");
  app.listen(3000, () => {
    console.log("Server is running on the port 3000");
  });
})();
