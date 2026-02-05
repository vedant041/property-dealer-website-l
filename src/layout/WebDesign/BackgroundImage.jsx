export default function BackgroundImage({ children }) {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/Backgroundimg.png')",
      }}
    >
      {/* DARK OVERLAY (Like Figma) */}
      <div className="absolute inset-0 bg-[#07182F]/80" />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 min-h-screen w-full backdrop-blur-[1px]">

        {children}

      </div>
    </div>
  );
}
