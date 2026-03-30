import { SpaceBackground } from './SpaceBackground';

export function FormularioNodriza() {
    return (
        <div className="min-h-screen bg-primary-navy relative flex items-center justify-center p-4">
            <SpaceBackground />

            <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center">
                <div className="text-center mb-8">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-[#C5A059]/40 bg-[#C5A059]/5 backdrop-blur-sm mb-6 shadow-[0_0_15px_rgba(197,160,89,0.15)]">
                        <span className="text-[#C5A059]/90 text-xs md:text-sm font-medium tracking-wider uppercase">
                            ESCUELA DE PROPÓSITO, ESPIRITUALIDAD Y ABUNDANCIA
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-cinzel text-white mb-6 leading-tight">
                        Tu sesión está <span className="text-gold-gradient font-bold italic">CASI</span> confirmada
                    </h1>

                    <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl mx-auto">
                        Falta que completes la siguiente encuesta y mires el video.
                    </p>
                </div>

                <div className="w-full bg-white/5 backdrop-blur-md p-2 md:p-6 rounded-2xl border border-white/10 shadow-2xl relative">
                    {(() => {
                        const params = new URLSearchParams(window.location.search);
                        const email = params.get('email');
                        const phone = params.get('phone');
                        const baseUrl = "https://api.funnelup.io/widget/form/3M7tjESmhd1xCvU8rOK0";
                        const formParams = new URLSearchParams();
                        if (email) formParams.set('email', email);
                        if (phone) formParams.set('phone', phone);
                        const finalSrc = formParams.toString() ? `${baseUrl}?${formParams.toString()}` : baseUrl;

                        return (
                            <iframe
                                src={finalSrc}
                                className="w-full min-h-[900px] md:min-h-[850px] border-none rounded-xl"
                                scrolling="yes"
                                title="Formulario de confirmación Nodriza"
                            />
                        );
                    })()}
                </div>
            </div>
        </div>
    );
}
