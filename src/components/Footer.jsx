import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import logoImg from '../assets/logo.jpeg';
import { phones, address, email, hours } from '../clinic';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'Cosmetic Dentistry',
  'General Care',
  'Dental Implants',
  'Teeth Whitening',
  'Orthodontics',
  'Emergency Dental',
];

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-deep text-white border-t-4 border-leaf">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img src={logoImg} alt="Logo" className="w-11 h-11 rounded-full object-cover bg-white ring-2 ring-leaf" />
              <div>
                <div className="font-serif font-bold tracking-wide text-white">
                  Elegant <span className="text-leaf">Dental</span>
                </div>
                <div className="text-[10px] tracking-widest uppercase text-white/60">Care</div>
              </div>
            </div>
            <p className="text-white/70 font-light text-sm leading-relaxed mb-6">
              Excellence in every smile. Premium dental care combining luxury with the very latest technology.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-white/5 hover:bg-leaf hover:text-navy-deep flex items-center justify-center transition-colors"
                  aria-label="Social link"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium mb-5 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="text-white/70 hover:text-leaf text-sm font-light transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium mb-5 text-white">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); scrollTo('#services'); }}
                    className="text-white/70 hover:text-leaf text-sm font-light transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium mb-5 text-white">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-leaf mt-0.5 flex-shrink-0" />
                <p className="text-white/70 text-sm font-light whitespace-pre-line">{address}</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-leaf mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  {phones.map((p) => (
                    <a key={p.tel} href={`tel:${p.tel}`} className="text-white/70 hover:text-leaf text-sm font-light">
                      {p.display}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-leaf flex-shrink-0" />
                <a href={`mailto:${email}`} className="text-white/70 hover:text-leaf text-sm font-light">
                  {email}
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-6 p-4 bg-white/5 border border-white/10">
              <p className="text-xs uppercase tracking-widest text-leaf mb-2">Opening Hours</p>
              {hours.map((h) => (
                <p key={h} className="text-white/70 text-xs font-light">{h}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-white/60 text-xs">
          <p>© {new Date().getFullYear()} Elegant Dental Care. All Rights Reserved.</p>
          <p className="font-light">Designed with ❤ for brighter smiles</p>
        </div>
      </div>
    </footer>
  );
}
