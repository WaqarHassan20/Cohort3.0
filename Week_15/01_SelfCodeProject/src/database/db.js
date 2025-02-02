const mongoose = require("mongoose");
const schema = mongoose.Schema;
const objectId = mongoose.Schema.Types.ObjectId;

const TagsSchema = new schema({
  title: { type: String, required: true, unique: true },
});

const UsersSchema = new schema({
  username: { type: String },
  password: { type: String, required: true },
});

const contentTypes = ["images", "videos", "articles", "audio"];
const ContentSchema = new schema({
  link: { type: String, required: true },
  type: { type: String, enum: contentTypes, required: true },
  title: { type: String, required: true },
  tags: [{ type: objectId, ref: "Tags", required: true }],
  userId: { type: objectId, ref: "Users", required: true },
});

const LinkSchema = new schema({
  hash: { type: String, required: true },
  userId: { type: objectId, ref: "Users" },
});

const UserModel = mongoose.model("Users", UsersSchema);
const ContentModel = mongoose.model("Content", ContentSchema);
const TagsModel = mongoose.model("Tags", TagsSchema);
const LinkModel = mongoose.model("Links", LinkSchema);

module.exports = {
  UserModel,
  ContentModel,
  TagsModel,
  LinkModel,
};

// // sample for User schema : sign up and then token for sign in
// {
//   "username": "HelloWorld",
//   "password": "Password12345"
// }

// // sample for content schema : create request
// {
//   "link": "https://example.com/my-article",
//   "type": "articles",
//   "title": "My First Article",
//   "tags": [
//     "60d5ec49f1a2c84f5c8e8b9d",
//     "60d5ec49f1a2c84f5c8e8b9e"
//   ],
//   "userId": "60d5ec49f1a2c84f5c8e8b9f"
// }

// // sample for content schema : get request
// {
//   "userId" : "679faa3499ba08be36e6817a"
// }

// // sample for content schema : delete request
// {
//   "id" : "679faa3499ba08be36e6817a"
// }
