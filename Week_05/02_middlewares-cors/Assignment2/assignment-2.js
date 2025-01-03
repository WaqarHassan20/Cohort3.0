const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.post("/sum", (req, res) => {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);
  const ans = a + b;
  res.json({
    Answer: ans,
  });
});

app.listen(3000, () => {
  console.log("Server is running on the port 3000");
});
