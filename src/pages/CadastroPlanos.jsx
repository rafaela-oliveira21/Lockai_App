import { Plus } from "lucide-react";

export default function CadastroPlanos() {
  return (
    <div className="flex flex-col min-h-screen bg-[#03033D] text-white relative">
      <div className="flex flex-col flex-1 px-6">
        {/* Título */}
        <h1 className="text-2xl font-bold mt-2">Adicionar plano</h1>

        {/* Botão de adicionar plano */}
        <button className="self-center my-10">
          <div className="p-6 border-4 border-blue-500 rounded-2xl flex items-center justify-center">
            <Plus className="w-12 h-12 text-blue-500" />
          </div>
        </button>

        {/* Usar plano */}
        <h2 className="text-xl mb-3">Usar plano</h2>
        <div className="bg-blue-600 text-white rounded-2xl p-10 flex justify-center items-center">
          <span className="text-lg">Vazio</span>
        </div>
      </div>
    </div>
  );
}
