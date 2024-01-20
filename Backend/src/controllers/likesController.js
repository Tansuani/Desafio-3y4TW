import {getLikes, createLike, updateLike, deleteLike} from '../models/likeModel.js'

const getAllLikes = async(req, res) => {
    try {
        const posts = await getLikes();
        console.log(posts)
        res.status(200).json(posts);
    }
    catch (error) {
        res.status(500).json({ error: "Error al procesar la solicitud" });
        console.error("Error al procesar la solicitud:", error);
    }
};

const createLikes = async(req, res) => {
    try {
        console.log(req.body)
        const {post} = req.body;
        const newLike = await createLike(post);
        res.status(201).json({ post: newLike });
    }
    catch (error) {
        res.status(500).json({ error: "Error al procesar la solicitud" });
        console.error("Error al procesar la solicitud:", error);
    }
};

const updateLikes = async(req, res) => {
    try {
        const {id} = req.params;
        const {like} = req.body;
        const likeUpdate = await updateLike (id, like);
        res.status(200).json({ like: likeUpdate });
    }
    catch (error) {
        res.status(500).json({ error: "Error al procesar la solicitud" });
        console.error("Error al procesar la solicitud:", error);
    }
};

const deleteLikes = async(req, res) => {
    try {
        const {id} = req.params;
        const deleteLikes = await deleteLike (id);
        if (deleteLikes === 0){
            return res.status(404).json({message: "No existe el registro"});
        }
        res.status(200).json({message: "Registro eliminado"});
    }
    catch (error) {
        res.status(500).json({ error: "Error al procesar la solicitud" });
        console.error("Error al procesar la solicitud:", error);
    }
};

export { getAllLikes, createLikes, updateLikes, deleteLikes };