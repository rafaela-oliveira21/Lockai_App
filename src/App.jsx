import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import RecuperarSenha from "./pages/RecuperarSenha";
import AlterarSenha from "./pages/AlterarSenha";
import CodigoSenha from "./pages/CodigoSenha";
import CadastroPlanos from "./pages/CadastroPlanos";
import CadastroPlanosCategoria from "./pages/CadastroPlanosCategoria";
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
        <Route path="/Home" element={<Home/>}/>
        <Route path="/CadastroPlanos" element={<CadastroPlanos/>}/>
        <Route path="/CadastroPlanosCategoria" element={<CadastroPlanosCategoria/>}/>
      </Routes>
    </Router>
  );
}