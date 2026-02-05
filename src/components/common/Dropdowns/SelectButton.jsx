export default function SelectPopup({
  items = [],
  onSelect,
  width = "140px",
  maxHeight = "200px",
}) {
  return (
    <div
      className="
        absolute
        right-0
        mt-2
        z-50

        rounded-[10px]
        overflow-hidden

        backdrop-blur-md
        shadow-xl
        border border-white/10
      "
      style={{
        width,
        maxHeight,
        background: "rgba(67, 87, 122, 0.95)", // #43557A
      }}
    >
      <ul className="flex flex-col py-1">

        {items.map((item) => (
          <li
            key={item}
            onClick={() => onSelect(item)}
            className="
              px-4
              py-2
              text-sm
              text-white/90
              cursor-pointer
              transition

              hover:bg-white/10
            "
          >
            {item}
          </li>
        ))}

      </ul>
    </div>
  );
}
