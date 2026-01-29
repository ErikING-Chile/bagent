
import { ArrowRight } from 'lucide-react';

const CTA = () => {
    return (
        <section className="relative py-32 overflow-hidden bg-brand-dark">
            {/* Background Gradient Mesh */}
            <div className="absolute inset-x-0 bottom-0 h-full bg-mesh-dark opacity-40"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                    ¿Listo para el <span className="text-brand-cyan">Siguiente Nivel?</span>
                </h2>

                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                    Agenda una consulta gratuita con nuestros expertos y descubre cómo la IA puede multiplicar la productividad de tu empresa.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="flex items-center justify-center gap-2 px-10 py-5 bg-gradient-to-r from-brand-purple to-brand-cyan text-white rounded-full font-bold text-lg hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] hover:scale-105 transition-all">
                        Solicitar Auditoría Gratuita
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTA;
