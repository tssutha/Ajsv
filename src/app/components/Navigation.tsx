import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, Phone } from 'lucide-react';
import { AJSVLogo } from './AJSVLogo';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 py-3">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <AJSVLogo variant="dark" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm tracking-wide transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-[#e07320] border-b-2 border-[#e07320] pb-0.5'
                    : 'text-[#1a3468] hover:text-[#e07320]'
                }`}
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Phone */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:0400000000"
              className="flex items-center gap-2 text-[#1a3468] hover:text-[#e07320] transition-colors"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm">0400 000 000</span>
            </a>
            <Link
              to="/contact"
              className="bg-[#e07320] text-white px-5 py-2.5 rounded text-sm hover:bg-[#c9661a] transition-colors"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
            >
              Free Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-[#1a3468] p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-3 px-3 rounded text-sm transition-colors ${
                  location.pathname === link.path
                    ? 'bg-[#1a3468] text-white'
                    : 'text-[#1a3468] hover:bg-gray-50'
                }`}
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 space-y-2">
              <a
                href="tel:0400000000"
                className="flex items-center gap-2 py-3 px-3 text-[#1a3468] text-sm"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
              >
                <Phone className="h-4 w-4 text-[#e07320]" />
                Call: 0400 000 000
              </a>
              <Link
                to="/contact"
                className="block text-center bg-[#e07320] text-white py-3 px-4 rounded text-sm hover:bg-[#c9661a] transition-colors"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
