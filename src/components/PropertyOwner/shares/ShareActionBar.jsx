import Button from "../ui/Button";

export default function ShareActionBar({ mode, onAction }) {
  return (
    <div
      className="
        flex items-center justify-between
        bg-[#1F3A5F]/40
        border border-white/10
        rounded-xl
        p-4
        mt-6
      "
    >
      <p className="text-sm text-slate-300">
        Please review the details before proceeding
      </p>

      <Button
        variant={mode === "buy" ? "warning" : "primary"}
        onClick={onAction}
      >
        {mode === "buy" ? "Confirm Buy" : "Confirm Sell"}
      </Button>
    </div>
  );
}
