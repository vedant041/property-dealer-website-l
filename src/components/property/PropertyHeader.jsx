import ShareCounter from "../PropertyOwner/shares/ShareCounter";

export default function PropertyHeader({ mode = "buy" }) {
  return (
    <div
      className="
        w-[1312px]
        rounded-[12px]
        bg-[#1a2332]
        border border-white/10
        p-6
        flex items-center
        text-white
        font-sans
      "
    >
      {/* 1. PROPERTY IMAGE */}
      <div className="relative w-[260px] h-[170px] shrink-0">
        <img
          src="/2BHKimg1.png"
          className="w-full h-full object-cover rounded-lg"
          alt="property"
        />
        <span
          className="
            absolute top-2 left-2
            bg-[#4fd1c5]
            text-[10px]
            px-2 py-[2px]
            rounded-sm
            font-bold text-black uppercase
          "
        >
          Residential
        </span>
      </div>

      {/* 2. MAIN PROPERTY INFO */}
      <div className="ml-6 w-[280px]">
        <div className="flex items-center gap-1 text-[#4a90e2] text-[12px]">
          <span>📍</span> Bhiwandi, Mumbai
        </div>

        <h2 className="text-[24px] font-bold mt-1 tracking-tight">
          2 BHK Apartment
        </h2>

        <p className="text-[13px] text-gray-400 mt-0.5">
          Apartment | 1200 sq. ft
        </p>

        <p className="text-[32px] font-bold mt-4">
          ₹ 1.60 Cr
        </p>
      </div>

      {/* 3. STATS & CONTROLS SECTION */}
      <div className="flex-1 flex flex-col justify-between h-[150px] ml-4">
        
        {/* TOP STATS */}
        <div className="flex justify-between items-start">
          
          <StatItem label="Price per share" value="₹ 1342" />
          <StatItem label="Shares" value="25/50" isShares />
          <StatItem label="Expected return" value="49.08%" />

          {/* SOLD + BUTTON BLOCK */}
          <div className="w-[150px] flex flex-col gap-3">
            
            <div>
              <p className="text-[12px] text-gray-400 mb-1">Sold</p>
              <div className="flex items-center gap-3">
                <span className="text-[18px] font-semibold">50%</span>
                <div className="flex-1 h-[4px] bg-gray-700 rounded-full overflow-hidden">
                  <div className="w-1/2 h-full bg-[#4fd1c5]"></div>
                </div>
              </div>
            </div>

            {/* BUY / SELL BUTTON */}
            <button
              className="
                w-full
                h-[48px]
                rounded-[4px]
                bg-[#DFAF5B]
                hover:bg-[#c99e52]
                text-[16px]
                font-bold
                text-black
                shadow-lg
                transition-all
              "
            >
              {mode === "sell" ? "Sell Now" : "Buy Now"}
            </button>
          </div>

        </div>

        {/* BOTTOM CONTROLS */}
        <div className="flex gap-8 items-end">
          
          <div className="flex flex-col gap-2">
            <span className="text-[#C0944D] text-[12px] font-medium">
              Shares
            </span>
            <ShareCounter />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[#C0944D] text-[12px] font-medium">
              Amount
            </span>

            <div className="bg-[#2d3748] border border-white/5 rounded-[4px] px-3 py-2 flex items-center justify-between w-[160px] h-[40px]">
              <span className="text-gray-400 text-[14px]">₹</span>
              <span className="text-[18px] font-medium ml-2">
                10,736
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

function StatItem({ label, value, isShares }) {
  return (
    <div>
      <p className="text-[12px] text-gray-400 mb-1">
        {label}
      </p>

      {isShares ? (
        <p className="text-[18px] font-semibold">
          25
          <span className="text-[12px] text-gray-500 font-normal ml-0.5">
            / 50
          </span>
        </p>
      ) : (
        <p className="text-[18px] font-semibold">
          {value}
        </p>
      )}
    </div>
  );
}