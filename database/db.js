const Sequelize = require("sequelize")

const connection = new Sequelize("NOME_DO_SEU_BANCO_DE_DADOS", "NOME_DO_SEU_USUARIO_DO_BANCO_DE_DADOS", "SUA_SENHA_DO_BANCO_DE_DADOS", {
    host: "localhost",
    dialect: "mysql"
})

module.exports = connection