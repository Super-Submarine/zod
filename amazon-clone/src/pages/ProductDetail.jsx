import { useParams, Link } from "react-router-dom";
import { FiStar, FiCheck } from "react-icons/fi";
import { useCart } from "../context/useCart";
import products from "../data/products";
import "./ProductDetail.css";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="pd-not-found">
        <h2>Product not found</h2>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  const discount =
    product.originalPrice > product.price
      ? Math.round((1 - product.price / product.originalPrice) * 100)
      : 0;

  return (
    <div className="pd">
      <div className="pd__breadcrumb">
        <Link to="/">Home</Link> &rsaquo;{" "}
        <Link to={`/?category=${product.category}`}>{product.category}</Link>{" "}
        &rsaquo; <span>{product.title}</span>
      </div>

      <div className="pd__main">
        <div className="pd__image-section">
          <img src={product.image} alt={product.title} className="pd__image" />
        </div>

        <div className="pd__details">
          <h1 className="pd__title">{product.title}</h1>

          <div className="pd__rating">
            <div className="pd__stars">
              {Array.from({ length: 5 }, (_, i) => (
                <FiStar
                  key={i}
                  size={18}
                  className={
                    i < Math.round(product.rating)
                      ? "star--filled"
                      : "star--empty"
                  }
                />
              ))}
            </div>
            <span className="pd__rating-text">
              {product.rating} out of 5
            </span>
            <span className="pd__review-count">
              {product.reviewCount.toLocaleString()} ratings
            </span>
          </div>

          {product.badge && (
            <span className="pd__badge">{product.badge}</span>
          )}

          <hr className="pd__divider" />

          <div className="pd__price-block">
            {discount > 0 && (
              <div className="pd__discount-row">
                <span className="pd__discount-pct">-{discount}%</span>
                <span className="pd__price-big">
                  ${product.price.toFixed(2)}
                </span>
              </div>
            )}
            {discount === 0 && (
              <span className="pd__price-big">
                ${product.price.toFixed(2)}
              </span>
            )}
            {discount > 0 && (
              <div className="pd__original">
                List Price:{" "}
                <s>${product.originalPrice.toFixed(2)}</s>
              </div>
            )}
          </div>

          {product.isPrime && (
            <div className="pd__prime">
              <span className="prime-badge">prime</span> FREE delivery{" "}
              <strong>Tomorrow</strong>
            </div>
          )}

          <hr className="pd__divider" />

          <p className="pd__description">{product.description}</p>

          <div className="pd__availability">
            <FiCheck size={16} color="#007600" />
            <span>In Stock</span>
          </div>
        </div>

        <div className="pd__buy-box">
          <div className="pd__buy-price">
            ${product.price.toFixed(2)}
          </div>
          {product.isPrime && (
            <div className="pd__buy-delivery">
              <span className="prime-badge">prime</span> FREE delivery{" "}
              <strong>Tomorrow</strong>
            </div>
          )}
          <div className="pd__buy-stock">
            <FiCheck size={14} color="#007600" /> In Stock
          </div>
          <button
            className="pd__buy-add"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
          <button className="pd__buy-now">Buy Now</button>
          <div className="pd__buy-secure">
            Secure transaction
          </div>
          <div className="pd__buy-sold">
            Ships from and sold by <strong>Amazon Clone</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
