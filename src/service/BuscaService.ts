import axios from "axios";
import { Console } from "console";

const request = axios.create({
    baseURL: process.env.BASE_URL,
});
request.defaults.headers['Content-Type'] = 'application/json';

const getMatricula = async ({ cpf, usuario, senha}) => {
    try {
        const response = await request.post('/login', { 
            login: usuario,
            senha
        });
        
        console.log(response);
        

        const token = response.headers.authorization;
    
        const { data } = await request.get(`/offline/listagem/${cpf}`, {
            headers: {
                Authorization: token
            }
        });
    
        const { beneficios } = data;
        const matriculas = beneficios.map(b => {return b.nb})
    
        return {status: 200, matriculas}
    } catch (error) {
        return {status: 500, error}
    }
    
}

export { getMatricula };