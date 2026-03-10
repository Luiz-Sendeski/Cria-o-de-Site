import { motion } from 'motion/react';
import { ShoppingBag } from 'lucide-react';

export default function Delivery() {
  return (
    <motion.section 
      id="delivery" 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1 }}
      className="relative py-24 md:py-32 flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-fixed"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-madero-black/95 via-madero-black/80 to-madero-black/90 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
              <div className="h-px w-12 bg-madero-gold"></div>
              <span className="text-madero-gold uppercase tracking-[0.2em] text-sm font-medium">Delivery</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-madero-cream mb-8 leading-tight">
              O Melhor Sabor <br />
              <span className="italic text-madero-gold-light">em Sua Casa</span>
            </h2>
            
            <p className="text-madero-cream/70 text-lg leading-relaxed font-light mb-10 max-w-xl mx-auto lg:mx-0">
              Peça agora e experimente nossa tradição onde você estiver. Nossas pizzas são preparadas com massa de longa fermentação, molho de tomate italiano e ingredientes frescos selecionados.
            </p>

            <a
              href="https://wa.me/5546984053685"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 bg-madero-gold text-madero-black uppercase tracking-[0.2em] text-sm font-semibold hover:bg-madero-gold-light transition-all duration-300 shadow-lg hover:shadow-madero-gold/20"
            >
              <ShoppingBag size={20} />
              Fazer Pedido Agora
            </a>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:flex justify-center items-center relative h-[500px]"
          >
            <div className="absolute w-[400px] h-[400px] border border-madero-gold/20 rounded-full animate-[spin_60s_linear_infinite]"></div>
            <div className="absolute w-[350px] h-[350px] border border-madero-gold/10 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
            
            <div className="relative z-10 text-center bg-madero-black/80 backdrop-blur-sm p-12 rounded-full border border-madero-gold/30 shadow-2xl w-[300px] h-[300px] flex flex-col justify-center items-center">
              <span className="block text-5xl font-serif text-madero-gold mb-2">48h</span>
              <span className="text-sm uppercase tracking-[0.2em] text-madero-cream/80 block mb-1">Fermentação</span>
              <span className="text-xs uppercase tracking-widest text-madero-cream/50">Natural</span>
              
              <div className="w-12 h-px bg-madero-gold/50 mx-auto my-4"></div>
              
              <span className="block text-3xl font-serif text-madero-gold mb-1">100%</span>
              <span className="text-xs uppercase tracking-[0.2em] text-madero-cream/80 block">Artesanal</span>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
