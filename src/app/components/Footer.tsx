import { Link } from 'react-router';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { AJSVLogo } from './AJSVLogo';

export function Footer() {
  return (
    <footer className="bg-[#0f1e40] text-white">
      {/* Top CTA band */}
      <div className="bg-[#e07320] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white text-lg" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
              Ready to start your project?
            </p>
            <p className="text-white/85 text-sm" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              Contact us today for a free, no-obligation quote.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="tel:0400000000"
              className="bg-white text-[#e07320] px-6 py-2.5 rounded text-sm hover:bg-gray-100 transition-colors"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
            >
              Call Now
            </a>
            <Link
              to="/contact"
              className="bg-[#1a3468] text-white px-6 py-2.5 rounded text-sm hover:bg-[#243d7a] transition-colors"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-1">
              <AJSVLogo variant="light" />
              <p className="mt-4 text-gray-400 text-sm leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                A family-owned construction company in Perth, WA. Built on trust, quality, and a commitment to every client.
              </p>
              <p className="mt-3 text-gray-500 text-xs" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                Housing · Renovation · Civil Works · Property Maintenance
              </p>
              <div className="flex gap-3 mt-5">
                <a href="#" className="bg-[#1a3468] hover:bg-[#e07320] p-2 rounded transition-colors">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="#" className="bg-[#1a3468] hover:bg-[#e07320] p-2 rounded transition-colors">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="#" className="bg-[#1a3468] hover:bg-[#e07320] p-2 rounded transition-colors">
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4
                className="text-sm tracking-wider mb-4 text-[#e07320]"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
              >
                SERVICES
              </h4>
              <ul className="space-y-2">
                {['Housing & New Builds', 'Renovations & Extensions', 'Civil Works', 'Property Maintenance', 'Free Estimates'].map((item) => (
                  <li key={item}>
                    <Link
                      to="/services"
                      className="text-gray-400 hover:text-[#e07320] text-sm transition-colors"
                      style={{ fontFamily: 'Open Sans, sans-serif' }}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4
                className="text-sm tracking-wider mb-4 text-[#e07320]"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
              >
                COMPANY
              </h4>
              <ul className="space-y-2">
                {[
                  { label: 'About Us', path: '/about' },
                  { label: 'Our Projects', path: '/projects' },
                  { label: 'Testimonials', path: '/about' },
                  { label: 'Contact Us', path: '/contact' },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.path}
                      className="text-gray-400 hover:text-[#e07320] text-sm transition-colors"
                      style={{ fontFamily: 'Open Sans, sans-serif' }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4
                className="text-sm tracking-wider mb-4 text-[#e07320]"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
              >
                CONTACT
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Phone className="h-4 w-4 text-[#e07320] mt-0.5 flex-shrink-0" />
                  <div>
                    <a href="tel:0400000000" className="text-gray-400 hover:text-white text-sm transition-colors" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                      0400 000 000
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-4 w-4 text-[#e07320] mt-0.5 flex-shrink-0" />
                  <div>
                    <a href="mailto:info@ajsvconstruction.com.au" className="text-gray-400 hover:text-white text-sm transition-colors" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                      info@ajsvconstruction.com.au
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-[#e07320] mt-0.5 flex-shrink-0" />
                  <p className="text-gray-400 text-sm" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    Perth, Western Australia
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-6 border-t border-[#1a3468] flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-gray-500 text-xs" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              © 2026 AJSV Construction Pty Ltd. All rights reserved. ABN: XX XXX XXX XXX
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-gray-400 text-xs transition-colors" style={{ fontFamily: 'Open Sans, sans-serif' }}>Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-xs transition-colors" style={{ fontFamily: 'Open Sans, sans-serif' }}>Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
