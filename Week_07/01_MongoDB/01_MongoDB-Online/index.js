const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "BappaStunning30SaalStillRunning";
const { userModel, todoModel } = require("./db");
const { auth } = require("./auth");
const app = express();

mongoose.connect(
  "mongodb+srv://waqarhassan7661:MONGODBid786@cluster0.k8erd.mongodb.net/helloUser-123"
);

app.use(express.json());

app.post("/signup", async (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  const email = req.body.email;

  //Using await because it making a transaction to database and so that transaction will take time so
  try {
    await userModel.create({
      email: email,
      password: password,
      name: name,
    });
  } catch (error) {
    res.json({
      error: e,
    });
  }

  res.json({
    message: "You are successfully Signed-up",
  });
});
app.post("/signin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await userModel.findOne({
    email: email,
    password: password,
  });

  console.log(user);

  if (user) {
    const token = jwt.sign({ id: user._id }, JWT_SECRET);
    res.json({ token: token });
  } else {
    res.status(403).send({ message: "Incorrect Credential Values" });
  }
});

app.post("/todo", auth, async (req, res) => {
  const title = req.body.title;
  const done = req.body.done;
  const userId = req.userId;

  await todoModel.create({
    title: title,
    done: done,
    userId: userId,
  });

  res.json({ message: "Your todo is added successfully" });
});

app.get("/todos", auth, async (req, res) => {
  const userId = req.userId;
  const todos = await todoModel.find({
    userId,
  });
  res.json({
    todos,
  });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
