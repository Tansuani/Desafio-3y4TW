import pool from "../../db/connectionDb.js";

const getLikes = async () => {
    const SQLquery = { text: "SELECT * FROM posts" };
    try {
        const response = await pool.query(SQLquery);
        return response.rows;
    }
    catch (error) {
        console.log(error);
    }
};

const createLike = async ({ id, titulo, img, descripcion, likes }) => {
    const SQLquery = {
        text: "INSERT INTO posts (id, titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        values: [id, titulo, img, descripcion, likes],
    };
    try {
        const response = await pool.query(SQLquery);
        return response.rows;
    }
    catch (error) {
        console.log(error);
    }
};

export { getLikes, createLike };