import "./home.css"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

export default function Home() {

    const [perguntas, setPerguntas] = useState([])

    useEffect(() => {
        async function loadPerguntas() {
            const response = await axios.get("http://localhost:3001/perguntas")
            setPerguntas(response.data)
        }
        loadPerguntas()
    }, [])

    return (
        <div className="container">
            <Link to="/perguntar" className="btn btn-primary">Fazer pergunta</Link>
            <div className="perguntasHome">
                {perguntas.map((pergunta) => {
                    return (
                        <div className="card" key={pergunta.id}>
                            <div className="card-body">
                                <h3>{pergunta.titulo}</h3>
                            </div>
                            <div className="card-footer">
                                <Link to={`/pergunta/${pergunta.id}`} className="btn btn-success">Responder</Link>
                            </div>  
                        </div>
                    )
                })}
            </div>
        </div>
    )
}