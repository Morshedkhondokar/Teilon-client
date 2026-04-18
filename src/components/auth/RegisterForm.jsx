import { useState } from "react";
import { useNavigate, Link } from "react-router";
import SocialLogin from "./SocialLogin";

const RegisterForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm: "",
    agree: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirm) {
      setError("Passwords do not match.");
      return;
    }
    if (!form.agree) {
      setError("Please agree to the terms and conditions.");
      return;
    }

    // TODO: connect your register API here
    navigate("/");
  };

  return (
    <div className="w-full max-w-md mx-auto flex flex-col gap-7">

      {/* ───── Heading ───── */}
      <div>
        <h1 className="text-3xl font-extrabold text-black tracking-tight">
          Create account.
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          Join us and start shopping today.
        </p>
      </div>

      {/* ───── Form ───── */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">

        {/* First + Last Name */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="John"
              required
              className="border border-black/15 rounded-xl px-4 py-3 text-sm text-black placeholder-gray-300 focus:outline-none focus:border-black transition-all"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Doe"
              required
              className="border border-black/15 rounded-xl px-4 py-3 text-sm text-black placeholder-gray-300 focus:outline-none focus:border-black transition-all"
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold uppercase tracking-widest text-gray-400">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@email.com"
            required
            className="border border-black/15 rounded-xl px-4 py-3 text-sm text-black placeholder-gray-300 focus:outline-none focus:border-black transition-all"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold uppercase tracking-widest text-gray-400">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Min. 8 characters"
              required
              className="w-full border border-black/15 rounded-xl px-4 py-3 text-sm text-black placeholder-gray-300 focus:outline-none focus:border-black transition-all pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-400 hover:text-black transition-colors"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold uppercase tracking-widest text-gray-400">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showConfirm ? "text" : "password"}
              name="confirm"
              value={form.confirm}
              onChange={handleChange}
              placeholder="Re-enter password"
              required
              className="w-full border border-black/15 rounded-xl px-4 py-3 text-sm text-black placeholder-gray-300 focus:outline-none focus:border-black transition-all pr-12"
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-400 hover:text-black transition-colors"
            >
              {showConfirm ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        {/* Terms checkbox */}
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="agree"
            checked={form.agree}
            onChange={handleChange}
            className="accent-black w-4 h-4 mt-0.5 shrink-0"
          />
          <span className="text-xs text-gray-500 leading-relaxed">
            I agree to the{" "}
            <Link
              to="/terms"
              className="font-bold text-black underline underline-offset-2"
            >
              Terms & Conditions
            </Link>{" "}
            and{" "}
            <Link
              to="/privacy"
              className="font-bold text-black underline underline-offset-2"
            >
              Privacy Policy
            </Link>
            .
          </span>
        </label>

        {/* Error message */}
        {error && (
          <p className="text-xs text-red-500 font-medium -mt-2">{error}</p>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-black text-white text-sm font-extrabold py-3.5 rounded-xl hover:bg-gray-800 transition-all mt-1 group flex items-center justify-center gap-2"
        >
          Create Account
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>

      </form>

      {/* ───── Divider ───── */}
      <div className="flex items-center gap-4">
        <span className="flex-1 h-px bg-black/10" />
        <span className="text-xs text-gray-400 font-medium">or continue with</span>
        <span className="flex-1 h-px bg-black/10" />
      </div>

      {/* ───── Social Login ───── */}
      <SocialLogin />

      {/* ───── Login link ───── */}
      <p className="text-center text-sm text-gray-400">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-bold text-black hover:underline underline-offset-4 transition-all"
        >
          Sign In
        </Link>
      </p>

    </div>
  );
};

export default RegisterForm;