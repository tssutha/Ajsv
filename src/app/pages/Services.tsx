import { Link } from 'react-router';
import { CheckCircle, ArrowRight, Home as HomeIcon, Wrench, HardHat, Hammer } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const heroImage = 'https://images.unsplash.com/photo-1694521787799-ad4ad241cb39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjBidWlsZGluZyUyMHNpdGUlMjBzYWZldHklMjBoZWxtZXR8ZW58MXx8fHwxNzc3Mjk1OTAxfDA&ixlib=rb-4.1.0&q=80&w=1080';
const newHomeImage = 'https://images.unsplash.com/photo-1769780510442-60d4d6391a91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXNpZGVudGlhbCUyMGhvdXNlJTIwZnJvbnQlMjBleHRlcmlvcnxlbnwxfHx8fDE3NzcyOTkwNjl8MA&ixlib=rb-4.1.0&q=80&w=1080';
const renovationImage = 'https://images.unsplash.com/photo-1761353854322-96e6ab127da4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwYmF0aHJvb20lMjByZW5vdmF0aW9uJTIwbW9kZXJuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzc3Mjk1ODk0fDA&ixlib=rb-4.1.0&q=80&w=1080';
const civilImage = 'https://images.unsplash.com/photo-1768053823555-b75cd4ead6c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXZpbCUyMGVhcnRod29ya3MlMjBleGNhdmF0aW9uJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc3NzI5NTg5NHww&ixlib=rb-4.1.0&q=80&w=1080';
const maintenanceImage = 'https://images.unsplash.com/photo-1761637822930-fb1c1a3df94d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9wZXJ0eSUyMGxhbmRzY2FwaW5nJTIwZ2FyZGVuJTIwbWFpbnRlbmFuY2V8ZW58MXx8fHwxNzc3Mjk1ODk0fDA&ixlib=rb-4.1.0&q=80&w=1080';

const serviceCategories = [
  {
    id: 'housing',
    icon: <HomeIcon className="h-8 w-8" />,
    title: 'Housing',
    tagline: "Build the home you've always dreamed of",
    description:
      'From the first slab to the final coat of paint, AJSV Construction delivers quality new homes across Perth and Western Australia. We manage the entire build process, ensuring every detail meets your expectations.',
    image: newHomeImage,
    items: [
      { label: 'New Home Construction', desc: 'Full-service new builds from design through to handover.' },
      { label: 'Custom Builds', desc: 'Tailored homes designed and built around your lifestyle and budget.' },
      { label: 'Grouped Dwellings', desc: 'Multi-unit residential developments delivered on time and on spec.' },
    ],
  },
  {
    id: 'renovations',
    icon: <Wrench className="h-8 w-8" />,
    title: 'Renovations & Extensions',
    tagline: 'Transform your existing space',
    description:
      'Breathe new life into your home with our comprehensive renovation services. Whether it\'s a single room or a full-home transformation, our team works with minimal disruption and maximum quality.',
    image: renovationImage,
    items: [
      { label: 'Kitchen & Bathroom Renovations', desc: 'Modernise your most-used spaces with expert craftsmanship.' },
      { label: 'Extensions', desc: 'Add space and value — from granny flats to second-storey additions.' },
      { label: 'Sheds & Carports', desc: 'Functional and durable outdoor structures built to last.' },
      { label: 'Full Home Upgrades', desc: 'Complete home transformations inside and out.' },
    ],
  },
  {
    id: 'civil',
    icon: <HardHat className="h-8 w-8" />,
    title: 'Civil Works',
    tagline: 'Solid foundations for every project',
    description:
      'Our civil works team brings years of experience to site preparation, earthworks, and infrastructure projects. We have the equipment and expertise to get the groundwork done right.',
    image: civilImage,
    items: [
      { label: 'Site Preparation', desc: 'Land clearing, levelling and preparation for construction.' },
      { label: 'Earthworks', desc: 'Excavation, cut and fill, and bulk earthmoving services.' },
      { label: 'Concrete Work', desc: 'Slabs, driveways, pathways, retaining walls and more.' },
      { label: 'Small Infrastructure Projects', desc: 'Drainage, kerbing and other civil infrastructure works.' },
    ],
  },
  {
    id: 'maintenance',
    icon: <Hammer className="h-8 w-8" />,
    title: 'Property Maintenance',
    tagline: 'Keep your property in peak condition',
    description:
      'Protect your investment with regular maintenance and prompt repairs. Our property maintenance team covers everything from landscaping and plumbing to specialised repairs after storm damage.',
    image: maintenanceImage,
    items: [
      { label: 'Landscaping', desc: 'Garden design, lawns, paving and outdoor living spaces.' },
      { label: 'Electrical & Plumbing', desc: 'Licensed trades for all electrical and plumbing needs.' },
      { label: 'General Handyman Repairs', desc: 'Fast, reliable repairs for everyday property maintenance.' },
      { label: 'Specialised Maintenance', desc: 'Re-roofing, weather damage repairs, roof & gutter works.' },
    ],
  },
];

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 overflow-hidden">
        <ImageWithFallback
          src={heroImage}
          alt="AJSV Construction services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0f1e40]/80" />
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-[#e07320] text-xs tracking-widest" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
              WHAT WE OFFER
            </span>
            <h1
              className="text-4xl md:text-5xl text-white mt-2"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900 }}
            >
              Our Services
            </h1>
            <p className="text-gray-300 mt-2" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              Housing · Renovation · Civil Works · Property Maintenance
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        {serviceCategories.map((cat, index) => (
          <div
            key={cat.id}
            id={cat.id}
            className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}
          >
            {/* Image */}
            <div className={`relative ${index % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-[380px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e40]/60 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <div className="bg-[#e07320] text-white p-3 rounded-lg inline-flex">
                    {cat.icon}
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className={index % 2 !== 0 ? 'lg:col-start-1 lg:row-start-1' : ''}>
              <span className="text-[#e07320] text-xs tracking-widest" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                {cat.tagline.toUpperCase()}
              </span>
              <h2
                className="text-3xl md:text-4xl text-[#1a3468] mt-2 mb-4"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800 }}
              >
                {cat.title}
              </h2>
              <p className="text-gray-600 mb-7 leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                {cat.description}
              </p>
              <ul className="space-y-4 mb-8">
                {cat.items.map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#e07320] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-[#1a3468] text-sm" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                        {item.label}
                      </p>
                      <p className="text-gray-500 text-sm" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#e07320] text-white px-7 py-3 rounded hover:bg-[#c9661a] transition-colors"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
              >
                Get a Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-[#1a3468] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl text-white mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800 }}
          >
            Not sure what you need?
          </h2>
          <p className="text-gray-300 mb-8 text-lg" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            Talk to our team and we'll help you find the right solution for your project.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#e07320] text-white px-8 py-4 rounded hover:bg-[#c9661a] transition-colors"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
          >
            Contact Us Today <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}