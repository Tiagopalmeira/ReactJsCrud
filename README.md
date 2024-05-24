# Sistema de Gerenciamento de Munícipes

Este projeto consiste em uma aplicação CRUD (Create, Read, Update, Delete) para gerenciar registros de munícipes. A aplicação é construída utilizando Node.js no backend, React no frontend, e MySQL como banco de dados.

## Requisitos Funcionais (RF)

1. **Tela de Login (RF01):** 
   - Possuirá um acesso de login padrão para o administrador do sistema realizar o acesso e poder cadastrar as pessoas no sistema.

2. **Tela de Início (RF02):** 
   - Nesta tela, os administradores verão as demais ferramentas possíveis para cadastro e consulta dos dados.

3. **Botão de Cadastro (RF03):** 
   - Botão usado para cadastrar novas pessoas no sistema.

4. **Botão de Atualização (RF04):** 
   - Botão usado para exibir as informações de clientes em um input com permissão de atualização.

5. **Botão de Inativação (RF05):** 
   - Botão em vermelho com ícone de remoção para inativação dos membros.

6. **Botão de Saída (RF06):** 
   - Botão para saída do sistema e encerramento de sessão.

7. **Aba de Consulta (RF07):** 
   - Sessão usada para pesquisar moradores e etc.

8. **Exibição dos Dados (RF08):** 
   - Nesta tela serão exibidos os dados pesquisados anteriormente.

## Requisitos Não Funcionais (RNF)

1. **Desempenho (RNF01):** 
   - O sistema deve ser responsivo, garantindo tempos de resposta rápidos para todas as operações. Deve ser capaz de lidar com um grande volume de dados sem comprometer o desempenho.

2. **Segurança (RNF02):** 
   - Todos os dados pessoais dos munícipes devem ser armazenados de forma segura, com medidas de proteção contra acesso não autorizado. O acesso ao sistema deve ser controlado por autenticação e autorização adequadas.

3. **Usabilidade (RNF03):** 
   - A interface do usuário deve ser intuitiva e fácil de usar, minimizando a curva de aprendizado para os usuários. Deve ser acessível para pessoas com deficiências, seguindo as diretrizes de acessibilidade.

4. **Escalabilidade (RNF04):** 
   - O sistema deve ser capaz de lidar com um aumento no número de usuários e de dados sem comprometer o desempenho. Deve ser projetado de forma a permitir atualizações e expansões futuras.

5. **Confiabilidade (RNF05):** 
   - O sistema deve ser robusto e estar disponível de forma confiável, com pouca ou nenhuma interrupção no serviço. Deve ser capaz de se recuperar de falhas de forma rápida e eficiente.

6. **Manutenibilidade (RNF06):** 
   - O código fonte do sistema deve ser bem estruturado e documentado, facilitando a manutenção e evolução futuras. Deve ser possível realizar atualizações e correções de forma ágil e sem impacto nas funcionalidades existentes.

7. **Compatibilidade (RNF07):** 
   - O sistema deve ser compatível com diferentes dispositivos e navegadores, garantindo uma experiência consistente para todos os usuários.

## Estrutura do Projeto

O projeto está estruturado da seguinte forma:

├── backend
│ ├── db.js
│ ├── pessoaModel.js
│ ├── PessoaController.js
│ └── RotasPessoas.js
└── frontend
├── public
└── src
├── components
│ ├── FormDeleta.js
│ ├── FormLeitura.js
│ ├── FormAtualiza.js
│ └── FormCadastro.js
├── App.css
├── App.js
└── index.js


## Banco de Dados

### Criação do Banco de Dados

Execute o script SQL fornecido para criar o banco de dados e a tabela (deverá ser usado o mysql).

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
2. Navegue até a pasta `src/backend`.
3. Instale as dependências do backend com `npm install`.
4. Configure a conexão com o banco de dados no arquivo `db.js`.
5. Inicie o servidor backend com `npm run server`.

### Frontend

1. Navegue até a pasta `src/frontend`.
2. Instale as dependências do frontend com `npm install`.
3. Inicie o servidor de desenvolvimento do frontend com `npm run dev`.

## Uso

- **Inserir (Create):** Utilize o componente `FormCadastro` para inserir novos registros de munícipes.
- **Ler (Read):** Utilize o componente `FormLeitura` para ler todos os registros de munícipes.
- **Atualizar (Update):** Utilize o componente `FormAtualiza` para atualizar os registros de munícipes.
- **Deletar (Delete):** Utilize o componente `FormDeleta` para deletar registros de munícipes.

## Estilo

O estilo da aplicação é definido no arquivo `App.css`. A aplicação é responsiva e os botões são estilizados de forma a serem utilizáveis em diferentes tamanhos de tela.

## Conclusão

Este projeto demonstra um CRUD básico utilizando Node.js, React e MySQL. Ele pode ser expandido e personalizado conforme necessário. Se tiver alguma dúvida ou encontrar problemas, sinta-se à vontade para abrir uma issue ou enviar um pull request.
