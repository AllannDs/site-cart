import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contato from "./Paginas/Contato";
import Home from "./Paginas/Home";
import Painel from "./Paginas/Painel";
import Sobre from "./Paginas/Sobre";
import PainelBase from "./Paginas/PainelBase";
import Atualizar from "./Paginas/Atualizar";
import Carrinho from "./Paginas/Carrinho";



function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/sobre" element={<Sobre />}></Route>
                <Route path="/contato" element={<Contato />}></Route>
                <Route path="/painelbase" element={<PainelBase />}></Route>
                <Route path="/painel" element={<Painel />}></Route>
                <Route path="/atualizar/:id" element={<Atualizar />}></Route>
                <Route path="/carrinho/:id" element={<Carrinho />}></Route>

            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;