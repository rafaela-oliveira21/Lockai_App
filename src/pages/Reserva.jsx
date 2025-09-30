import { Link } from "react-router-dom";

export default function Reserva() {
  return (
    <div className="bg-[#0B0B45] min-h-screen flex flex-col text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4">
        <Link to="/locacao">
          <button className="text-white text-2xl">←</button>
        </Link>
        <h1 className="text-lg font-bold">Reserva</h1>
        <div className="w-6" /> {/* espaço para alinhar */}
      </header>

      {/* Imagem */}
      <div className="flex justify-center p-4">
        <img
          src="/src/assets/img/armario.png" // ajuste o caminho da imagem
          alt="Armário"
          className="rounded-lg w-4/5 border"
        />
      </div>

      {/* Informações */}
      <div className="px-6 mt-4 space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Plano Anual</span>
          <span>R$120,00</span>
        </div>
        <div className="flex justify-between">
          <span>Posição</span>
          <span>Alto</span>
        </div>
        <div className="flex justify-between">
          <span>Localização</span>
          <span>Nº 001</span>
        </div>
      </div>

      {/* Botões */}
      <div className="flex justify-around mt-8">
        <button className="px-6 py-2 rounded-lg bg-blue-600">Voltar</button>
        <button className="px-6 py-2 rounded-lg bg-white text-blue-600">
          Avançar
        </button>
      </div>


    </div>
  );
}
