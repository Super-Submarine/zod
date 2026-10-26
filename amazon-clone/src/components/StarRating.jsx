import "./StarRating.css";

function StarRating({ rating }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(
        <span key={i} className="star star--full">
          ★
        </span>
      );
    } else if (i - rating < 1 && i - rating > 0) {
      stars.push(
        <span key={i} className="star star--half">
          ★
        </span>
      );
    } else {
      stars.push(
        <span key={i} className="star star--empty">
          ★
        </span>
      );
    }
  }

  return (
    <div className="star-rating">
      {stars}
      <span className="star-rating__value">{rating}</span>
    </div>
  );
}

export default StarRating;
