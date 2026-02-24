import Navbar from "../../components/WebDesign/Navbar";
import Footer from "../../components/WebDesign/Footer";

import PropertyGallery from "../../components/property/PropertyGallery";
import PropertyInfoCard from "../../components/property/PropertyInfoCard";
import PropertyMoreDetails from "../../components/property/PropertyMoreDetails";
import AboutProperty from "../../components/property/AboutProperty";

export default function PropertyDetails() {
  return (
    <div className="min-h-screen text-white relative">
      
      {/* Background */}
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
      <Navbar />

      <main className="max-w-[1440px] mx-auto px-10 py-10 space-y-8">
        {/* Breadcrumb */}
        <p className="text-sm text-white/60">
          Home &gt; Property Listings &gt; 2 BHK Apartment in Andheri East
        </p>

        {/* TOP SECTION */}
        <div className="grid grid-cols-[1.5fr_1fr] gap-6 items-start">
          <PropertyGallery />
          <PropertyInfoCard />
        </div>

        <PropertyMoreDetails />
        <AboutProperty />
      </main>

      <Footer />
    </div>
  );
}
