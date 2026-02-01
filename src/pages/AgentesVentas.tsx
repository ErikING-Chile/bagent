import { Helmet } from 'react-helmet-async';
import CTA from '../components/CTA';
import { Bot, TrendingUp, Users } from 'lucide-react';

const AgentesVentas = () => {
    return (
        <div className="pt-20">
            <Helmet>
                <title>Agentes de Ventas IA | Bagent</title>
                <meta name="description" content="Potencia tu equipo comercial con agentes de ventas IA que califican leads 24/7, agendan reuniones y aumentan tu tasa de conversión automáticamente." />
                <link rel="canonical" href="https://www.bagent.cl/agentes-ventas" />
            </Helmet>

            {/* Hero Simple */}
            <section className="relative py-20 px-6">
                <div className="absolute inset-0 bg-brand-purple/5 blur-[120px] pointer-events-none" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-brand-purple">
                        Agentes de Ventas con Inteligencia Artificial
                    </h1>
                    <p className="text-xl text-gray-400 mb-8">
                        Vende más, duerme más. Nuestros agentes califican prospectos y cierran citas mientras tú descansas.
                    </p>
                </div>
            </section>

            {/* Content Body */}
            <section className="py-12 px-6 max-w-4xl mx-auto text-gray-300 space-y-8">
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-brand-dark/50 p-6 rounded-xl border border-white/10">
                        <Bot className="w-10 h-10 text-brand-cyan mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Disponibilidad 24/7</h3>
                        <p>Tu mejor vendedor nunca duerme. Atiende consultas a cualquier hora.</p>
                    </div>
                    <div className="bg-brand-dark/50 p-6 rounded-xl border border-white/10">
                        <TrendingUp className="w-10 h-10 text-brand-purple mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Más Conversión</h3>
                        <p>Respuesta inmediata significa más clientes cerrados antes de que busquen a la competencia.</p>
                    </div>
                    <div className="bg-brand-dark/50 p-6 rounded-xl border border-white/10">
                        <Users className="w-10 h-10 text-brand-cyan mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Escalabilidad</h3>
                        <p>Maneja 10 o 10,000 conversaciones simultáneas sin contratar más personal.</p>
                    </div>
                </div>

                <div className="prose prose-invert max-w-none">
                    <h2 className="text-2xl font-bold text-white mb-4">¿Por qué automatizar tus ventas?</h2>
                    <p>
                        El tiempo es el enemigo de las ventas. Cada minuto que un lead espera, la probabilidad de conversión cae drásticamente.
                        Con <strong>Bagent</strong>, implementamos agentes de IA entrenados específicamente en tu producto para interactuar de manera natural,
                        resolver objeciones y guiar al usuario hacia la compra o la agenda de una reunión.
                    </p>
                    <p className="mt-4">
                        Ideal para inmobiliarias, servicios B2B, e-commerce de alto ticket y consultoras.
                    </p>
                </div>
            </section>

            <CTA />
        </div>
    );
};

export default AgentesVentas;
