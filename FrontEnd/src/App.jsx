import { useState } from "react";
import { FaPlus, FaSearch, FaPen, FaTrash } from 'react-icons/fa';
import Cadastro from './components/FormCadastro'
import Ler from './components/FormLeitura';
import Atualiza from './components/FormAtualiza';
import Deleta from './components/FormDeleta';
import './App.css'

const App = () => {
  const [currentPage, setCurrentPage] = useState(null);

  const renderPage = () => {
    switch (currentPage) {
      case 'create':
        return <Cadastro />;
      case 'read':
        return <Ler />;
      case 'update':
        return <Atualiza />;
      case 'delete':
        return <Deleta />;
      default:
        return null;
    }
  };

  return (
    <div className="">
      <center>
        <button className="button" onClick={() => setCurrentPage('create')}>
          <FaPlus /> <br/> Cadastrar (C)
        </button>
        <button className="button" onClick={() => setCurrentPage('read')}>
          <FaSearch />  <br/> Ler (R)
        </button>
        <button className="button" onClick={() => setCurrentPage('update')}>
          <FaPen />  <br/> Atualizar (U)
        </button>
        <button className="button" onClick={() => setCurrentPage('delete')}>
          <FaTrash />  <br/> Deletar (D)
        </button>
        {renderPage()}
      </center>

    </div>
  );
};

export default App;
