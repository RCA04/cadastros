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

alert.error(error.response?.data || error.message);

}

  return (
    <div className="container">
      
    </div>
  );
}

export default App;
