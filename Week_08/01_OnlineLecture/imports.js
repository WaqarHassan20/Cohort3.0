const JWT_USER_SECRET = "BappaStunning";
const JWT_ADMIN_SECRET = "StillRunning";
const { adminMiddleWare } = require("./middlewares/adminMiddleware");
const { userMiddleWare } = require("./middlewares/userMiddleware");
const DATABASE_CONNECTION =
  "mongodb+srv://waqarhassan7661:MONGODBid786@cluster0.k8erd.mongodb.net/Course-Selling-App";

module.exports = {
  JWT_ADMIN_SECRET,
  JWT_USER_SECRET,
  DATABASE_CONNECTION,
  adminMiddleWare,
  userMiddleWare,
};
