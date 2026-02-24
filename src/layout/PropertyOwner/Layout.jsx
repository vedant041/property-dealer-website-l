import { Outlet } from "react-router-dom";

import Sidebar from "../../components/PropertyOwner/Sidebar";
import Header from "../../components/PropertyOwner/Header";

export default function Layout() {
  return (
    <div className="relative h-screen text-white overflow-hidden">

      {/* BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="fixed top-0 left-0 w-full h-full object-cover -z-20"
      >
        <source src="/video6.mp4" type="video/mp4" />
      </video>

      {/* ✅ Gradient Overlay */}
      <div
        className="
          fixed inset-0 -z-10
          bg-gradient-to-b
          from-[rgba(11,31,58,0.35)]
          via-[rgba(11,31,58,0.25)]
          to-[rgba(11,31,58,0.45)]
        "
      />

      {/* HEADER */}
      <Header />

      {/* BODY */}
      <div className="flex h-[calc(100vh-80px)]">

        {/* SIDEBAR */}
        <Sidebar />

        {/* CONTENT */}
        <main className="flex-1 overflow-y-auto px-6 py-4">
          <Outlet />
        </main>

      </div>
    </div>
  );
}
