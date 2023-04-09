import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

export default function Responder() {

    const [pergunta, setPergunta] = useState({})
    const [resposta, setResposta] = useState("")
    const [respostas, setRespostas] = useState([])
    const [quantidade, setQuantidade] = useState(0)
    const {id} = useParams()

    const perguntaId = pergunta.id;

    useEffect(() => {
        async function loadPergunta() {
            const response = await axios.get(`http://localhost:3001/id/${id}`)
            setPergunta(response.data)
        }
        async function loadRespostas() {
            const response = await axios.get(`http://localhost:3001/id/${id}/respostas`)
            setRespostas(response.data)
        }
        function exibirQtd() {
            setQuantidade(respostas.length)
        }
        loadPergunta()
        loadRespostas()
        exibirQtd() 
    }, [id, respostas.length])

    const handleResposta = (e) => {
        setResposta(e.target.value)
    }

    const handleSubmit = (e) => {
        const dados = {resposta, perguntaId}
        axios.post("http://localhost:3001/salvarResposta", dados)
    }

    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <h1>{pergunta.titulo}</h1>
                </div>
                <div className="card-body">
                    <p>{pergunta.pergunta}</p>
                </div>
            </div>
            <form className="resposta-form" onSubmit={handleSubmit}>
                <div className="card">
                    <div className="card-body">
                        <textarea placeholder="Escreva sua resposta" className="form-control" value={resposta} onChange={handleResposta}/>
                        <input type="number" value={perguntaId} disabled hidden/>
                    </div>
                    <div className="card-footer">
                        <button type="submit" className="btn btn-success">Responder</button>
                    </div>  
                </div>
            </form>
            <div>
                <h2 className="respostah2">Respostas ({quantidade}):</h2>
                {respostas.map((resposta) => {
                    return(
                        <div className="card bg-light" key={resposta.id}>
                            <p className="card-body mt-2 mb-2">{resposta.resposta}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}