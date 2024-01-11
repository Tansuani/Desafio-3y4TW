import pool from "../../db/conectionDb.js";

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

const createLike = async ({ titulo, img, descripcion, likes }) => {
    const SQLquery = {
        text: "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *",
        values: [titulo, img, descripcion, likes],
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