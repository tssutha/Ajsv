import { Link } from 'react-router';
import { CheckCircle, Award, Users, Clock, Star, ArrowRight, Home as HomeIcon, Wrench, HardHat, Hammer } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const heroImage = 'https://images.unsplash.com/photo-1686358244570-631340cbbd22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMGNvbnN0cnVjdGlvbiUyMHNpdGUlMjBBdXN0cmFsaWElMjBmcmFtZXxlbnwxfHx8fDE3NzcyOTU4OTN8MA&ixlib=rb-4.1.0&q=80&w=1080';
const aboutImage = 'https://images.unsplash.com/photo-1743130940714-91b221fa49ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwY29uc3RydWN0aW9uJTIwd29ya2VycyUyMHRlYW0lMjBBdXN0cmFsaWElMjBzbWlsaW5nfGVufDF8fHx8MTc3NzI5OTUzOXww&ixlib=rb-4.1.0&q=80&w=1080';
const newHomeImage = 'https://images.unsplash.com/photo-1769780510442-60d4d6391a91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXNpZGVudGlhbCUyMGhvdXNlJTIwZnJvbnQlMjBleHRlcmlvcnxlbnwxfHx8fDE3NzcyOTkwNjl8MA&ixlib=rb-4.1.0&q=80&w=1080';
const renovationImage = 'https://images.unsplash.com/photo-1761353854322-96e6ab127da4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwYmF0aHJvb20lMjByZW5vdmF0aW9uJTIwbW9kZXJuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzc3Mjk1ODk0fDA&ixlib=rb-4.1.0&q=80&w=1080';
const civilImage = 'https://images.unsplash.com/photo-1768053823555-b75cd4ead6c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXZpbCUyMGVhcnRod29ya3MlMjBleGNhdmF0aW9uJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc3NzI5NTg5NHww&ixlib=rb-4.1.0&q=80&w=1080';
const maintenanceImage = 'https://images.unsplash.com/photo-1761637822930-fb1c1a3df94d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9wZXJ0eSUyMGxhbmRzY2FwaW5nJTIwZ2FyZGVuJTIwbWFpbnRlbmFuY2V8ZW58MXx8fHwxNzc3Mjk1ODk0fDA&ixlib=rb-4.1.0&q=80&w=1080';

const services = [
  {
    icon: <HomeIcon className="h-7 w-7 text-white" />,
    title: 'Housing',
    subtitle: 'New home construction, custom builds & grouped dwellings',
    image: newHomeImage,
    path: '/services',
    color: 'from-[#1a3468] to-[#1e4080]',
  },
  {
    icon: <Wrench className="h-7 w-7 text-white" />,
    title: 'Renovations',
    subtitle: 'Kitchens, bathrooms, extensions, sheds & full home upgrades',
    image: renovationImage,
    path: '/services',
    color: 'from-[#1a3468] to-[#1e4080]',
  },
  {
    icon: <HardHat className="h-7 w-7 text-white" />,
    title: 'Civil Works',
    subtitle: 'Site preparation, earthworks, concrete & infrastructure',
    image: civilImage,
    path: '/services',
    color: 'from-[#1a3468] to-[#1e4080]',
  },
  {
    icon: <Hammer className="h-7 w-7 text-white" />,
    title: 'Property Maintenance',
    subtitle: 'Landscaping, electrical, plumbing & specialised maintenance',
    image: maintenanceImage,
    path: '/services',
    color: 'from-[#1a3468] to-[#1e4080]',
  },
];

const testimonials = [
  {
    name: 'Ganesh G.',
    location: 'Shelly, WA',
    rating: 5,
    text: 'AJSV Construction built our new home from the ground up. The team was professional, communicative, and delivered exceptional quality. Highly recommend to any family looking for a reliable builder in Perth.',
  },
  {
    name: 'Sarah & James K.',
    location: 'Subiaco, WA',
    rating: 5,
    text: 'We had our kitchen and bathroom completely renovated. The result exceeded all expectations — on time, on budget, and the workmanship is outstanding. This is truly a family business that cares.',
  },
  {
    name: 'David L.',
    location: 'Mandurah, WA',
    rating: 5,
    text: 'AJSV handled our civil works and site preparation for our granny flat project. Clear communication throughout, honest pricing, and a fantastic end result. We\'ll be using them again for sure.',
  },
  {
    name: 'Linda M.',
    location: 'Fremantle, WA',
    rating: 5,
    text: 'Called them for roof repairs and property maintenance after storm damage. Quick response, fair price, and the repairs are solid. Very trustworthy team — it shows they take pride in their work.',
  },
];

const whyChooseUs = [
  { icon: <Users className="h-6 w-6 text-[#e07320]" />, title: 'Experienced Family Business', desc: 'Personal service with the dedication only a family-owned business provides.' },
  { icon: <Award className="h-6 w-6 text-[#e07320]" />, title: 'Quality Workmanship', desc: 'Every project is completed to the highest standards with premium materials.' },
  { icon: <Clock className="h-6 w-6 text-[#e07320]" />, title: 'Reliable & On-Time', desc: 'We respect your time and deliver on our commitments, every single time.' },
  { icon: <CheckCircle className="h-6 w-6 text-[#e07320]" />, title: 'Fully Insured', desc: 'Fully licensed and insured for your complete peace of mind.' },
];

