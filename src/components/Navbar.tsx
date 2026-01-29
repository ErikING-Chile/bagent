import { useEffect, useState } from 'react';
import { Bot, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark/70 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Bot className="w-8 h-8 text-brand-cyan" />
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                        BAGENTS
                    </span>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    <a href="#services" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Soluciones</a>
                    <a href="#technology" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Tecnología</a>
                    <a href="#demo" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Demo</a>

                    <button className="bg-white/10 hover:bg-white/20 border border-white/10 text-white px-5 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 active:scale-95">
                        Iniciar Sesión
                    </button>
                    <button className="group relative w-32 h-10 bg-gradient-to-r from-brand-purple to-brand-cyan text-white rounded-full text-sm font-medium transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:scale-105 active:scale-95 overflow-hidden">
                        <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-full">
                            Empezar
                        </span>
                        <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                            Crear el Futuro
                        </span>
                    </button>
                </div>

                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-20 left-0 w-full bg-brand-dark/95 backdrop-blur-xl border-b border-white/10 p-6 md:hidden flex flex-col gap-4">
                    <a href="#services" className="text-white text-lg">Soluciones</a>
                    <a href="#technology" className="text-white text-lg">Tecnología</a>
                    <a href="#demo" className="text-white text-lg">Demo</a>
                    <hr className="border-white/10 my-2" />
                    <button className="w-full bg-white/10 py-3 rounded-lg text-white font-medium">
                        Iniciar Sesión
                    </button>
                    <button className="w-full bg-gradient-to-r from-brand-purple to-brand-cyan py-3 rounded-lg text-white font-medium">
                        Empezar
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
