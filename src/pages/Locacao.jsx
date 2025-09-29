import { useState } from "react";
import Menu from "../components/Menu";

export default function Locacoes() {
  const [posicaoSelecionada, setPosicaoSelecionada] = useState(null);

  return (
    <div style={{ paddingBottom: "60px", background: "#0a0a2a", minHeight: "100vh", color: "white", padding: "16px" }}>
      <h2>Locações</h2>

      <input
        type="text"
        placeholder="Buscar"
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "8px",
          border: "none",
          marginBottom: "20px",
          background: "#222",
          color: "white",
        }}
      />

      <h4>Posições</h4>
      <div style={{ marginBottom: "20px" }}>
        {["Alto", "Médio", "Baixo"].map((pos) => (
          <div
            key={pos}
            onClick={() => setPosicaoSelecionada(pos)}
            style={{
              padding: "12px",
              marginBottom: "10px",
              borderRadius: "8px",
              cursor: "pointer",
              background: posicaoSelecionada === pos ? "#007aff" : "#111",
              color: "white",
            }}
          >
            {pos}
          </div>
        ))}
      </div>

      {posicaoSelecionada && (
        <>
          <h4>Localização</h4>
          {["Nº 001", "Nº 002", "Nº 003"].map((loc) => (
            <div
              key={loc}
              onClick={() => alert(`Reserva iniciada para ${posicaoSelecionada} - ${loc}`)}
              style={{
                padding: "12px",
                marginBottom: "10px",
                borderRadius: "8px",
                cursor: "pointer",
                background: "#111",
                color: "white",
              }}
            >
              {loc}
            </div>
          ))}
        </>
      )}

      <Menu />
    </div>
  );
}
