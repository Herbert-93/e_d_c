import { ChevronDown } from 'lucide-react';
import heroImg from '../assets/photos/exterior-night.jpg';

export default function Hero() {
  const go = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative overflow-hidden bg-navy text-white">
      {/* soft green glow echoing the logo's green arc */}
      <div className="absolute -right-40 -top-40 w-[520px] h-[520px] rounded-full bg-leaf/20 blur-3xl" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy-deep" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-0 lg:min-h-[640px] grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="max-w-xl">
          <p className="text-leaf uppercase tracking-[0.3em] text-xs font-medium mb-5">
            Premium Dental Care
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight font-serif">
            Your Smile,{' '}
            <span className="italic text-leaf font-light block">Our Passion.</span>
          </h1>
          <p className="text-white/80 text-base sm:text-lg mb-10 font-light leading-relaxed max-w-lg">
            Experience world-class dental care crafted for comfort and confidence. At Elegant Dental Care, we blend luxury with clinical excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => go('#contact')}
              className="bg-leaf hover:bg-leaf-light text-navy-deep px-8 py-4 uppercase tracking-[0.2em] text-xs font-semibold"
            >
              Book Appointment
            </button>
            <button
              onClick={() => go('#services')}
              className="border border-white/60 hover:border-leaf hover:text-leaf text-white px-8 py-4 uppercase tracking-[0.2em] text-xs font-light"
            >
              Our Services
            </button>
          </div>
        </div>

        {/* Photo: the clinic entrance, lit up at night */}
        <div className="relative lg:py-16">
          <div className="relative mx-auto max-w-sm lg:max-w-md">
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-leaf" aria-hidden="true" />
            <img
              src={heroImg}
              alt="Elegant Dental Care clinic entrance, lit up at night"
              className="relative w-full aspect-[4/5] object-cover shadow-elegant"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => go('#about')}
        className="hidden lg:block absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/50 hover:text-leaf animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-7 h-7" />
      </button>
    </section>
  );
}
