import { Request, Response } from "express";

const GETBuscaController = (req: Request, res: Response) => {
    res.status(202).send({ message: "Teste de controller"})
}

export { GETBuscaController }