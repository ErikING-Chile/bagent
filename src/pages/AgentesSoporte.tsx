import { Helmet } from 'react-helmet-async';
import CTA from '../components/CTA';
import { Headset, Clock, Heart } from 'lucide-react';

const AgentesSoporte = () => {
    return (
        <div className="pt-20">
            <Helmet>
                <title>Agentes de Soporte IA | Bagent</title>
                <meta name="description" content="Brinda soporte técnico y atención al cliente de clase mundial sin aumentar costos. Agentes de IA que resuelven tickets instantáneamente." />
                <link rel="canonical" href="https://www.bagent.cl/agentes-soporte" />
            </Helmet>

            <section className="relative py-20 px-6">
                <div className="absolute inset-0 bg-brand-cyan/5 blur-[120px] pointer-events-none" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-brand-cyan">
                        Soporte Técnico Automatizado e Inteligente
                    </h1>
                    <p className="text-xl text-gray-400 mb-8">
                        Resuelve el 80% de las consultas repetitivas al instante. Deja los problemas complejos para tus expertos humanos.
                    </p>
                </div>
            </section>

            <section className="py-12 px-6 max-w-4xl mx-auto text-gray-300 space-y-8">
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-brand-dark/50 p-6 rounded-xl border border-white/10">
                        <Clock className="w-10 h-10 text-brand-purple mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Respuesta Inmediata</h3>
                        <p>Elimina los tiempos de espera y reduce la frustración del cliente a cero.</p>
                    </div>
                    <div className="bg-brand-dark/50 p-6 rounded-xl border border-white/10">
                        <Headset className="w-10 h-10 text-brand-cyan mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Soporte Nivel 1</h3>
                        <p>Filtrado automático de tickets simples, restablecimiento de contraseñas y FAQs.</p>
                    </div>
                    <div className="bg-brand-dark/50 p-6 rounded-xl border border-white/10">
                        <Heart className="w-10 h-10 text-brand-purple mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Empatía y Tono</h3>
                        <p>IA ajustada para mantener un tono de marca consistente, amable y profesional.</p>
                    </div>
                </div>

                <div className="prose prose-invert max-w-none">
                    <h2 className="text-2xl font-bold text-white mb-4">Redefine la Experiencia de Soporte</h2>
                    <p>
                        Los sistemas de tickets tradicionales son lentos. Los chatbots antiguos son tontos.
                        <strong>Bagent</strong> une lo mejor de ambos mundos: inteligencia real que entiende el contexto y la capacidad de actuar sobre tus sistemas.
                    </p>
                    <p className="mt-4">
                        Nuestros agentes pueden consultar el estado de pedidos, bases de conocimiento técnicas y guiar al usuario paso a paso en la solución.
                    </p>
                </div>
            </section>

            <CTA />
        </div>
    );
};

export default AgentesSoporte;
