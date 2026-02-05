export default function DashboardChartCard({ children }) {
  return (
    <div
      className="
        relative
        rounded-[9px]
        border
        border-white/30
        overflow-hidden
      "
      style={{
        width: "1122px",
        height: "631px",
        background: "rgba(41,53,77,0.45)", // #29354D @45%
        backdropFilter: "blur(2px)",
      }}
    >
      {children}
    </div>
  );
}