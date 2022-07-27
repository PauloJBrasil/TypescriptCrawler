import express from "express";
import { GETBuscaController } from "../controllers/Busca";

const router = express.Router();

router.get('/', GETBuscaController)

export { router };