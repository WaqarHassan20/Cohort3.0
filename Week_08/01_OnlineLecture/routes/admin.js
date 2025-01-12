const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");

adminRouter.get("/signup", (req, res) => {
  res.json({
    message: "Admin signup Route",
  });
});

adminRouter.get("/login", (req, res) => {
  res.json({
    message: "Admin login Route",
  });
});

adminRouter.get("/createCourse", (req, res) => {
  res.json({
    message: "Admin createCourse Route",
  });
});

adminRouter.get("/deleteCourse", (req, res) => {
  res.json({
    message: "Admin deleteCourse Route",
  });
});

adminRouter.get("/addCourse", (req, res) => {
  res.json({
    message: "Admin addCourse Route",
  });
});

module.exports = {
  adminRouter: adminRouter,
};
