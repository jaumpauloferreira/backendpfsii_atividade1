import express from 'express';
import cors from 'cors';
import rotaDepartamento from './Rotas/rotaDepartamento.js';
import rotaFuncionario from './Rotas/rotaFuncionario.js';
import dotenv from 'dotenv';
import session from 'express-session';

const host = '0.0.0.0';
const porta = '3000';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
    secret: process.env.SEGREDO || 'uma_chave_secreta_qualquer', // Definir um segredo padrão
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 6 } // Configura a expiração do cookie da sessão
}));

app.use('/departamento', rotaDepartamento);
app.use('/funcionario', rotaFuncionario);

app.listen(porta, host, () => {
    console.log(`Servidor escutando na porta: ${host}:${porta}.`);
});
