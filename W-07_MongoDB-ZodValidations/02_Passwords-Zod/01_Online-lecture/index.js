const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const express = require("express");
const bcrypt = require("bcrypt");
const zod = require("zod");
const JWT_SECRET = "BappaStunning30SaalStillRunning";
const { userModel, todoModel } = require("./db");
const { auth } = require("./auth");
const app = express();

mongoose.connect();

app.use(express.json());

app.post("/signup", async (req, res) => {
  const requiredBody = zod.object({
    email: zod.string().min(5).max(30).email(),
    password: zod
      .string()
      .min(6)
      .max(16)
      .regex(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,20}$/
      ),
    name: zod.string().min(3).max(20),
  });

  // This regex ensures the password:
  // - ^: Starts matching from the beginning of the string.
  // - (?=.*[A-Za-z]): Ensures at least one letter (upper or lowercase) is present anywhere in the string.
  // - (?=.*\d): Ensures at least one digit (0-9) is present anywhere in the string.
  // - [A-Za-z\d]{8,20}: The password must be 8 to 20 characters long, and can only contain letters (A-Z, a-z) and digits (0-9).
  // - $: Ends matching at the end of the string, ensuring the entire string fits the pattern.

  const parseDataWithSuccess = requiredBody.safeParse(req.body);
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
    console.log("Hashed Password : ", hashedPassword);

    //Using await because it making a transaction to database and so that transaction will take time so
    await userModel.create({
      email: email,
      password: hashedPassword,
      name: name,
    });
  } catch (error) {
    res.json({
      message: "Error Occured !",
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

  console.log(user);

  if (!user) {
    res.json({
      message: "User does not exist in the DataBase",
    });
    return;
  }

  const passwordMatched = await bcrypt.compare(password, user.password);
  // This above statment returns a promise , always remember this.

  if (passwordMatched) {
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
