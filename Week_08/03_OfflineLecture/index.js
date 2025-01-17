const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const { DATABASE_CONNECTION } = require("./imports");
const { adminRouter } = require("./routes/admin");
const { userRouter } = require("./routes/user");

app.use(bodyParser.json());
app.use("/admin", adminRouter);
app.use("/user", userRouter);

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
