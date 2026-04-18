const stats = [
  { number: "200+", label: "Premium Brands" },
  { number: "30K+", label: "Happy Customers" },
  { number: "10K+", label: "Products" },
  { number: "4.8★", label: "Avg. Rating" },
];

const AboutStats = () => {
  return (
    <section className="py-14 border-b border-black/10">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-4xl sm:text-5xl font-extrabold text-black">
              {stat.number}
            </p>
            <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutStats;