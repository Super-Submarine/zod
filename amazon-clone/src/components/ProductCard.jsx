import { Link } from "react-router-dom";
import { FiStar } from "react-icons/fi";
import { useCart } from "../context/useCart";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const discount = product.originalPrice > product.price
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return (
    <div className="product-card">
      {product.badge && (
        <span className="product-card__badge">{product.badge}</span>
      )}

      <Link to={`/product/${product.id}`} className="product-card__img-wrap">
        <img
          src={product.image}
          alt={product.title}
          className="product-card__img"
          loading="lazy"
        />
      </Link>

      <div className="product-card__info">
        <Link to={`/product/${product.id}`} className="product-card__title">
          {product.title}
        </Link>

        <div className="product-card__rating">
          {Array.from({ length: 5 }, (_, i) => (
            <FiStar
              key={i}
              size={14}
              className={
                i < Math.round(product.rating)
                  ? "star--filled"
                  : "star--empty"
              }
            />
          ))}
          <span className="product-card__review-count">
            {product.reviewCount.toLocaleString()}
          </span>
        </div>

        <div className="product-card__price-row">
          {discount > 0 && (
            <span className="product-card__discount">-{discount}%</span>
          )}
          <span className="product-card__price">
            <sup>$</sup>
            <span className="product-card__price-whole">
              {Math.floor(product.price)}
            </span>
            <sup>{((product.price % 1) * 100).toFixed(0).padStart(2, "0")}</sup>
          </span>
        </div>

        {discount > 0 && (
          <div className="product-card__original-price">
            List: <s>${product.originalPrice.toFixed(2)}</s>
          </div>
        )}

        {product.isPrime && (
          <div className="product-card__prime">
            <span className="prime-badge">prime</span> FREE Delivery
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
