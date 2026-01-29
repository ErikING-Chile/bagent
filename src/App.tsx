
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
