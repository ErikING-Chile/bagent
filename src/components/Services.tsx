
import ServiceCard from './ServiceCard';
import supportImg from '../assets/support.png';
import salesImg from '../assets/sales.png';
import rpaImg from '../assets/rpa.png';
import analyticsImg from '../assets/analytics.png';

const Services = () => {
    const services = [
        {
            title: "Atención al Cliente 24/7",
            description: "Resolución instantánea, soporte multicanal y experiencia personalizada para tus clientes, disponible siempre.",
            image: supportImg,
            delay: "0ms"
        },
        {
            title: "Chatbots con IA",
            description: "Asistentes virtuales inteligentes que entienden el contexto y resuelven consultas complejas automáticamente.",
            image: supportImg, // Reusing support image as placeholder/relevant image
            delay: "50ms"
        },
        {
            title: "Ventas y Lead Nurturing",
            description: "Identifica prospectos, califica leads y personaliza ofertas para maximizar tus conversiones y cerrar más ventas.",
            image: salesImg,
            delay: "100ms"
        },
        {
            title: "Automatización (RPA)",
            description: "Optimiza tareas repetitivas, gestiona datos y coordina flujos de trabajo internos, aumentando la eficiencia operativa.",
            image: rpaImg,
            delay: "200ms"
        },
        {
            title: "Análisis y Estrategia",
            description: "Convierte datos complejos en insights accionables, predice tendencias y optimiza decisiones estratégicas.",
            image: analyticsImg,
            delay: "300ms"
        }
    ];

    return (
        <section id="services" className="relative py-32 bg-brand-dark">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Soluciones de IA para cada <span className="text-brand-purple">Necesidad</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Creamos agentes personalizados que se integran a la perfección en tus operaciones.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
