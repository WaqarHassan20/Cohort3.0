import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_TOKEN } from "./config";

export function middleware(req: Request, res: Response, next: NextFunction) {
  const token = req.headers["authorization"] ?? "";

  if (!token) {
    res.status(401).json({ message: "Token not found" });
    return;
  }

  try {
    const decoded = jwt.verify(token, JWT_TOKEN);
    // @ts-ignore
    req.userId = decoded.userId;
    next();
  } catch (err) {
    res.status(403).json({ message: "Unauthorized User" });
  }
}

// export function middleware(
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): void {
//   const token = req.headers["authorization"] ?? "";

//   if (!token) {
//     res.status(401).json({ message: "Token not found" });
//     return;
//   }

//
// }
