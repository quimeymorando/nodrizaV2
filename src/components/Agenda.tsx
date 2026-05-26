import { motion } from 'framer-motion'
import { Brain, Share2, Fingerprint, Cpu, Mountain, User } from 'lucide-react'

// Removed unused YogaIcon


const agenda = [
    {
        day: "LUNES",
        title: "CUERPO + ESPÍRITU",
        icon: <User className="w-6 h-6 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" strokeWidth={1.5} />,
        content: ["HumanFlow: Enraizar energía y mover tensión.", "Sesión Troncal: Dirección interna y foco espiritual."]
    },
    {
        day: "MARTES",
        title: "MENTE & VENTAS",
        icon: <Brain className="w-6 h-6 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" strokeWidth={1.5} />,
        content: ["Abundancia: Unir espiritualidad y acción comercial.", "Visión a Acción: Reprogramación y nuevos hábitos."]
    },
    {
        day: "MIÉRCOLES",
        title: "REDES SOCIALES",
        icon: <Share2 className="w-6 h-6 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" strokeWidth={1.5} />,
        content: ["Estrategia de Contenido.", "Guionado, grabado y expansión del mensaje."]
    },
    {
        day: "JUEVES",
        title: "MARCA PERSONAL",
        icon: <Fingerprint className="w-6 h-6 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" strokeWidth={1.5} />,
        content: ["Bio, historia y coherencia estética.", "Construir presencia auténtica."]
    },
    {
        day: "VIERNES",
        title: "TECH & IMPLEMENTACIÓN",
        icon: <Cpu className="w-6 h-6 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" strokeWidth={1.5} />,
        content: ["IA, Funnels, Web Sprint y Automatizaciones."]
    },
    {
        day: "MARATONES",
        title: "FINES DE SEMANA",
        icon: <Mountain className="w-6 h-6 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" strokeWidth={1.5} />,
        content: ["1 vez por mes nos encontramos en una Jornada inmersiva completa de 1 o 2 dias para destrabar creencias y potenciar tu salto."]
    }
]

export const Agenda = () => {
    return (
        <section className="py-32 relative">

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <div className="text-center mb-24">
                    <span className="inline-block border border-[#A67C00] px-4 py-1 text-[#A67C00] text-xs tracking-[0.3em] mb-6 uppercase font-bold bg-[#A67C00]/10 backdrop-blur-sm">
                        Estructura Semanal
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-cinzel text-white leading-tight">
                        Tu Semana en <span className="text-gold-gradient">NODRIZA</span>
                    </h2>
                    <p className="mt-8 text-white/60 max-w-2xl mx-auto font-montserrat leading-relaxed text-lg">
                        Una estructura viva diseñada para mantener tu vibración alta y tu negocio en movimiento constante.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {agenda.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial="rest"
                            whileInView="visible"
                            whileHover="hover"
                            viewport={{ once: true }}
                            variants={{
                                visible: { opacity: 1, scale: 1, transition: { delay: idx * 0.1 } },
                                rest: { opacity: 0, scale: 0.95 },
                                hover: {
                                    scale: 1.02,
                                    y: -8,
                                    transition: { duration: 0.4, ease: "easeOut" }
                                }
                            }}
                            className="flex-1 min-w-[300px] p-10 border border-white/10 bg-white/5 backdrop-blur-md group relative overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-[#A67C00] hover:shadow-[0_0_30px_rgba(166,124,0,0.15)]"
                        >
                            {/* Decorative background number */}
                            <span className="absolute -right-4 -bottom-4 text-9xl font-cinzel text-white/5 group-hover:text-[#A67C00]/10 transition-colors duration-500 pointer-events-none select-none">
                                {idx + 1}
                            </span>

                            {/* Top Right Icon */}
                            <div className="absolute top-6 right-6 opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                                {item.icon}
                            </div>

                            <h3 className="text-[#A67C00] font-cinzel text-sm tracking-widest border-b border-[#A67C00]/20 pb-4 mb-8 font-bold group-hover:tracking-[0.2em] transition-all duration-500">
                                {item.day}
                            </h3>
                            <h4 className="text-xl font-cinzel mb-6 tracking-wider text-white group-hover:text-primary-gold transition-colors">{item.title}</h4>

                            <ul className="space-y-4 text-sm text-white/90 font-montserrat relative z-10">
                                {item.content.map((point, i) => (
                                    <li
                                        key={i}
                                        className="flex gap-3 items-start"
                                    >
                                        <span className="text-[#A67C00] font-bold mt-0.5">›</span>
                                        {point}
                                    </li>
                                ))}
                            </ul>

                            {/* Glow effect on hover */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#A67C00]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
