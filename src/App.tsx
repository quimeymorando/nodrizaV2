import { useState, useEffect } from 'react'
import { Hero } from './components/Hero'
import { Pillars } from './components/Pillars'
import { Story } from './components/Story'
import { Agenda } from './components/Agenda'
import { SpaceBackground } from './components/SpaceBackground'
import { Preparation } from './components/Preparation'
import { Stack } from './components/Stack'
import { TestimonialsVideo } from './components/TestimonialsVideo'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import { FormularioNodriza } from './components/FormularioNodriza'
import AgendarForm from './components/AgendarForm'

function App() {
  const [view, setView] = useState<'landing' | 'booking' | 'preparation' | 'formulario'>('landing')

  useEffect(() => {
    // Detectar si la URL indica éxito (redirección desde GHL o máscara desde el Hub)
    const params = new URLSearchParams(window.location.search)
    if (params.get('view') === 'confirmation' || window.location.pathname.includes('/confirmacion')) {
      setView('preparation')
    } else if (window.location.pathname.includes('/formulario')) {
      setView('formulario')
    }
  }, [])

  // Hook para Meta Pixel SPA Tracking
  useEffect(() => {
    if (typeof window !== 'undefined' && 'fbq' in window) {
      // Registrar la vista de página con el pixel cada vez que cambie la vista principal
      // @ts-ignore
      window.fbq('track', 'PageView');
    }
  }, [view]);

  const toggleView = () => {
    setView(view === 'landing' ? 'booking' : 'landing')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Renderizador de Vistas
  const renderView = () => {
    if (view === 'formulario') return <FormularioNodriza />
    if (view === 'preparation') return <Preparation />

    if (view === 'booking') return (
      <div className="animate-in slide-in-from-right duration-500 min-h-screen relative overflow-y-auto">
        <SpaceBackground />
        <div className="container mx-auto px-4 max-w-4xl text-center text-white relative z-10 pt-24 pb-20">
          <button
            onClick={toggleView}
            className="mb-12 text-white/60 hover:text-white flex items-center gap-2 mx-auto font-cinzel tracking-widest uppercase text-sm transition-colors"
          >
            ← Volver
          </button>
          <h2 className="text-3xl md:text-5xl font-cinzel mb-4 italic">Paso Final</h2>
          <h3 className="text-xl md:text-3xl font-cinzel mb-12">Reserva tu <span className="text-gold-gradient">Llamada de Claridad</span></h3>

          {/* Scroll Fix: Aumentando altura mínima y permitiendo scroll */}
          <div className="bg-white/5 backdrop-blur-md p-2 md:p-6 rounded-sm border border-white/10 min-h-[900px] shadow-2xl">
            {(() => {
              const params = new URLSearchParams(window.location.search);
              const email = params.get('email');
              const phone = params.get('phone');
              const baseUrl = "https://api.leadconnectorhq.com/widget/booking/qM3gQRT48qaIvdmE1yPj";
              const bookingParams = new URLSearchParams();
              if (email) bookingParams.set('email', email);
              if (phone) bookingParams.set('phone', phone);
              const finalSrc = bookingParams.toString() ? `${baseUrl}?${bookingParams.toString()}` : baseUrl;
              
              return (
                <iframe
                  src={finalSrc}
                  className="w-full border-none min-h-[850px]"
                  scrolling="yes"
                />
              );
            })()}
          </div>
        </div>
      </div>
    )

    // Default: Landing
    return (
      <div className="animate-in fade-in duration-700 relative z-10">
        {/* Fondo estelar compartido entre Hero y formulario */}
        <div className="relative overflow-hidden">
          <SpaceBackground />
          <Hero onApply={toggleView} />
          <AgendarForm />
        </div>
        <Pillars />
        <Story />
        <Stack />
        {/* Fondo estelar compartido entre Agenda y Testimonios */}
        <div className="relative bg-primary-navy overflow-hidden">
          <SpaceBackground />
          <Agenda />
          <TestimonialsVideo />
        </div>
        <FAQ />

        {/* Footer CTA con Alma Galáctica */}
        <section className="py-40 text-center relative overflow-hidden">
          <SpaceBackground />
          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <h2 className="text-4xl md:text-6xl font-cinzel mb-12 text-white leading-tight">¿Listo para la <span className="text-gold-gradient">transformación</span>?</h2>
            <button
              onClick={toggleView}
              className="button-gold-metallic px-12 py-6 text-white font-bold rounded-full font-cinzel text-xl tracking-[0.2em] shadow-gold hover:scale-105 transition-all duration-300"
            >
              ASUMO MI LUGAR - APLICAR AHORA
            </button>
          </div>
        </section>
        <Footer />
      </div>
    )
  }

  return (
    <main className="w-full min-h-screen bg-primary-navy relative">
      {renderView()}
    </main>
  )
}

export default App
