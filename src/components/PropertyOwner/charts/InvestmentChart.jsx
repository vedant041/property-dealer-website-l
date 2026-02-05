import { useState, useRef, useEffect } from "react";

import {
  LineChart,
  Line,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import DashboardChartCard from "../../common/ChartCard";

import SelectButton from "../../common/Dropdowns/SelectButton";
import SelectPopup from "../../common/Dropdowns/SelectPopup";

import { investmentData } from "../../../data/investmentData";

export default function InvestmentChart() {

  /* ================= STATES ================= */

  const [year, setYear] = useState("2025");
  const [property, setProperty] = useState("Property");

  const [openYear, setOpenYear] = useState(false);
  const [openProperty, setOpenProperty] = useState(false);

  const yearRef = useRef(null);
  const propertyRef = useRef(null);


  /* ============ CLOSE ON OUTSIDE CLICK (FIXED) ============ */

  useEffect(() => {

    function handleClick(e) {

      if (
        yearRef.current &&
        !yearRef.current.contains(e.target)
      ) {
        setOpenYear(false);
      }

      if (
        propertyRef.current &&
        !propertyRef.current.contains(e.target)
      ) {
        setOpenProperty(false);
      }
    }

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };

  }, []);


  return (
    <div className="flex justify-center w-full">


      <DashboardChartCard className="chart-bg w-full">


        {/* ================= HEADER ================= */}

        <div className="relative z-20 flex justify-between items-center px-6 pt-5">

          <h2 className="text-lg font-semibold text-white">
            Investment Growth Graph
          </h2>


          {/* DROPDOWNS */}

          <div className="flex gap-3">


            {/* PROPERTY */}

            <div ref={propertyRef} className="relative z-50">

              <SelectButton
                value={property}
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenProperty((prev) => !prev);
                  setOpenYear(false);
                }}
              />

              {openProperty && (
                <div className="absolute right-0 mt-2 z-[999]">
                  <SelectPopup
                    width="140px"
                    maxHeight="111px"
                    items={[
                      "Property 1",
                      "Property 2",
                      "Property 3",
                    ]}
                    onSelect={(val) => {
                      setProperty(val);
                      setOpenProperty(false);
                    }}
                  />
                </div>
              )}

            </div>


            {/* YEAR */}

            <div ref={yearRef} className="relative z-50">

              <SelectButton
                value={year}
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenYear((prev) => !prev);
                  setOpenProperty(false);
                }}
              />

              {openYear && (
                <div className="absolute right-0 mt-2 z-[999]">
                  <SelectPopup
                    width="74px"
                    maxHeight="250px"
                    varient="year"
                    items={[
                      "2021",
                      "2022",
                      "2023",
                      "2024",
                      "2025",
                      "2026",
                    ]}
                    onSelect={(val) => {
                      setYear(val);
                      setOpenYear(false);
                    }}
                  />
                </div>
              )}

            </div>

          </div>

        </div>



        {/* ================= CHART ================= */}

        <div className="relative z-10 px-6 pt-6 h-[520px]">


          <ResponsiveContainer width="100%" height="100%">


            <LineChart
              data={investmentData}
              margin={{ top: 30, right: 30, left: 0, bottom: 10 }}
            >


              {/* ================= GRADIENTS ================= */}

              <defs>

                {/* Line Gradient */}
                <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4FD1FF" stopOpacity={1} />
                  <stop offset="100%" stopColor="#4FD1FF" stopOpacity={0.3} />
                </linearGradient>


                {/* Area Gradient */}
                <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#5EE7FF" stopOpacity={0.45} />
                  <stop offset="60%" stopColor="#5EE7FF" stopOpacity={0.25} />
                  <stop offset="100%" stopColor="#5EE7FF" stopOpacity={0.08} />
                </linearGradient>


                {/* Glow */}
                <filter id="glow">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

              </defs>



              {/* ================= GRID ================= */}

              <CartesianGrid
                stroke="rgba(255,255,255,0.06)"
                vertical={false}
              />



              {/* ================= X AXIS ================= */}

              <XAxis
                dataKey="month"
                stroke="#CBD5E1"
                tickLine={false}
                axisLine={false}
              />



              {/* ================= Y AXIS ================= */}

              <YAxis
                domain={[5000, 25000]}
                ticks={[5000, 10000, 15000, 20000, 25000]}
                stroke="#CBD5E1"
                tickLine={false}
                axisLine={false}
              />



              {/* ================= TOOLTIP ================= */}

              <Tooltip
                cursor={{
                  stroke: "#4FD1FF",
                  strokeDasharray: "4 4",
                }}
                contentStyle={{
                  background: "rgba(15,23,42,0.95)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "12px",
                  padding: "12px",
                  color: "#fff",
                  boxShadow: "0 0 25px rgba(79,209,255,0.4)",
                }}
                labelStyle={{
                  color: "#4FD1FF",
                  fontWeight: "600",
                }}
              />



              {/* ================= AREA ================= */}

              <Area
                type="natural"
                dataKey="value"
                fill="url(#areaGradient)"
                stroke="none"
                baseValue="dataMin"
              />



              {/* ================= LINE ================= */}

              <Line
                type="natural"
                dataKey="value"
                stroke="url(#lineGradient)"
                strokeWidth={3}
                filter="url(#glow)"

                dot={{
                  r: 5,
                  fill: "#4FD1FF",
                  stroke: "#fff",
                  strokeWidth: 2,
                }}

                activeDot={{
                  r: 8,
                  fill: "#fff",
                  stroke: "#4FD1FF",
                  strokeWidth: 3,
                }}
              />


            </LineChart>


          </ResponsiveContainer>

        </div>


      </DashboardChartCard>

    </div>
  );
}
