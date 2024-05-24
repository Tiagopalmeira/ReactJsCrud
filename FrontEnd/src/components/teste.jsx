import React, { useState } from 'react';



function FormAtualiza() {
  const [formValues, setFormValues] = useState({
    id: '',
    nome: '',
    idade: '',
    cpf: '',
    dataNascimento: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Dados em processamento:", formValues);
      const response = await fetch(`http://localhost:3000/pessoas/${formValues.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formValues)
      });

      if (response.ok) {
        console.log("Pessoa atualizada com sucesso!");
        // Faça algo após a atualização bem-sucedida, se necessário
      } else {
        console.error("Erro ao atualizar a pessoa");
      }
    } catch (err) {
      console.error("Erro ao atualizar", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <span>Informe o ID da Pessoa a ser atualizada:</span>
        <input type="text" name="id" value={formValues.id} onChange={handleChange} />
      </div>
      <div>
        <label>Nome:</label>
        <input type="text" name="nome" value={formValues.nome} onChange={handleChange} />
      </div>
      <div>
        <label>Idade:</label>
        <input type="number" name="idade" value={formValues.idade} onChange={handleChange} />
      </div>
      <div>
        <label>CPF:</label>
        <input type="text" name="cpf" value={formValues.cpf} onChange={handleChange} />
      </div>
      <div>
        <label>Data de Nascimento:</label>
        <input type="date" name="dataNascimento" value={formValues.dataNascimento} onChange={handleChange} />
      </div>
      <div>
        <label>Logradouro:</label>
        <input type="text" name="Logradouro" value={formValues.logradouro} onChange={handleChange} />
      </div>
      <div>
        <label>telefone:</label>
        <input type="text" name="telefone" value={formValues.telefone} onChange={handleChange} />
      </div>
      <div>
        <label>numCasa</label>
        <input type="text" name="Logradouro" value={formValues.numCasa} onChange={handleChange} />
      </div>
      <div>
        <label>Bairro:</label>
        <input type="text" name="bairro" value={formValues.bairro} onChange={handleChange} />
      </div>




      <button type="submit">Atualizar</button>
    </form>
  );
}

export default FormAtualiza;
