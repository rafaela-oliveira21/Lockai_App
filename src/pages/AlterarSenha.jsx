import { useState } from "react";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AlterarSenha() {
  const navigate = useNavigate();
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [erroSenha, setErroSenha] = useState("");

  const handleNovaSenhaChange = (e) => {
    const value = e.target.value;
    // Regex corrigido ✅
    const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&()_+\-=\[\]{};':"\\|,.<>\/?])[A-Za-z0-9!@#$%^&()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/;
    setNovaSenha(value);

    if (value.length === 0) {
      setErroSenha("");
    } else if (!regex.test(value)) {
      setErroSenha(
        "A senha deve ter pelo menos 8 caracteres, 1 letra maiúscula e 1 caractere especial."
      );
    } else {
      setErroSenha("");
    }
  };

  const handleConfirmarSenhaChange = (e) => {
    const value = e.target.value;
    setConfirmarSenha(value);

    if (novaSenha !== value) {
      setErroSenha("As senhas não coincidem.");
    } else {
      setErroSenha("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (novaSenha !== confirmarSenha) {
      setErroSenha("As senhas não coincidem.");
      return;
    }

    if (erroSenha) {
      return;
    }

    // Lógica para alterar a senha
    console.log("Senha alterada com sucesso!");
    alert("Senha alterada com sucesso!");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col justify-center items-center px-6">
      {/* Botão de voltar */}
      <button
        onClick={() => navigate("/CodigoSenha")}
        className="absolute top-4 left-4 bg-secondary text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
      >
        <ArrowLeft size={20} />
      </button>

      <div className="w-full max-w-sm mb-4">
        <h1 className="text-2xl font-bold text-white text-center">
          Alterar Senha
        </h1>
      </div>

      <div className="w-full max-w-sm mb-6">
        <div className="bg-gradient-to-br from-primary to-primary/80 p-5 rounded-xl border border-secondary/40 shadow-lg">
          <h2 className="text-lg font-semibold text-white mb-3">
            Redefinição de Senha
          </h2>
          <p className="text-sm text-gray-200 leading-relaxed">
            Agora é a hora de criar uma nova senha segura. Lembre-se de usar
            pelo menos{" "}
            <span className="text-secondary font-medium">8 caracteres</span>,
            incluindo{" "}
            <span className="text-secondary font-medium">1 letra maiúscula</span>{" "}
            e{" "}
            <span className="text-secondary font-medium">
              1 caractere especial
            </span>
            .
          </p>
        </div>
      </div>

      <div className="w-full max-w-sm bg-primary p-6 rounded-2xl shadow-md border border-gray-700">
        <form onSubmit={handleSubmit}>
          {/* Campo Nova Senha */}
          <div className="mb-5 relative">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Nova Senha
            </label>
            <input
              type={showNewPassword ? "text" : "password"}
              value={novaSenha}
              onChange={handleNovaSenhaChange}
              placeholder="Digite sua nova senha"
              className={`w-full px-4 py-3 bg-terceary text-white placeholder-gray-400 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent pr-12 transition-all 
                ${erroSenha ? "border border-red-500" : "border border-gray-600"}`}
            />
            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute right-3 top-10 text-gray-400 hover:text-white transition-colors"
            >
              {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Campo Confirmar Nova Senha */}
          <div className="mb-5 relative">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Confirmar Nova Senha
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmarSenha}
              onChange={handleConfirmarSenhaChange}
              placeholder="Confirme sua nova senha"
              className={`w-full px-4 py-3 bg-terceary text-white placeholder-gray-400 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent pr-12 transition-all 
                ${erroSenha ? "border border-red-500" : "border border-gray-600"}`}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-10 text-gray-400 hover:text-white transition-colors"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Mensagem de erro */}
          {erroSenha && (
            <div className="mb-5 p-3 bg-red-400/10 border border-red-400/30 rounded-lg flex items-start">
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
              <p className="text-red-400 text-sm">{erroSenha}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={
              !!erroSenha || novaSenha.length === 0 || confirmarSenha.length === 0
            }
            className="w-full bg-secondary text-white py-3 rounded-lg font-medium hover:bg-secondary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Confirmar
          </button>
        </form>
      </div>
    </div>
  );
}
