import { useState } from "react";
import { useNavigate } from "react-router-dom";

/* WebDesign layout components */
import Navbar from "../../components/WebDesign/Navbar";
import Footer from "../../components/WebDesign/Footer";

/* WebDesign cards & sections */
import PropertyLayoutCard from "../../components/WebDesign/sections/PropertyLayout";
import InvestorCard from "../../components/WebDesign/cards/InvestorCard";
import MembershipCard from "../../components/WebDesign/cards/MembershipCard";
import MissionVisionCard from "../../components/WebDesign/cards/MissionVisionCard";

/* Auth */
import AuthModal from "../../components/auth/AuthModal";

export default function Home() {
  const navigate = useNavigate();
  const [openAuth, setOpenAuth] = useState(false);

  return (
    <div className="relative min-h-screen text-white overflow-hidden">

      {/* ✅ FIXED Background Video */}
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

      {/* ✅ PAGE CONTENT */}
      <div className="relative z-10">
        <Navbar />

        <main className="max-w-[1440px] mx-auto px-10 py-10">
          <div className="grid grid-cols-[533px_420px_360px] gap-6 items-stretch">
            
            {/* LEFT COLUMN */}
            <PropertyLayoutCard />

            {/* CENTER COLUMN */}
            <InvestorCard />

            {/* RIGHT COLUMN */}
            <div className="flex flex-col gap-6 h-full">
              <MembershipCard />
              <MissionVisionCard />
            </div>

          </div>
        </main>

        <Footer />

        {openAuth && (
          <AuthModal onClose={() => setOpenAuth(false)} />
        )}
      </div>

    </div>
  );
}