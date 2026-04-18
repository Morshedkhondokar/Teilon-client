import { useState } from "react";
import { useNavigate, Link } from "react-router";
import SocialLogin from "./SocialLogin";

const LoginForm = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect your auth logic here
    navigate("/");
  };

  return (
    <div className="w-full max-w-md mx-auto flex flex-col gap-7">

      {/* ───── Logo / Brand ───── */}
      <div>
        <h1 className="text-3xl font-extrabold text-black tracking-tight">
          Welcome back.
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          Sign in to continue shopping.
        </p>
      </div>

      {/* ───── Form ───── */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">

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
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              Password
            </label>
            <Link
              to="/forgot-password"
              className="text-xs text-gray-400 hover:text-black underline underline-offset-2 transition-colors"
            >
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              className="w-full border border-black/15 rounded-xl px-4 py-3 text-sm text-black placeholder-gray-300 focus:outline-none focus:border-black transition-all pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition-colors text-xs font-semibold"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-black text-white text-sm font-extrabold py-3.5 rounded-xl hover:bg-gray-800 transition-all mt-1 group flex items-center justify-center gap-2"
        >
          Sign In
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

      {/* ───── Register link ───── */}
      <p className="text-center text-sm text-gray-400">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-bold text-black hover:underline underline-offset-4 transition-all"
        >
          Sign Up
        </Link>
      </p>

    </div>
  );
};

export default LoginForm;