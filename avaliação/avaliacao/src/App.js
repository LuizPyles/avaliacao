import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { FaHome, FaBuilding, FaHeadset } from "react-icons/fa";
import { BsBuildingGear } from "react-icons/bs";
import Home from './components/pages/Home';
import Contato from './components/pages/Contato';
import Sobre from './components/pages/Sobre';
import Servicos from './components/pages/Servicos';


function App() {
  return (
    <div>
      <BrowserRouter>
        <ul className='list'>
          <li><Link to="/"><FaHome /> Home</Link></li>
          <li><Link to="/sobre"><FaBuilding /> Sobre</Link></li>
          <li><Link to="/servicos"><BsBuildingGear /> Serviços</Link></li>
          <li><Link to="/contato"><FaHeadset /> Contato</Link></li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servicos" element={<Servicos />} />
        </Routes>
      </BrowserRouter>

      <p className='rodape'>&copy; LuizServiços - Todos os direitos reservados.</p>
    </div>
  );
}

export default App;
