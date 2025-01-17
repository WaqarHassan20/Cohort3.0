const mongoose = require("mongoose");
const schema = mongoose.Schema;


const AdminSchema = new schema({
  username: String,
  password: String,
});

const UserSchema = new schema({
  username: String,
  password: String,
  purchasedCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "course",
    },
  ],
});

const CourseSchema = new schema({
  title: String,
  description: String,
  imageURL: String,
  price: Number,
});

const Admin = mongoose.model("admin", AdminSchema);
const User = mongoose.model("user", UserSchema);
const Course = mongoose.model("course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
