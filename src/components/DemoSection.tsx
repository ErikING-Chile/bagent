import { Play, Activity, Target, Clock, ArrowRight } from 'lucide-react';

const DemoSection = () => {
    return (
        <section id="demo" className="py-32 bg-brand-dark/50 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Text & Metrics */}
                    <div>
                        <div className="inline-flex items-center gap-2 bg-brand-purple/10 border border-brand-purple/20 rounded-full px-4 py-1.5 mb-6">
                            <span className="w-2 h-2 rounded-full bg-brand-purple animate-pulse"></span>
                            <span className="text-sm font-medium text-brand-purple">
                                Live Sandbox Environment
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Observa la Inteligencia <br />
                            <span className="text-brand-cyan">en Acción.</span>
                        </h2>

                        <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                            Sin guiones pregrabados. Pregúntale a nuestra IA sobre integraciones, costos o capacidades técnicas y comprueba su tiempo de respuesta en tiempo real.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                                <Clock className="w-8 h-8 text-brand-cyan mb-3" />
                                <div className="text-2xl font-bold text-white mb-1">&lt; 1.2s</div>
                                <div className="text-sm text-gray-500">Latencia por respuesta</div>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                                <Target className="w-8 h-8 text-brand-purple mb-3" />
                                <div className="text-2xl font-bold text-white mb-1">98.5%</div>
                                <div className="text-sm text-gray-500">Precisión técnica</div>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                                <Activity className="w-8 h-8 text-brand-pink mb-3" />
                                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                                <div className="text-sm text-gray-500">Disponibilidad total</div>
                            </div>
                        </div>

                        <button className="w-full sm:w-auto px-8 py-4 bg-white text-brand-dark rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all hover:scale-105 flex items-center justify-center gap-2 group">
                            Desplegar este Agente en mi Empresa
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Right: Demo Visual/Placeholder */}
                    <div className="relative">
                        <div className="aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden bg-brand-dark border border-white/10 shadow-2xl relative group">
                            {/* Mesh background inside sandbox */}
                            <div className="absolute inset-0 bg-mesh-card opacity-20"></div>

                            {/* Mock UI for Interaction */}
                            <div className="absolute inset-0 flex flex-col p-6">
                                <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                    <div className="text-xs text-gray-500 font-mono">BAGENTS_SANDBOX_V2.0</div>
                                </div>

                                <div className="flex-grow space-y-6 font-mono text-sm overflow-hidden relative">
                                    <div className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0"></div>
                                        <div className="bg-white/10 p-4 rounded-2xl rounded-tl-none text-gray-300 max-w-[80%]">
                                            ¿Cómo puedo integrar esto con Salesforce y cuál es el costo por request?
                                        </div>
                                    </div>

                                    <div className="flex gap-4 flex-row-reverse">
                                        <div className="w-8 h-8 rounded-full bg-brand-cyan flex-shrink-0 flex items-center justify-center">
                                            <Activity className="w-4 h-4 text-brand-dark" />
                                        </div>
                                        <div className="bg-brand-cyan/10 border border-brand-cyan/20 p-4 rounded-2xl rounded-tr-none text-brand-cyan max-w-[80%] shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                                            <p className="mb-2">La integración con Salesforce es nativa a través de nuestra API REST. El deployment toma aprox. 15 minutos.</p>
                                            <p>El costo es de $0.002 por request procesado, con escalado automático.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Input Area Placeholder */}
                                <div className="mt-6 pt-4 border-t border-white/10 flex gap-4 opacity-50">
                                    <div className="flex-grow h-12 bg-white/5 rounded-full"></div>
                                    <div className="w-12 h-12 bg-white/10 rounded-full"></div>
                                </div>
                            </div>

                            {/* Overlay Play Button */}
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm cursor-pointer">
                                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.5)] transform scale-90 group-hover:scale-100 transition-transform duration-300">
                                    <Play className="w-8 h-8 text-brand-dark ml-1" fill="currentColor" />
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-brand-dark border border-white/10 p-4 rounded-xl shadow-xl animate-bounce duration-[3000ms]">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-sm font-bold text-white">System Online</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DemoSection;
