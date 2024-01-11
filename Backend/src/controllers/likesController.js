import {getLikes, createLike} from '../../models/likeModel.js'

const getAllLikes = async(req, res) => {
    try {
        const likes = await getLikes();
        res.status(200).json({ likes: likes });
    }
    catch (error) {
        res.status(500).json({ error: "Error al procesar la solicitud" });
        console.error("Error al procesar la solicitud:", error);
    }
};

const createLikes = async(req, res) => {
    try {
        const {like} = req.body;
        const newPost = await createLike(like);
        res.status(201).json({ like: newPost });
    }
    catch (error) {
        res.status(500).json({ error: "Error al procesar la solicitud" });
        console.error("Error al procesar la solicitud:", error);
    }
}

export { getAllLikes, createLikes };