import ReviewSummary from "./ReviewSummary";


const ReviewsTab = ({ product }) => {
  return (
    <ReviewSummary
      rating={product.rating}
      reviewCount={product.reviewCount}
    />
  );
};

export default ReviewsTab;