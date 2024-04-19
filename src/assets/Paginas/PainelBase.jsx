import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./PainelBase.css"


function PainelBase() {
    const [valor, setValor] = useState([])
    const navegar = useNavigate()
    useEffect(() => {
        axios.get("http://localhost:3000/produtos")
        .then(resp => setValor(resp.data))
        .catch(err => console.log(err))
    }

    )
    return (
        <>
        <div className="container "><br />
            <div className='text-end' ><Link to="/" className='btn btn-primary'>Adicionar</Link></div>
            <table className="table" >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome do Produto</th>
                        <th>Valor</th>
                        <th>Detalhes</th>
                        <th>Imagem</th>
                    </tr>
                </thead>
           
            <tbody>
                    {
                    valor.map((d, i) => (
                    <tr key={i}>
                        <td>{d.id}</td>
                        <td>{d.nome}</td>
                        <td>{d.valor}</td>
                        <td>{d.detalhes}</td>
                        <td> <img className="fto" src={d.img}  /> </td>
                        <td>
                        <Link to={`/atualizar/${d.id}`} className='btn btn-sm btn-success'>Atualizar</Link>
                        <button onClick={e => hardSubmit(d.id)} className='btn btn-sm ms-1 btn-danger' >Excluir</button>
                        {/* <Link to="/" className='btn btn-sm ms-1 btn-danger'>Excluir</Link> */}
                        </td>
                    </tr>
                    ))
                    }

            </tbody>
            </table>
        </div>
        </>
    )
    function hardSubmit(id) {
        const conf = window.confirm("Deseja excluir?")
        if (conf) {
            axios.delete("http://localhost:3000/produtos/"+id)
            .then(resp => {
                alert("Excluído!")
                navegar("/painelbase")
            })
            .catch(err => console.log(err))

        }

    }
}

export default PainelBase