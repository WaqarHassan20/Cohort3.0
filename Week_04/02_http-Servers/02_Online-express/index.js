const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<b>Hello world, This is my very first local server!<b>");
});

app.listen(3000);

// These both are the same URL address
// for the data request
// http://localhost:3000
// http://127.0.0.1:3000
