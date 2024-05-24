import React, { useState } from 'react';

function FormCadastro() {
  const [formValores, setFormValores] = useState({
    nome: '',
    idade: '',
    cpf: '',
    dataNascimento: '',
    telefone: '',
    logradouro: '',
    numCasa: '',
    bairro: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValores((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Dados a serem enviados:", formValores);
      const response = await fetch('http://localhost:3000/pessoas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formValores)
      });
      const json = await response.json();
      console.log(response);
      console.log(json);
      // alert(json.pessoa);
    } catch (err) {
      console.error("Erro ao enviar", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      Nome:
      <input type="text" name="nome" value={formValores.nome} onChange={handleChange} />
      <br />
      Idade:
      <input type="number" name="idade" value={formValores.idade} onChange={handleChange} />
      <br />
      CPF:
      <input type="text" name="cpf" value={formValores.cpf} onChange={handleChange} />
      <br />
      Data de Nascimento:
      <input type="date" name="dataNascimento" value={formValores.dataNascimento} onChange={handleChange} />
      <br />
      Telefone:
      <input type="text" name="telefone" value={formValores.telefone} onChange={handleChange} />
      <br />
      Logradouro:
      <input type="text" name="logradouro" value={formValores.logradouro} onChange={handleChange} />
      <br />
      Número da Casa:
      <input type="text" name="numCasa" value={formValores.numCasa} onChange={handleChange} />
      <br />
      Bairro:
      <input type="text" name="bairro" value={formValores.bairro} onChange={handleChange} />
      <br />
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default FormCadastro;
