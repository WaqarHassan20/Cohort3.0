const express = require("express");
const app = express();

// // There is also a library called as body-parser to
// // parse the data of the body from json to simple format.
// const BP = require("body-parser");
// const bodyParser = BP.json();
// app.use(bodyParser);

// // In express, if you want to send the data in JSON format
// // you first need to parse the data of the body.
// // So we use the built-in library function of express
// // as the middleware function.
// // Express.json() in itself gives back a function which in
// // itself returns a function that includes the
// // req,res,next functions access in it.
// // This will now parse the data in simple
// // query args to perform operation on it.

const middleware = express.json(); // used because the body accept the plain value as input query But we are sending the data in json format.
app.use(middleware);

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
