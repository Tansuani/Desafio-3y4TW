import express from "express";
import {getAllLikes, createLikes} from '../src/controllers/likesController.js';

const router = express.Router();

router.get('/post', getAllLikes);
router.post('/posts', createLikes);

export default router;