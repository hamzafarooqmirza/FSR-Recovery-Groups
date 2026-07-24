export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.04 4C9.4 4 4 9.37 4 15.98c0 2.11.56 4.16 1.62 5.97L4 28l6.2-1.6a12.1 12.1 0 0 0 5.84 1.5h.01c6.64 0 12.04-5.37 12.04-11.98C28.09 9.37 22.68 4 16.04 4Zm0 21.9h-.01a9.9 9.9 0 0 1-5.07-1.39l-.36-.21-3.68.95.98-3.55-.24-.37a9.83 9.83 0 0 1-1.53-5.35c0-5.43 4.46-9.85 9.92-9.85 2.65 0 5.14 1.03 7.01 2.9a9.78 9.78 0 0 1 2.9 6.96c0 5.43-4.46 9.85-9.92 9.85Zm5.44-7.38c-.3-.15-1.76-.86-2.03-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.24-.45-2.37-1.44a8.86 8.86 0 0 1-1.63-2.01c-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.19-.24-.58-.49-.5-.67-.5-.17 0-.37-.02-.57-.02s-.52.07-.8.37c-.27.3-1.04 1.02-1.04 2.47s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.72.23 1.36.2 1.88.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

export function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className} aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.5 5.5c0-1.1.9-2 2-2h2.1c.5 0 .9.3 1 .8l.9 3.4c.1.4 0 .9-.4 1.2L7.8 10c1 2.4 2.9 4.3 5.3 5.3l1.1-1.3c.3-.3.7-.5 1.2-.4l3.4.9c.5.1.8.5.8 1V18c0 1.1-.9 2-2 2h-1C9.7 20 4 14.3 4 7V6.5"
      />
    </svg>
  );
}

export function MailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth={1.8} className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="m1.5 1.5 4.5 4.5 4.5-4.5" />
    </svg>
  );
}

export function MenuIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className} aria-hidden="true">
      <path strokeLinecap="round" d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

export function CloseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className} aria-hidden="true">
      <path strokeLinecap="round" d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}
