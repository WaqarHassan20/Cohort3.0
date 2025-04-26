import express from "express";

const app = express();

app.post("/signup", (req, res) => {
  res.send("Hello World");
});
app.post("/signin", (req, res) => {
  res.send("Hello World");
});
app.get("/chats", (req, res) => {
  res.send("Hello World");
});
