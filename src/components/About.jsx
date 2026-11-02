import { Cpu, Users, Clock, Heart } from 'lucide-react';
import teamImg from '../assets/photos/team.jpg';

const stats = [
  { icon: <Users className="w-7 h-7 text-leaf-dark" />, value: 'Friendly Team', label: 'Caring, trained staff' },
  { icon: <Cpu className="w-7 h-7 text-leaf-dark" />, value: 'Modern Equipment', label: 'Comfortable treatment rooms' },
  { icon: <Heart className="w-7 h-7 text-leaf-dark" />, value: 'Gentle Care', label: 'For the whole family' },
  { icon: <Clock className="w-7 h-7 text-leaf-dark" />, value: '6 Days', label: 'A week' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              <img
                src={teamImg}
                alt="The Elegant Dental Care team"
                className="w-full h-[320px] sm:h-[420px] object-cover object-center"
              />
              {/* Gold accent frame */}
              <div className="absolute -bottom-5 -right-5 w-full h-full border-2 border-leaf/30 -z-10" />
            </div>
            
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <p className="text-leaf-dark uppercase tracking-[0.3em] text-xs font-medium mb-4">About Us</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-2 leading-tight">
              Dentistry With
            </h2>
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 leading-tight italic text-leaf-dark font-light">
              Precision  Care  Confidence
            </h2>
            <div className="w-16 h-0.5 bg-leaf mb-8" />
            <p className="text-gray-500 font-light leading-relaxed mb-5">
              At Elegant Dental Care, we believe every patient deserves a healthy, beautiful smile. Our state-of-the-art clinic combines the warmth of personalized care with the precision of modern dental technology.
            </p>
            <p className="text-gray-500 font-light leading-relaxed mb-10">
              Whether you're here for a routine checkup or a complete smile transformation, our experienced team is dedicated to making your visit as comfortable and rewarding as possible.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-mist rounded-sm border border-mist-dark">
                  <div className="mt-0.5">{stat.icon}</div>
                  <div>
                    <div className="text-lg font-serif font-bold text-navy">{stat.value}</div>
                    <div className="text-xs text-gray-500 font-light uppercase tracking-widest">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
