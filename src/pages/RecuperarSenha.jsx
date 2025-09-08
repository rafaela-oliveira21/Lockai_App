import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function RecuperarSenha() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [mensagemErro, setMensagemErro] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setMensagemErro("Por favor, insira um e-mail antes de continuar.");
      
      // Limpa a mensagem após 3 segundos
      setTimeout(() => {
        setMensagemErro("");
      }, 3000);

      return;
    }

    // Aqui você pode fazer a chamada para a API

    navigate("/CodigoSenha");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col justify-center items-center px-6">
      {/* Botão de voltar */}
      <button
        onClick={() => navigate("/login")}
        className="absolute top-4 left-4 bg-secondary text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold hover:bg-secondary"
      >
        &lt;
      </button>

      <div className="w-full max-w-sm bg-primary p-6 rounded-2xl shadow-md mx-auto mt-20">
        <h1 className="text-xl font-semibold text-white mb-4">Recuperar Senha</h1>
        <p className="font-medium text-white mb-4">
          Insira seu e-mail para procurar sua conta. Enviaremos um link para você redefinir sua senha.
        </p>

        {/* ✅ Mensagem de erro */}
        {mensagemErro && (
          <div className="mb-4 p-3 bg-red-400/10 border border-red-400/30 rounded-lg flex items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-red-400 mr-2 flex-shrink-0 mt-0.5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-red-400 text-sm">{mensagemErro}</p>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            E-mail
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail"
            className="w-full px-3 py-2 mb-4 bg-terceary text-gray-300 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
          />

          <button
            type="submit"
            className="w-full bg-secondary text-white py-3 rounded-lg font-medium hover:bg-secondary/90 transition-all"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
