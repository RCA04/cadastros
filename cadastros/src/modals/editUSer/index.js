import { useState, useEffect } from "react";
import "./index.css";

function EditUser({ user, onCancel, onConfirm }) {
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    telefone: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        nome: user.nome,
        sobrenome: user.sobrenome,
        telefone: user.telefone,
      });
    }
  }, [user]);


    function formatarTelefone(value) {
  return value
    .replace(/\D/g, '')
    .replace(/^(\d{2})(\d)/g, '($1) $2') 
    .replace(/(\d{5})(\d)/, '$1-$2') 
    .slice(0, 15);
}

function formatarNome(value) {
  return value
    .replace(/[0-9]/g, '')
}


  const handleChange = (e) => {
    const { name, value } = e.target;

    let valorFormatado = value;

        if (name === 'telefone'){
    valorFormatado = formatarTelefone(value)
    }

    if (name === 'nome'){
    valorFormatado = formatarNome(value)
    }

    if (name === 'sobrenome'){
    valorFormatado = formatarNome(value)
    }


    setFormData((old) => ({
      ...old,
      [name]: valorFormatado
    }));
  };

  const handleSubmit = () => {
    onConfirm(formData);
  };







  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Editar Usuário</h3>
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Nome"
        />
        <input
          type="text"
          name="sobrenome"
          value={formData.sobrenome}
          onChange={handleChange}
          placeholder="Sobrenome"
        />
        <input
          type="text"
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
          placeholder="Telefone"
        />
        <div className="buttons">
          <button onClick={handleSubmit}>Salvar</button>
          <button onClick={onCancel}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}

export default EditUser;