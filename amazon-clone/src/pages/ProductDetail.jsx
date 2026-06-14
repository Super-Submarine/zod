import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/useCart";
import StarRating from "../components/StarRating";
import products from "../data/products";
import "./ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="product-detail__not-found">
        <h2>Product not found</h2>
        <Link to="/">Go back to shopping</Link>
      </div>
    );
  }

  return (
    <div className="product-detail">
      <div className="product-detail__breadcrumb">
        <Link to="/">Home</Link> &rsaquo;{" "}
        <Link to={`/?search=${product.category}`}>{product.category}</Link>{" "}
        &rsaquo; <span>{product.title}</span>
      </div>

      <div className="product-detail__content">
        <div className="product-detail__image-container">
          <img
            src={product.image}
            alt={product.title}
            className="product-detail__image"
          />
        </div>

        <div className="product-detail__info">
          <h1 className="product-detail__title">{product.title}</h1>

          <div className="product-detail__rating">
            <StarRating rating={product.rating} />
            <span className="product-detail__reviews">
              {product.reviews.toLocaleString()} ratings
            </span>
          </div>

          <div className="product-detail__divider" />

          <div className="product-detail__price-section">
            <span className="product-detail__price-label">Price:</span>
            <span className="product-detail__price">
              ${product.price.toFixed(2)}
            </span>
          </div>

          {product.isPrime && (
            <div className="product-detail__prime">
              <span className="prime-badge">prime</span>
              <span>FREE delivery</span>
            </div>
          )}

          <div className="product-detail__divider" />

          <div className="product-detail__description">
            <h3>About this item</h3>
            <p>{product.description}</p>
          </div>
        </div>

        <div className="product-detail__buy-box">
          <div className="product-detail__buy-price">
            ${product.price.toFixed(2)}
          </div>
          {product.isPrime && (
            <div className="product-detail__buy-delivery">
              <span className="prime-badge">prime</span>
              <span>FREE delivery</span>
            </div>
          )}
          <p className="product-detail__stock">In Stock</p>
          <button
            className="product-detail__add-btn"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
          <button className="product-detail__buy-now-btn">Buy Now</button>
          <div className="product-detail__buy-info">
            <div>
              <span className="buy-info__label">Ships from</span>
              <span>Amazon.clone</span>
            </div>
            <div>
              <span className="buy-info__label">Sold by</span>
              <span>Amazon.clone</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
