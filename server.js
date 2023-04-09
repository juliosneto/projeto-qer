const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const connection = require("./database/db")
const Pergunta = require("./database/Pergunta")
const Resposta = require("./database/Resposta")

connection
    .authenticate()
    .then(() => console.log("CONECTADO AO BANCO DE DADOS"))
    .catch((err) => console.log(err))

const app = express()
app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/perguntas", (req, res) => {
    Pergunta.findAll({ raw: true, order: [
        ['id', 'DESC']
    ] }).then((perguntas) => res.send(perguntas))
})

app.post("/salvarPergunta", (req, res) => {
    const {titulo, pergunta} = req.body
    Pergunta.create({
        titulo: titulo,
        pergunta: pergunta
    }).then(() => console.log("PERGUNTA ENVIADA"))
})

app.get("/id/:id", async (req, res) => {
    const { id } = req.params
    const questao = await Pergunta.findByPk(id)
    return res.send(questao)
})

app.get("/id/:id/respostas", async (req, res) => {
    const {id} = req.params
    const questao = await Pergunta.findByPk(id)
    const respostas = await Resposta.findAll({
        where: {perguntaId: questao.id}
    })
    return res.send(respostas)
})

app.post("/salvarResposta", (req, res) => {
    const {resposta, perguntaId} = req.body
    Resposta.create({
        resposta: resposta,
        perguntaId: perguntaId
    }).then(() => console.log("RESPOSTA RECEBIDA"))
})

app.listen(3001, () => console.log("SERVIDOR RODANDO NA PORTA 3001!"))