import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Favoritos', href: '#favoritos' },
    { name: 'Sobre', href: '#historia' },
    { name: 'Cardápio', href: '#menu' },
    { name: 'Delivery', href: '#delivery' },
    { name: 'Eventos', href: '#eventos' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-madero-black/95 backdrop-blur-md py-4 shadow-lg border-b border-madero-gold/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center gap-3">
              <img 
                src="https://martikaias.com.br/Logo-Martikaias.png" 
                alt="Martikaias Logo" 
                className="h-12 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm uppercase tracking-[0.15em] text-madero-cream/80 hover:text-madero-gold transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/5546984053685"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-6 py-2 border border-madero-gold text-madero-gold hover:bg-madero-gold hover:text-madero-black transition-all duration-300 uppercase text-xs tracking-widest font-medium"
            >
              Reservar Mesa
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-madero-cream hover:text-madero-gold transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-madero-black border-b border-madero-gold/10 transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-3 text-base uppercase tracking-widest text-madero-cream/80 hover:text-madero-gold transition-colors text-center w-full"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/5546984053685"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block px-8 py-3 border border-madero-gold text-madero-gold hover:bg-madero-gold hover:text-madero-black transition-all duration-300 uppercase text-sm tracking-widest font-medium"
          >
            Reservar Mesa
          </a>
        </div>
      </div>
    </nav>
  );
}
