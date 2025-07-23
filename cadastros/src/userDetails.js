import axios from "axios";
import { useEffect, useState } from "react";
import {useParams, Link} from "react-router-dom";


function UserDetails(){
 const {id} = useParams();
 const api = process.env.REACT_APP_API_URL;
 const [user, setUser] = useState(null);

 useEffect(()=>{
    axios.get(`${api}/${id}`)
    .then(res => setUser(res.data))
    .catch(error => console.error('Erro ao buscar', error));
 },[id])

 if(!user) return <p>carregando usúario ...</p>;


    return(
    <div className="container">
      <h2>Detalhes do Usuário</h2>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Nome:</strong> {user.nome}</p>
      <p><strong>Sobrenome:</strong> {user.sobrenome}</p>
      <p><strong>Telefone:</strong> {user.telefone}</p>
      <p><strong>CPF:</strong> {user.cpf}</p>

      <Link to="/usuarios">
        <button style={{ marginTop: '10px' }}>Voltar à Lista</button>
      </Link>
    </div>
    );
}

export default UserDetails;