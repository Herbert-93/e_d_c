import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';
import { phones, address, email, hours } from '../clinic';
import exteriorDay from '../assets/photos/exterior-day.jpg';

const contactInfo = [
  { icon: <MapPin className="w-5 h-5 text-navy flex-shrink-0" />, label: 'Address', value: address },
  { icon: <Phone className="w-5 h-5 text-navy flex-shrink-0" />, label: 'Phone', phones },
  { icon: <Mail className="w-5 h-5 text-navy flex-shrink-0" />, label: 'Email', value: email, href: `mailto:${email}` },
  { icon: <Clock className="w-5 h-5 text-navy flex-shrink-0" />, label: 'Hours', value: hours.join('\n') },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real deployment, connect to an email service like EmailJS, Formspree, etc.
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', phone: '', email: '', service: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-mist">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-leaf-dark uppercase tracking-[0.3em] text-xs font-medium mb-3">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4">Book Your Appointment</h2>
          <div className="w-16 h-0.5 bg-leaf mx-auto" />
          <p className="mt-6 text-gray-500 font-light max-w-lg mx-auto">
            Ready for a healthier, more beautiful smile? Contact us today to schedule your visit.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <div>
            <div className="space-y-7 mb-10">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-0.5 w-10 h-10 bg-white flex items-center justify-center shadow-card flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-1">{item.label}</p>
                    {item.phones ? (
                      <div className="flex flex-col gap-1">
                        {item.phones.map((p) => (
                          <a key={p.tel} href={`tel:${p.tel}`} className="text-ink hover:text-leaf-dark font-light text-sm">
                            {p.display}
                          </a>
                        ))}
                      </div>
                    ) : item.href ? (
                      <a href={item.href} className="text-ink hover:text-leaf-dark font-light whitespace-pre-line text-sm">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-ink font-light whitespace-pre-line text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Clinic frontage so patients know what to look for */}
            <figure className="relative h-64 overflow-hidden">
              <img src={exteriorDay} alt="Elegant Dental Care entrance" className="w-full h-full object-cover object-center" loading="lazy" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/85 to-transparent pt-10 pb-3 px-4 text-white text-xs tracking-widest uppercase font-light">
                Look for the green and navy sign
              </figcaption>
            </figure>
          </div>

          {/* Booking form */}
          <div className="bg-white p-8 sm:p-10 shadow-card">
            {submitted && (
              <div className="mb-6 p-4 bg-leaf/10 border border-leaf text-leaf-dark text-sm font-medium text-center">
                ✓ Thank you! We'll be in touch shortly to confirm your appointment.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-leaf bg-mist font-light"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="07XX XXX XXX"
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-leaf bg-mist font-light"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-leaf bg-mist font-light"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Service Needed</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-leaf bg-mist font-light text-gray-600 appearance-none"
                >
                  <option value="">Select a service</option>
                  <option>Cosmetic Dentistry</option>
                  <option>General Care</option>
                  <option>Dental Implants</option>
                  <option>Teeth Whitening</option>
                  <option>Orthodontics</option>
                  <option>Emergency Dental</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us a bit about what you need..."
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-leaf bg-mist font-light resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-navy hover:bg-navy-deep text-white py-4 uppercase tracking-[0.2em] text-xs font-medium"
              >
                Request Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
