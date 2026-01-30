
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Mesh */}
            <div className="absolute inset-0 bg-brand-dark">
                <div className="absolute inset-0 bg-mesh-hero opacity-60 animate-blob"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 animate-fade-in backdrop-blur-md">
                    <Sparkles className="w-4 h-4 text-brand-cyan animate-pulse" />
                    <span className="text-sm font-medium text-brand-cyan bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan to-brand-purple">
                        Nueva Generación de IA para Empresas
                    </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight animate-fade-in [animation-delay:200ms]">
                    Transforma tu Negocio con <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-pink">
                        Agentes Inteligentes
                    </span>
                </h1>

                <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto animate-fade-in [animation-delay:400ms]">
                    Automatización, personalización y eficiencia impulsadas por Inteligencia Artificial de vanguardia. Libera el potencial de tu equipo hoy.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in [animation-delay:600ms]">
                    <a href="#quiz" className="group relative w-64 h-14 bg-white text-brand-dark rounded-full font-bold text-lg transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] overflow-hidden block text-center leading-[3.5rem]">
                        <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-full">
                            Descubre tu Agente
                        </span>
                        <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-brand-purple">
                            Configurar mi IA <ArrowRight className="ml-2 w-5 h-5" />
                        </span>
                    </a>

                    <a href="#demo" className="group relative w-64 h-14 bg-white/5 border border-white/10 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all hover:scale-105 backdrop-blur-md overflow-hidden block text-center leading-[3.5rem]">
                        <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-full">
                            Ver Demo en Vivo
                        </span>
                        <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-brand-cyan">
                            Entrar al Sandbox ⚡
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
