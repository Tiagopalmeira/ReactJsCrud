//servidor

import express from "express";
import cors from "cors";
import { getAllPessoas, createPessoa, updatePessoa, deletePessoa } from "../PessoasController.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get('/pessoas', getAllPessoas);
app.post('/pessoas', createPessoa);
app.put('/pessoas/:id', updatePessoa);
app.delete('/pessoas/:id', deletePessoa);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});