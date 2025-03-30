import mongoose, { Schema, Types, model } from "mongoose";

const contentTypes = ["images", "videos", "articles", "audio"];

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const ContentSchema = new Schema({
  link: { type: String, required: true },
  type: { type: String, enum: contentTypes, required: true },
  title: { type: String, required: true },
  tags: [{ type: String, ref: "Tags", required: true }],
  UserId: { type: Types.ObjectId, ref: "Users", required: true },
});

const LinkSchema = new Schema({
  hash: String,
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "Users",
    required: true,
    unique: true,
  },
});

export const UserModel = model("Users", UserSchema);
export const ContentModel = model("Content", ContentSchema);
export const LinkModel = model("Links", LinkSchema);
