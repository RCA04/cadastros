import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import deleteUSer from "./modals/deleteUser/deleteUser";

function Lista(){

const api = process.env.REACT_APP_API_URL

const [usuarios, setUsuarios] = useState([]);
const [userSelected, setUserSelected] = useState(null)

useEffect(()=>{
    axios.get(api)
    .then(response=>{
        setUsuarios(response.data)
    })
}, [])

const confirmDelete = () =>{
    axios.delete(`${api}/${userSelected.id}`)
    .then(()=>{
        setUserSelected(null)
    })
    .catch(error=>{
        alert("error ao apagar usuario:")
    })
}

const cancelDelete =() => {
setUserSelected(null);
}



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
                        <button className="btDelete" onClick={()=> userSelected(user)}>Excluir</button>
                    </div>
                </li>
            ))}
            </ul>
           
            <div className="usersLink">
                <div className="buttonLink">
            <Link to='/'>Retornar ao Registro</Link>
                </div>
            </div>
            {userSelected && (
                <deleteUser/>
            )}
        </div>
    )
}

export default Lista;