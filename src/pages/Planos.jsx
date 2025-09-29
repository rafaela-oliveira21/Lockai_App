import Menu from "../components/Menu";

export default function Planos() {
  return (
    <div style={{ paddingBottom: "60px", background: "#0a0a2a", minHeight: "100vh", color: "white" }}>
      <h2>Planos</h2>

      <div style={{ background: "#111", borderRadius: "8px", marginBottom: "20px", padding: "10px" }}>
        <img src="/src/assets/img/armario.png" alt="Armário" style={{ width: "100%", borderRadius: "8px" }} />
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
          <span>Plano Semestral</span>
          <strong>R$ 60,00</strong>
        </div>
      </div>

      <div style={{ background: "#111", borderRadius: "8px", marginBottom: "20px", padding: "10px" }}>
        <img src="/src/assets/img/armario.png" alt="Armário" style={{ width: "100%", borderRadius: "8px" }} />
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
          <span>Plano Anual</span>
          <strong>R$ 120,00</strong>
        </div>
      </div>

      <Menu />
    </div>
  );
}
