import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-madero-black/80 via-madero-black/60 to-madero-black/90 mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-madero-gold uppercase tracking-[0.3em] text-sm md:text-base font-medium mb-6 block">
            Desde 1989
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-madero-cream mb-8 leading-tight"
        >
          Prazer em <br />
          <span className="italic text-madero-gold-light">comer bem</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12"
        >
          <a
            href="#menu"
            className="px-10 py-4 bg-madero-gold text-madero-black uppercase tracking-[0.2em] text-sm font-semibold hover:bg-madero-gold-light transition-all duration-300 w-full sm:w-auto"
          >
            Descubra o Menu
          </a>
          <a
            href="https://wa.me/5546984053685"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 border border-madero-gold text-madero-gold uppercase tracking-[0.2em] text-sm font-semibold hover:bg-madero-gold hover:text-madero-black transition-all duration-300 w-full sm:w-auto"
          >
            Reservar Mesa
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-madero-cream/50">Rolar</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="text-madero-gold/70" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
