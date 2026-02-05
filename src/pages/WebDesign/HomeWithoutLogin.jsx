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
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Background Image + LIGHT Overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/Backgroundimg.png"
          alt="background"
          className="w-full h-full object-cover"
        />

        <div
          className="
            absolute inset-0
            bg-gradient-to-b
            from-[rgba(11,31,58,0.35)]
            via-[rgba(11,31,58,0.25)]
            to-[rgba(11,31,58,0.45)]
          "
        />
      </div>

      <Navbar />

      {/* MAIN CONTENT */}
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
  );
}
