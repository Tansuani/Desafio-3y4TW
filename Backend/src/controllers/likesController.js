import {getLikes, createLike} from '../../models/likeModel.js'

const getAllLikes = async(req, res) => {
    try {
        const posts = await getLikes();
        res.status(200).json({ posts: posts });
    }
    catch (error) {
        res.status(500).json({ error: "Error al procesar la solicitud" });
        console.error("Error al procesar la solicitud:", error);
    }
};

const createLikes = async(req, res) => {
    try {
        const {post} = req.body;
        const newLike = await createLike(post);
        res.status(201).json({ post: newLike });
    }
    catch (error) {
        res.status(500).json({ error: "Error al procesar la solicitud" });
        console.error("Error al procesar la solicitud:", error);
    }
}

export { getAllLikes, createLikes };