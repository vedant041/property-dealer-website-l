export default function Select({ label, options, ...props }) {
  return (
    <div className="flex flex-col gap-1">

      <span className="text-sm text-white/70">
        {label}
      </span>

      <select
        {...props}
        className="
          bg-white/10 border border-white/20
          rounded-md px-3 py-2
          text-sm outline-none
        "
      >

        <option value="">
          Select
        </option>

        {options.map((op) => (
          <option key={op} value={op}>
            {op}
          </option>
        ))}

      </select>

    </div>
  );
}
