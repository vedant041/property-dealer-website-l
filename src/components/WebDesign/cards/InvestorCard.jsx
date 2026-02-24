import { useNavigate } from "react-router-dom";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import investorData from "../../../data/investorData";

/* ---------- CUSTOM TOOLTIP ---------- */
function CustomTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) return null;

  const item = payload[0]; // hovered line
  const name = item.name;
  const value = item.value;

  const data = item.payload;
  const index = data.__index; // we will add this

  let growth = null;

  if (index > 0) {
    const prev = investorData.chart[index - 1][name];
    if (prev) {
      growth = (((value - prev) / prev) * 100).toFixed(1);
    }
  }

  return (
    <div className="bg-[#2F4B6E]/90 backdrop-blur-md px-5 py-4 rounded-xl shadow-xl text-white text-sm min-w-[200px] border border-white/20">

      {/* Name */}
      <p className="font-semibold text-[15px] mb-2 text-purple-400">
        {name}
      </p>

      <div className="border-t border-dashed border-white/30 my-2" />

      {/* Portfolio */}
      <p className="text-white/90 text-[13px] flex justify-between">
        <span>Portfolio Value</span>
        <span className="font-semibold">
          ₹{value.toLocaleString("en-IN")}
        </span>
      </p>

      <div className="border-t border-dashed border-white/30 my-2" />

      {/* Growth */}
      {growth !== null && (
        <p
          className={`text-[13px] font-medium ${
            growth >= 0 ? "text-green-400" : "text-red-400"
          }`}
        >
          {growth >= 0 ? "▲" : "▼"} Growth {growth}%
        </p>
      )}
    </div>
  );
}

export default function InvestorCard() {
  const navigate = useNavigate();

  /* Add index to each row (needed for growth) */
  const chart = investorData.chart.map((item, index) => ({
    ...item,
    __index: index,
  }));

  const { shareholders } = investorData;

  return (
    <div className="bg-[rgba(49,51,55,0.1)] backdrop-blur-[2px] border border-white/15 rounded-[24px] p-6 flex flex-col gap-5 text-white h-full">

      {/* TITLE */}
      <h2 className="text-lg font-semibold">
        Investor & Shareholders
      </h2>

      {/* CHART */}
      <div className="h-[260px]">

        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chart}>

            <CartesianGrid
              stroke="rgba(255,255,255,0.15)"
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey="month"
              stroke="rgba(255,255,255,0.6)"
              tick={{ fontSize: 12 }}
            />

            <YAxis
              domain={[0, 450000]}
              stroke="rgba(255,255,255,0.6)"
              tick={{ fontSize: 12 }}
              tickFormatter={(v) => {
                if (v >= 100000) return v / 100000 + "L";
                if (v >= 1000) return v / 1000 + "k";
                return v;
              }}
            />

            {/* Tooltip */}
            <Tooltip content={<CustomTooltip />} />

            {/* Lines */}
            <Line
              dataKey="Rajesh"
              stroke="#8979FF"
              strokeWidth={2.5}
              dot={{ r: 5 }}
            />

            <Line
              dataKey="Yash"
              stroke="#FFE88A"
              strokeWidth={2.5}
              dot={{ r: 5 }}
            />

            <Line
              dataKey="Parth"
              stroke="#0fa354"
              strokeWidth={2.5}
              dot={{ r: 5 }}
            />

            <Line
              dataKey="Piyush"
              stroke="#2e967a"
              strokeWidth={2.5}
              dot={{ r: 5 }}
            />

          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* SHAREHOLDERS */}
      <div className="bg-[#29354D]/50 rounded-[18px] border border-white/20 py-4 px-2 flex flex-col">

        {/* HEADER */}
        <div className="grid grid-cols-[2fr_0.8fr_1.2fr_1fr] text-md text-white/70 pb-2 border-b border-white/15">
          <span>Shareholder Name</span>
          <span>Shares</span>
          <span>Dividend</span>
          <span>Total</span>
        </div>

        {/* BODY */}
        <div className="mt-2 max-h-[250px] overflow-y-auto pr-2">

          {shareholders.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[2fr_0.7fr_1fr_0.2fr] items-center h-[40px] text-sm rounded-lg px-3 hover:bg-white/10 transition"
            >

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400">
                  👤
                </div>

                <span>{item.name}</span>
              </div>

              <span>{item.shares}</span>
              <span>₹{item.dividend.toLocaleString()}</span>
              <span>₹{item.total.toLocaleString()}</span>
            </div>
          ))}
        </div>

        {/* TOTAL */}
        <div className="flex justify-between text-sm font-medium pt-3 mt-3 border-t border-white/15">
          <span>Total Invested</span>
          <span>₹30,000</span>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="flex gap-10">

        <button
          onClick={() => navigate("/buy-shares")}
          className="flex-1 bg-[#D7E4F8] hover:bg-[#C3D6F3] rounded-lg py-1.5 font-medium text-[#1F3A5F]"
        >
          Buy Shares
        </button>

        <button
          onClick={() => navigate("/sell-shares")}
          className="flex-1 bg-[#FFD24A] hover:bg-[#FACC15] transition rounded-lg py-1.5 font-medium text-black"
        >
          Sell Shares
        </button>

      </div>
    </div>
  );
}
