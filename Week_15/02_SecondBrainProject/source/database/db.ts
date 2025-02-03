import { Schema, Types, model } from "mongoose";

const UserSchema = new Schema({
  username: { type: String, unique: true },
  password: String,
});

const contentTypes = ["images", "videos", "articles", "audio"];

const ContentSchema = new Schema({
  link: { type: String, required: true },
  type: { type: String, enum: contentTypes, required: true },
  title: { type: String, required: true },
  tags: [{ type: String, ref: "Tags", required: true }],
  UserId: { type: Types.ObjectId, ref: "Users", required: true },
});

export const UserModel = model("Users", UserSchema);
export const ContentModel = model("Content", ContentSchema);
