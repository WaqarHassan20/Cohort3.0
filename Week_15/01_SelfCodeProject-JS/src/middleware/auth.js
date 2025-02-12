const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const SECRET = process.env.JWT_SECRET;

function auth(req, res, next) {
  const token = req.headers.authorization;
  try {
    if (!token) {
      return res.status(403).send({ message: "No token !" });
    }
    // Checking the validity of JWT_SECRET is very must without it will throw an error
    if (!SECRET) {
      return res.status(403).send({
        msg: "JWT is undefined",
      });
    }
    const decoded = jwt.verify(token, SECRET);
    // @ts-ignore
    req.userId = decoded.id;
    next();
  } catch (error) {
    res.status(403).send({
      message: "Invalid Token Input",
    });
  }
}

module.exports = {
  auth,
};
