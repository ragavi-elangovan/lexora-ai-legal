export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="blob"
        style={{
          width: 600, height: 600, top: -200, left: -150,
          background: "radial-gradient(circle, oklch(0.55 0.22 250 / 0.5), transparent 70%)",
        }}
      />
      <div
        className="blob"
        style={{
          width: 700, height: 700, top: "30%", right: -250,
          background: "radial-gradient(circle, oklch(0.55 0.24 270 / 0.4), transparent 70%)",
          animationDelay: "-6s",
        }}
      />
      <div
        className="blob"
        style={{
          width: 500, height: 500, bottom: -150, left: "30%",
          background: "radial-gradient(circle, oklch(0.6 0.2 230 / 0.35), transparent 70%)",
          animationDelay: "-12s",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(oklch(1 0 0) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
}
