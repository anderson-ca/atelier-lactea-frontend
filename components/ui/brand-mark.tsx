type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className = '' }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.2" opacity="0.55" />
      <path d="M16 28C16 22.2 19.6 18 24 18C28.4 18 32 22.2 32 28" stroke="currentColor" strokeWidth="1.2" opacity="0.65" />
      <circle cx="24" cy="20.5" r="2.5" fill="currentColor" opacity="0.65" />
      <circle cx="24" cy="28.5" r="2.1" fill="currentColor" opacity="0.45" />
    </svg>
  );
}
