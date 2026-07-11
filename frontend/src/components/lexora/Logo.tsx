export function LexoraLogo({ size = 32 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className="grid place-items-center rounded-xl glow-blue"
        style={{
          width: size,
          height: size,
          background: "linear-gradient(135deg, oklch(0.7 0.2 250), oklch(0.55 0.22 270))",
        }}
      >
        <svg width={size * 0.55} height={size * 0.55} viewBox="0 0 24 24" fill="none">
          <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M12 7v10M8 9.5l8 5M16 9.5l-8 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.85"/>
        </svg>
      </div>
      <span className="font-display text-lg font-semibold tracking-tight">Lexora AI</span>
    </div>
  );
}
