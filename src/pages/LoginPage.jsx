import LoginForm from "../components/auth/LoginForm";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex">

     

      {/* ───── Left: Form Panel ───── */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-6 py-16 bg-white">

        {/* Mobile brand */}
        <div className="lg:hidden mb-10 self-start">
          <span className="text-black text-2xl font-extrabold tracking-tight">
            DRIP.
          </span>
        </div>

        <LoginForm />

      </div>

       {/* ───── Right: Image Panel ───── */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-black">

        {/* Background image */}
        <img
         src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1200&q=80"
          alt="Fashion"
          className="w-full h-full object-cover opacity-70"
        />

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col justify-between p-12">

          {/* Brand name */}
          <span className="text-white text-2xl font-extrabold tracking-tight">
            DRIP.
          </span>

          {/* Bottom quote */}
          <div>
            <p className="text-white text-3xl font-extrabold leading-tight max-w-xs mb-4">
              "Style is a way to say who you are without having to speak."
            </p>
            <p className="text-white/50 text-xs tracking-widest uppercase">
              — Rachel Zoe
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;