import { Helmet } from 'react-helmet-async';
import CTA from '../components/CTA';
import { Rocket, Target, Users } from 'lucide-react';

const SobreNosotros = () => {
    return (
        <div className="pt-20">
            <Helmet>
                <title>Sobre Bagent | Nuestra Misión con la IA</title>
                <meta name="description" content="Conoce a Bagent, la empresa chilena liderando la revolución de agentes de IA para negocios. Nuestra misión es democratizar la automatización inteligente." />
                <link rel="canonical" href="https://www.bagent.cl/sobre-nosotros" />
            </Helmet>

            <section className="relative py-20 px-6">
                <div className="absolute inset-0 bg-brand-cyan/10 blur-[100px] pointer-events-none" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-brand-cyan">
                        Sobre Nosotros
                    </h1>
                    <p className="text-xl text-gray-400 mb-8">
                        Democratizando el acceso a la fuerza laboral digital del futuro.
                    </p>
                </div>
            </section>

            <section className="py-12 px-6 max-w-4xl mx-auto text-gray-300 space-y-12">
                <div className="prose prose-invert max-w-none">
                    <h2 className="text-3xl font-bold text-white mb-6">Nuestra Historia</h2>
                    <p className="text-lg">
                        Nacimos con una convicción clara: la Inteligencia Artificial no viene a reemplazar a los humanos, sino a potenciarlos.
                        Vimos cómo grandes empresas gastaban millones en automatización mientras las PyMEs y startups quedaban atrás.
                    </p>
                    <p className="text-lg mt-4">
                        Bagent es la respuesta a esa brecha. Creamos agentes de IA accesibles, potentes y fáciles de implementar para que cualquier
                        negocio pueda competir con los gigantes.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 border-t border-b border-white/10 py-12">
                    <div className="text-center">
                        <Rocket className="w-12 h-12 text-brand-purple mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white">Innovación</h3>
                        <p className="text-gray-400 text-sm mt-2">Siempre en la frontera de lo posible con LLMs.</p>
                    </div>
                    <div className="text-center">
                        <Target className="w-12 h-12 text-brand-cyan mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white">Resultados</h3>
                        <p className="text-gray-400 text-sm mt-2">No vendemos humo, vendemos eficiencia medible.</p>
                    </div>
                    <div className="text-center">
                        <Users className="w-12 h-12 text-brand-purple mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white">Cercanía</h3>
                        <p className="text-gray-400 text-sm mt-2">Soporte real, de humanos para humanos (con ayuda de IA).</p>
                    </div>
                </div>

                <div className="prose prose-invert max-w-none text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">¿Listo para evolucionar?</h2>
                    <p>
                        Únete a las empresas que ya están automatizando su crecimiento con Bagent.
                    </p>
                </div>
            </section>

            <CTA />
        </div>
    );
};

export default SobreNosotros;
