import express from "express";
import cors from "cors";
import { logger } from "logger-express";
import likeRouter from './routes/likeRoutes.js'
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`¡Servidor encendido en el puerto! ${PORT}`));

app.use(express.json());
app.use(cors());
app.use(logger());
app.use(likeRouter);

app.use(bodyParser.json());

  