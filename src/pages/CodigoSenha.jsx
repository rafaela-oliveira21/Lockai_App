import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";


export default function CodigoSenha() {
  const [code, setCode] = useState(["", "", "", "", "",""]);
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
    // Volta para o campo anterior ao pressionar Backspace em campo vazio
    if (e.key === "Backspace" && code[index] === "" && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleVerification = (fullCode) => {
    console.log("Código completo:", fullCode);
    // Aqui você implementaria a lógica de verificação do código
    alert("Código " + fullCode + " enviado para verificação!");
  };

  const handleResendCode = () => {
    // Lógica para reenviar o código
    setCode(["", "", "", "", "", ""]);
    inputsRef.current[0].focus();
    alert("Código reenviado para seu e-mail!");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col justify-center items-center px-6">
      
      {/* Botão de voltar */}
<button
  onClick={() => navigate("/recuperarSenha")}
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
          <span className="text-secondary font-medium"> teste@gmail.com</span>
        </p>

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

        <button
          onClick={() => handleVerification(code.join(""))}
          className="w-full bg-secondary text-white py-3 rounded-lg font-medium hover:bg-secondary transition-colors mb-4"
        >
          Verificar Código
        </button>

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
