import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";

function Login() {
  const [Usuario, setUsuario] = useState("");
  const [Senha, setSenha] = useState("");
  const [carregando, setCarregando] = useState(false);
  const navigate = useNavigate();

  function Entrar() {
    setCarregando(true);
    setTimeout(() => {
      setCarregando(false);
      if (Usuario === "adm369" && Senha === "1234") {
        alert("Logado com sucesso");
        navigate("/lista");
      } else {
        alert("Usuário ou senha errados");
        setUsuario("");
        setSenha("");
      }
    }, 2000);
  }

  
  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-100 bg-[url('https://www.transparenttextures.com/patterns/food.png')] bg-[length:300px_300px]">
      <div className="bg-white shadow-xl p-8 rounded-2xl w-full max-w-sm border-4 border-yellow-300">
        <h1 className="text-3xl font-bold text-orange-500 text-center mb-6">
          🍋 Login de Acesso 🥕
        </h1>
        <div className="flex items-center bg-white border-2 border-orange-300 rounded-xl mb-4 px-3 py-2 focus-within:ring-2 focus-within:ring-orange-400">
          <FaUser className="text-orange-400 mr-2" />
          <input
            type="text"
            placeholder="Usuário"
            value={Usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
            className="w-full bg-transparent focus:outline-none text-orange-600"
            disabled={carregando}
          />
        </div>

        <div className="flex items-center bg-white border-2 border-orange-300 rounded-xl mb-6 px-3 py-2 focus-within:ring-2 focus-within:ring-orange-400">
          <FaLock className="text-orange-400 mr-2" />
          <input
            type="password"
            placeholder="Senha"
            value={Senha}
            onChange={(e) => setSenha(e.target.value)}
            required
            className="w-full bg-transparent focus:outline-none text-orange-600"
            disabled={carregando}
          />
        </div>

        <button
          onClick={Entrar}
          disabled={carregando}
          className={`w-full flex items-center justify-center gap-2 ${
            carregando ? "bg-orange-300 cursor-wait" : "bg-orange-400 hover:bg-orange-500"
          } text-white font-bold py-2 px-4 rounded-xl transition duration-300`}
        >
          {carregando && (
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          )}
          {carregando ? "Entrando..." : "Entrar"}
        </button>
      </div>
    </div>
  );
}

export default Login;
