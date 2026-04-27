import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight, ZoomIn } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const heroImage = 'https://images.unsplash.com/photo-1686358244570-631340cbbd22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMGNvbnN0cnVjdGlvbiUyMHNpdGUlMjBBdXN0cmFsaWElMjBmcmFtZXxlbnwxfHx8fDE3NzcyOTU4OTN8MA&ixlib=rb-4.1.0&q=80&w=1080';

const projects = [
  {
    id: 1,
    title: 'New Family Home',
    location: 'Joondalup, WA',
    category: 'completed',
    type: 'Housing',
    image: 'https://images.unsplash.com/photo-1712251938299-621f0d2bfcd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXclMjBob21lJTIwY29uc3RydWN0aW9uJTIwY3VzdG9tJTIwYnVpbGR8ZW58MXx8fHwxNzc3Mjk1ODkzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'A complete 4-bedroom family home built from the ground up, featuring open-plan living, high ceilings and a double garage.',
  },
  {
    id: 2,
    title: 'Kitchen & Living Renovation',
    location: 'Subiaco, WA',
    category: 'completed',
    type: 'Renovation',
    image: 'https://images.unsplash.com/photo-1761353854322-96e6ab127da4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwYmF0aHJvb20lMjByZW5vdmF0aW9uJTIwbW9kZXJuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzc3Mjk1ODk0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Full kitchen and open-plan living renovation with new flooring, cabinetry, and modern finishes throughout.',
  },
  {
    id: 3,
    title: 'Site Earthworks & Prep',
    location: 'Mandurah, WA',
    category: 'completed',
    type: 'Civil Works',
    image: 'https://images.unsplash.com/photo-1768053823555-b75cd4ead6c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXZpbCUyMGVhcnRod29ya3MlMjBleGNhdmF0aW9uJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc3NzI5NTg5NHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Site preparation, bulk earthworks and drainage works completed for a residential duplex development.',
  },
  {
    id: 4,
    title: 'Garden & Landscaping',
    location: 'Fremantle, WA',
    category: 'completed',
    type: 'Property Maintenance',
    image: 'https://images.unsplash.com/photo-1761637822930-fb1c1a3df94d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9wZXJ0eSUyMGxhbmRzY2FwaW5nJTIwZ2FyZGVuJTIwbWFpbnRlbmFuY2V8ZW58MXx8fHwxNzc3Mjk1ODk0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Complete backyard landscaping including paving, lawn installation, retaining walls, and garden beds.',
  },
  {
    id: 5,
    title: 'Concrete Slab & Driveway',
    location: 'Rockingham, WA',
    category: 'completed',
    type: 'Civil Works',
    image: 'https://images.unsplash.com/photo-1591638436214-1efb2036e616?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMHNsYWIlMjBmb3VuZGF0aW9uJTIwd29ya3xlbnwxfHx8fDE3NzcyOTU5MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Reinforced concrete slab, exposed aggregate driveway and path works for a new residential property.',
  },
  {
    id: 6,
    title: 'Roof Repair & Gutter Works',
    location: 'Armadale, WA',
    category: 'completed',
    type: 'Property Maintenance',
    image: 'https://images.unsplash.com/photo-1642388513809-f0adf88b8cc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb29mJTIwZ3V0dGVycyUyMHJlcGFpciUyMHNwZWNpYWxpc3QlMjB3b3JrfGVufDF8fHx8MTc3NzI5NTkwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Emergency storm damage repairs including roof patching, full gutter replacement and downpipe works.',
  },
  {
    id: 7,
    title: 'Luxury Interior Fitout',
    location: 'Cottesloe, WA',
    category: 'completed',
    type: 'Renovation',
    image: 'https://images.unsplash.com/photo-1774301266018-57c0b190ed43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwaW50ZXJpb3IlMjByZW5vdmF0aW9uJTIwY29tcGxldGVkfGVufDF8fHx8MTc3NzI5NTkwMXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'High-end interior renovation featuring custom joinery, feature walls, and full bathroom suite upgrade.',
  },
  {
    id: 8,
    title: 'New Home — In Progress',
    location: 'Baldivis, WA',
    category: 'progress',
    type: 'Housing',
    image: 'https://images.unsplash.com/photo-1686358244570-631340cbbd22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMGNvbnN0cnVjdGlvbiUyMHNpdGUlMjBBdXN0cmFsaWElMjBmcmFtZXxlbnwxfHx8fDE3NzcyOTU4OTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Currently under construction: a 3-bedroom + study custom home with alfresco entertaining area and pool prep.',
  },
  {
    id: 9,
    title: 'Site Preparation — In Progress',
    location: 'Ellenbrook, WA',
    category: 'progress',
    type: 'Civil Works',
    image: 'https://images.unsplash.com/photo-1768053823555-b75cd4ead6c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXZpbCUyMGVhcnRod29ya3MlMjBleGNhdmF0aW9uJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc3NzI5NTg5NHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Ongoing earthworks and drainage works for a grouped dwelling development — site is currently being levelled.',
  },
];

const tabs = [
  { key: 'all', label: 'All Projects' },
  { key: 'completed', label: 'Completed' },
  { key: 'progress', label: 'In Progress' },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState('all');
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const filtered = activeTab === 'all' ? projects : projects.filter((p) => p.category === activeTab);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 overflow-hidden">
        <ImageWithFallback
          src={heroImage}
          alt="AJSV Construction projects"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0f1e40]/80" />
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-[#e07320] text-xs tracking-widest" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
              OUR WORK
            </span>
            <h1
              className="text-4xl md:text-5xl text-white mt-2"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900 }}
            >
              Projects & Gallery
            </h1>
            <p className="text-gray-300 mt-2" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              Completed work, work in progress, and real results for real clients.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs + Gallery */}
      <section className="py-16 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab nav */}
          <div className="flex gap-2 mb-10 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-2.5 rounded text-sm transition-colors ${
                  activeTab === tab.key
                    ? 'bg-[#e07320] text-white'
                    : 'bg-white border border-gray-200 text-[#1a3468] hover:border-[#e07320] hover:text-[#e07320]'
                }`}
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <div
                key={project.id}
                className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => setLightboxImg(project.image)}
              >
                <div className="relative overflow-hidden h-56">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#0f1e40]/0 group-hover:bg-[#0f1e40]/40 transition-colors flex items-center justify-center">
                    <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className="bg-[#e07320] text-white text-xs px-3 py-1 rounded-full"
                      style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                    >
                      {project.type}
                    </span>
                  </div>
                  {project.category === 'progress' && (
                    <div className="absolute top-3 right-3">
                      <span
                        className="bg-[#1a3468] text-white text-xs px-3 py-1 rounded-full"
                        style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                      >
                        In Progress
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3
                    className="text-[#1a3468] mb-1"
                    style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-[#e07320] text-xs mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                    📍 {project.location}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImg && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImg(null)}
        >
          <div className="relative max-w-4xl w-full">
            <img
              src={lightboxImg}
              alt="Project"
              className="w-full rounded-xl max-h-[80vh] object-contain"
            />
            <button
              className="absolute top-3 right-3 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors"
              onClick={() => setLightboxImg(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="bg-[#1a3468] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl text-white mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800 }}
          >
            Have a project in mind?
          </h2>
          <p className="text-gray-300 mb-8" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            We'd love to add your project to our gallery. Get in touch for a free quote.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#e07320] text-white px-8 py-4 rounded hover:bg-[#c9661a] transition-colors"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
          >
            Request a Free Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
