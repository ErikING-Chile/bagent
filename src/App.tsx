
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AgentesVentas from './pages/AgentesVentas';
import AgentesSoporte from './pages/AgentesSoporte';
import AutomatizacionWhatsapp from './pages/AutomatizacionWhatsapp';
import AtencionCliente from './pages/AtencionCliente';
import SobreNosotros from './pages/SobreNosotros';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="agentes-ventas" element={<AgentesVentas />} />
          <Route path="agentes-soporte" element={<AgentesSoporte />} />
          <Route path="automatizacion-whatsapp" element={<AutomatizacionWhatsapp />} />
          <Route path="atencion-cliente" element={<AtencionCliente />} />
          <Route path="sobre-nosotros" element={<SobreNosotros />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
