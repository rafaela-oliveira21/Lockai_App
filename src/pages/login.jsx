import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erroSenha, setErroSenha] = useState("");

  const handleUsuarioChange = (e) => {
    const value = e.target.value;
    const sanitized = value.replace(/[^a-zA-Z0-9@.]/g, "");
    setUsuario(sanitized);
  };

  const handleSenhaChange = (e) => {
    const value = e.target.value;
    const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8}$/;
    setSenha(value);

    if (value.length === 0) {
      setErroSenha("");
    } else if (!regex.test(value)) {
      setErroSenha("A senha deve ter 8 caracteres, 1 letra maiúscula e 1 caractere especial.");
    } else {
      setErroSenha("");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col justify-center items-center px-6">
      {/* Logo */}
      <div className="mb-8">
        <img src={logo} alt="Logo Lockai" className="w-32 mx-auto" />
      </div>

      {/* Card de Login */}
      <div className="w-full max-w-sm bg-primary p-6 rounded-2xl shadow-md">
        <h1 className="text-xl font-semibold text-white mb-4">Login</h1>

        {/* Campo Login */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300 mb-1">Usuário</label>
          <input
            type="text"
            value={usuario}
            onChange={handleUsuarioChange}
            placeholder="Digite seu login"
            className="w-full px-3 py-2 bg-terceary text-gray-300 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
          />
        </div>

        {/* Campo Senha */}
        <div className="mb-2 relative">
          <label className="block text-sm font-medium text-gray-300 mb-1">Senha</label>
          <input
            type={showPassword ? "text" : "password"}
            value={senha}
            onChange={handleSenhaChange}
            placeholder="Digite sua senha"
            className={`w-full px-3 py-2 bg-terceary text-gray-300 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary pr-10 ${erroSenha ? "border-red-500" : ""}`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-9 text-gray-300 hover:text-gray-100"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {/* Mensagem de erro */}
        {erroSenha && <p className="text-red-400 text-sm mt-1">{erroSenha}</p>}

        {/* Link esqueci senha */}
        <div className="text-left mb-4 mt-2">
          <Link to="/recuperar-senha" className="text-sm text-secondary hover:underline">
            Esqueci a senha?
            </Link>
        </div>

        {/* Botão Entrar */}
        <button
          disabled={!!erroSenha || senha.length === 0}
          className="w-full bg-secondary text-white py-3 rounded-lg font-medium hover:bg-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Entrar
        </button>

        {/* Cadastro */}
        <p className="text-center text-sm text-gray-300 mt-4">
          Ainda não possui uma conta?{" "}
          <Link to="/cadastro" className="text-secondary font-medium hover:underline">
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  );
}
