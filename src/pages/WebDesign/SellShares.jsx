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

      {/* NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <main className="relative z-10 pt pb-20">

        <div className="max-w-[1280px] mx-auto px-6">

          {/* HEADER */}
          <div className="mb-10">
            <PropertyHeader mode="sell" />
          </div>

          {/* MAIN GRID (FIXED) */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-6 items-start">

            {/* LEFT COLUMN */}
            <div className="flex flex-col gap-6">
              <PropertyAbout />
              <PropertyImages />
            </div>

            {/* RIGHT COLUMN */}
            <div>
              <PropertyDetails />
            </div>

          </div>

        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
