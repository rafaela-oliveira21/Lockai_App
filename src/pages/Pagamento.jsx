import { useState } from "react";
import { Check, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Pagamento() {
  const navigate = useNavigate();
  const [copiado, setCopiado] = useState(false);
  const [comprovanteEnviado, setComprovanteEnviado] = useState(false);

  const copiarCodigo = () => {
    navigator.clipboard.writeText("etechas@etec.gov.sp.br");
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  const handleEnviarComprovante = () => {
    setComprovanteEnviado(true);
    setTimeout(() => setComprovanteEnviado(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-6 pt-20 pb-8">
      <div className="fixed top-0 left-0 right-0 bg-background z-10 border-b border-gray-700 py-4">
        <div className="max-w-sm mx-auto flex justify-between items-center px-4">
          <button
            onClick={() => navigate("/login")}
            className="bg-secondary text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-secondary"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-xl font-semibold text-white">Pagamento</h1>
          <div className="w-10"></div>
        </div>
      </div>

      <div className="w-full max-w-sm bg-primary p-6 rounded-2xl shadow-md space-y-6">
        
        {/* Card do Plano */}
        <div className="p-5 bg-blue-600/30 border border-blue-700/50 rounded-xl shadow"
>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-400 text-sm">Plano</p>
              <p className="text-white font-medium">Anual</p>
            </div>
            <div className="text-right">
              <p className="text-gray-400 text-sm">Valor</p>
              <p className="text-white font-bold text-lg">R$ 120,00</p>
            </div>
          </div>
        </div>

        {/* Card de Posição e Localização */}
        <div className="p-5 bg-blue-600/30 border border-blue-700/50 rounded-xl shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-400 text-sm">Posição</p>
              <p className="text-white font-medium">Alto</p>
            </div>
            <div className="text-right">
              <p className="text-gray-400 text-sm">Localização</p>
              <p className="text-white font-medium">Nr° 001</p>
            </div>
          </div>
        </div>

        {/* QR Code */}
        <div className="flex flex-col gap-6 mb-6">
          <h2 className="text-lg font-semibold text-white text-center">QRCODE PIX</h2>
          
          <div className="bg-white p-5 rounded-xl w-48 h-48 flex items-center justify-center mx-auto">
            <div className="text-center">
              {/* COLOCAR O QR CODE AQUI, BOA SORTE KKKKK */}
            </div>
          </div>

          {/* Chave PIX */}
          <div>
            <p className="text-gray-400 text-sm mb-2 text-center">Chave PIX</p>
            <p className="text-secondary font-medium text-center break-all">
              etechas@etec.gov.sp.br
            </p>
          </div>
        </div>

        {/* Botões */}
        <div className="space-y-4">
          <button
            onClick={copiarCodigo}
            className="w-full bg-secondary text-white py-4 rounded-xl font-medium hover:bg-secondary transition-colors flex items-center justify-center"
          >
            {copiado ? "Código Copiado!" : "Copiar Código PIX"}
          </button>
          
          <button
            onClick={handleEnviarComprovante}
            className="w-full bg-terceary text-white py-4 rounded-xl font-medium hover:bg-gray-600 transition-colors flex items-center justify-center"
          >
            {comprovanteEnviado ? "Comprovante Enviado!" : "Enviar Comprovante"}
          </button>
        </div>
      </div>

      {/* Notificação */}
      {comprovanteEnviado && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg">
          <div className="flex items-center">
            <Check size={20} className="mr-2" />
            Comprovante enviado com sucesso!
          </div>
        </div>
      )}
    </div>
  );
}
