import { Phone, MessageCircle } from 'lucide-react';

export function FloatingCTA() {
  const whatsappNumber = '61401121266';
  const whatsappMessage = encodeURIComponent('Hi AJSV Construction! I would like to get a quote for my project.');

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:bg-[#1ebe5a] transition-all hover:scale-105 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
        <span
          className="text-sm hidden sm:block"
          style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
        >
          WhatsApp
        </span>
      </a>

      {/* Call Button */}
      <a
        href="tel:0401121266"
        className="flex items-center gap-2 bg-[#e07320] text-white px-4 py-3 rounded-full shadow-lg hover:bg-[#c9661a] transition-all hover:scale-105"
        aria-label="Call Now"
      >
        <Phone className="h-5 w-5" />
        <span
          className="text-sm hidden sm:block"
          style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
        >
          Call Now
        </span>
      </a>
    </div>
  );
}