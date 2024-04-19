import { useNavigate } from "react-router-dom";

const navi = useNavigate()
function enviar(event) {
    enviar.preventDefault()
    alert("Envio concluído")
    navi = "/"
}


function Contato() {
    return (
        <>
        <h1 style={{textAlign: "center"}}>Entre em contato</h1>
        <div className="d-flex w-100 vh-70 justify-content-center align-items-center">
           
           <div className="w-50 border bg-light p-5">
            <form>
            <div >
                    <label htmlFor="name">Nome</label><br />
                    <input type="text" name="name" className="from-control" style={{width:"500px"}} />
                </div><br />
                <div>
                    <label htmlFor="text">Email</label><br />
                    <input type="email" name="email" className="from-control" style={{width:"500px"}} />
                </div><br />
                <div>
                    <label htmlFor="detalhes">Mensagem</label><br />
                    <textarea name="informe" id="info" rows="5" cols="30" />
                </div><br />
                <button onClick={enviar} className="btn btn-info" >Enviar</button>
            </form>
            </div> 
           
           
        </div><br />
        </>
    )
}

export default Contato;