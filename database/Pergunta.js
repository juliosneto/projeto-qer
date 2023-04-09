const Sequelize = require("sequelize")
const connection = require("./db")

const Pergunta = connection.define("pergunta", {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    pergunta: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Pergunta.sync({false: false})

module.exports = Pergunta
