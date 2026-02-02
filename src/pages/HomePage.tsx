import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import ArchitectureSection from '../components/ArchitectureSection';
import Services from '../components/Services';
import QuizSection from '../components/QuizSection';
import CTA from '../components/CTA';

const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>Bagent | Agentes de IA para tu negocio</title>
                <meta name="description" content="Automatiza ventas, soporte y tareas repetitivas con agentes de IA listos para producción. Aumenta tu eficiencia con Inteligencia Artificial." />
                <link rel="canonical" href="https://www.bagent.cl/" />
            </Helmet>
            <Hero />
            <ArchitectureSection />
            <QuizSection />
            <Services />
            <CTA />
        </>
    );
};

export default HomePage;
