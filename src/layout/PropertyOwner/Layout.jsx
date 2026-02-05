import { Outlet } from "react-router-dom";

import Sidebar from "../../components/PropertyOwner/Sidebar";
import Header from "../../components/PropertyOwner/Header";

export default function Layout() {
  return (
    <div className="relative h-screen text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/Backgroundimg.png"
          className="w-full h-full object-cover"
          alt="bg"
        />
        <div className="absolute inset-0 bg-[#07182F]/25" />
      </div>

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
