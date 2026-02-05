import { useState } from "react";

export default function PropertyTypeSelect({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="
        bg-white/10
        border
        border-white/20
        text-sm
        px-4
        py-2
        rounded-md
        text-white
        outline-none
        cursor-pointer
        focus:ring-2
        focus:ring-cyan-400
      "
    >
      {/* Placeholder */}
      <option value="" disabled>
        Property Type
      </option>

      {/* Options */}
      <option value="apartment">Apartment</option>
      <option value="villa">Villa</option>
      <option value="warehouse">Warehouse</option>
      <option value="retail">Retail Shop</option>
    </select>
  );
}
