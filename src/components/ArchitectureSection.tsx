import { useState } from 'react';
import {
    MessageCircle,
    Share2,
    Database,
    ShieldCheck,
    ChevronRight
} from 'lucide-react';

const ArchitectureSection = () => {
    const [selectedBlock, setSelectedBlock] = useState('orchestration');

    const blocks = {
        channels: {
            id: 'channels',
            title: 'CANALES',
            icon: MessageCircle,
            bullets: ['Web / Widget', 'WhatsApp / Telegram', 'Email', 'Teams / Intranet', 'API'],
            note: 'El agente responde donde tu negocio ya opera.',
            details: {
                title: 'Canales',
                description: 'Disponibilidad omnicanal: el usuario conversa donde ya está. Mantén consistencia de tono y respuestas en todos los puntos de contacto.',
                benefits: [
                    'Experiencia unificada',
                    'Menos fricción de adopción',
                    'Derivación inteligente a humano'
                ]
            }
        },
        orchestration: {
            id: 'orchestration',
            title: 'ORQUESTACIÓN',
            icon: Share2,
            bullets: ['Router de intención', 'Herramientas y acciones', 'RAG / documentos', 'Guardrails', 'Memoria y contexto'],
            note: 'Decide qué hacer, cuándo preguntar y cuándo ejecutar.',
            details: {
                title: 'Orquestación',
                description: 'El agente entiende intención, consulta conocimiento, aplica reglas y ejecuta acciones con control. No es solo chat: es operación.',
                benefits: [
                    'Respuestas consistentes',
                    'Acciones automatizadas',
                    'Guardrails y control'
                ]
            }
        },
        integrations: {
            id: 'integrations',
            title: 'INTEGRACIONES',
            icon: Database,
            bullets: ['CRM (Salesforce / Dynamics)', 'Helpdesk (Zendesk)', 'ERP / Bases de datos', 'APIs internas', 'Webhooks'],
            note: 'Conecta con tus sistemas sin romper tus procesos.',
            details: {
                title: 'Integraciones',
                description: 'Conecta CRM, helpdesk, ERP y APIs. Automatiza tareas reales: crear tickets, actualizar estados, buscar clientes, generar reportes.',
                benefits: [
                    'Menos trabajo manual',
                    'Datos sincronizados',
                    'Flujos end-to-end'
                ]
            }
        },
        observability: {
            id: 'observability',
            title: 'OBSERVABILIDAD',
            icon: ShieldCheck,
            bullets: ['Logs y trazas', 'RBAC / permisos', 'Rate limiting', 'Auditoría', 'SLA / monitoreo'],
            note: 'Trazabilidad y control para operar en producción.',
            details: {
                title: 'Observabilidad + Seguridad',
                description: 'Visibilidad y gobierno: auditoría, permisos, trazabilidad, límites y monitoreo para ambientes productivos.',
                benefits: [
                    'Trazabilidad completa',
                    'Control por roles (RBAC)',
                    'Operación con SLA'
                ]
            }
        }
    };

    const currentBlock = blocks[selectedBlock as keyof typeof blocks];

    return (
        <section id="arquitectura" className="relative py-20 lg:py-24 bg-[#050814] overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-cyan/5 rounded-full blur-3xl opacity-30" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-purple/5 rounded-full blur-3xl opacity-30" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Arquitectura en <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple">30 segundos</span>
                    </h2>

                    <div className="flex flex-wrap justify-center gap-3 mb-6">
                        {['Logs', 'RBAC', 'SLA', 'Escalamiento'].map((badge) => (
                            <span key={badge} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-brand-cyan">
                                {badge}
                            </span>
                        ))}
                    </div>

                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Conecta canales, automatiza decisiones e integra tus sistemas con seguridad y observabilidad.
                        <br />
                        <span className="text-sm opacity-70 mt-2 block">Diseñada para escalar: de una prueba a producción sin re-trabajo.</span>
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                    {/* Left Column: Interactive Diagram */}
                    <div className="lg:col-span-7 flex flex-col gap-4 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden lg:block absolute left-[30px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-brand-cyan/20 via-brand-purple/20 to-brand-pink/20" />

                        {Object.values(blocks).map((block) => {
                            const Icon = block.icon;
                            const isSelected = selectedBlock === block.id;

                            return (
                                <button
                                    key={block.id}
                                    onClick={() => setSelectedBlock(block.id)}
                                    className={`group relative text-left w-full p-5 rounded-2xl border transition-all duration-300 ease-out
                                        ${isSelected
                                            ? 'bg-white/5 border-brand-purple/50 shadow-[0_0_30px_-5px_rgba(168,85,247,0.15)] scale-[1.02]'
                                            : 'bg-[#0A0E1F] border-white/5 hover:border-white/10 hover:bg-white/[0.03]'
                                        }
                                    `}
                                >
                                    <div className="flex items-start gap-5">
                                        <div className={`p-3 rounded-xl shrink-0 transition-colors duration-300
                                            ${isSelected ? 'bg-brand-purple/20 text-brand-cyan' : 'bg-white/5 text-gray-500 group-hover:text-gray-400'}
                                        `}>
                                            <Icon size={24} />
                                        </div>

                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className={`font-bold text-lg transition-colors ${isSelected ? 'text-white' : 'text-gray-400'}`}>
                                                    {block.title}
                                                </h3>
                                                {isSelected && <ChevronRight className="text-brand-cyan animate-pulse" size={18} />}
                                            </div>

                                            <div className="flex flex-wrap gap-2 mb-3">
                                                {block.bullets.map((bullet, i) => (
                                                    <span key={i} className={`text-xs px-2 py-0.5 rounded-md border ${isSelected ? 'bg-brand-blue/10 border-brand-blue/20 text-brand-blue' : 'bg-black/20 border-white/5 text-gray-600'}`}>
                                                        {bullet}
                                                    </span>
                                                ))}
                                            </div>

                                            <p className={`text-sm italic transition-colors ${isSelected ? 'text-gray-400' : 'text-gray-600'}`}>
                                                "{block.note}"
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Right Column: Dynamic Info Panel */}
                    <div className="lg:col-span-5 relative mt-4 lg:mt-0">
                        <div className="sticky top-24 bg-[#0A0E1F]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden">
                            {/* Decorative glow inside card */}
                            <div className="absolute -top-[100px] -right-[100px] w-48 h-48 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />

                            <div className="relative z-10 transition-all duration-300 key={selectedBlock}"> {/* Re-render animation */}
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                    {currentBlock.details.title}
                                </h3>

                                <p className="text-gray-300 mb-8 leading-relaxed">
                                    {currentBlock.details.description}
                                </p>

                                <div className="space-y-4 mb-8">
                                    <h4 className="text-xs font-semibold text-brand-purple uppercase tracking-wider">
                                        Lo que obtienes
                                    </h4>
                                    <ul className="space-y-3">
                                        {currentBlock.details.benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-center gap-3 text-gray-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>


                            </div>
                        </div>
                    </div>

                </div>

                {/* Final CTA */}
                <div className="mt-20 text-center">
                    <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-purple hover:bg-brand-purple/90 text-white rounded-full font-bold text-lg shadow-[0_0_30px_-5px_rgba(168,85,247,0.4)] transition-all transform hover:scale-105">
                        Desplegar en mi empresa
                        <ChevronRight size={20} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ArchitectureSection;
