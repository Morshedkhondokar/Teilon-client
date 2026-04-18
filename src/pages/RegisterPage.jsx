import RegisterForm from "../components/auth/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex">

      {/* ───── Left: Image Panel ───── */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-black">

        {/* Background image */}
        <img
         src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=80"
          alt="Fashion"
          className="w-full h-full object-cover opacity-70"
        />

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col justify-between p-12">

          {/* Brand */}
          <span className="text-white text-2xl font-extrabold tracking-tight">
            DRIP.
          </span>

          {/* Bottom perks */}
          <div className="flex flex-col gap-5">
            <p className="text-white text-2xl font-extrabold leading-tight max-w-xs">
              Join 50,000+ people who shop smarter.
            </p>
            <div className="flex flex-col gap-3">
              {[
                "Exclusive member-only deals",
                "Early access to new arrivals",
                "Free returns on every order",
              ].map((perk) => (
                <div key={perk} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-white text-xs">
                    ✓
                  </span>
                  <span className="text-white/70 text-sm">{perk}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ───── Right: Form Panel ───── */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-6 py-16 bg-white overflow-y-auto">

        {/* Mobile brand */}
        <div className="lg:hidden mb-10 self-start">
          <span className="text-black text-2xl font-extrabold tracking-tight">
            DRIP.
          </span>
        </div>

        <RegisterForm />

      </div>
    </div>
  );
};

export default RegisterPage;