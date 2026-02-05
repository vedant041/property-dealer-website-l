import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  /* ================= STATS ================= */
  stats: [
    {
      key: "properties",
      title: "Properties Listed",
      value: "12",
    },
    {
      key: "open",
      title: "Currently Open",
      value: "12",
    },
    {
      key: "invested",
      title: "Total Invested",
      value: "₹1.60 Cr",
    },
    {
      key: "investors",
      title: "Investors",
      value: "24",
    },
  ],

  /* ================= CHART ================= */
  chartData: [
    { month: "Jan", value: 5000 },
    { month: "Feb", value: 12000 },
    { month: "Mar", value: 10000 },
    { month: "Apr", value: 15000 },
    { month: "May", value: 11000 },
    { month: "Jun", value: 18000 },
    { month: "Jul", value: 15000 },
    { month: "Aug", value: 21000 },
    { month: "Sep", value: 16000 },
    { month: "Oct", value: 11000 },
    { month: "Nov", value: 7000 },
    { month: "Dec", value: 9000 },
  ],
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,

  reducers: {
    // Future updates (API, live data, etc.)
    setStats(state, action) {
      state.stats = action.payload;
    },

    setChartData(state, action) {
      state.chartData = action.payload;
    },
  },
});

export const { setStats, setChartData } = dashboardSlice.actions;

export default dashboardSlice.reducer;
