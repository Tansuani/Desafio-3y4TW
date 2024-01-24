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

const createLike = async ({ titulo, url, descripcion }) => {
    const SQLquery = {
        text: "INSERT INTO posts VALUES (DEFAULT, $1, $2, $3) RETURNING *",
        values: [titulo, url, descripcion],
    };
    try {
        const {rows} = await pool.query(SQLquery);
        return rows;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
};

const updateLike = async (id, { likes }) => {
    const SQLquery = {
        text: "UPDATE posts SET likes = $5 WHERE id = $2 RETURNING *",
        values: [likes, id],
    };
    try {
        const response = await pool.query(SQLquery);
        return response.rows;
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