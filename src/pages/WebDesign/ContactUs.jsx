import Navbar from "../../components/WebDesign/Navbar";
import Footer from "../../components/WebDesign/Footer";

import ContactInfoCard from "../../components/contact/ContactInfoCard";
import ContactFormCard from "../../components/contact/ContactFormCard";

export default function ContactUs() {
  return (
    <div className="min-h-screen text-white relative overflow-hidden">
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

      <main className="max-w-[1440px] mx-auto px-10 py-10">
        {/* Breadcrumb */}
        <p className="text-sm text-white/60 mb-2">
          Home &gt; Contact Us
        </p>

        {/* Header */}
        <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
        <p className="text-white/70 mb-8">
          We’re here to help you with investments, partnerships, and support.
        </p>

        {/* CONTENT */}
        <div className="grid grid-cols-[1fr_1fr] gap-8">
          <ContactInfoCard />
          <ContactFormCard />
        </div>
      </main>

      <Footer />
    </div>
  );
}
