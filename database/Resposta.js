const Sequelize = require("sequelize")
const connection = require("./db")

const Resposta = connection.define("resposta", {
    resposta: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    perguntaId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

Resposta.sync({force: false})

module.exports = Resposta