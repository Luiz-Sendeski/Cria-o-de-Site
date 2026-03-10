import { motion } from 'motion/react';

export default function Favorites() {
  const favorites = [
    {
      title: 'Salmão Assado',
      subtitle: 'Toque do Chef',
      description: 'Posta de salmão fresco assada lentamente, servida com batatas rústicas e finalizada com ervas finas selecionadas.',
      image: 'https://martikaias.com.br/salm%C3%A3o.jpg',
    },
    {
      title: 'Pizza Martikaias',
      subtitle: 'Fermentação 48h',
      description: 'Molho San Marzano, mozzarella di bufala, tomate confit e finalizada com basílico fresco. Feita em forno a lenha.',
      image: 'https://martikaias.com.br/pizzas.jpg',
    },
    {
      title: 'Churrasco Premium',
      subtitle: 'Cortes Nobres',
      description: 'Seleção especial de carnes nobres grelhadas na brasa, servidas com nossos clássicos e deliciosos acompanhamentos tradicionais.',
      image: 'https://martikaias.com.br/churrasco.jpg',
    },
  ];

  return (
    <motion.section 
      id="favoritos" 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
      className="py-24 md:py-32 bg-madero-dark relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="h-px w-8 bg-madero-gold"></div>
            <span className="text-madero-gold uppercase tracking-[0.2em] text-sm font-medium">Nossa Seleção</span>
            <div className="h-px w-8 bg-madero-gold"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-madero-cream leading-tight">
            Favoritos da <span className="italic text-madero-gold-light">Casa</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {favorites.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-sm cursor-pointer h-[450px] lg:h-[550px] shadow-2xl border border-madero-gold/30 hover:border-madero-gold/80 transition-colors duration-500"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url('${item.image}')` }}
              ></div>
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-madero-black via-madero-black/50 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end items-start text-left z-10">
                <div className="translate-y-12 group-hover:translate-y-0 transition-transform duration-500 ease-out w-full">
                  <h3 className="text-2xl lg:text-3xl font-serif text-madero-cream uppercase tracking-wider mb-2 drop-shadow-lg">
                    {item.title}
                  </h3>
                  <span className="text-madero-gold italic text-lg font-medium block drop-shadow-md">
                    {item.subtitle}
                  </span>
                  
                  <div className="w-0 h-px bg-madero-gold/50 mt-4 group-hover:w-full transition-all duration-700 ease-out"></div>

                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out">
                    <div className="overflow-hidden">
                      <p className="text-madero-cream/90 text-sm md:text-base leading-relaxed font-light mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}
