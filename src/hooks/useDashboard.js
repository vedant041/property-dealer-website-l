import { useSelector } from "react-redux";

export function useDashboard() {
  const stats = useSelector((state) => state.dashboard.stats);
  const chartData = useSelector((state) => state.dashboard.chartData);

  return {
    stats,
    chartData,
  };
}
