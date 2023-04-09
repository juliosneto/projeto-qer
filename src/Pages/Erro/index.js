import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Erro() {

    const [tempo, setTempo] = useState(5)
    const navigate = useNavigate()

    useEffect(() => {
        if (tempo > 0) {
            const timer = setTimeout(() => setTempo(tempo - 1), 1000)
            return () => clearTimeout(timer)
        } else {
            navigate("/")
        }
    })

    return(
        <div className="container">
            <h1>Página não encontrada!</h1>
            <h3>Você será redirecionado para página inicial em {tempo}...</h3>
        </div>
    )
    
}