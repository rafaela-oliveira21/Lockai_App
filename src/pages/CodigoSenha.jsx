import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function CodigoSenha() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [mensagem, setMensagem] = useState(""); // ✅ nova mensagem de feedback
  const inputsRef = useRef([]);
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    const value = e.target.value;

    // Permite apenas números
    if (!/^\d*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Foca no próximo campo se digitou um número
    if (value !== "" && index < 5) {
      inputsRef.current[index + 1].focus();
    }

    // Se todos os campos estão preenchidos, chama a função de verificação
    if (newCode.every((digit) => digit !== "")) {
      handleVerification(newCode.join(""));
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && code[index] === "" && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleVerification = (fullCode) => {
    console.log("Código completo:", fullCode);
    setMensagem(`Código ${fullCode} enviado para verificação!`);

    // Remove a mensagem após 3 segundos
    setTimeout(() => {
      setMensagem("");
    }, 3000);
  };

  const handleResendCode = () => {
    setCode(["", "", "", "", "", ""]);
    inputsRef.current[0]?.focus();

    setMensagem("Código reenviado para seu e-mail!");
    setTimeout(() => {
      setMensagem("");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col justify-center items-center px-6">
      {/* Botão de voltar */}
      <button
        onClick={() => navigate("/recuperar-senha")}
        className="absolute top-4 left-4 bg-secondary text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold hover:bg-secondary"
      >
        &lt;
      </button>

      <div className="w-full max-w-sm bg-primary p-6 rounded-2xl shadow-md">
        <h1 className="text-xl font-semibold text-white mb-2">
          Verificação de Código
        </h1>

        <p className="text-sm text-gray-300 mb-6">
          Enviamos um código de 6 dígitos para:
          <span className="text-secondary font-medium"> valter@gmail.com</span>
        </p>

        {/* ✅ Mensagem de sucesso */}
        {mensagem && (
          <div className="mb-4 p-3 bg-green-400/10 border border-green-400/30 rounded-lg flex items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 13l5-5-1.414-1.414L9 10.172 7.414 8.586 6 10l3 3z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-green-400 text-sm">{mensagem}</p>
          </div>
        )}

        {/* Códigos */}
        <div className="flex justify-between mb-6">
          {code.map((digit, index) => (
            <input
              key={index}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (inputsRef.current[index] = el)}
              className="w-12 h-12 text-center text-lg bg-terceary text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          ))}
        </div>

        {/* Botão de verificação */}
        <button
          onClick={() => handleVerification(code.join(""))}
          className="w-full bg-secondary text-white py-3 rounded-lg font-medium hover:bg-secondary transition-colors mb-4"
        >
          Verificar Código
        </button>

        {/* Link para reenviar */}
        <p className="text-center text-sm text-gray-300">
          Não recebeu o código?{" "}
          <button
            onClick={handleResendCode}
            className="text-secondary font-medium hover:underline"
          >
            Reenviar
          </button>
        </p>
      </div>
    </div>
  );
}
