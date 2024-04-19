import axios from "axios"
import { useEffect,useState } from "react"
import { Link, useNavigate, useParams} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Carrinho.css"
import bandeira from "../../assets/bandeiras-3.png"

function Carrinho() {
    const {id} = useParams()
    const [data, setData] = useState([])
    const nav = useNavigate()
    const [res, setRes] = useState(0)

    useEffect(() => {
        axios.get("http://localhost:3000/produtos/"+id)
        .then(resp => setData(resp.data))
        .catch(err => console.log(err))
    })

    const calcularTotal = () =>{
        return(data.valor / res).toLocaleString("pt-BR", {style: "currency", currency:"BRL"})
    }

    return (
        <>
        <div className="form-container">
            <h2>Carrinho de compras</h2>
            <div>
                <img src={data.img} style={{width:"300px", height:"300px"}} />
            </div>
            <div>
                <h3>Produto</h3>
                {data.nome}
            </div>
            <div>
                <h3>Preço do Produto</h3>
               Valor das parcelas: {calcularTotal()}
            </div>
            <div>
            {/* <Link onClick={validar()} className='btn btn-sm btn-success'>Comprar!</Link> */}
            <br />
            <div className="form-container">

                <form>
                    <table>
                        <thead>
                            <tr>
                                <div>
                                <td>Opções de Pagameto</td>
                                </div>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colspan="3"> <input type="text" name="ncartao" placeholder="Número do cartão"/></td>
                            </tr>
                            <tr>
                                    <td><input type="text" name="nome" placeholder="Nome impresso no cartão"/></td>
                                    <td><input type="text" name="data" placeholder="Data de Vencimento"/></td>
                                    <td><input type="text" name="cvv" placeholder="CVV"/></td>
                                </tr>
                                <tr>
                                <select onChange={(e) => setRes(e.target.value)}>
                                    <option value="" disable >Parcelas do produto</option>
                                    <option value={1} disable>1</option>
                                    <option value={2} disable>2</option>
                                    <option value={3} disable>3</option>
                                    <option value={4} disable>4</option>
                                    <option value={5} disable>5</option>
                                    <option value={6} disable>6</option>
                                    <option value={7} disable>7</option>
                                    <option value={8} disable>8</option>
                                    <option value={9} disable>9</option>
                                </select>
                                </tr>
                                <tr>
                                     <td><input type="text" name="nascim" placeholder="Data de Nascimento - (DD/MM/AAAA)"/></td>
                                </tr>
                                <tr>
                                    <td><img src={bandeira} alt="" /></td>
                                </tr>

                                <tr><td><Link className='btn btn-sm btn-success'>Comprar!</Link></td></tr>
                        </tbody>
                    </table>
                </form>

            </div>


            </div>
        </div>
        </>
    )
    function validar() {
        alert(`Sua compra foi realizada com sucesso! - Valor total da compra: ${data.valor}`)
        nav("/")
    }

}

export default Carrinho