import * as express from "express";

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


app.listen(3001),()=>{
  console.log("Server is running on port 3001");
};