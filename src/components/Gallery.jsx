import exteriorNight from '../assets/photos/exterior-night.jpg';
import exteriorDay from '../assets/photos/exterior-day.jpg';
import treatment from '../assets/photos/treatment-room.jpg';
import staffSmile from '../assets/photos/staff-smile.jpg';
import staffHijab from '../assets/photos/staff-hijab.jpg';
import staffLobby from '../assets/photos/staff-lobby.jpg';

const images = [
  { src: treatment, alt: 'A dentist treating a patient in our treatment room', caption: 'Treatment Room', pos: 'object-center' },
  { src: staffSmile, alt: 'A member of our dental team in our reception area', caption: 'Our Team', pos: 'object-top' },
  { src: exteriorNight, alt: 'Elegant Dental Care entrance at night', caption: 'Evening at the Clinic', pos: 'object-center' },
  { src: staffHijab, alt: 'A member of our dental team beside the oral-care display', caption: 'Friendly Faces', pos: 'object-top' },
  { src: exteriorDay, alt: 'Elegant Dental Care entrance during the day', caption: 'Our Clinic', pos: 'object-center' },
  { src: staffLobby, alt: 'A member of our dental team in the reception', caption: 'Welcome In', pos: 'object-top' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-leaf-dark uppercase tracking-[0.3em] text-xs font-medium mb-3">Our Clinic</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 italic text-navy">The Elegant Experience</h2>
          <div className="w-16 h-0.5 bg-leaf mx-auto" />
          <p className="mt-6 text-gray-600 font-light max-w-lg mx-auto leading-relaxed">
            A glimpse inside our clinic and the people who look after your smile every day.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {images.map((img, i) => (
            <figure key={i} className="group overflow-hidden relative aspect-[3/4] bg-mist-dark">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className={`w-full h-full object-cover ${img.pos} group-hover:scale-105 transition-transform duration-500`}
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/85 to-transparent pt-12 pb-4 px-4 text-white text-xs uppercase tracking-widest font-light">
                {img.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
