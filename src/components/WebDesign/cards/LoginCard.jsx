import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { Icon } from "@iconify/react";
import { login } from "../../../redux/authSlice";

export default function LoginCard({ onSwitch, onClose }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const validUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!validUser) {
      setError("Invalid email or password");
      return;
    }

    // ✅ LOGIN SUCCESS
    dispatch(login({ validUser }));
    setError("");

    onClose?.(); // close popup
    navigate("/with-login");
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
        <h1 className="text-[28px] font-bold text-white">
          Login
        </h1>

        <h3 className="text-[16px] font-semibold text-white/80 mb-2">
          Welcome Back
        </h3>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2 mb-4">
        <label className="text-sm text-white/70">
          Your Email Id
        </label>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="nitya234@.com"
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

      {/* Password */}
      <div className="flex flex-col gap-2 relative mb-8">
        <label className="text-sm text-white/70">
          Password
        </label>

        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          className="
            h-[44px]
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
            top-[42px]
            text-white/70
            cursor-pointer
            hover:text-white
          "
          width={20}
          onClick={() => setShowPassword(!showPassword)}
        />
      </div>

      {/* Error */}
      {error && (
        <p className="text-sm text-red-400">
          {error}
        </p>
      )}

      {/* Continue Button */}
      <Button variant="auth" onClick={handleLogin}>
        Continue
      </Button>

      {/* Footer */}
      <p className="text-sm text-center text-white/80 mt-2">
        Don’t have an account?{" "}
        <span
          onClick={onSwitch}
          className="
            text-blue-300
            font-medium
            cursor-pointer
            hover:underline
          "
        >
          Register
        </span>
      </p>
    </div>
  );
}
