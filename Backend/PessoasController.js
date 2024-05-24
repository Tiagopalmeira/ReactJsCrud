import { create, read, update, deletePes } from './PessoasModel.js';

// INSERT
export async function createPessoa(req, res) {
  const { nome, idade, cpf, dataNascimento, telefone, logradouro, numCasa, bairro } = req.body;
  console.log('Dados recebidos:', { nome, idade, cpf, dataNascimento, telefone, logradouro, numCasa, bairro });
  create(nome, idade, cpf, dataNascimento, telefone, logradouro, numCasa, bairro, (err,result) => {
    if(err){
        res.status(500).json({ error: err.message});
    }
res.status (201).json({mensagem:'Cadastro Realizado com sucesso'});
});
}

//READ

export async function getAllPessoas(req, res) {
    read((err, pessoas) => {
        if(err){
            res.status(500).json({ error: err.message});
            return;
        }
        res.json(pessoas);
    });
}


export async function updatePessoa(req, res) {
    const { id } = req.params;
    console.log("Dados atualizados:", { id });
    const { nome, idade, cpf, dataNascimento, telefone, logradouro, numCasa, bairro } = req.body;
    update(nome, idade, cpf, dataNascimento, telefone, logradouro, numCasa, bairro, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.send('Dados atualizados com sucesso.');
    });
}


export async function deletePessoa (req, res){
    const {id} = req.params;
    console.log('Deletando...', {id});
    deletePes(id, (err, result) => {
        if(err) {
            res.status(500).json({ error: err.message});
            return
        }
        res.send('Dados excluidos com sucesso');
    });
}