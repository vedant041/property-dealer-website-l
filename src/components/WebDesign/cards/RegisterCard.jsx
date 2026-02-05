import { useState } from "react";
import Button from "../../ui/Button";
import { Icon } from "@iconify/react";

export default function RegisterCard({ onSwitch }) {
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const [error, setError] = useState("");

  // 🔹 Capture input correctly
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔹 REGISTER LOGIC
  const handleRegister = () => {
    const { name, email, mobile, password } = form;

    if (!name || !email || !mobile || !password) {
      setError("All fields are required");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const alreadyExists = users.find((u) => u.email === email);
    if (alreadyExists) {
      setError("User already exists");
      return;
    }

    users.push({ name, email, mobile, password });
    localStorage.setItem("users", JSON.stringify(users));

    setError("");
    onSwitch(); // switch to Login
  };

  return (
    <div
      className="
        w-[538px]
        rounded-[9px]

        bg-white/14
        backdrop-blur-xl

        p-[30px]
        gap-[10px]

        shadow-[0_20px_50px_rgba(0,0,0,0.15)]

        flex
        flex-col

        text-white
      "
    >
      {/* Header */}
      <div>
        <h2 className="text-[28px] font-bold text-white">
          Register
        </h2>

        <p className="text-sm text-white/80">
          to get started
        </p>
      </div>

      {/* Name */}
      <GlassInput
        label="Your Name"
        name="name"
        value={form.name}
        onChange={handleChange}
      />

      {/* Email */}
      <GlassInput
        label="Your Email Id"
        name="email"
        value={form.email}
        onChange={handleChange}
      />

      {/* Mobile */}
      <div className="flex flex-col gap-2">
        <label className="text-sm text-white/70">
          Mobile
        </label>

        <div className="flex gap-3">

          <select
            className="
              h-[44px]
              w-[90px]
              px-2
              rounded-lg

              bg-white/15
              border border-white/30

              text-white
              outline-none
            "
          >
            <option className="text-black">91+</option>
          </select>

          <input
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            placeholder="6789876543"
            className="
              flex-1
              h-[44px]
              px-4
              rounded-lg

              bg-white/15
              border border-white/30

              text-sm
              text-white
              placeholder-white/70

              outline-none
              focus:ring-2
              focus:ring-blue-400/60
            "
          />
        </div>
      </div>

      {/* Password */}
      <div className="flex flex-col gap-2 relative mb-4">
        <label className="text-sm text-white/70">
          Password
        </label>

        <input
          type={showPassword ? "text" : "password"}
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="••••••••"
          className="
            h-[44px]
            w-full
            px-4
            pr-10
            rounded-lg

            bg-white/15
            border border-white/30

            text-sm
            text-white
            placeholder-white/70

            outline-none
            focus:ring-2
            focus:ring-blue-400/60
          "
        />

        <Icon
          icon={showPassword ? "mdi:eye-outline" : "mdi:eye-off-outline"}
          className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2

            text-white/70
            cursor-pointer
            hover:text-white
          "
          onClick={() => setShowPassword(!showPassword)}
        />
      </div>

      {/* Error */}
      {error && (
        <p className="text-sm text-red-400">
          {error}
        </p>
      )}

      {/* Button */}
      <Button onClick={handleRegister}>
        Continue
      </Button>

      {/* Footer */}
      <p className="text-sm text-center text-white/80">
        Already Register?{" "}
        <span
          onClick={onSwitch}
          className="
            text-blue-300
            font-medium
            cursor-pointer
            hover:underline
          "
        >
          Login
        </span>
      </p>
    </div>
  );
}

/* 🔁 Glass Input Component */
function GlassInput({ label, name, value, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-white/70">
        {label}
      </label>

      <input
        name={name}
        value={value}
        onChange={onChange}
        className="
          h-[44px]
          px-4
          rounded-lg

          bg-white/15
          border border-white/30

          text-sm
          text-white
          placeholder-white/70

          outline-none
          focus:ring-2
          focus:ring-blue-400/60
        "
      />
    </div>
  );
}
