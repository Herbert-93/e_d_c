import { Menu, X, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import logoImg from '../assets/logo.jpeg';
import { phones } from '../clinic';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-card' : 'bg-white/80 backdrop-blur-sm border-b border-navy/10'
    }`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#home" onClick={() => handleNavClick('#home')} className="flex items-center gap-3 group">
          <img
            src={logoImg}
            alt="Elegant Dental Care Logo"
            className="w-11 h-11 rounded-full object-cover ring-2 ring-navy/15 group-hover:ring-leaf transition"
          />
          <div className="leading-tight">
            <div className="text-base font-serif font-bold tracking-wide text-ink">
              <span className="text-navy">Elegant</span> <span className="text-leaf-dark">Dental</span>
            </div>
            <div className="text-[10px] tracking-widest uppercase text-navy/60 font-light">Care</div>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="text-ink/70 hover:text-leaf-dark uppercase text-xs tracking-widest font-light"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${phones[0].tel}`}
            className="flex items-center gap-2 bg-navy hover:bg-leaf hover:text-navy-deep text-white px-5 py-2.5 text-xs uppercase tracking-widest font-medium"
          >
            <Phone className="w-3.5 h-3.5" />
            Book Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-ink hover:text-leaf-dark"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-mist-dark px-6 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="text-sm uppercase tracking-widest text-ink/70 hover:text-leaf-dark py-1 font-light"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${phones[0].tel}`}
            className="mt-2 flex items-center justify-center gap-2 bg-navy text-white py-3 uppercase tracking-widest text-xs font-medium"
          >
            <Phone className="w-3.5 h-3.5" />
            Book Appointment
          </a>
        </div>
      )}
    </nav>
  );
}
