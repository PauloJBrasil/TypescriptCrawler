import { Request, Response } from "express";
import { getMatricula } from "../service/BuscaService";

const POSTBuscaController = async (req: Request, res: Response) => {
    try {
        const { cpf, usuario, senha } = req.body;

        const { status, matriculas, error} = await getMatricula({cpf, usuario, senha});
        
        if(error){ 
            res.status(status).send({error: error.response.data.error, message: error.response.data.message});
        }
        res.status(status).send({matriculas});
    } catch (error) {
        res.status(500).send(error.response?.data.message)
    }
    
}

export { POSTBuscaController }