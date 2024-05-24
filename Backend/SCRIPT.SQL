CREATE DATABASE IF NOT EXISTS pessoas;

USE pessoas;

CREATE TABLE IF NOT EXISTS municipe (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    idade INT,
    cpf VARCHAR(14) NOT NULL UNIQUE,
    dataNascimento DATE,
    telefone VARCHAR(20),
    logradouro VARCHAR(255),
    numCasa VARCHAR(10),
    bairro VARCHAR(100)
);
