import { motion } from 'motion/react';
import { CalendarDays } from 'lucide-react';

export default function Events() {
  return (
    <motion.section 
      id="eventos" 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
      className="py-24 md:py-32 bg-madero-black relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] sm:h-[600px] rounded-sm overflow-hidden shadow-2xl border border-madero-gold/10 group"
          >
            <img 
              src="https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Buffet para Eventos" 
              className="w-full h-full object-cover filter grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-madero-black via-transparent to-madero-black/20 mix-blend-multiply transition-opacity group-hover:opacity-50"></div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-madero-gold"></div>
              <span className="text-madero-gold uppercase tracking-[0.2em] text-sm font-medium">Seu Evento Conosco</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-madero-cream mb-8 leading-tight">
              Buffet para <br />
              <span className="italic text-madero-gold-light">Eventos</span>
            </h2>
            
            <div className="space-y-6 text-madero-cream/70 text-lg leading-relaxed font-light mb-10">
              <p>
                Torne seu evento inesquecível com o sabor e a sofisticação do Martikaias. Oferecemos soluções completas de buffet para casamentos, formaturas, aniversários e eventos corporativos.
              </p>
            </div>

            <ul className="space-y-4 mb-12">
              {[
                'Menu personalizado',
                'Equipe qualificada',
                'Ingredientes premium',
              ].map((item, index) => (
                <motion.li 
                  key={index} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                  className="flex items-center gap-4 text-madero-cream/90"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-madero-gold"></div>
                  <span className="uppercase tracking-widest text-sm font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>

            <a
              href="https://wa.me/5546984053685"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 border border-madero-gold text-madero-gold uppercase tracking-[0.2em] text-sm font-semibold hover:bg-madero-gold hover:text-madero-black transition-all duration-300"
            >
              <CalendarDays size={20} />
              Solicitar Orçamento
            </a>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
