import { Helmet } from 'react-helmet-async';
import CTA from '../components/CTA';
import { ShieldCheck, UserCheck, Smile } from 'lucide-react';

const AtencionCliente = () => {
    return (
        <div className="pt-20">
            <Helmet>
                <title>Atención al Cliente con IA | Bagent</title>
                <meta name="description" content="Eleva el estándar de tu servicio al cliente. Fideliza usuarios con respuestas rápidas, precisas y personalizadas gracias a la IA." />
                <link rel="canonical" href="https://www.bagent.cl/atencion-cliente" />
            </Helmet>

            <section className="relative py-20 px-6">
                <div className="absolute inset-0 bg-brand-purple/10 blur-[100px] pointer-events-none" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-brand-purple">
                        Atención al Cliente Estelar
                    </h1>
                    <p className="text-xl text-gray-400 mb-8">
                        La lealtad se gana en cada interacción. Asegúrate de que cada una sea perfecta.
                    </p>
                </div>
            </section>

            <section className="py-12 px-6 max-w-4xl mx-auto text-gray-300 space-y-8">
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-brand-dark/50 p-6 rounded-xl border border-white/10">
                        <UserCheck className="w-10 h-10 text-brand-cyan mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Personalización</h3>
                        <p>La IA recuerda el historial del cliente para dar un trato cercano y contextual.</p>
                    </div>
                    <div className="bg-brand-dark/50 p-6 rounded-xl border border-white/10">
                        <ShieldCheck className="w-10 h-10 text-brand-purple mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Consistencia</h3>
                        <p>Respuestas siempre correctas, alineadas con tus políticas y libres de errores humanos.</p>
                    </div>
                    <div className="bg-brand-dark/50 p-6 rounded-xl border border-white/10">
                        <Smile className="w-10 h-10 text-brand-cyan mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Satisfacción</h3>
                        <p>Clientes felices compran más. Sube tu NPS con atención instantánea.</p>
                    </div>
                </div>

                <div className="prose prose-invert max-w-none">
                    <h2 className="text-2xl font-bold text-white mb-4">No dejes clientes en visto</h2>
                    <p>
                        En un mundo inmediatez, esperar horas por un correo o minutos en el teléfono es inaceptable.
                        Implementa una capa de inteligencia artificial que absorba el volumen masivo de consultas, dejando a tu equipo
                        enfocado en crear relaciones de valor y resolver casos críticos.
                    </p>
                </div>
            </section>

            <CTA />
        </div>
    );
};

export default AtencionCliente;
