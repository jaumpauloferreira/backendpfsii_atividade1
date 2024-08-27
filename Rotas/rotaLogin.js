import { Router } from "express";

const rotaLogin = new Router();

rotaLogin.post('/', (req, res) => {
    
    res.json({ mensagem: "Login efetuado com sucesso!" });
});

export default rotaLogin;
