import { motion } from 'motion/react';

export default function About() {
  return (
    <motion.section 
      id="historia" 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
      className="py-24 md:py-32 bg-madero-black relative overflow-hidden"
    >
      {/* Background Pattern/Texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/wood-pattern.png')" }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-madero-gold"></div>
              <span className="text-madero-gold uppercase tracking-[0.2em] text-sm font-medium">Nossa História</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-madero-cream mb-8 leading-tight">
              30 Anos de <br />
              <span className="italic text-madero-gold-light">Tradição</span>
            </h2>
            
            <div className="space-y-6 text-madero-cream/70 text-lg leading-relaxed font-light">
              <p>
                Localizado no coração de Palmas, o Martikaias transcede o conceito de restaurante. Somos guardiões de receitas que atravessam gerações.
              </p>
              <p>
                Acreditamos que a sofisticação mora na simplicidade dos ingredientes perfeitos. Nossa cozinha une a técnica clássica italiana com o calor da hospitalidade brasileira.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-madero-gold/20 pt-10">
              <div className="text-center">
                <span className="block text-3xl font-serif text-madero-gold mb-2">1989</span>
                <span className="text-xs uppercase tracking-widest text-madero-cream/50">Fundação</span>
              </div>
              <div className="text-center border-l border-r border-madero-gold/20">
                <span className="block text-3xl font-serif text-madero-gold mb-2">+30</span>
                <span className="text-xs uppercase tracking-widest text-madero-cream/50">Pratos</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-serif text-madero-gold mb-2">100%</span>
                <span className="text-xs uppercase tracking-widest text-madero-cream/50">Artesanal</span>
              </div>
            </div>
          </div>

          {/* Image Grid (Professional Layout) */}
          <div className="order-1 lg:order-2 h-[500px] sm:h-[600px] grid grid-cols-2 gap-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="col-span-1 row-span-2 relative rounded-sm overflow-hidden shadow-2xl border border-madero-gold/10 group"
            >
              <img 
                src="https://martikaias.com.br/1.jpg" 
                alt="Restaurante Interno" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-madero-black/20 mix-blend-multiply transition-opacity group-hover:opacity-0"></div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="col-span-1 row-span-1 relative rounded-sm overflow-hidden shadow-2xl border border-madero-gold/10 group mt-8"
            >
              <img 
                src="https://martikaias.com.br/2.jpg" 
                alt="Mesas do Restaurante" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-madero-black/20 mix-blend-multiply transition-opacity group-hover:opacity-0"></div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="col-span-1 row-span-1 relative rounded-sm overflow-hidden shadow-2xl border border-madero-gold/10 group mb-8"
            >
              <img 
                src="https://martikaias.com.br/3.jpg" 
                alt="Salão e Buffet" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-madero-black/20 mix-blend-multiply transition-opacity group-hover:opacity-0"></div>
            </motion.div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
