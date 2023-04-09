# Banco de dados

O arquivo "db.js" foi modificado para ocultar as informações de usuário e senha do banco de dados, o servidor não poderá ser iniciado que o usuário o modifique novamente colocando suas próprias informações. Por ser executado de forma local, o sistema não funcionará a não ser que o usuário tenha o banco de dados MySQL instalado em sua máquina e também é necessário que o serviço do MySQL esteja em execução (pode ser verificado na aba "Serviços" do gerenciado de tarefas do windows). As depêndencias do projeto podem ser instaladas usando o comando "npm install ." no terminal, dentro do diretório do projeto.

# Iniciando a aplicação

Para iniciar a aplicação é necessário utilizar dois terminais com os seguintes comandos (um em cada terminal):

## `npx nodemon server.js`

Para iniciar o servidor.

## `npm start`

Para visualização no navegador.