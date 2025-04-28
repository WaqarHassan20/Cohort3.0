import jwt, { decode } from "jsonwebtoken";
import { JWT_SECRET } from "../config.js";
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  if (!token) {
    return res.status(401).json({ message: "Authorization is required" });
  }

  try {
    const decodedData = jwt.verify(token, JWT_SECRET);
    console.log(decodedData);
    if (decodedData) {
      req.userId = decodedData.userId;
      console.log("MiddleWare is passed successfully");
      next();
    } else {
      return res.status(401).json({ message: "Invalid token" });
    }
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

export { authMiddleware };
