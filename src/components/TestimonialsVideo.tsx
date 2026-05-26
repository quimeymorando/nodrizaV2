import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react'

type CardData = {
  id: number
  name: string
  type: 'youtube' | 'placeholder'
  url?: string
  aspect: '16/9' | '9/16'
}

const CARDS: CardData[] = [
  { id: 1,  name: 'TOMAS KOLNN',       type: 'youtube',      url: 'https://www.youtube.com/embed/KF6WkyP1_7M',  aspect: '16/9' },
  { id: 2,  name: 'BARBRA PODESTÁ',    type: 'youtube',      url: 'https://www.youtube.com/embed/j1j-K_m6P2o',  aspect: '16/9' },
  { id: 3,  name: 'PATO HOLÍSTICA',    type: 'youtube',      url: 'https://www.youtube.com/embed/E2llff-52OA',  aspect: '16/9' },
  { id: 4,  name: 'PATO HOLÍSTICA (2)',type: 'youtube',      url: 'https://www.youtube.com/embed/A2oVJ8VberQ',  aspect: '16/9' },
  { id: 5,  name: 'GISELA ARTUSO',     type: 'placeholder',  aspect: '16/9' },
  { id: 6,  name: 'MAR URCOLA',        type: 'placeholder',  aspect: '16/9' },
  { id: 7,  name: 'JENNY',             type: 'placeholder',  aspect: '16/9' },
  { id: 8,  name: 'LUCIANA DAÑIL',     type: 'placeholder',  aspect: '16/9' },
  { id: 9,  name: 'PAULA ASNAGHI',     type: 'placeholder',  aspect: '16/9' },
  { id: 10, name: 'YULI MELIAN',       type: 'placeholder',  aspect: '16/9' },
  { id: 11, name: 'YULI MELIAN',       type: 'placeholder',  aspect: '16/9' },
  { id: 12, name: 'YULI MELIAN',       type: 'placeholder',  aspect: '16/9' },
  { id: 13, name: 'MARIANGELES GARCIA',type: 'placeholder',  aspect: '16/9' },
]

function useItemsPerPage() {
  const get = () => {
    if (typeof window === 'undefined') return 3
    if (window.innerWidth >= 1024) return 3
    if (window.innerWidth >= 768) return 2
    return 1
  }
  const [items, setItems] = useState(get)
  useEffect(() => {
    const handler = () => setItems(get())
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])
  return items
}

function VideoCard({ card }: { card: CardData }) {
  const aspectClass = card.aspect === '9/16' ? 'aspect-[9/16]' : 'aspect-video'

  if (card.type === 'youtube') {
    return (
      <div className="rounded-sm border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-[#C9A84C]/50 hover:shadow-[0_0_25px_rgba(201,168,76,0.1)]">
        <div className={aspectClass}>
          <iframe
            src={card.url}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            title={card.name}
          />
        </div>
        <div className="py-3 px-4 border-t border-white/10">
          <p className="font-cinzel text-xs tracking-[0.2em] text-[#C9A84C] text-center uppercase">
            {card.name}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-sm border border-[#C9A84C]/20 bg-[#1A3060] overflow-hidden">
      <div className={`${aspectClass} flex flex-col items-center justify-center gap-4`}>
        <Clock className="w-10 h-10 text-[#C9A84C] opacity-30" />
        <p
          className="font-montserrat text-xs tracking-[0.25em] uppercase"
          style={{ color: '#EDE8DC', opacity: 0.4 }}
        >
          Próximamente
        </p>
      </div>
      <div className="py-3 px-4 border-t border-[#C9A84C]/10">
        <p className="font-cinzel text-xs tracking-[0.2em] text-[#C9A84C] text-center uppercase">
          {card.name}
        </p>
      </div>
    </div>
  )
}

const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir * 48 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: -dir * 48 }),
}

export const TestimonialsVideo = () => {
  const itemsPerPage = useItemsPerPage()
  const [currentPage, setCurrentPage] = useState(0)
  const [direction, setDirection] = useState(1)

  const totalPages = Math.ceil(CARDS.length / itemsPerPage)

  useEffect(() => { setCurrentPage(0) }, [itemsPerPage])

  const prev = () => {
    setDirection(-1)
    setCurrentPage(p => (p === 0 ? totalPages - 1 : p - 1))
  }
  const next = () => {
    setDirection(1)
    setCurrentPage(p => (p === totalPages - 1 ? 0 : p + 1))
  }
  const goTo = (i: number) => {
    setDirection(i > currentPage ? 1 : -1)
    setCurrentPage(i)
  }

  const visibleCards = CARDS.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
  const emptySlots = itemsPerPage - visibleCards.length

  return (
    <section className="py-32 relative">

      <div className="relative z-10 container mx-auto px-4 max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block border border-[#C9A84C] px-4 py-1 text-[#C9A84C] text-xs tracking-[0.3em] mb-6 uppercase font-bold bg-[#C9A84C]/10 backdrop-blur-sm font-cinzel">
            Voces de la Comunidad
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-cinzel text-white leading-tight">
            ELLOS YA <span className="text-gold-gradient">DIERON EL PASO</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative">

          {/* Flecha izquierda */}
          <button
            onClick={prev}
            aria-label="Anterior"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-[#C9A84C]/30 bg-black/40 backdrop-blur-sm text-[#C9A84C] transition-all duration-300 hover:border-[#C9A84C] hover:bg-[#C9A84C]/10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Cards */}
          <div className="overflow-hidden mx-10 md:mx-14">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentPage}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="grid gap-4 md:gap-6 items-start"
                style={{ gridTemplateColumns: `repeat(${itemsPerPage}, minmax(0, 1fr))` }}
              >
                {visibleCards.map(card => (
                  <VideoCard key={card.id} card={card} />
                ))}
                {emptySlots > 0 && Array.from({ length: emptySlots }).map((_, i) => (
                  <div key={`empty-${i}`} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Flecha derecha */}
          <button
            onClick={next}
            aria-label="Siguiente"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-[#C9A84C]/30 bg-black/40 backdrop-blur-sm text-[#C9A84C] transition-all duration-300 hover:border-[#C9A84C] hover:bg-[#C9A84C]/10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-2 mt-10">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Página ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentPage
                  ? 'w-6 bg-[#C9A84C]'
                  : 'w-1.5 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
