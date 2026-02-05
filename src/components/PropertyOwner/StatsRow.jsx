import { useSelector } from "react-redux";

import StatCard from "../PropertyOwner/cards/StatCard";
import { statIcons } from "../../data/statIcons";

export default function StatsRow() {
  const stats = useSelector((state) => state.dashboard.stats);

  return (
    <div
      className="
        flex
        justify-between
        gap-[24px]
        mx-auto
        mt-[10px]
        mb-10
      "
      style={{
        width: "1122px",
        height: "107px",
      }}
    >
      {stats.map((item) => {
        const Icon = statIcons[item.key];

        return (
          <StatCard
            key={item.key}
            title={item.title}
            value={item.value}
            Icon={Icon}
          />
        );
      })}
    </div>
  );
}
