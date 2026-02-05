import { createPortal } from "react-dom";

export default function ConfirmModal({
  title,
  message,
  onCancel,
  onConfirm,
}) {
  return createPortal(

    <div className="fixed inset-0 z-[99999] flex items-center justify-center">

      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onCancel}
      />

      {/* MODAL */}
      <div
        className="
          relative
          w-[400px]
          p-6
          rounded-md
          bg-[#29354D]
          border border-white/30
          shadow-2xl
          text-center
          flex
          flex-col
          gap-3
        "
      >

        <h2 className="text-xl font-semibold text-white">
          {title}
        </h2>

        <p className="text-white/70 text-sm">
          {message}
        </p>

        <div className="flex justify-center gap-4 mt-4">

          <button
            onClick={onCancel}
            className="
              px-5 py-2
              rounded-md
              border border-white/30
              text-white/80
              hover:bg-white/10
            "
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="
              px-5 py-2
              rounded-md
              bg-[#00C2E8]
              text-white
              font-medium
              hover:bg-[#00b2d5]
            "
          >
            Log out
          </button>

        </div>

      </div>

    </div>,

    document.body
  );
}
