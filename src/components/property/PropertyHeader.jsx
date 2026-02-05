import ShareCounter from "../PropertyOwner/shares/ShareCounter";

export default function PropertyHeader({ mode = "buy" }) {
  return (
    <div
      className="
        w-[1312px]
        h-[216px]
        rounded-[9px]
        bg-[#29354D]/50
        backdrop-blur-md
        border-r border-white/30
        p-4
        flex items-center
        gap-[10px]
        text-white
      "
    >
      {/* IMAGE */}
      <div className="relative w-[240px] h-[168px] shrink-0">
        <img
          src="/2BHKimg1.png"
          className="w-full h-full object-cover rounded-md"
          alt="property"
        />

        {/* TAG */}
        <span className="
          absolute top-2 left-2
          bg-[#2ED3C6]
          text-[10px]
          px-2 py-[2px]
          rounded-full
          font-medium text-black
        ">
          Residential
        </span>
      </div>

      {/* CONTENT */}
      <div className="flex-1 pl-2">
        <p className="text-[13px] text-[#7BB3FF] leading-none mb-1">
          Bandra, Mumbai
        </p>

        <h2 className="text-[18px] font-semibold leading-tight">
          2 BHK Apartment
        </h2>

        <p className="text-[12px] text-white/70 mt-[2px]">
          Apartment &nbsp;|&nbsp; 1200 sq. ft
        </p>

        <p className="text-[22px] font-bold mt-2">
          ₹ 1.60 Cr
        </p>

        <div className="flex gap-6 text-[13px] text-white/80 mt-2">
          <span>₹ 1342 / share</span>
          <span>Expected return 49.08%</span>
        </div>

        <div className="mt-4">
          <ShareCounter />
        </div>
      </div>

      {/* FIGMA BUTTON */}
      <div className="flex items-center h-full pr-2">
        <button
          className="
            h-[36px]
            px-6
            rounded-md
            bg-[#1F3A5F]
            text-[14px]
            font-medium
            text-white
          "
        >
          {mode === "sell" ? "Sell Now" : "Buy Now"}
        </button>
      </div>
    </div>
  );
}
