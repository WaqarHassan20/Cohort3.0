import { ContentModel } from "../database/db";
import { Router } from "express";
const ContentRouter = Router();
import { z } from "zod";
import { auth } from "../middleware/auth";

// Craete Content sample data
// {
//   "link": "https://example.com/resource",
//   "type": "videos",
//   "title": "Educational Video on Tech",
//   "tags": ["education", "technology", "programming"],
//   "userId": "65f1d8e9123ab45678901235"
// }

ContentRouter.post("/", auth, async (req, res) => {
  const requiredBody = z.object({
    link: z.string().min(4).max(50),
    type: z.string().min(4).max(50),
    title: z.string().min(4).max(50),
    tags: z.array(z.string().min(4).max(40)),
    userId: z.string().min(4).max(40),
  });

  const parsedData = requiredBody.safeParse(req.body);
  if (!parsedData.success) {
    res.status(400).send({
      message: "Invalid Input Data",
      Error: parsedData.error,
    });
    return;
  }
  try {
    const { link, type, title, tags } = parsedData.data;
    const content = await ContentModel.create({
      link: link,
      type: type,
      title: title,
      tags: tags,
      //@ts-ignore
      UserId: req.userId,
    });

    if (content) {
      res.status(201).send({
        message: "Content created successfully",
        content: content,
      });
    } else {
      res.status(400).send({
        message: "Content not created",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Error during content creation",
      Error: error,
    });
  }
});

// To get all the content of a user pass the userId in the body
// {
//   "userId": "67a0999226338c82e3f01715"
// }
ContentRouter.get("/", auth, async (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    res.status(400).send({ message: "UserId Error" });
    return;
  }
  try {
    const content = await ContentModel.find({ UserId: userId }).populate(
      "_id",
      "username"
    );
    console.log(content);
    if (content) {
      res.status(200).send({
        message: "Content found",
        content: content,
      });
    } else {
      res.status(404).send({ message: "Content not found" });
    }
  } catch (error) {
    res.status(404).send({ message: "Something went wrong", Error: error });
  }
});

// To delete the content pass the id of the content in the body
// {
// "id": "67a09c3b64a99983bf425466"
// }
ContentRouter.delete("/", auth, async (req, res) => {
  const contentId = req.body.id;
  if (!contentId) {
    res.status(400).send({ message: "ContentId Error" });
    return;
  }
  try {
    const deletedContent = await ContentModel.deleteOne({
      _id: contentId,
      //@ts-ignore
      UserId: req.userId,
    });
    if (deletedContent) {
      res.status(200).send({
        message: "Content deleted successfully",
      });
    } else {
      res.status(404).send({ message: "Content not found" });
    }
  } catch (error) {
    res.status(404).send({ message: "Something went wrong", Error: error });
  }
});

export { ContentRouter };
