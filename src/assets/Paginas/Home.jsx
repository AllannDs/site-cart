import { useState, useEffect } from "react";
import Carrosel from "../Componentes/Carrosel";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Home() {

    const [valor, setValor] = useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:3000/produtos")
        .then(resp => setValor(resp.data))
        .catch(err => console.log(err))
    }

    )

    return (
        <>
        <Carrosel /><br />
        <div className="container ms-12">
            <div style={{display:"flex", flexWrap:"Wrap", gap:"20px"}}>
                {
                    valor.map((d,i) => (

                    <Card key={i} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={d.img} />
                    <Card.Body>
                      <Card.Title>{d.nome}</Card.Title>
                      <Card.Text>
                      {d.detalhes}
                      </Card.Text>
                      <Card.Text>
                      R${d.valor},00
                      </Card.Text>
                    </Card.Body>
                    <Link to={`/carrinho/${d.id}`} className="btn btn-primary">Comprar</Link>
                  </Card>
                    ))
                }
            </div> <br />
        </div>
        </>
    )
}

export default Home;