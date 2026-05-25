import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { SpaceBackground } from './SpaceBackground'
import { Star, Rocket, Heart, ShieldCheck } from 'lucide-react'

const milestones = [
    {
        year: "El Inicio",
        title: "La Búsqueda",
        desc: "Sentía un potencial inmenso atrapado. Buscaba respuestas fuera, pero faltaba la pieza para ser libre.",
        icon: <Star className="w-6 h-6" />
    },
    {
        year: "El Quiebre",
        title: "La Desconexión",
        desc: "Seguí las reglas: 'Vende más, siente menos'. Facturaba, pero me sentía vacío. La incoherencia me apagaba.",
        icon: <ShieldCheck className="w-6 h-6" />
    },
    {
        year: "El Despertar",
        title: "Ingeniería del Ser",
        desc: "El negocio es extensión del alma. Creé un sistema que une Estructura (Sostén) y Energía (Ser). Integré dinero y propósito.",
        icon: <Heart className="w-6 h-6" />
    },
    {
        year: "Hoy",
        title: "Misión Nodriza",
        desc: "Te entrego este vehículo. Una 'Nave Nodriza' donde tu propósito encuentra tierra fértil para expandirse.",
        icon: <Rocket className="w-6 h-6" />
    }
]

export const Story = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [0, -50])

    return (
        <section ref={containerRef} className="py-32 relative overflow-hidden bg-gradient-to-b from-[#001A33] via-[#001222] to-[#001A33]">
            {/* Alma Galáctica */}
            <SpaceBackground />

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* Columna Izquierda: Sticky Image */}
                    <div className="relative hidden lg:block h-fit sticky top-32">
                        <motion.div
                            style={{ y }}
                            className="aspect-[3/4] rounded-sm overflow-hidden border border-white/20 shadow-2xl relative z-20 group"
                        >
                            <img
                                src="https://storage.googleapis.com/msgsndr/uuaiNCJCRvymWQ2ejuex/media/698b6cc38682155edc61e55e.png"
                                alt="Joaquín Alterman"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            {/* Overlay degradado */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <p className="font-cinzel text-2xl mb-2">Joaquín Alterman</p>
                                <p className="font-montserrat text-sm opacity-70 tracking-widest uppercase">Fundador de Nodriza</p>
                            </div>
                        </motion.div>
                        {/* Marcos decorativos */}
                        <div className="absolute -top-6 -left-6 w-full h-full border border-[#A67C00]/30 z-10 rounded-sm" />
                    </div>

                    {/* Foto de Joaco — solo mobile */}
                    <div className="block lg:hidden rounded-sm overflow-hidden border border-white/20 shadow-2xl relative aspect-[3/4] max-w-xs mx-auto w-full">
                        <img
                            src="https://storage.googleapis.com/msgsndr/uuaiNCJCRvymWQ2ejuex/media/698b6cc38682155edc61e55e.png"
                            alt="Joaquín Alterman"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6 text-white">
                            <p className="font-cinzel text-xl mb-1">Joaquín Alterman</p>
                            <p className="font-montserrat text-xs opacity-70 tracking-widest uppercase">Fundador de Nodriza</p>
                        </div>
                    </div>

                    {/* Columna Derecha: Timeline */}
                    <div className="flex flex-col justify-center">
                        <div className="mb-16">
                            <span className="text-[#A67C00] font-cinzel text-sm tracking-[0.4em] mb-4 block uppercase font-bold">
                                El Camino del Mentor
                            </span>
                            <h2 className="text-4xl md:text-5xl font-cinzel text-white leading-tight">
                                De la Búsqueda a la <span className="text-gold-gradient">Coherencia</span>
                            </h2>
                        </div>

                        <div className="relative border-l-2 border-white/10 ml-4 lg:ml-0 space-y-12 pb-12">
                            {milestones.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                                    className="relative pl-12 group"
                                >
                                    {/* Icono del Timeline con Glow */}
                                    <div className="absolute -left-[9px] top-0 bg-[#001A33] border border-[#A67C00] rounded-full p-2 text-[#A67C00] shadow-[0_0_15px_rgba(166,124,0,0.3)] transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(166,124,0,0.8)] group-hover:scale-110 z-10">
                                        {item.icon}
                                    </div>

                                    {/* Conector iluminado al hover */}
                                    <div className="absolute left-[9px] top-8 bottom-0 w-[2px] bg-transparent group-hover:bg-gradient-to-b group-hover:from-[#A67C00] group-hover:to-transparent transition-all duration-700 h-full" />

                                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_0_40px_rgba(166,124,0,0.15)] group-hover:border-[#A67C00]/30 group-hover:bg-white/10">
                                        <span className="text-[#A67C00] font-cinzel text-xs tracking-widest uppercase mb-2 block font-bold group-hover:text-[#FFD700] transition-colors">
                                            {item.year}
                                        </span>
                                        <h3 className="text-xl font-cinzel text-white mb-4 group-hover:text-primary-gold-light transition-colors">{item.title}</h3>
                                        <p className="text-white/70 font-montserrat leading-relaxed text-sm group-hover:text-white/90 transition-colors">
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="mt-8 pl-12 border-l-4 border-[#A67C00] ml-4 lg:ml-0"
                        >
                            <p className="text-white/90 text-lg font-cinzel mb-4 italic leading-relaxed">
                                "Si estás buscando un curso o una formación, este no es el espacio. Si estás listo para tomar acción, sí lo es."
                            </p>
                            <p className="text-xs text-[#A67C00] font-montserrat uppercase tracking-widest">
                                — Joaquín Alterman
                            </p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}
