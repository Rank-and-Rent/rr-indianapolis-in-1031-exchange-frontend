export default function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 32 32" 
      className={`w-8 h-8 text-[#C4956A] ${className}`}
      fill="currentColor"
    >
      {/* Center 4-point star */}
      <path d="M16 6L17.5 14L26 16L17.5 18L16 26L14.5 18L6 16L14.5 14L16 6Z" />
      {/* Corner dots */}
      <circle cx="8" cy="8" r="1.5" />
      <circle cx="24" cy="8" r="1.5" />
      <circle cx="8" cy="24" r="1.5" />
      <circle cx="24" cy="24" r="1.5" />
    </svg>
  );
}
