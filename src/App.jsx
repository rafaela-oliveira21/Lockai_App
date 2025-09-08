import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import RecuperarSenha from "./pages/RecuperarSenha";
import Cadastro from "./pages/cadastro";
import CodigoSenha from "./pages/CodigoSenha";
import AlterarSenha from "./pages/AlterarSenha";
import Pagamento from "./pages/Pagamento";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/recuperar-senha" element={<RecuperarSenha />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/CodigoSenha" element={<CodigoSenha/>}/>
        <Route path="/AlterarSenha" element={<AlterarSenha />}/>
        <Route path="/Pagamento" element={<Pagamento/>}/>
      </Routes>
    </Router>
  );
}