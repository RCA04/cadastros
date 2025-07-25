import axios from "axios";
import { useEffect, useState } from "react";
import {useParams, Link, useNavigate} from "react-router-dom";
import DeleteUser from "../../modals/deleteUser";
import EditUser from "../../modals/editUSer";
import './index.css'


function UserDetails(){
 const {id} = useParams();
 const api = process.env.REACT_APP_API_URL;
 const [user, setUser] = useState(null);
 const [showDeleteModal, setShowDeleteModal] = useState(false);
 const [showEditModal, setShowEditModal] = useState(false);
 const navigate = useNavigate()

 useEffect(()=>{
    axios.get(`${api}/${id}`)
    .then(res => setUser(res.data))
    .catch(error => console.error('Erro ao buscar', error));
 },[id])

 const handleUpdate = (updatedData) => {
  axios.put(`${api}/${id}`, updatedData)
    .then(() => {
      alert("Usuário atualizado com sucesso!");
      setUser((prev) => ({ ...prev, ...updatedData }));
      setShowEditModal(false);
    })
    .catch(() => {
      alert("Erro ao atualizar usuário.");
    });
};


 const handleDelete = () => {
    axios.delete(`${api}/${id}`)
    .then(()=>{
        alert("Usuário Deletado com sucesso!");
        navigate('/usuarios');
    })
    .catch(()=> alert("error ao deletar o usuário."))
 }


 if(!user) return <p>carregando usúario ...</p>;


    return(
    <div className="container">
      <Link to="/usuarios">
        <button className="returnToList">Retornar</button>
      </Link>
      <h2>Detalhes do Usuário</h2>
      <div className="userInfos">
        <ul>
          <li>
      <p><strong>ID:</strong></p>
      <p>{user.id}</p>
          </li>
          <li>
      <p><strong>Nome:</strong></p>
      <p> {user.nome}</p>
          </li>
          <li>
      <p><strong>Sobrenome:</strong> </p>
      <p>{user.sobrenome}</p>
          </li>
          <li>
      <p><strong>Telefone:</strong></p>
      <p>{user.telefone}</p>
          </li>
          <li>
      <p><strong>CPF:</strong> </p>
      <p>{user.cpf}</p>
          </li>
        </ul>
      </div>

        <div className="buttonsDetailsUsers">
        <button  onClick={()=> setShowDeleteModal(true)}>
        Excluir
        </button>
        <button  onClick={()=> setShowEditModal(true)}>
        Editar
        </button>
        </div>


        {showEditModal && (
          <EditUser
          user={user}
          onCancel={()=> setShowEditModal(false)}
          onConfirm={handleUpdate}
          />
        )}

        {showDeleteModal &&(
            <DeleteUser
            nome={user.nome}
            sobrenome={user.sobrenome}
            onCancel={()=> setShowDeleteModal(false)}
            onConfirm={handleDelete}
            />
        )}
        
    </div>
    );
}

export default UserDetails;