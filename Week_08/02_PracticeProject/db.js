const mongoose = require("mongoose");
const schema = mongoose.Schema;
const objectId = mongoose.Schema.ObjectId;

const userSchema = new schema({
  email: { type: String, unique: false },
  password: String,
  firstName: String,
  lastName: String,
});

const adminSchema = new schema({
  email: { type: String, unique: false },
  password: String,
  firstName: String,
  lastName: String,
});

const courseSchema = new schema({
  description: String,
  creatorId: objectId,
  imageURL: String,
  title: String,
  price: Number,
});

const purchaseSchema = new schema({
  cFourseId: objectId,
  userId: objectId,
});

const userModel = mongoose.model("users", userSchema);
const adminModel = mongoose.model("admins", adminSchema);
const courseModel = mongoose.model("courses", courseSchema);
const purchaseModel = mongoose.model("purchases", purchaseSchema);

module.exports = {
  userModel,
  adminModel,
  courseModel,
  purchaseModel,
};
