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
