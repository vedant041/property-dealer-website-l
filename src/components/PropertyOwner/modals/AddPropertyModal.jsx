import { useState } from "react";

export default function AddPropertyModal({ onClose, onSubmit }) {
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");

  function handleSubmit() {
    if (!type || !status) return;

    onSubmit({ type, status });
  }

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center">

      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="relative w-[360px] bg-[#9A9A9A]/80 backdrop-blur-md rounded-xl p-6 text-white">

        <h2 className="text-lg font-semibold mb-4">
          Add Property
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label className="text-sm">Property Name</label>
          <input
            className="w-full mt-1 bg-transparent border border-white/40 rounded px-3 py-2 outline-none"
            placeholder="Enter name"
          />
        </div>

        {/* Type */}
        <div className="mb-4">
          <label className="text-sm">Property Type</label>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full mt-1 bg-transparent border border-white/40 rounded px-3 py-2 outline-none"
          >
            <option value="">Select Property Type</option>
            <option>Residential</option>
            <option>Commercial</option>
            <option>Industrial</option>
          </select>
        </div>

        {/* Status */}
        <div className="mb-5">
          <label className="text-sm">Status</label>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full mt-1 bg-transparent border border-white/40 rounded px-3 py-2 outline-none"
          >
            <option value="">Select Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        {/* BUTTON */}
        <button
          onClick={handleSubmit}
          className="
            w-full
            bg-[#415573]
            hover:bg-[#4f6a8f]
            py-2
            rounded-lg
            font-medium
            transition
          "
        >
          Add Property
        </button>
      </div>
    </div>
  );
}
