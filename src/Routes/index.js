import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Home from "../Pages/Home";
import Pergunta from "../Pages/Pergunta";
import Responder from "../Pages/Responder";
import Erro from "../Pages/Erro";

export default function Rotas() {
    return (
        <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/perguntar" element={<Pergunta/>}/>
                    <Route path="/pergunta/:id" element={<Responder/>}/>
                    <Route path="*" element={<Erro/>}/>
                </Routes>
        </BrowserRouter>
    )
}