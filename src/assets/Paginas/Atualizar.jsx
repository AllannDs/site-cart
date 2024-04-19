import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


function Atualizar() {
    //criar variáveis
    const {id} = useParams()
    const [data, setData] = useState([])
    const navegar = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:3000/produtos/"+id)
        .then(resp => setData(resp.data))
        .catch(err => console.log(err))
    })

    function HandSubmit(evento) {
        evento.preventDefault()
        axios.put("http://localhost:3000/produtos/"+id, data)
        .then(resp => { alert("Dados atualizados com sucesso!!")})
        navegar("/painelbase")
    }

    return(
        <>
        <h1 style={{textAlign: "center"}}>Painel de atualização de Produtos</h1>
        <div className="d-flex w-100 vh-70 justify-content-center align-items-center">
           
           <div className="w-50 border bg-light p-5">
            <form onSubmit={HandSubmit}>
                 <div >
                    <label htmlFor="name">ID do Produto</label><br />
                    <input type="text" name="id" disable value={data.id} className="from-control"/>
                </div><br />
                <div >
                    <label htmlFor="name">Nome do Produto</label><br />
                    <input type="text" name="name" defaultValue={data.nome} className="from-control" 
                    onChange={e=>setData({...data, nome: e.target.value})} />
                </div><br />
                <div>
                    <label htmlFor="text">Valor</label><br />
                    <input type="text" name="text" defaultValue={data.valor} className="from-control"
                    onChange={e=>setData({...data, valor: e.target.value})} />
                </div><br />
                <div>
                    <label htmlFor="detalhes">Detalhes</label><br />
                    <input type="text" name="detalhes" defaultValue={data.detalhes} className="from-control"
                    onChange={e=>setData({...data, detalhes: e.target.value})} />
                </div><br />
                <div>
                    <label htmlFor="imagem">Imagem</label><br />
                    <input type="text" name="imagem"  defaultValue={data.img} className="from-control"
                    onChange={e=>setData({...data, img: e.target.value})} />
                </div><br />
                <button className="btn btn-info" >Atualizar</button>
            </form>
            </div> 
           
           
        </div><br />
        </>
    )
}

export default Atualizar