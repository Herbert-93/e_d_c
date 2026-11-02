import { Star, ShieldCheck, Zap, Smile, Moon, Sparkles } from 'lucide-react';

const services = [
  {
    icon: <Star className="w-8 h-8 text-navy" />,
    title: 'Cosmetic Dentistry',
    desc: 'Porcelain veneers, teeth whitening, and smile design for the Hollywood look you deserve.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-navy" />,
    title: 'General Dental Care',
    desc: 'Comprehensive checkups, professional cleanings, fillings, and preventive care for the whole family.',
  },
  {
    icon: <Zap className="w-8 h-8 text-navy" />,
    title: 'Dental Implants',
    desc: 'State-of-the-art permanent tooth replacement that looks, feels, and functions like your natural teeth.',
  },
  {
    icon: <Smile className="w-8 h-8 text-navy" />,
    title: 'Teeth Whitening',
    desc: 'Professional-grade in-office and take-home whitening treatments for a brighter smile in less time.',
  },
  {
    icon: <Moon className="w-8 h-8 text-navy" />,
    title: 'Orthodontics',
    desc: 'Clear aligners and traditional braces to give you straight teeth and a confident, aligned smile.',
  },
  {
    icon: <Sparkles className="w-8 h-8 text-navy" />,
    title: 'Emergency Dental',
    desc: 'Prompt, compassionate same-day care for toothaches, broken teeth, and other urgent dental needs.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-mist">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-leaf-dark uppercase tracking-[0.3em] text-xs font-medium mb-3">What We Offer</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4">Exceptional Services</h2>
          <div className="w-16 h-0.5 bg-leaf mx-auto" />
          <p className="mt-6 text-gray-500 font-light max-w-xl mx-auto leading-relaxed">
            From routine care to complete smile transformations, our full range of dental services is designed to meet your every need.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white group overflow-hidden shadow-card hover:shadow-elegant transition-shadow duration-300"
            >
              {/* Brand accent bar */}
              <div className="h-1.5 bg-gradient-to-r from-navy to-leaf" />
              {/* Card body */}
              <div className="p-7">
                <div className="mb-4 w-14 h-14 bg-mist-dark rounded-sm flex items-center justify-center">
                  {s.icon}
                </div>
                <h3 className="text-xl mb-3 text-navy">{s.title}</h3>
                <p className="text-gray-500 font-light text-sm leading-relaxed">{s.desc}</p>
                <div className="mt-5 w-8 h-0.5 bg-leaf group-hover:w-14 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
