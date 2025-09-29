import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import RecuperarSenha from "./pages/RecuperarSenha";
import AlterarSenha from "./pages/AlterarSenha";
import CodigoSenha from "./pages/CodigoSenha";
import Pagamento from "./pages/Pagamento";
import Planos from "./pages/Planos";
import Locacao from "./pages/Locacao";
import Reserva from "./pages/Reserva";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/RecuperarSenha" element={<RecuperarSenha />} />
        <Route path="/CodigoSenha" element={<CodigoSenha/>}/>
        <Route path="/AlterarSenha" element={<AlterarSenha />}/>
        <Route path="/Pagamento" element={<Pagamento/>}/>
        <Route path="/Planos" element={<Planos />} />
        <Route path="/Locacao" element={<Locacao />} />
        <Route path="/Reserva" element={<Reserva />} />
      </Routes>
    </Router>
  );
}

