import pool from "../../db/connectionDb.js";

const getLikes = async () => {
    const SQLquery = { text: "SELECT * FROM posts" };
    try {
        const {rows} = await pool.query(SQLquery);
        return rows;
    }
    catch (error) {
        console.log(error);
    }
};

const createLike = async (titulo, img, descripcion, likes=0) => {
    const SQLquery = {
        text: "INSERT INTO posts (id, titulo, img, descripcion, likes) VALUES (DEFAULT, $1, $2, $3, $4)",
        values: [titulo, img, descripcion, likes],
    };
    try {
        const {rows} = await pool.query(SQLquery);
        console.log(rows)
        return rows;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
};

const updateLike = async (id, likes) => {
    const SQLquery = {
        text: "UPDATE posts SET likes =(likes + 1) WHERE id = $1 RETURNING *",
        values: [id],
    };
    try {
        const response = await pool.query(SQLquery);
    }
    catch (error) {
        console.log(error);
    }
};

const deleteLike = async (id) => {
    const SQLquery = {
        text: "DELETE FROM posts WHERE id = $1",
        values: [id],
    };
    try {
        const response = await pool.query(SQLquery);
        return response.rowCount;
    }
    catch (error) {
        console.log(error);
    }
};
export { getLikes, createLike, updateLike, deleteLike };