import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import chatUi from '../assets/chat-ui.png';
import dataUi from '../assets/data-ui.png';

gsap.registerPlugin(ScrollTrigger);

const FeatureShowcase = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const text1Ref = useRef<HTMLDivElement>(null);
    const text2Ref = useRef<HTMLDivElement>(null);
    const visualsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=300%",
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1
                }
            });

            // Initial state
            gsap.set(text2Ref.current, { opacity: 0, y: 50 });
            gsap.set(".data-ui-img", { opacity: 0 }); // We'll control image opacity via CSS/JS logic if needed, but here we swap images or overlays

            // 1. Scroll: Chat UI scales up slightly and moves, Text 1 fades out
            tl.to(visualsRef.current, { scale: 1.1, duration: 1 })
                .to(text1Ref.current, { opacity: 0, y: -50, duration: 0.5 }, "<")

                // 2. Scroll: Transition to Data UI (Crossfade visual)
                .to(".chat-ui-img", { opacity: 0, duration: 1 })
                .to(".data-ui-img", { opacity: 1, scale: 1, duration: 1 }, "<")

                // 3. Scroll: Text 2 fades in
                .to(text2Ref.current, { opacity: 1, y: 0, duration: 0.5 }, "-=0.5")

                // 4. Final slight scale for impact
                .to(visualsRef.current, { scale: 1.2, duration: 2 });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative h-screen bg-black overflow-hidden flex flex-col items-center justify-center pt-20">

            {/* Visuals Container */}
            <div ref={visualsRef} className="relative w-full max-w-5xl aspect-video rounded-xl shadow-[0_0_100px_rgba(59,130,246,0.2)]">
                {/* Images stacked */}
                <img
                    src={chatUi}
                    alt="AI Chat Interface"
                    className="chat-ui-img absolute inset-0 w-full h-full object-contain drop-shadow-2xl z-10"
                />
                <img
                    src={dataUi}
                    alt="Data Analytics Dashboard"
                    className="data-ui-img absolute inset-0 w-full h-full object-contain drop-shadow-2xl z-0 opacity-0"
                />

                {/* Glow behind */}
                <div className="absolute inset-0 bg-brand-blue/20 blur-[100px] -z-10 rounded-full transform scale-75"></div>
            </div>

            {/* Text Overlays (Absolute centered or positioned) */}
            <div className="absolute bottom-20 left-0 w-full text-center px-6 z-20">
                <div ref={text1Ref} className="absolute left-0 w-full top-0 -translate-y-full">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        Interacción Natural
                    </h2>
                    <p className="text-xl text-gray-400">
                        Conversaciones fluidas que entienden el contexto y la intención.
                    </p>
                </div>

                <div ref={text2Ref} className="absolute left-0 w-full top-0 -translate-y-full opacity-0">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan to-brand-blue">
                        Inteligencia Accionable
                    </h2>
                    <p className="text-xl text-gray-400">
                        Dashboards en tiempo real que transforman datos en decisiones.
                    </p>
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-brand-dark to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-dark to-transparent z-10"></div>
        </section>
    );
};

export default FeatureShowcase;
