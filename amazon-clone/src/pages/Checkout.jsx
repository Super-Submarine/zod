import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";
import "./Checkout.css";

function Checkout() {
  const { cart, cartTotal, cartCount, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div className="checkout__success">
        <div className="checkout__success-box">
          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="#007600"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
          <h2>Order placed, thank you!</h2>
          <p>
            Your order has been confirmed. You will receive an email
            confirmation shortly.
          </p>
          <Link to="/" className="checkout__continue-btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="checkout__empty">
        <h2>Your cart is empty</h2>
        <Link to="/">Continue shopping</Link>
      </div>
    );
  }

  return (
    <div className="checkout">
      <h1 className="checkout__title">Checkout</h1>

      <div className="checkout__content">
        <form className="checkout__form" onSubmit={handleSubmit}>
          <div className="checkout__section">
            <h2>1. Shipping address</h2>
            <div className="checkout__form-group">
              <input
                type="text"
                name="fullName"
                placeholder="Full name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="checkout__input"
              />
            </div>
            <div className="checkout__form-group">
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                required
                className="checkout__input"
              />
            </div>
            <div className="checkout__form-row">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                required
                className="checkout__input"
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                required
                className="checkout__input"
              />
              <input
                type="text"
                name="zip"
                placeholder="ZIP Code"
                value={formData.zip}
                onChange={handleChange}
                required
                className="checkout__input"
              />
            </div>
          </div>

          <div className="checkout__section">
            <h2>2. Payment method</h2>
            <div className="checkout__form-group">
              <input
                type="text"
                name="cardNumber"
                placeholder="Card number"
                value={formData.cardNumber}
                onChange={handleChange}
                required
                className="checkout__input"
              />
            </div>
            <div className="checkout__form-row">
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                value={formData.expiry}
                onChange={handleChange}
                required
                className="checkout__input"
              />
              <input
                type="text"
                name="cvv"
                placeholder="CVV"
                value={formData.cvv}
                onChange={handleChange}
                required
                className="checkout__input"
              />
            </div>
          </div>

          <div className="checkout__section">
            <h2>3. Review items</h2>
            <div className="checkout__items">
              {cart.map((item) => (
                <div key={item.id} className="checkout__item">
                  <img src={item.image} alt={item.title} />
                  <div className="checkout__item-info">
                    <p className="checkout__item-title">{item.title}</p>
                    <p className="checkout__item-qty">Qty: {item.quantity}</p>
                    <p className="checkout__item-price">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button type="submit" className="checkout__place-order-btn">
            Place your order
          </button>
        </form>

        <div className="checkout__summary">
          <div className="checkout__summary-box">
            <button type="submit" form="checkout-form" className="checkout__place-order-btn" onClick={() => document.querySelector('.checkout__form').requestSubmit()}>
              Place your order
            </button>
            <p className="checkout__summary-terms">
              By placing your order, you agree to Amazon Clone&apos;s conditions
              of use and privacy notice.
            </p>
            <div className="checkout__summary-divider" />
            <h3>Order Summary</h3>
            <div className="checkout__summary-row">
              <span>
                Items ({cartCount}):
              </span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="checkout__summary-row">
              <span>Shipping & handling:</span>
              <span>$0.00</span>
            </div>
            <div className="checkout__summary-row">
              <span>Estimated tax:</span>
              <span>${(cartTotal * 0.08).toFixed(2)}</span>
            </div>
            <div className="checkout__summary-divider" />
            <div className="checkout__summary-row checkout__summary-total">
              <strong>Order total:</strong>
              <strong>${(cartTotal * 1.08).toFixed(2)}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
