const mongoose = require("mongoose");
const schema = mongoose.Schema;
const objectId = mongoose.Schema.ObjectId;

const userSchema = new schema({
  email: { unique: true, type: String },
  firstName: String,
  LastName: String,
  password: String,
});
mongoose;
const adminSchema = new schema({
  email: { unique: true, type: String },
  firstName: String,
  LastName: String,
  password: String,
});

const courseSchema = new schema({
  title: String,
  description: String,
  price: Number,
  imageURL: String,
  creatorId: objectId,
});

const purchaseSchema = new schema({
  courseId: objectId,
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
