
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import FeatureShowcase from './components/FeatureShowcase';
import QuizSection from './components/QuizSection';
import DemoSection from './components/DemoSection';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-purple/30">
      <Helmet>
        <title>Bagent | Agentes de IA para tu negocio</title>
        <meta name="description" content="Automatiza ventas, soporte y tareas repetitivas con agentes de IA listos para producción." />
        <link rel="canonical" href="https://bagent.cl/" />
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <QuizSection />
        <Services />
        <FeatureShowcase />
        <DemoSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
