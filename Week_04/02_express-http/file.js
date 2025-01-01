const fs = require("fs");
const express = require("express");
const app = express();

app.get("/file/:fileName", (req, res) => {
  const name = req.params.fileName;
  fs.readFile(name, "utf-8", (err, data) => {
    res.json({
      data,
    });
  });
});

app.listen(3000);

// URL in browser for this file code to
// to show data inside the hello.txt
// http://localhost:3000/file/hello.txt
