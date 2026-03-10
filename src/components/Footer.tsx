import { motion } from 'motion/react';
import { Instagram, Facebook, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
      className="bg-[#0a0a0a] border-t border-madero-gold/10 pt-20 pb-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 mb-16">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <img 
              src="https://martikaias.com.br/Logo-Martikaias.png" 
              alt="Martikaias Logo" 
              className="h-16 w-auto object-contain mb-6 opacity-80 hover:opacity-100 transition-opacity duration-300"
              referrerPolicy="no-referrer"
            />
            <p className="text-madero-cream/50 text-sm leading-relaxed text-center md:text-left max-w-xs">
              Acreditamos que a sofisticação mora na simplicidade dos ingredientes perfeitos.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-madero-gold uppercase tracking-[0.2em] text-sm font-medium mb-6">Contato</h4>
            <div className="space-y-4 text-madero-cream/70 text-sm">
              <a href="https://wa.me/5546984053685" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-madero-gold transition-colors">
                <Phone size={18} className="text-madero-gold" />
                (46) 98405-3685
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-madero-gold shrink-0 mt-0.5" />
                <span>Palmas, PR<br />Brasil</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-madero-gold uppercase tracking-[0.2em] text-sm font-medium mb-6">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-madero-gold/30 flex items-center justify-center text-madero-cream/70 hover:bg-madero-gold hover:text-madero-black hover:border-madero-gold transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-madero-gold/30 flex items-center justify-center text-madero-cream/70 hover:bg-madero-gold hover:text-madero-black hover:border-madero-gold transition-all duration-300">
                <Facebook size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-madero-gold/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-madero-cream/40 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Martikaias. Todos os direitos reservados.</p>
          <p>Desde 1989</p>
        </div>
      </div>
    </motion.footer>
  );
}
