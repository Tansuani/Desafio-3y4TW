import express from "express";
import cors from "cors";
import { logger } from "logger-express";
import likeRouter from './routes/likeRoutes.js'
import { writeFile, readFile } from "node:fs/promises";
import bodyParser from "body-parser";
import { nanoid } from "nanoid";

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`¡Servidor encendido en el puerto! ${PORT}`));

app.use(express.json());
app.use(cors());
app.use(logger());
app.use(likeRouter);

app.use(bodyParser.json());

const getPosts = async () => {
    const fsResponse = await readFile("posts.json", "utf-8");
    const posts = JSON.parse(fsResponse);
    return posts;
  };
  app.get("/posts", async (req, res) => {
    const posts = await getPosts();
    res.json(posts);
  });
  app.get("/posts/:id", async (req, res) => {
    const id = req.params.id;
    const posts = await getPosts();
    const post = posts.find((post) => post.id === id);
  
    if (!post) {
      res.status(404).json({ message: "Post no encontrado" });
    }
    res.json(post);
  });

  app.post("/posts", async (req, res) => {
    const { titulo, img, descripcion } = req.body;
    const newPost = {
      id: nanoid(),
      titulo,
      img,
      descripcion,
    };
    let posts = await getPosts();
    posts.push(newPost);
    await writeFile("posts.json", JSON.stringify(posts));
    res.status(201).json(newPost);
  });

  app.put("/posts/:id", async (req, res) => {
    const id = req.params.id;
  
    let posts = await getPosts();
    const post = posts.find((post) => post.id === id);
  
    if (!post) {
      res.status(404).json({ message: "Todo not found" });
    }
  
    posts = posts.map((post) => {
      if (post.id === id) {
        return { ...post, done: !post.done };
      }
      return post;
    });
  
    await writeFile("posts.json", JSON.stringify(posts));
  
    res.json(posts);
  });

  app.delete("/posts/:id", async (req, res) => {
    const id = req.params.id;
  
    let posts = await getTodos();
    const post = posts.find((post) => post.id === id);
  
    if (!post) {
      res.status(404).json({ message: "Todo not found" });
    }
  
    posts = posts.filter((post) => post.id !== id);
  
    await writeFile("posts.json", JSON.stringify(posts));
    res.json(posts);
  });
  
  app.listen(5000, () => {
    console.log("Example app listening on port 5000");
  });