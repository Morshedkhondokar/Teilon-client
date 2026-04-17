import { Link } from "react-router";

const Breadcrumb = ({ category, name }) => {
  return (
    <nav className="border-b border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <ol className="flex items-center gap-1.5 text-xs text-slate-400">
          <li>
            <Link to="/" className="hover:text-slate-700 transition-colors">Home</Link>
          </li>
          <li>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </li>
          <li>
            <Link to={`/category/${category}`} className="hover:text-slate-700 transition-colors capitalize">
              {category}
            </Link>
          </li>
          <li>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </li>
          <li className="text-slate-700 font-medium truncate max-w-45">{name}</li>
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;