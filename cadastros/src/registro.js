import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Registro() {

const api = process.env.REACT_APP_API_URL

const [form, setForm] = useState({
nome: "",
sobrenome: "",
cpf: "",
telefone: "",
});



function formatarCPF(value) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2') 
    .replace(/(\d{3})(\d)/, '$1.$2') 
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}


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


const [mensagem, setMensagem] = useState("");

const handleChange = (e) => {
const {name, value} = e.target;

let valorFormatado = value;

if (name === 'cpf'){
  valorFormatado = formatarCPF(value)
}

if (name === 'telefone'){
  valorFormatado = formatarTelefone(value)
}

if (name === 'nome'){
  valorFormatado = formatarNome(value)
}

if (name === 'sobrenome'){
  valorFormatado = formatarNome(value)
}

setForm({ ...form, [e.target.name]: valorFormatado });
};

const handleSubmit = async (e) => {
e.preventDefault();
try {
await axios.post(api, form);

setMensagem("Pessoa cadastrada com sucesso!");

setForm({
nome: "",
sobrenome: "",
cpf: "",
telefone: "",
});

} catch (error) {

setMensagem("Erro ao cadastrar pessoa.");

alert(error.response?.data || error.message);

}}

return (
<div className="container">

<h2>Cadastro</h2>

<form onSubmit={handleSubmit}>

<input
type="text"
name="nome"
placeholder="Nome"
value={form.nome}
onChange={handleChange}
required
/>

<input
type="text"
name="sobrenome"
placeholder="Sobrenome"
value={form.sobrenome}
onChange={handleChange}
required
/>
<input
type="text"
name="cpf"
placeholder="CPF"
value={form.cpf}
onChange={handleChange}
minLength='14'
maxLength='14'
required
/>

<input
type="text"
name="telefone"
placeholder="Telefone"
value={form.telefone}
onChange={handleChange}
minLength='15'
maxLength='15'
required
/>

<button type="submit">Cadastrar</button>
</form>

<div className="buttonLink">
  <Link to='/usuarios'>Lista de Usuários</Link>
</div>

{mensagem && <p>{mensagem}</p>}
</div> 
    
);}


export default Registro;
