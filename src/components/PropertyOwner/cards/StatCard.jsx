export default function StatCard({ title, value, Icon }) {
  return (
    <div
      className="
        flex
        items-center
        gap-4
        px-6
        rounded-[9px]
        backdrop-blur-md
      "
      style={{
        width: "262.5px",
        height: "107px",
        background: "rgba(41,53,77,0.65)",
        boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
        border: "1px solid rgba(255,255,255,0.15)",
      }}
    >
      {/* ICON */}
      <div
        className="
          w-12
          h-12
          rounded-full
          bg-[#1E4E8C]
          flex
          items-center
          justify-center
        "
      >
        <Icon size={22} className="text-[#4FD1FF]" />
      </div>

      {/* TEXT */}
      <div>
        <p className="text-sm text-white/80">
          {title}
        </p>

        <p className="text-2xl font-semibold text-white leading-tight">
          {value}
        </p>
      </div>
    </div>
  );
}
