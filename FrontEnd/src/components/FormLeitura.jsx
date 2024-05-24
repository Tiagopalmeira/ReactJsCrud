import React, { useState } from 'react';


function FormLeitura() {
  const [consultaDados, setConsultaDados] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/pessoas');
      const json = await response.json();
      setConsultaDados(json);
    } catch (err) {
      console.error("Erro ao consultar", err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Consulta</button>
      </form>
      <ol>
        {consultaDados.map((linha, index) => (
          <li key={index}>
            <span>Nome: {linha.nome} </span>
            <span>Idade: {linha.idade} </span>
            <span>CPF: {linha.cpf} </span>
            <span>Data de Nascimento: {linha.dataNascimento} </span>
            <span>Telefone: {linha.telefone} </span>
            <span>Logradouro: {linha.logradouro} </span>
            <span>Número da Casa: {linha.numCasa} </span>
            <span>Bairro: {linha.bairro} </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default FormLeitura;
