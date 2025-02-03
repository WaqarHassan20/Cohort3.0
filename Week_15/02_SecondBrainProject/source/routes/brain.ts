import { ContentModel, UserModel } from "../database/db";
import { Router } from "express";
import { auth } from "../middleware/auth";
import { Types } from "mongoose";
const BrainRouter = Router();

interface Content extends Document {
  link: string;
  type: string;
  title: string;
  tags: string[];
  UserId: Types.ObjectId;
}

BrainRouter.post("/shareLink", auth, async (req, res) => {
  const { contentId, receiverName } = req.body;

  console.log(contentId, receiverName);

  try {
    const content = await ContentModel.findById(contentId);

    if (!content) {
      res.status(404).json({ message: "Content not found" });
      return;
    }

    const receiver = await UserModel.findOne({ username: receiverName });

    if (!receiver) {
      res.status(404).json({ message: "Receiver not found" });
      return;
    }

    const LinkToShare = `${req.protocol}://${req.get(
      "host"
    )}/content/${contentId}`;

    if (LinkToShare) {
      res.status(200).json({
        message: "Content shared successfully",
        Link: LinkToShare,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      Error: error,
    });
  }
});

// BrainRouter.post("/shareContent", auth, async (req, res) => {
//   const { contentId, username } = req.body;
//   try {
//     const originalContent = await ContentModel.findById(contentId);
//     if (!originalContent) {
//       res.status(404).json({ message: "Original content not found" });
//       return;
//     }

//     const receiver = await UserModel.findOne({ username });
//     if (!receiver) {
//       res.status(404).json({ message: "Receiver not found" });
//       return;
//     }

//     const contentObj = originalContent.toObject();
//     const deletedId = delete contentObj._id;

//     const newContent = {
//       ...contentObj,
//       UserId: receiver._id,
//     };

//     const duplicatedContent = await ContentModel.create(newContent);

//     res.status(201).json({
//       message: "Content duplicated successfully",
//       duplicatedContent,
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Internal server error",
//       Error: error,
//     });
//   }
// });

export { BrainRouter };
