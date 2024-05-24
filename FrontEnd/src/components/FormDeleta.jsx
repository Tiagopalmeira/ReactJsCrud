import React, { useState } from "react";

function FormDeleta() {
  const [formValores, setFormValores] = useState({
    id: ''
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
      console.log("Dados em processamento:", formValores.id);
      const response = await fetch(`http://localhost:3000/pessoas/${formValores.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        console.log("Pessoa deletada com sucesso!");
        // Faça algo após a deleção bem-sucedida, se necessário
      } else {
        console.error("Erro ao deletar a pessoa");
      }
    } catch (err) {
      console.error("Erro ao deletar", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <span> Selecione o Registro a ser deletado</span>
        <input type="text" name= "id" value={formValores.id} onChange={handleChange} />
    <br/>
    <button type ="submit" onClick={handleSubmit}>  Deletar </button>
    </form>
  );
}

export default FormDeleta;
