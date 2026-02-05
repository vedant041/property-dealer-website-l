export default function Toast({ show, message, onClose }) {
  if (!show) return null;

  return (
    <div
      className="
        fixed top-5 right-5 z-50
        min-w-[340px]
        px-4 py-3 rounded-xl shadow-xl

        bg-gradient-to-r
        from-[#0f766e]/90
        to-[#164e63]/90

        backdrop-blur-md
        border border-white/20

        text-white text-sm font-medium

        flex justify-between items-center gap-3

        animate-slideIn
      "
    >
      <span>{message}</span>

      <button
        onClick={onClose}
        className="text-white/70 hover:text-white"
      >
        ✕
      </button>
    </div>
  );
}
