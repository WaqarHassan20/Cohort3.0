// Two in One function

const jwt = require("jsonwebtoken");

function authMiddleware(role, secretKey) {
  return (req, res, next) => {
    const token = req.headers.token;

    if (!token) {
      return res.status(403).send({
        message: "Token is missing",
      });
    }

    try {
      const decoded = jwt.verify(token, secretKey);

      if (decoded) {
        if (role === "admin") {
          req.adminId = decoded.id;
        } else if (role === "user") {
          req.userId = decoded.id;
        }

        next();
      } else {
        res.status(403).send({
          message: `You are not an authorized ${role.toUpperCase()}`,
        });
      }
    } catch (error) {
      res.status(403).send({
        Error: error,
      });
    }
  };
}

module.exports = {
  authMiddleware: authMiddleware,
};
