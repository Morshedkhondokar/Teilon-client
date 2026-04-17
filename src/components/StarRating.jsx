import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating, size = 16 }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} className="text-yellow-400" size={size} />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" size={size} />);
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-400" size={size} />);
    }
  }

  return <div className="flex items-center gap-0.5">{stars}</div>;
};

export default StarRating;