import { useState } from "react";
import axios from "axios";

function App() {
const [form, setForm] = useState({
nome: "",
sobrenome: "",
cpf: "",
telefone: "",
});

const [mensagem, setMensagem] = useState("");
const handleChange = (e) => {
setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
e.preventDefault();
try {
await axios.post("http://localhost:8000/api/pessoas", form);

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

<>
<input
type="text"
name="nome"
placeholder="Nome"
value={form.nome}
onChange={handleChange}
required
/>
</>

<>
<input
type="text"
name="sobrenome"
placeholder="Sobrenome"
value={form.sobrenome}
onChange={handleChange}
required
/>
</>
<input
type="text"
name="cpf"
placeholder="CPF"
value={form.cpf}
onChange={handleChange}
minLength='11'
maxLength='11'
required
/>

<input
type="text"
name="telefone"
placeholder="Telefone"
value={form.telefone}
onChange={handleChange}
minLength='11'
maxLength='11'
required
/>

<button type="submit">Cadastrar</button>

</form>

{mensagem && <p>{mensagem}</p>}
    </div> 
    
);}


export default App;
