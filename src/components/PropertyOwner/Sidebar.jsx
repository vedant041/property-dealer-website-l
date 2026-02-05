import {
  LayoutDashboard,
  Building2,
  Users,
} from "lucide-react";

import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside
      className="
        w-[254px]
        min-h-screen
        pt-[78px]
        backdrop-blur-[2px]
        flex
        flex-col
      "
      style={{
        background: "rgba(33, 45, 70, 0.5)",
        borderRight: "1px solid rgba(238,238,238,0.3)",
      }}
    >

      {/* MENU */}
      <nav className="w-full flex flex-col gap-[8px] pt-6 pb-6 px-4">

        {/* Dashboard */}
        <SidebarItem
          to="/dashboard"
          icon={<LayoutDashboard size={18} />}
          label="Dashboard"
        />

        {/* My Properties */}
        <SidebarItem
          to="/dashboard/properties"   // ✅ FIX
          icon={<Building2 size={18} />}
          label="My Properties"
        />

        {/* Investors */}
        <SidebarItem
          to="/dashboard/investors"
          icon={<Users size={18} />}
          label="Investors"
        />

      </nav>

    </aside>
  );
}


/* ================= SIDEBAR ITEM ================= */

function SidebarItem({ to, icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `
        flex items-center gap-3
        w-full px-5 py-3
        rounded-[14px]
        text-sm font-medium
        transition
        ${
          isActive
            ? "bg-[#1E4E8C] text-[#4FD1FF]"
            : "text-white/70 hover:bg-white/10"
        }
        `
      }
    >
      {icon}
      {label}
    </NavLink>
  );
}
