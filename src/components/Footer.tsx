
import { Bot, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-brand-dark border-t border-white/10 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <Bot className="w-8 h-8 text-brand-purple" />
                            <span className="text-2xl font-bold text-white">BAGENTS</span>
                        </div>
                        <p className="text-gray-400 max-w-sm">
                            Potenciando empresas con la próxima generación de agentes inteligentes y automatización cognitiva.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Soluciones</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#" className="hover:text-brand-cyan transition-colors">Atención al Cliente</a></li>
                            <li><a href="#" className="hover:text-brand-cyan transition-colors">Ventas Automatizadas</a></li>
                            <li><a href="#" className="hover:text-brand-cyan transition-colors">Análisis de Datos</a></li>
                            <li><a href="#" className="hover:text-brand-cyan transition-colors">RPA</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Compañía</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#" className="hover:text-brand-cyan transition-colors">Sobre Nosotros</a></li>
                            <li><a href="#" className="hover:text-brand-cyan transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-brand-cyan transition-colors">Carreras</a></li>
                            <li><a href="#" className="hover:text-brand-cyan transition-colors">Contacto</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © 2026 Agents.AI Inc. Todos los derechos reservados.
                    </p>

                    <div className="flex items-center gap-6">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
