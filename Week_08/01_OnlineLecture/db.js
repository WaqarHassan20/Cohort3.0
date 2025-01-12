const mongoose = require("mongoose");
const schema = mongoose.Schema;
const objectId = mongoose.Schema.ObjectId;
console.log("DataBase file is connected");

mongoose.connect(
  "mongodb+srv://waqarhassan7661:MONGODBid786@cluster0.k8erd.mongodb.net/Course-Selling-App"
);

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
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);

module.exports = {
  userModel,
  adminModel,
  courseModel,
  purchaseModel,
};
