import PropertyHeader from "../../components/property/PropertyHeader";
import PropertyAbout from "../../components/property/PropertyAbout";
import PropertyDetails from "../../components/property/PropertyDetails";
import PropertyImages from "../../components/property/PropertyImages";

import Navbar from "../../components/WebDesign/Navbar";
import Footer from "../../components/WebDesign/Footer";

export default function SellShares() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/Backgroundimg.png"
          alt="bg"
          className="w-full h-full object-cover"
        />

        {/* FIGMA OVERLAY (MATCH BUY PAGE) */}
        <div className="absolute inset-0 bg-[#07182F]/55" />
      </div>

      {/* NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-8">
        <div className="mt-[140px] ml-[64px]">
          <PropertyHeader mode="sell" />
        </div>

        <div className="grid grid-cols-[1.45fr_1fr] gap-6 mt-10">
          <PropertyAbout />
          <PropertyDetails />
        </div>

        <PropertyImages />
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
