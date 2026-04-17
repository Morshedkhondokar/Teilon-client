const ProductTags = ({ tags }) => {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-1.5 mt-4">
      {tags.map((tag) => (
        <span key={tag} className="text-[10px] font-medium uppercase tracking-[0.08em] text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
          #{tag}
        </span>
      ))}
    </div>
  );
};

export default ProductTags;