import { useNavigate } from "react-router";

const styles = [
  {
    id: 1,
    label: "Casual",
    image:
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&q=80",
    category: "casual",
  },
  {
    id: 2,
    label: "Formal",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    category: "formal",
  },
  {
    id: 3,
    label: "Party",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&q=80",
    category: "party",
  },
  {
    id: 4,
    label: "Gym",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=900&q=80",
    category: "gym",
  },
];

const BrowseByStyleSection = () => {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* Heading */}
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-400">
            Discover
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Browse by Style
          </h2>
        </div>

        <button className="hidden sm:block text-sm text-slate-500 hover:text-black transition">
          View All →
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

        {styles.map((style) => (
          <div
            key={style.id}
            onClick={() => navigate(`/shop?style=${style.category}`)}
            className="group relative cursor-pointer overflow-hidden rounded-2xl aspect-4/5"
          >
            {/* Image */}
            <img
              src={style.image}
              alt={style.label}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition" />

            {/* Content */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <h3 className="text-white text-lg font-semibold">
                {style.label}
              </h3>

              <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center group-hover:translate-x-1 transition">
                →
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default BrowseByStyleSection;