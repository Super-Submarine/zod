import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";
import StarRating from "./StarRating";
import "./ProductCard.css";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-card__image-link">
        <img
          src={product.image}
          alt={product.title}
          className="product-card__image"
        />
      </Link>
      <div className="product-card__info">
        <Link to={`/product/${product.id}`} className="product-card__title">
          {product.title}
        </Link>
        <div className="product-card__rating">
          <StarRating rating={product.rating} />
          <span className="product-card__reviews">
            {product.reviews.toLocaleString()}
          </span>
        </div>
        <div className="product-card__price">
          <span className="product-card__price-symbol">$</span>
          <span className="product-card__price-whole">
            {Math.floor(product.price)}
          </span>
          <span className="product-card__price-fraction">
            {(product.price % 1).toFixed(2).substring(2)}
          </span>
        </div>
        {product.isPrime && (
          <div className="product-card__prime">
            <span className="prime-badge">prime</span>
            <span className="prime-delivery">FREE delivery</span>
          </div>
        )}
        <button
          className="product-card__add-btn"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
