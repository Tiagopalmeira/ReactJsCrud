//"API de comunicação com o BD"
import connection from './bd.js';

export function read (callback){
    connection.query('SELECT * from municipe)',callback)
}

export function create(nome, idade, cpf, dataNascimento, telefone, logradouro, numCasa, bairro, callback) {
    connection.query('INSERT INTO municipe (nome, idade, cpf, dataNascimento, telefone, logradouro, numCasa, bairro) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', 
    [nome, idade, cpf, dataNascimento, telefone, logradouro, numCasa, bairro], callback);
}

export function update(id, nome, idade, cpf, dataNascimento, telefone, logradouro, numCasa, bairro, callback) {
    connection.query('UPDATE municipe SET nome = ?, idade = ?, cpf = ?, dataNascimento = ?, telefone = ?, logradouro = ?, numCasa = ?, bairro = ? WHERE id = ?', 
    [nome, idade, cpf, dataNascimento, telefone, logradouro, numCasa, bairro, id], callback);
}
export function deletePes(id, callback) {
    connection.query('DELETE FROM municipe WHERE id = ?', [id], callback);
}