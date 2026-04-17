import { useState } from "react";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className="flex items-center gap-0.5">
      {[...Array(fullStars)].map((_, i) => (
        <span key={`f-${i}`} className="text-amber-400">★</span>
      ))}

      {hasHalf && <span className="text-amber-400">☆</span>}

      {[...Array(emptyStars)].map((_, i) => (
        <span key={`e-${i}`} className="text-slate-300">★</span>
      ))}
    </div>
  );
};

const ReviewSummary = ({ rating = 4.2, reviewCount = 128 }) => {
  // Dummy reviews (later backend replace করবে)
  const [reviews] = useState([
    {
      id: 1,
      name: "John Doe",
      rating: 5,
      comment: "Amazing product! Quality is excellent.",
    },
    {
      id: 2,
      name: "Sarah",
      rating: 4,
      comment: "Very good but delivery was late.",
    },
    {
      id: 3,
      name: "Alex",
      rating: 4.5,
      comment: "Worth the price. Recommended!",
    },
  ]);

  // rating breakdown dummy data
  const ratingStats = [
    { star: 5, percent: 60 },
    { star: 4, percent: 25 },
    { star: 3, percent: 10 },
    { star: 2, percent: 3 },
    { star: 1, percent: 2 },
  ];

  return (
    <div className="space-y-8">
      
      {/* Top Summary */}
      <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center pb-6 border-b border-slate-100">
        
        <div className="text-center">
          <p className="text-4xl font-semibold text-slate-900">
            {rating}
          </p>
          <StarRating rating={rating} />
          <p className="text-xs text-slate-400 mt-1">
            {reviewCount} reviews
          </p>
        </div>

        {/* Rating bars */}
        <div className="flex-1 space-y-2">
          {ratingStats.map((item) => (
            <div key={item.star} className="flex items-center gap-2">
              <span className="text-xs text-slate-400 w-3">
                {item.star}
              </span>

              <span className="text-amber-400 text-xs">★</span>

              <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-400 rounded-full"
                  style={{ width: `${item.percent}%` }}
                />
              </div>

              <span className="text-xs text-slate-400 w-8 text-right">
                {item.percent}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Review List */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="p-4 rounded-xl border border-slate-100 bg-white"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="font-medium text-slate-800">
                {review.name}
              </p>

              <StarRating rating={review.rating} />
            </div>

            <p className="text-sm text-slate-500">
              {review.comment}
            </p>
          </div>
        ))}
      </div>

      {/* Placeholder note */}
      <p className="text-xs text-slate-400 text-center">
        * Dummy data — will be replaced with backend reviews API
      </p>
    </div>
  );
};

export default ReviewSummary;