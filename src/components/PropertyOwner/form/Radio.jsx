export default function Radio({ label, name, value, onChange, options }) {
  return (
    <div className="flex flex-col gap-1">

      <span className="text-sm text-white/70">
        {label}
      </span>

      <div className="flex gap-3 text-sm">

        {options.map((op) => (
          <label key={op} className="flex items-center gap-1">

            <input
              type="radio"
              name={name}
              value={op}
              checked={value === op}
              onChange={onChange}
            />

            {op}

          </label>
        ))}

      </div>

    </div>
  );
}
