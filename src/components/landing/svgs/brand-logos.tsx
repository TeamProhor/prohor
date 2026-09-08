import React from "react";

export function IntelLogo({ className = "h-[20px] fill-current text-white/70" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 40" className={className} fill="currentColor">
      <text x="0" y="28" fontFamily="inherit" fontSize="26" fontWeight="bold" letterSpacing="-1">intel</text>
    </svg>
  );
}

export function OracleLogo({ className = "h-[20px] fill-current text-white/70" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 40" className={className} fill="currentColor">
      <text x="0" y="28" fontFamily="inherit" fontSize="24" fontWeight="bold" letterSpacing="1">ORACLE</text>
    </svg>
  );
}

export function GoFundMeLogo({ className = "h-[20px] fill-current text-white/70" }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 40" className={className} fill="currentColor">
      <text x="0" y="28" fontFamily="inherit" fontSize="22" fontWeight="600" letterSpacing="-0.5">gofundme</text>
    </svg>
  );
}

export function NutanixLogo({ className = "h-[20px] fill-current text-white/70" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 40" className={className} fill="currentColor">
      <text x="0" y="28" fontFamily="inherit" fontSize="22" fontWeight="700" letterSpacing="1">NUTANIX</text>
    </svg>
  );
}

export function FigmaLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 38 57" className={className} fill="none">
      <path d="M19 28.5C19 23.3 23.3 19 28.5 19C33.7 19 38 23.3 38 28.5C38 33.7 33.7 38 28.5 38C23.3 38 19 33.7 19 28.5Z" fill="#1ABCFE" />
      <path d="M0 47.5C0 42.3 4.3 38 9.5 38H19V47.5C19 52.7 14.7 57 9.5 57C4.3 57 0 52.7 0 47.5Z" fill="#0ACF83" />
      <path d="M19 0V19H28.5C33.7 19 38 14.7 38 9.5C38 4.3 33.7 0 28.5 0H19Z" fill="#FF7262" />
      <path d="M0 9.5C0 14.7 4.3 19 9.5 19H19V0H9.5C4.3 0 0 4.3 0 9.5Z" fill="#F24E1E" />
      <path d="M0 28.5C0 33.7 4.3 38 9.5 38H19V19H9.5C4.3 19 0 23.3 0 28.5Z" fill="#A259FF" />
    </svg>
  );
}

export function FramerLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" fill="#0055FF" />
    </svg>
  );
}

export function WebflowLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#146EF5">
      <path d="M17.472 6.947c-2.316.096-3.83 1.488-4.755 3.097V6.947H8.502v5.992c-.89-1.258-2.073-2.67-4.148-2.67H0l3.854 9.684h4.48l1.458-3.666 1.458 3.666h4.48L24 6.947h-6.528z" />
    </svg>
  );
}

export function UpsideLogo({ className = "h-[20px] fill-current text-white/70" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 40" className={className} fill="currentColor">
      <text x="0" y="28" fontFamily="inherit" fontSize="22" fontWeight="700" letterSpacing="0.5">UPSIDE</text>
    </svg>
  );
}
