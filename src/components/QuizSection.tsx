import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, MessageSquare, Zap, BarChart3, Users, Mail, Globe, Lock } from 'lucide-react';

const QuizSection = () => {
    const [step, setStep] = useState(1);
    const [answers, setAnswers] = useState<{ challenge: string; channels: string[] }>({
        challenge: '',
        channels: []
    });

    const handleChallengeSelect = (challenge: string) => {
        setAnswers({ ...answers, challenge });
        setTimeout(() => setStep(2), 300);
    };

    const handleChannelToggle = (channel: string) => {
        const currentChannels = answers.channels;
        if (currentChannels.includes(channel)) {
            setAnswers({ ...answers, channels: currentChannels.filter(c => c !== channel) });
        } else {
            setAnswers({ ...answers, channels: [...currentChannels, channel] });
        }
    };

    const handleNext = () => {
        if (step === 2 && answers.channels.length > 0) {
            setStep(3);
        }
    };

    return (
        <section className="py-24 bg-brand-dark relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-purple/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <span className="text-brand-cyan font-medium tracking-wider text-sm uppercase">Descubre tu Potencial</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">
                        Configura tu Agente Ideal
                    </h2>
                    <div className="w-full max-w-md mx-auto h-1 bg-white/10 rounded-full mt-8 overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-brand-purple to-brand-cyan"
                            initial={{ width: "33%" }}
                            animate={{ width: `${(step / 3) * 100}%` }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 min-h-[400px] flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="w-full"
                            >
                                <h3 className="text-2xl font-bold text-white mb-8 text-center">
                                    ¿Cuál es el mayor cuello de botella en tu operación hoy?
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        { id: 'support', text: "Soporte al cliente saturado.", icon: Users },
                                        { id: 'sales', text: "Fuga de leads en ventas.", icon: Zap },
                                        { id: 'admin', text: "Tareas administrativas repetitivas.", icon: Lock },
                                        { id: 'data', text: "Análisis de datos ineficiente.", icon: BarChart3 }
                                    ].map((option) => (
                                        <button
                                            key={option.id}
                                            onClick={() => handleChallengeSelect(option.text)}
                                            className={`p-6 rounded-xl border text-left transition-all flex items-center gap-4 group ${answers.challenge === option.text
                                                    ? 'bg-brand-purple/20 border-brand-purple text-white shadow-[0_0_20px_rgba(168,85,247,0.2)]'
                                                    : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/30'
                                                }`}
                                        >
                                            <div className={`p-3 rounded-lg ${answers.challenge === option.text ? 'bg-brand-purple text-white' : 'bg-white/10 text-gray-400 group-hover:text-white'}`}>
                                                <option.icon className="w-6 h-6" />
                                            </div>
                                            <span className="font-medium text-lg">{option.text}</span>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="w-full"
                            >
                                <h3 className="text-2xl font-bold text-white mb-8 text-center">
                                    ¿Dónde interactúa principalmente tu negocio?
                                </h3>
                                <div className="flex flex-wrap justify-center gap-4 mb-12">
                                    {[
                                        { id: 'chat', text: "WhatsApp / Telegram", icon: MessageSquare },
                                        { id: 'web', text: "Web / App móvil", icon: Globe },
                                        { id: 'email', text: "Correo electrónico", icon: Mail },
                                        { id: 'internal', text: "Internamente (Intranet/ERP)", icon: Lock }
                                    ].map((option) => (
                                        <button
                                            key={option.id}
                                            onClick={() => handleChannelToggle(option.text)}
                                            className={`px-6 py-4 rounded-full border transition-all flex items-center gap-3 ${answers.channels.includes(option.text)
                                                    ? 'bg-brand-cyan/20 border-brand-cyan text-white shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                                                    : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                                                }`}
                                        >
                                            <option.icon className="w-5 h-5" />
                                            <span className="font-medium">{option.text}</span>
                                            {answers.channels.includes(option.text) && <Check className="w-4 h-4 ml-2" />}
                                        </button>
                                    ))}
                                </div>
                                <div className="flex justify-center">
                                    <button
                                        onClick={handleNext}
                                        disabled={answers.channels.length === 0}
                                        className="px-10 py-4 bg-gradient-to-r from-brand-purple to-brand-cyan text-white rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105 flex items-center gap-2"
                                    >
                                        Generar Agente <ChevronRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="w-full text-center"
                            >
                                <div className="inline-flex p-4 rounded-full bg-green-500/20 text-green-400 mb-6">
                                    <Check className="w-12 h-12" />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-2">
                                    Agente BAGENT-X Activado
                                </h3>
                                <p className="text-brand-purple font-medium mb-8">
                                    Configuración optimizada para {answers.channels.join(" + ")}
                                </p>

                                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto mb-10">
                                    <p className="text-xl text-gray-200 leading-relaxed">
                                        "Basado en tus respuestas, este agente puede <span className="text-brand-cyan font-bold">reducir tu carga operativa en un 60%</span> en los primeros 30 días. Su motor está optimizado para resolver <span className="text-white font-bold">{answers.challenge.toLowerCase()}</span>"
                                    </p>
                                </div>

                                <button className="px-10 py-4 bg-white text-brand-dark rounded-full font-bold text-lg hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all hover:scale-105">
                                    Solicitar Demo de este Agente
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default QuizSection;
