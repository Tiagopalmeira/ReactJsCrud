# CRUD de Munícipes

Este projeto é um exemplo de aplicação CRUD (Create, Read, Update, Delete) para gerenciar registros de munícipes. A aplicação é construída utilizando Node.js no backend, React no frontend, e MySQL como banco de dados.

## Requisitos

- Node.js (v14 ou superior)
- MySQL (v5.7 ou superior)
- npm (v6 ou superior) ou yarn (v1 ou superior)

## Estrutura do Projeto

├── backend

│   ├── db.js

│   ├── pessoaModel.js

│   ├── PessoaController.js

│   └── RotasPessoas.js

└── frontend

├── public

├── src

│   ├── components

│   │   ├── FormDeleta.js

│   │   ├── FormLeitura.js

│   │   ├── FormAtualiza.js

│   │   └── FormCadastro.js

│   ├── App.css

│   ├── App.js

│   └── index.js

## Banco de Dados

### Criação do Banco de Dados

Execute o script SQL fornecido para criar o banco de dados e a tabela.

### Tipos de Dados

- `id`: INT, auto-incrementado e chave primária.
- `nome`: VARCHAR(255), não nulo.
- `idade`: INT.
- `cpf`: VARCHAR(14), não nulo e único.
- `dataNascimento`: DATE.
- `telefone`: VARCHAR(20).
- `logradouro`: VARCHAR(255).
- `numCasa`: VARCHAR(10).
- `bairro`: VARCHAR(100).

## Configuração do Projeto

### Backend

1. Clone este repositório.
1. Navegue até a pasta `src/backend`.
1. Instale as dependências do backend com `npm install`.
1. Configure a conexão com o banco de dados no arquivo `db.js`.
1. Inicie o servidor backend com `node RotasPessoas.js`.

### Frontend

1. Navegue até a pasta `src/frontend`.
1. Instale as dependências do frontend com `npm install`.
1. Inicie o servidor de desenvolvimento do frontend com `npm start`.

## Uso

### Inserir (Create)

Utilize o componente `FormCadastro` para inserir novos registros de munícipes.

### Ler (Read)

Utilize o componente `FormLeitura` para ler todos os registros de munícipes.

### Atualizar (Update)

Utilize o componente `FormAtualiza` para atualizar os registros de munícipes.

### Deletar (Delete)

Utilize o componente `FormDeleta` para deletar registros de munícipes.

## Estilo

O estilo da aplicação é definido no arquivo `App.css`. A aplicação é responsiva e os botões são estilizados de forma a serem utilizáveis em diferentes tamanhos de tela.

## Conclusão

Este projeto demonstra um CRUD básico utilizando Node.js, React e MySQL. Ele pode ser expandido e personalizado conforme necessário. Se tiver alguma dúvida ou encontrar problemas, sinta-se à vontade para abrir uma issue ou enviar um pull request.
