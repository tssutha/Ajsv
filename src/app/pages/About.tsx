import { Link } from 'react-router';
import { CheckCircle, Award, Users, ShieldCheck, Target, ArrowRight, Star } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const heroImage = 'https://images.unsplash.com/photo-1548838670-cb67b43a6adb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBjb25zdHJ1Y3Rpb24lMjBidXNpbmVzcyUyMHRlYW0lMjB3b3JrZXJzfGVufDF8fHx8MTc3NzI5NTg5NXww&ixlib=rb-4.1.0&q=80&w=1080';
const workerImage = 'https://images.unsplash.com/photo-1694521787799-ad4ad241cb39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjBidWlsZGluZyUyMHNpdGUlMjBzYWZldHklMjBoZWxtZXR8ZW58MXx8fHwxNzc3Mjk1OTAxfDA&ixlib=rb-4.1.0&q=80&w=1080';

const values = [
  {
    icon: <Award className="h-7 w-7 text-[#e07320]" />,
    title: 'Quality Workmanship',
    desc: 'We never cut corners. Every project is executed with the highest standards of craftsmanship, using quality materials and proven techniques.',
  },
  {
    icon: <ShieldCheck className="h-7 w-7 text-[#e07320]" />,
    title: 'Reliability',
    desc: 'We show up when we say we will, deliver on our promises, and see every project through to a successful completion.',
  },
  {
    icon: <Target className="h-7 w-7 text-[#e07320]" />,
    title: 'Client Focus',
    desc: 'Your vision drives everything we do. We listen, communicate clearly, and keep you informed at every stage of your project.',
  },
  {
    icon: <Users className="h-7 w-7 text-[#e07320]" />,
    title: 'Safety First',
    desc: 'We maintain strict safety standards on all job sites — protecting our team, our clients, and the community at every step.',
  },
];

const testimonials = [
  {
    name: 'Michael T.',
    location: 'Joondalup, WA',
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
  {
    name: 'Tom & Rachel B.',
    location: 'Rockingham, WA',
    rating: 5,
    text: 'We had a full home extension completed. From the initial quote to the last brick, AJSV were professional throughout. Truly a company that stands behind their work.',
  },
  {
    name: 'Nathan P.',
    location: 'Armadale, WA',
    rating: 5,
    text: 'Concrete slab and driveway work was completed ahead of schedule. Neat, clean finish — the neighbours were asking who did it. Will definitely call again for our next project.',
  },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 overflow-hidden">
        <ImageWithFallback
          src={heroImage}
          alt="AJSV Construction team"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0f1e40]/80" />
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-[#e07320] text-xs tracking-widest" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
              OUR STORY
            </span>
            <h1
              className="text-4xl md:text-5xl text-white mt-2"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900 }}
            >
              About AJSV Construction
            </h1>
            <p className="text-gray-300 mt-2" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              Family-owned. Perth-based. Built on trust.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-[#e07320] text-xs tracking-widest" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                WHO WE ARE
              </span>
              <h2
                className="text-3xl md:text-4xl text-[#1a3468] mt-2 mb-6"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800 }}
              >
                A Family Business Built on Hard Work &amp; Trust
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                <p>
                  AJSV Construction Pty Ltd is a family-owned business built on hard work, trust, and quality craftsmanship. What started with small projects has grown into a reliable construction company known for delivering consistent results.
                </p>
                <p>
                  Our name represents our family, and that means every project we take on is personal. We take pride in our work, pay attention to detail, and always aim to deliver on time and to a high standard.
                </p>
                <p>
                  At AJSV Construction, we believe in honest communication, strong relationships, and doing the job right the first time. Whether it's a small job or a large build, our goal is simple — build with quality and earn your trust.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-10">
                {[
                  { value: '100+', label: 'Projects Done' },
                  { value: '10+', label: 'Years Experience' },
                  { value: '100%', label: 'Satisfaction Rate' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center border border-gray-100 rounded-xl p-4 bg-gray-50">
                    <p className="text-3xl text-[#e07320]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900 }}>
                      {stat.value}
                    </p>
                    <p className="text-gray-500 text-xs mt-1 tracking-wide" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={workerImage}
                  alt="AJSV Construction site"
                  className="w-full h-[480px] object-cover"
                />
              </div>
              {/* Overlapping accent card */}
              <div className="absolute -bottom-6 -left-6 bg-[#1a3468] text-white p-6 rounded-xl shadow-xl max-w-[200px]">
                <CheckCircle className="h-7 w-7 text-[#e07320] mb-2" />
                <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                  Fully Licensed &amp; Insured in WA
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#e07320] text-xs tracking-widest" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
              WHAT WE STAND FOR
            </span>
            <h2
              className="text-3xl md:text-4xl text-[#1a3468] mt-2"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800 }}
            >
              Our Values
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val) => (
              <div key={val.title} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="bg-[#1a3468]/5 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  {val.icon}
                </div>
                <h3 className="text-[#1a3468] mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                  {val.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#1a3468]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#e07320] text-xs tracking-widest" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
              CLIENT REVIEWS
            </span>
            <h2
              className="text-3xl md:text-4xl text-white mt-2"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800 }}
            >
              Testimonials
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 text-[#e07320] fill-[#e07320]" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm italic mb-5 leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="bg-[#e07320] text-white w-9 h-9 rounded-full flex items-center justify-center text-sm" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white text-sm" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
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

      {/* CTA */}
      <section className="py-16 bg-[#e07320]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl text-white mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800 }}
          >
            Let's Build Something Together
          </h2>
          <p className="text-white/85 mb-8" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            Contact us today for an honest conversation and a free, no-obligation quote.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#e07320] px-8 py-4 rounded hover:bg-gray-100 transition-colors"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
          >
            Get in Touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
