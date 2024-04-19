import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Painel() {

    const [inputData, setInputData] = useState({nome:'', valor:'', detalhes:'', img:''});
    const navegar = useNavigate()

    function HandSubmit(event) {
        event.preventDefault()
        axios.post("http://localhost:3000/produtos", inputData)
        .then(resposta => {
            alert("dados inseridos com sucesso")
            navegar("/")
        })
        .catch(err => console.log(err))
    }
    
    return (
        <>
        <h1 style={{textAlign: "center"}}>Painel de controle de produtos</h1>
        <div className="d-flex w-100 vh-70 justify-content-center align-items-center">
           
           <div className="w-50 border bg-light p-5">
            <form onSubmit={HandSubmit}>
            <div >
                    <label htmlFor="name">Nome do Produto</label><br />
                    <input type="text" name="name" className="from-control" 
                    onChange={e=>setInputData({...inputData, nome: e.target.value})} />
                </div><br />
                <div>
                    <label htmlFor="text">Valor</label><br />
                    <input type="text" name="text" className="from-control"
                    onChange={e=>setInputData({...inputData, valor: e.target.value})} />
                </div><br />
                <div>
                    <label htmlFor="detalhes">Detalhes</label><br />
                    <input type="text" name="detalhes" className="from-control"
                    onChange={e=>setInputData({...inputData, detalhes: e.target.value})} />
                </div><br />
                <div>
                    <label htmlFor="imagem">Imagem</label><br />
                    <input type="text" name="imagem" className="from-control"
                    onChange={e=>setInputData({...inputData, img: e.target.value})} />
                </div><br />
                <button className="btn btn-info" >Enviar</button>
            </form>
            </div> 
           
           
        </div><br />
        </>
    )
}

export default Painel;