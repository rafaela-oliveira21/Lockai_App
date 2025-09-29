import { Link } from "react-router-dom";
import "../assets/css/Menu.css";

export default function Menu() {
  return (
    <nav className="menu">
      <Link to="/">Início</Link>
      <Link to="/locacoes">Locações</Link>
      <Link to="/buscar">Buscar</Link>
      <Link to="/conta">Conta</Link>
    </nav>
  );
}
