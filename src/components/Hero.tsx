import { motion } from 'framer-motion'
import { SpaceBackground } from './SpaceBackground'

interface HeroProps {
    onApply: () => void;
}

export const Hero = ({ onApply }: HeroProps) => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-16">
            {/* Fondo Galáctico Unificado */}
            <SpaceBackground />

            <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
                <motion.span
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-block border border-white/40 px-6 py-2 text-white text-xs tracking-[0.3em] mb-6 uppercase"
                >
                    Escuela de Propósito, Espiritualidad y Abundancia
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-cinzel text-white mb-6 leading-tight drop-shadow-[0_5px_15px_rgba(0,0,0,0.3)]"
                >
                    Estabiliza tu <span className="text-gold-gradient drop-shadow-sm px-2">SER</span>, <br className="hidden md:block" />
                    Ordena tu <span className="text-gold-gradient drop-shadow-sm px-2">SERVICIO</span> y <br className="hidden md:block" />
                    Construye tu <span className="text-gold-gradient drop-shadow-sm px-2">SOSTÉN</span>
                </motion.h1>

                {/* Urgencia pre-VSL */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="flex items-center justify-center gap-3 mb-6"
                >
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
                    </span>
                    <span className="font-cinzel text-white/90 text-sm md:text-base tracking-widest uppercase">
                        Mira el siguiente video
                    </span>
                </motion.div>

                {/* VSL Container (WebApp Style) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="w-full max-w-4xl mx-auto aspect-video bg-black/80 rounded-sm border border-white/20 shadow-2xl overflow-hidden mb-10 group transition-all duration-700 hover:border-[#A67C00]/50"
                >
                    <video
                        className="w-full h-full object-cover outline-none bg-black"
                        src={`${import.meta.env.BASE_URL}VSL-nodrizaV2.mp4`}
                        controls
                        preload="none"
                        poster={`${import.meta.env.BASE_URL}portada-VSL-V2.webp`}
                        playsInline
                        title="Nodriza VSL"
                    />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.55 }}
                    className="text-2xl md:text-3xl font-cinzel text-gold-gradient mb-6 font-bold"
                >
                    NODRIZA ES ASUNCIÓN
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-lg md:text-xl font-montserrat text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed border-l-2 border-[#A67C00] pl-8"
                >
                    NODRIZA no es un programa para tibios. <br className="hidden md:block" />
                    Es sólo para los que están listos para tomar ACCIÓN y crear una vida gloriosa!
                </motion.p>

                <button
                    onClick={onApply}
                    className="button-gold-metallic px-8 py-4 md:px-10 md:py-5 text-white font-bold rounded-full shadow-gold hover:scale-105 transition-all duration-300 font-cinzel text-lg md:text-xl tracking-widest"
                >
                    AGENDAR ES ELEGIRTE
                </button>
            </div>
        </section>
    )
}
