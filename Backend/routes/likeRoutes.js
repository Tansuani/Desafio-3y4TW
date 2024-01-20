import express from "express";
import {getAllLikes, createLikes, updateLikes, deleteLikes} from '../src/controllers/likesController.js';

const likeRouter = express.Router();

likeRouter.get("/posts", getAllLikes);
likeRouter.post("/posts", createLikes);
likeRouter.put("/posts", updateLikes);
likeRouter.delete("/posts", deleteLikes)

export default likeRouter;