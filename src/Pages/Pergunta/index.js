import "./pergunta.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function Pergunta() {

    const [titulo, setTitulo] = useState("")
    const [pergunta, setPergunta] = useState("")
    const navigate = useNavigate()

    const handleTitulo = (e) => {
        setTitulo(e.target.value)
    }

    const handlePergunta = (e) => {
        setPergunta(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const dados = {titulo, pergunta}
        axios.post("http://localhost:3001/salvarPergunta", dados)
            .then(setTimeout(() => {
                navigate("/", {replace: true})
            }, 275))
    }

    return (
        <div className="container">
            <div className="card border-1">
                <div className="card-header bg-primary text-white">
                    <h2>Fazer pergunta</h2>
                </div>
                <div className="card-body">
                    <form className="pergunta-form" onSubmit={handleSubmit}>
                        <label className="mt-3 pb-1">Título</label>
                        <input type="text" placeholder="Escreva o título da pergunta" className="form-control" value={titulo} onChange={handleTitulo}/>
                        <label className="mt-3 pb-1">Questão</label>
                        <textarea placeholder="Escreva sua pergunta aqui" className="form-control" value={pergunta} onChange={handlePergunta}/>
                        <button type="submit" className="btn mt-3 btn-success">Perguntar</button>
                    </form>
                </div>
            </div>      
        </div>
    )
}