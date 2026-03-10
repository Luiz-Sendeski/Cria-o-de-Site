import { motion } from 'motion/react';
import { UtensilsCrossed } from 'lucide-react';

export default function DailyMenu() {
  return (
    <motion.section 
      id="menu" 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1 }}
      className="relative py-24 md:py-32 flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-fixed"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-madero-black/95 via-madero-black/85 to-madero-black/95 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="h-px w-8 bg-madero-gold"></div>
            <span className="text-madero-gold uppercase tracking-[0.2em] text-sm font-medium">Nossa Seleção Diária</span>
            <div className="h-px w-8 bg-madero-gold"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-madero-cream mb-8 leading-tight">
            Menu da <span className="italic text-madero-gold-light">Semana</span>
          </h2>
          
          <p className="text-madero-cream/70 text-lg leading-relaxed font-light mb-12 max-w-2xl mx-auto">
            Preparamos pratos exclusivos todos os dias, com ingredientes frescos e selecionados para proporcionar a melhor experiência gastronômica. Descubra as opções que nosso chef reservou para você hoje.
          </p>

          <a
            href="https://wa.me/5546984053685"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-madero-gold text-madero-black uppercase tracking-[0.2em] text-sm font-semibold hover:bg-madero-gold-light transition-all duration-300 shadow-lg hover:shadow-madero-gold/20"
          >
            <UtensilsCrossed size={20} />
            Consultar Menu do Dia
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