export default function Home() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[600px] max-h-[850px] overflow-hidden">
        <ImageWithFallback
          src={heroImage}
          alt="AJSV Construction – building site"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1e40]/90 via-[#0f1e40]/70 to-[#0f1e40]/30" />

        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              {/* Tag */}
              <div className="inline-flex items-center gap-2 bg-[#e07320]/20 border border-[#e07320]/40 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-[#e07320] rounded-full" />
                <span className="text-[#e07320] text-xs tracking-widest" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                  PERTH, WESTERN AUSTRALIA
                </span>
              </div>

              <h1
                className="text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900 }}
              >
                Building<br />
                <span className="text-[#e07320]">Your Vision.</span><br />
                Our Craft.
              </h1>

              <p
                className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed"
                style={{ fontFamily: 'Open Sans, sans-serif' }}
              >
                Housing, Renovation, Civil Works &amp; Property Maintenance.<br />
                Family-owned. Perth-based. Built on trust.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#e07320] text-white px-8 py-4 rounded hover:bg-[#c9661a] transition-colors"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                >
                  Get a Free Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white px-8 py-4 rounded hover:bg-white/20 transition-colors backdrop-blur-sm"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#e07320]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
              {[
                { value: '100+', label: 'Projects Completed' },
                { value: '10+', label: 'Years Experience' },
                { value: '4', label: 'Service Categories' },
                { value: '100%', label: 'Client Satisfaction' },
              ].map((stat) => (
                <div key={stat.label} className="py-4 px-6 text-center">
                  <p className="text-white text-2xl" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900 }}>
                    {stat.value}
                  </p>
                  <p className="text-white/80 text-xs tracking-wide" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#e07320] text-xs tracking-widest" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
              WHAT WE DO
            </span>
            <h2
              className="text-4xl md:text-5xl text-[#1a3468] mt-2"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800 }}
            >
              Our Services
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              From building your dream home to keeping your property in top shape — we do it all.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.path}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block"
              >
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e40]/90 via-[#0f1e40]/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <div className="bg-[#e07320] w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                    {service.icon}
                  </div>
                  <h3
                    className="text-white text-xl mb-1"
                    style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-xs leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    {service.subtitle}
                  </p>
                  <div className="flex items-center gap-1 mt-3 text-[#e07320] text-xs" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                    Learn More <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border-2 border-[#1a3468] text-[#1a3468] px-8 py-3 rounded hover:bg-[#1a3468] hover:text-white transition-colors"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
            >
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT SNIPPET ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={aboutImage}
                  alt="AJSV Construction team"
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e40]/50 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-[#e07320] text-white p-6 rounded-xl shadow-xl">
                <p className="text-4xl" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900 }}>10+</p>
                <p className="text-xs mt-1 tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                  YEARS IN<br />BUSINESS
                </p>
              </div>
            </div>

            {/* Text */}
            <div className="lg:pl-6">
              <span className="text-[#e07320] text-xs tracking-widest" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                ABOUT US
              </span>
              <h2
                className="text-4xl md:text-5xl text-[#1a3468] mt-2 mb-6"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800 }}
              >
                Built on Family.<br />Built to Last.
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                AJSV Construction Pty Ltd is a family-owned business built on hard work, trust, and quality craftsmanship. What started with small projects has grown into a reliable construction company known for delivering consistent results.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                Our name represents our family, and that means every project we take on is personal. We take pride in our work, pay attention to detail, and always aim to deliver on time and to a high standard.
              </p>

              {/* Values */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {['Quality Workmanship', 'Reliability', 'Client Focus', 'Safety First'].map((val) => (
                  <div key={val} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-[#e07320] flex-shrink-0" />
                    <span className="text-[#1a3468] text-sm" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                      {val}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-[#1a3468] text-white px-8 py-3 rounded hover:bg-[#243d7a] transition-colors"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
              >
                Our Story <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 bg-[#1a3468]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#e07320] text-xs tracking-widest" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
              WHY AJSV
            </span>
            <h2
              className="text-4xl md:text-5xl text-white mt-2"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800 }}
            >
              Why Choose Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
              >
                <div className="bg-[#e07320]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3
                  className="text-white text-lg mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#e07320] text-xs tracking-widest" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
              TESTIMONIALS
            </span>
            <h2
              className="text-4xl md:text-5xl text-[#1a3468] mt-2"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800 }}
            >
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-7 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 text-[#e07320] fill-[#e07320]" />
                  ))}
                </div>
                <p className="text-gray-600 mb-5 leading-relaxed italic" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="bg-[#1a3468] text-white w-10 h-10 rounded-full flex items-center justify-center text-sm" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-[#1a3468] text-sm" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                      {t.name}
                    </p>
                    <p className="text-gray-400 text-xs" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                      {t.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-16 bg-[#e07320]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl text-white mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800 }}
          >
            Ready to Start Your Project?
          </h2>
          <p className="text-white/85 mb-8 text-lg" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            Whether it's a small job or a large build — our goal is simple. Build with quality and earn your trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#e07320] px-8 py-4 rounded hover:bg-gray-100 transition-colors"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
            >
              Request a Free Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:0401121266"
              className="inline-flex items-center justify-center gap-2 bg-[#1a3468] text-white px-8 py-4 rounded hover:bg-[#243d7a] transition-colors"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}