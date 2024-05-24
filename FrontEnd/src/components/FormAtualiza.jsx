import React, { useState } from 'react';

function FormAtualiza() {
  const [formValores, setFormValores] = useState({
    id: '',
    nome: '',
    cpf: '',
    dataNascimento: '',
    telefone: '',
    logradouro: '',
    numCasa: '',
    bairro: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValores(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("dados a serem atualizados:", formValores.id);
      const response = await fetch(`http://localhost:3000/pessoas/${formValores.id}`, {
        method: 'PUT', // ou 'PATCH' dependendo da sua lógica de atualização
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formValores)
      });
      const json = await response.json();
      console.log(response);
      console.log(json);
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <span>Informe o ID da Pessoa a ser atualizada:</span>
        <input type="text" name="id" value={formValores.id} onChange={handleChange} />
      </div>
      <div>
        <label>Nome:</label>
        <input type="text" name="nome" value={formValores.nome} onChange={handleChange} />
      </div>
      <div>
        <label>CPF:</label>
        <input type="text" name="cpf" value={formValores.cpf} onChange={handleChange} />
      </div>
      <div>
        <label>Data de Nascimento:</label>
        <input type="date" name="dataNascimento" value={formValores.dataNascimento} onChange={handleChange} />
      </div>
      <div>
        <label>Logradouro:</label>
        <input type="text" name="logradouro" value={formValores.logradouro} onChange={handleChange} />
      </div>
      <div>
        <label>telefone:</label>
        <input type="text" name="telefone" value={formValores.telefone} onChange={handleChange} />
      </div>
      <div>
        <label>numCasa</label>
        <input type="text" name="numCasa" value={formValores.numCasa} onChange={handleChange} />
      </div>
      <div>
        <label>Bairro:</label>
        <input type="text" name="bairro" value={formValores.bairro} onChange={handleChange} />
      </div>
      <button type="submit">Atualizar</button>
    </form>
  );
}

export default FormAtualiza;
