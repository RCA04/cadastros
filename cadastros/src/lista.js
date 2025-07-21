import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Lista(){

const api = process.env.REACT_APP_API_URL

const [usuarios, setUsuarios] = useState([]);

useEffect(()=>{
    axios.get(api)
    .then(response=>{
        setUsuarios(response.data)
    })
}, [])

    return(
        <div className="containerList">
            
            <div className="title">
            <h1>Usuários</h1>
            </div>

            <div className="listTitles">
                <p>Nome:</p>
                <p>Sobrenome</p>
                <p>Telefone:</p>
                <p> </p>
            </div>

            <ul>
            {usuarios.map((user,i)=>(
                <li key={i}>
                    <div className="userItem">
                        <p>
                        {user.nome}
                        </p>
                        <p>
                        {user.sobrenome}
                        </p>
                        <p>
                        {user.telefone}
                        </p>
                        <button className="btEditar">Editar</button>
                        <button className="btDelete">Excluir</button>
                    </div>
                </li>
            ))}
            </ul>
           
            <div className="usersLink">
                <div className="buttonLink">
            <Link to='/'>Retornar ao Registro</Link>
                </div>
            </div>
        </div>
    )
}

export default Lista;