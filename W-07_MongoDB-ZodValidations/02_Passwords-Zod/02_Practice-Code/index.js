const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const zod = require("zod");
const bcrypt = require("bcrypt");
const express = require("express");
const { userModel, todoModel } = require("./db");
const JWT_SECRET = "BappaStunning30SaalStillRunning";
const { auth } = require("./auth");
const app = express();

mongoose.connect(
  "mongodb+srv://waqarhassan7661:MONGODBid786@cluster0.k8erd.mongodb.net/practice-project-two"
);

app.use(express.json());

app.post("/signup", async (req, res) => {
  const requiredObject = zod.object({
    email: zod.string().min(5).max(30).email(),
    password: zod.string().min(6).max(16),
    name: zod.string().min(3).max(20),
  });

  const parseDataWithSuccess = requiredObject.safeParse(req.body);
  if (!parseDataWithSuccess.success) {
    res.json({
      message: "Invalid Input Values",
      Error: parseDataWithSuccess.error,
    });
    return;
  }

  const name = req.body.name;
  const password = req.body.password;
  const email = req.body.email;

  let errorOccured = false;
  try {
    const hashedPassword = await bcrypt.hash(password, 6);
    console.log("Hashed password :", hashedPassword);

    await userModel.create({
      email: email,
      password: hashedPassword,
      name: name,
    });
  } catch (error) {
    res.json({
      Error: "Error Occured !",
    });
    errorOccured = true;
  }
  if (!errorOccured) {
    res.json({
      message: "You are successfully Signed-up",
    });
  }
});

app.post("/signin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await userModel.findOne({
    email: email,
  });

  if (!user) {
    res.json({
      message: "User does not exist in the DataBase",
    });
    return;
  }

  const passwordMatched = await bcrypt.compare(password, user.password);

  if (passwordMatched) {
    const token = jwt.sign({ id: user._id }, JWT_SECRET);
    // Add comment to this line how this id object is working
    res.json({
      token: token,
    });
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

  res.json({
    message: "your todo is created successfully",
  });
});

app.get("/todos", auth, async (req, res) => {
  const userId = req.userId;
  const todos = await todoModel.find({
    userId,
  });
  res.json({
    Todos: todos,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

/*

todo request route value
{
    "title" : "Go to the gym and do exercise to make your body active",
    "userId" : "67821cb2e48e36ab8ab394a7",
    "done" : "true"
}
    
{
    "userId" : "67821cb2e48e36ab8ab394a7"
}
        
{
    "email" : "aliabbaschaddhar@gmail.com",
    "password" : "Ali123",
    "name" : "HelloAli"
}

{
    "email" : "aliabbaschaddhar@gmail.com",
    "password" : "Ali123"
}

*/
