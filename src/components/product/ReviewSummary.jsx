import StarRating from "../StarRating";

const ReviewSummary = ({ rating, reviewCount }) => {
  const bars = [
    { star: 5, pct: 60 },
    { star: 4, pct: 25 },
    { star: 3, pct: 10 },
    { star: 2, pct: 3 },
    { star: 1, pct: 2 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-6 pb-6 border-b border-slate-100">
        <div className="text-center">
          <p className="text-4xl font-semibold text-slate-900">{rating}</p>
          <StarRating rating={rating} />
          <p className="text-xs text-slate-400 mt-1">{reviewCount} reviews</p>
        </div>
        <div className="flex-1 space-y-1.5">
          {bars.map(({ star, pct }) => (
            <div key={star} className="flex items-center gap-2">
              <span className="text-xs text-slate-400 w-3">{star}</span>
              <svg className="w-3 h-3 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-amber-400 rounded-full" style={{ width: `${pct}%` }} />
              </div>
              <span className="text-xs text-slate-400 w-8 text-right">{pct}%</span>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center py-8">
        <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3">
          <svg className="w-5 h-5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
        <p className="text-sm text-slate-400">Review section coming soon</p>
      </div>
    </div>
  );
};

export default ReviewSummary;