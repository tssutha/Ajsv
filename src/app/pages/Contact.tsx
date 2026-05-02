import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const heroImage = 'https://images.unsplash.com/photo-1694521787799-ad4ad241cb39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjBidWlsZGluZyUyMHNpdGUlMjBzYWZldHklMjBoZWxtZXR8ZW58MXx8fHwxNzc3Mjk1OTAxfDA&ixlib=rb-4.1.0&q=80&w=1080';

const contactInfo = [
  {
    icon: <Phone className="h-6 w-6 text-[#e07320]" />,
    title: 'Phone',
    lines: ['0401 121 266'],
    link: 'tel:0401121266',
  },
  {
    icon: <MessageCircle className="h-6 w-6 text-[#e07320]" />,
    title: 'WhatsApp',
    lines: ['0401 121 266'],
    link: 'https://wa.me/61401121266',
  },
  {
    icon: <Mail className="h-6 w-6 text-[#e07320]" />,
    title: 'Email',
    lines: ['info@ajsvconstruction.com.au'],
    link: 'mailto:info@ajsvconstruction.com.au',
  },
  {
    icon: <MapPin className="h-6 w-6 text-[#e07320]" />,
    title: 'Location',
    lines: ['Perth, Western Australia'],
    link: null,
  },
  {
    icon: <Clock className="h-6 w-6 text-[#e07320]" />,
    title: 'Business Hours',
    lines: ['Mon – Fri: 7:00 AM – 5:30 PM', 'Sat: 8:00 AM – 12:00 PM'],
    link: null,
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Housing – New Home',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/tssutha@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
          _subject: `New Quote Request – ${form.service} – ${form.name}`,
          _captcha: 'false',
          _template: 'table',
        }),
      });

      const data = await response.json();

      if (data.success === 'true' || data.success === true) {
        setSubmitted(true);
        setForm({ name: '', email: '', phone: '', service: 'Housing – New Home', message: '' });
      } else {
        setError('Something went wrong. Please try again or call us directly.');
      }
    } catch {
      setError('Unable to send your message. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 overflow-hidden">
        <ImageWithFallback
          src={heroImage}
          alt="Contact AJSV Construction"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0f1e40]/80" />
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-[#e07320] text-xs tracking-widest" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
              GET IN TOUCH
            </span>
            <h1
              className="text-4xl md:text-5xl text-white mt-2"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900 }}
            >
              Contact Us
            </h1>
            <p className="text-gray-300 mt-2" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              Perth, Western Australia · We'd love to hear about your project.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <span className="text-[#e07320] text-xs tracking-widest" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                REACH US
              </span>
              <h2
                className="text-3xl text-[#1a3468] mt-2 mb-2"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800 }}
              >
                Let's Talk About Your Project
              </h2>
              <p className="text-gray-500 mb-8" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                Whether it's a small repair or a full new build — get in touch and we'll discuss how we can help.
              </p>

              <div className="space-y-5 mb-10">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="bg-[#1a3468]/5 w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p
                        className="text-[#1a3468] text-sm mb-0.5"
                        style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                      >
                        {item.title}
                      </p>
                      {item.lines.map((line) => (
                        <p key={line}>
                          {item.link ? (
                            <a
                              href={item.link}
                              className="text-gray-500 text-sm hover:text-[#e07320] transition-colors"
                              style={{ fontFamily: 'Open Sans, sans-serif' }}
                              target={item.link.startsWith('https') ? '_blank' : undefined}
                              rel={item.link.startsWith('https') ? 'noopener noreferrer' : undefined}
                            >
                              {line}
                            </a>
                          ) : (
                            <span className="text-gray-500 text-sm" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                              {line}
                            </span>
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick action buttons */}
              <div className="space-y-3">
                <a
                  href="tel:0401121266"
                  className="flex items-center justify-center gap-2 bg-[#e07320] text-white py-3 px-6 rounded hover:bg-[#c9661a] transition-colors w-full"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                >
                  <Phone className="h-4 w-4" /> Call Now
                </a>
                <a
                  href="https://wa.me/61401121266?text=Hi%20AJSV%20Construction!%20I%20would%20like%20a%20quote."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 px-6 rounded hover:bg-[#1ebe5a] transition-colors w-full"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp Us
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="bg-green-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-10 w-10 text-green-500" />
                    </div>
                    <h3
                      className="text-2xl text-[#1a3468] mb-3"
                      style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800 }}
                    >
                      Message Sent!
                    </h3>
                    <p className="text-gray-500 mb-6" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                      Thank you for reaching out. Our team will get back to you within 1 business day.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-[#e07320] underline text-sm"
                      style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-7">
                      <h3
                        className="text-2xl text-[#1a3468]"
                        style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800 }}
                      >
                        Request a Free Quote
                      </h3>
                      <p className="text-gray-500 text-sm mt-1" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                        Fill in your details and we'll get back to you with a no-obligation quote.
                      </p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-xs tracking-wide text-[#1a3468] mb-1.5"
                            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                          >
                            FULL NAME *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            placeholder="John Smith"
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#e07320] focus:border-transparent outline-none bg-gray-50 text-sm"
                            style={{ fontFamily: 'Open Sans, sans-serif' }}
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-xs tracking-wide text-[#1a3468] mb-1.5"
                            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                          >
                            PHONE NUMBER *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="04XX XXX XXX"
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#e07320] focus:border-transparent outline-none bg-gray-50 text-sm"
                            style={{ fontFamily: 'Open Sans, sans-serif' }}
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs tracking-wide text-[#1a3468] mb-1.5"
                          style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                        >
                          EMAIL ADDRESS *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#e07320] focus:border-transparent outline-none bg-gray-50 text-sm"
                          style={{ fontFamily: 'Open Sans, sans-serif' }}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="service"
                          className="block text-xs tracking-wide text-[#1a3468] mb-1.5"
                          style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                        >
                          SERVICE REQUIRED *
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#e07320] focus:border-transparent outline-none bg-gray-50 text-sm"
                          style={{ fontFamily: 'Open Sans, sans-serif' }}
                        >
                          <option>Housing – New Home Construction</option>
                          <option>Housing – Custom Build</option>
                          <option>Housing – Grouped Dwelling</option>
                          <option>Renovation – Kitchen / Bathroom</option>
                          <option>Renovation – Extensions</option>
                          <option>Renovation – Sheds / Carports</option>
                          <option>Renovation – Full Home Upgrade</option>
                          <option>Civil Works – Site Preparation</option>
                          <option>Civil Works – Earthworks</option>
                          <option>Civil Works – Concrete Work</option>
                          <option>Civil Works – Infrastructure</option>
                          <option>Property Maintenance – Landscaping</option>
                          <option>Property Maintenance – Electrical / Plumbing</option>
                          <option>Property Maintenance – General Repairs</option>
                          <option>Property Maintenance – Roofing / Gutters</option>
                          <option>Free Estimate Only</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-xs tracking-wide text-[#1a3468] mb-1.5"
                          style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                        >
                          PROJECT DETAILS
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project — location, size, timeline, and any specific requirements..."
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#e07320] focus:border-transparent outline-none resize-none bg-gray-50 text-sm"
                          style={{ fontFamily: 'Open Sans, sans-serif' }}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#e07320] text-white py-4 rounded-lg hover:bg-[#c9661a] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                        style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                      >
                        {loading ? 'Sending...' : 'Request Free Quote'}
                      </button>
                      {error && (
                        <p className="text-red-500 text-sm text-center" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                          {error}
                        </p>
                      )}
                      <p className="text-gray-400 text-xs text-center" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                        We respond within 1 business day. No spam, ever.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}