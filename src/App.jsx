import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import RecuperarSenha from "./pages/RecuperarSenha";
import AlterarSenha from "./pages/AlterarSenha";
import CodigoSenha from "./pages/CodigoSenha";
import Pagamento from "./pages/Pagamento";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/recuperar-senha" element={<RecuperarSenha />} />
        <Route path="/CodigoSenha" element={<CodigoSenha/>}/>
        <Route path="/AlterarSenha" element={<AlterarSenha />}/>
        <Route path="/Pagamento" element={<Pagamento/>}/>
      </Routes>
    </Router>
  );
}