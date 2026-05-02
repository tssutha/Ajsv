import logoImg from '../../imports/WhatsApp_Image_2026-05-02_at_7.37.23_AM.jpeg';

interface AJSVLogoProps {
  variant?: 'dark' | 'light';
  className?: string;
}

export function AJSVLogo({ variant = 'dark', className = '' }: AJSVLogoProps) {
  const textColor = variant === 'light' ? '#ffffff' : '#1a3468';
  const subTextColor = variant === 'light' ? 'rgba(255,255,255,0.85)' : '#6b7280';

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {variant === 'light' ? (
        <div className="bg-white rounded-md px-1 py-0.5 inline-flex items-center overflow-hidden">
          <img
            src={logoImg}
            alt="AJSV Construction Pty Ltd"
            style={{ height: '52px', width: 'auto', display: 'block', objectFit: 'contain', transform: 'scale(1.28)', transformOrigin: 'center center' }}
          />
        </div>
      ) : (
        <div style={{ overflow: 'hidden', height: '52px', display: 'flex', alignItems: 'center' }}>
          <img
            src={logoImg}
            alt="AJSV Construction Pty Ltd"
            style={{ height: '52px', width: 'auto', display: 'block', objectFit: 'contain', transform: 'scale(1.28)', transformOrigin: 'center center' }}
          />
        </div>
      )}
      {/* Company name text */}
      <div className="flex flex-col leading-tight">
        <span
          className="text-xl tracking-widest"
          style={{ color: textColor, fontFamily: 'Montserrat, sans-serif', fontWeight: 900, letterSpacing: '0.15em' }}
        >
          AJSV
        </span>
        <span
          className="text-[9px] tracking-wider"
          style={{ color: subTextColor, fontFamily: 'Montserrat, sans-serif', fontWeight: 600, letterSpacing: '0.2em' }}
        >
          CONSTRUCTION PTY LTD
        </span>
      </div>
    </div>
  );
}