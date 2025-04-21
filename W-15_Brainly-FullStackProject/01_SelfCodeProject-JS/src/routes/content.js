const { ContentModel } = require("../database/db");
const { auth } = require("../middleware/auth");
const { Router } = require("express");
const ContentRouter = Router();
const dotenv = require("dotenv");
const { z } = require("zod");
dotenv.config();

ContentRouter.get("/", auth, async (req, res) => {
  const { contentId } = req.body;

  if (!contentId) {
    return res.status(400).send({ message: "contentId is required" });
  }

  try {
    const content = await ContentModel.findOne({
      _id: contentId,
    });

    if (content) {
      return res.status(200).send({
        message: content,
      });
    } else {
      return res.status(404).send({ message: "Error Occured" });
    }
  } catch (error) {
    res.status(404).send({ message: "Content not found" });
  }
});

ContentRouter.delete("/", auth, async (req, res) => {
  const contentId = req.body.id;
  if (!contentId) {
    return res.status(400).json({ message: "ID not found" });
  }
  try {
    const deletedContent = await ContentModel.findOneAndDelete({
      _id: contentId,
    });

    if (!deletedContent) {
      return res.status(404).json({ message: "Content not found." });
    }
    res.json({ message: "Content deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error while deleting content.", error });
  }
});

module.exports = { ContentRouter };
