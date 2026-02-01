import { Helmet } from 'react-helmet-async';
import CTA from '../components/CTA';
import { MessageCircle, Zap, Globe } from 'lucide-react';

const AutomatizacionWhatsapp = () => {
    return (
        <div className="pt-20">
            <Helmet>
                <title>Automatización de WhatsApp con IA | Bagent</title>
                <meta name="description" content="Convierte WhatsApp en tu canal de ventas y soporte más potente. Chatbots inteligentes que responden como humanos en la app más usada del mundo." />
                <link rel="canonical" href="https://www.bagent.cl/automatizacion-whatsapp" />
            </Helmet>

            <section className="relative py-20 px-6">
                <div className="absolute inset-0 bg-green-500/5 blur-[120px] pointer-events-none" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-green-400">
                        WhatsApp + Inteligencia Artificial
                    </h1>
                    <p className="text-xl text-gray-400 mb-8">
                        Estar donde están tus clientes es clave. Responderles al segundo con inteligencia es la diferencia.
                    </p>
                </div>
            </section>

            <section className="py-12 px-6 max-w-4xl mx-auto text-gray-300 space-y-8">
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-brand-dark/50 p-6 rounded-xl border border-white/10">
                        <MessageCircle className="w-10 h-10 text-green-400 mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Canal N°1</h3>
                        <p>Aprovecha la tasa de apertura del 98% que tiene WhatsApp frente al email.</p>
                    </div>
                    <div className="bg-brand-dark/50 p-6 rounded-xl border border-white/10">
                        <Zap className="w-10 h-10 text-brand-cyan mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Sin Fricción</h3>
                        <p>Tus clientes no necesitan descargar nada ni aprender interfaces nuevas.</p>
                    </div>
                    <div className="bg-brand-dark/50 p-6 rounded-xl border border-white/10">
                        <Globe className="w-10 h-10 text-brand-purple mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Omnicanalidad</h3>
                        <p>Centraliza tus conversaciones de WhatsApp, Instagram y Web en una sola inteligencia.</p>
                    </div>
                </div>

                <div className="prose prose-invert max-w-none">
                    <h2 className="text-2xl font-bold text-white mb-4">Más que un Chatbot con botones</h2>
                    <p>
                        Olvídate de los flujos rígidos de "Presione 1 para Ventas". Con <strong>Bagent</strong>,
                        tus clientes pueden enviar notas de voz, imágenes o texto libre, y nuestra IA entenderá y procesará la solicitud.
                    </p>
                    <p className="mt-4">
                        Agenda citas, envía catálogos personalizados y califica leads automáticamente directamente en el chat.
                    </p>
                </div>
            </section>

            <CTA />
        </div>
    );
};

export default AutomatizacionWhatsapp;
