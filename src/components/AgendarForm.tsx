import { motion } from 'framer-motion'

export default function AgendarForm() {
    return (
        <section className="relative pt-6 pb-20">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-cinzel text-center text-[#EDE8DC] mb-12 tracking-widest"
                >
                    AGENDAR ES <span className="text-gold-gradient">ELEGIRTE</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    style={{ maxWidth: '800px', margin: '0 auto' }}
                >
                    <iframe
                        src="https://go.tierradorada.ar/widget/form/MtveCL0TqE29W0dnbI58"
                        style={{ width: '100%', minHeight: '1446px', border: 'none', borderRadius: '3px' }}
                        id="inline-MtveCL0TqE29W0dnbI58"
                        data-layout="{'id':'INLINE'}"
                        data-trigger-type="alwaysShow"
                        data-trigger-value=""
                        data-activation-type="alwaysActivated"
                        data-activation-value=""
                        data-deactivation-type="neverDeactivate"
                        data-deactivation-value=""
                        data-form-name="CLOSER AGENDA NODRIZA 2026"
                        data-height="1446"
                        data-layout-iframe-id="inline-MtveCL0TqE29W0dnbI58"
                        data-form-id="MtveCL0TqE29W0dnbI58"
                        title="CLOSER AGENDA NODRIZA 2026"
                    />
                    <script src="https://go.tierradorada.ar/js/form_embed.js" />
                </motion.div>
            </div>
        </section>
    )
}
