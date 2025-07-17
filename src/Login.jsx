import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './assets/css/login.css';
function Login() {
  const [Usuario, setUsuario] = useState("");
  const [Senha, setSenha] = useState("");
  const navigate = useNavigate(); 

  function Entrar() {
    if (Usuario === "adm369" && Senha === "1234") {
      alert("Logado com sucesso");
      navigate("/lista"); 
    } else {
      alert("Usuário ou senha errados");
      setUsuario("");
      setSenha("");
    }
  }

  return (
    <div>
      <div id="caixa">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Usuário"
        value={Usuario}
        onChange={(e) => setUsuario(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Senha"
        value={Senha}
        onChange={(e) => setSenha(e.target.value)}
        required
      />
      <button onClick={Entrar}>Entrar</button>
    </div>
    </div>
  );
}

export default Login;

