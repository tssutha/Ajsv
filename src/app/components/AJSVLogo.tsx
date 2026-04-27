interface AJSVLogoProps {
  variant?: 'dark' | 'light';
  className?: string;
}

export function AJSVLogo({ variant = 'dark', className = '' }: AJSVLogoProps) {
  const isLight = variant === 'light';
  const textColor = isLight ? '#ffffff' : '#1a3468';
  const accentColor = '#e07320';
  const houseColor = isLight ? '#ffffff' : '#1a3468';

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Logo mark */}
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background circle */}
        <circle cx="24" cy="24" r="24" fill={isLight ? 'rgba(255,255,255,0.15)' : '#1a3468'} />
        {/* House body */}
        <path
          d="M14 28V38H20V32H28V38H34V28L24 18L14 28Z"
          fill={isLight ? '#ffffff' : '#ffffff'}
          stroke={isLight ? '#ffffff' : '#ffffff'}
          strokeWidth="0.5"
        />
        {/* Roof peak */}
        <path
          d="M10 28L24 14L38 28"
          stroke={accentColor}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Door */}
        <rect x="21" y="31" width="6" height="7" rx="1" fill={isLight ? '#1a3468' : '#1a3468'} />
        {/* Window */}
        <rect x="16" y="27" width="5" height="4" rx="0.5" fill={isLight ? '#1a3468' : '#1a3468'} />
        <rect x="27" y="27" width="5" height="4" rx="0.5" fill={isLight ? '#1a3468' : '#1a3468'} />
        {/* Orange swoosh accent */}
        <path
          d="M8 36 Q20 8 40 18"
          stroke={accentColor}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.8"
        />
      </svg>
      {/* Text */}
      <div className="flex flex-col leading-tight">
        <span
          className="text-xl tracking-widest"
          style={{ color: textColor, fontFamily: 'Montserrat, sans-serif', fontWeight: 900, letterSpacing: '0.15em' }}
        >
          AJSV
        </span>
        <span
          className="text-[9px] tracking-wider"
          style={{ color: isLight ? 'rgba(255,255,255,0.85)' : '#6b7280', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, letterSpacing: '0.2em' }}
        >
          CONSTRUCTION PTY LTD
        </span>
      </div>
    </div>
  );
}
