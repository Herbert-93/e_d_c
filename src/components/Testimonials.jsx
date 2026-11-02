import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Patient since 2020',
    text: 'Elegant Dental Care completely transformed my smile. The staff are incredibly professional and the clinic feels like a luxury spa. I actually look forward to my appointments now!',
    rating: 5,
  },
  {
    name: 'David K.',
    role: 'Patient since 2019',
    text: "I was terrified of the dentist before I found this clinic. Dr. and the team took the time to make me feel completely at ease. Best dental experience I've ever had.",
    rating: 5,
  },
  {
    name: 'Amara T.',
    role: 'Patient since 2021',
    text: 'The teeth whitening treatment here gave me results I never thought possible. My confidence has soared. The entire team is warm, welcoming, and genuinely care about your well-being.',
    rating: 5,
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-leaf fill-leaf" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-leaf uppercase tracking-[0.3em] text-xs font-medium mb-3">Patient Stories</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-4">What Our Patients Say</h2>
          <div className="w-16 h-0.5 bg-leaf mx-auto" />
        </div>

        {/* Testimonials grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-8 relative hover:border-leaf/40 transition-colors duration-300">
              <Quote className="w-10 h-10 text-leaf/20 absolute top-6 right-6" />
              <Stars count={t.rating} />
              <p className="mt-5 text-gray-300 font-light leading-relaxed text-sm italic">
                "{t.text}"
              </p>
              <div className="mt-7 flex items-center gap-4 pt-6 border-t border-white/10">
                <div className="w-12 h-12 rounded-full bg-leaf text-navy-deep font-semibold flex items-center justify-center ring-2 ring-leaf/30" aria-hidden="true">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-medium text-white text-sm">{t.name}</div>
                  <div className="text-leaf text-xs font-light tracking-wide">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
