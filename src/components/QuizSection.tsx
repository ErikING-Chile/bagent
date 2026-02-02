import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, MessageSquare, Zap, BarChart3, Users, Mail, Globe, Lock } from 'lucide-react';

const QuizSection = () => {
    const [step, setStep] = useState(1);
    const [answers, setAnswers] = useState<{ challenge: string; channels: string[] }>({
        challenge: '',
        channels: []
    });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: ''
    });

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Solicitud de Diagnóstico: ${formData.company}`);
        const body = encodeURIComponent(`Hola Erik,

Me gustaría recibir mi diagnóstico de agente IA.

Mis datos:
Nombre: ${formData.name}
Correo: ${formData.email}
Empresa: ${formData.company}

Resultados del Quiz:
Desafío Principal: ${answers.challenge}
Canales Preferidos: ${answers.channels.join(', ')}

Saludos.`);
        window.location.href = `mailto:erik@bagent.cl?subject=${subject}&body=${body}`;
    };

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
        <section id="quiz" className="py-24 bg-brand-dark relative overflow-hidden">
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
                                className="w-full"
                            >
                                <div className="text-center mb-8">
                                    <div className="inline-flex p-3 rounded-full bg-green-500/20 text-green-400 mb-4">
                                        <Check className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-2">
                                        ¡Agente Compatible Encontrado!
                                    </h3>
                                    <p className="text-gray-400">
                                        Hemos diseñado una estrategia para resolver <span className="text-white font-bold">{answers.challenge.toLowerCase()}</span> vía <span className="text-brand-cyan font-bold">{answers.channels.join(" + ")}</span>.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Path 1: Lead Capture */}
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                        <div className="mb-6">
                                            <h4 className="text-xl font-bold text-white mb-1">Recibir Propuesta & Diagnóstico</h4>
                                            <p className="text-sm text-gray-400">Te enviaremos el plan de implementación detallado.</p>
                                        </div>

                                        <form className="space-y-4" onSubmit={handleFormSubmit}>
                                            <div>
                                                <input
                                                    type="text"
                                                    placeholder="Nombre completo"
                                                    required
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-purple transition-colors"
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    type="email"
                                                    placeholder="Correo corporativo"
                                                    required
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-purple transition-colors"
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    type="text"
                                                    placeholder="Empresa"
                                                    required
                                                    value={formData.company}
                                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-purple transition-colors"
                                                />
                                            </div>
                                            <button className="w-full bg-gradient-to-r from-brand-purple to-brand-cyan text-white font-bold py-3 rounded-lg hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all hover:scale-[1.02]">
                                                Recibir mi Diagnóstico
                                            </button>
                                        </form>
                                    </div>

                                    {/* Path 2: Fast Action */}
                                    <div className="bg-gradient-to-br from-brand-purple/10 to-brand-cyan/10 border border-white/10 rounded-2xl p-6 flex flex-col justify-center text-center">
                                        <div className="mb-8">
                                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-cyan">
                                                <Zap className="w-8 h-8" />
                                            </div>
                                            <h4 className="text-xl font-bold text-white mb-2">¿Prefieres Acción Inmediata?</h4>
                                            <p className="text-sm text-gray-400">Habla ahora con un especialista en automatización.</p>
                                        </div>

                                        <div className="space-y-3">
                                            <a
                                                href="https://wa.me/56942138814"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2"
                                            >
                                                <MessageSquare className="w-5 h-5" /> Hablar por WhatsApp
                                            </a>
                                            <a
                                                href="https://outlook.office.com/bookwithme/user/8b9677936d624e0399e5b074d333b4d8@bagent.cl?anonymous&ep=plink"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium py-3 rounded-lg transition-all block text-center"
                                            >
                                                Agendar 15 min
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default QuizSection;
