import express from "express";
import { POSTBuscaController } from "../controllers/Busca";

const router = express.Router();

router.post('/', POSTBuscaController)

export { router };