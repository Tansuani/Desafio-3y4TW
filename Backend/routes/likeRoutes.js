import express from "express";
import {getAllLikes, createLikes} from '../src/controllers/likesController.js';

const likeRouter = express.Router();

likeRouter.get('/posts', getAllLikes);
likeRouter.post('/posts', createLikes);

export default likeRouter;