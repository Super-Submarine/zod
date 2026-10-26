import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";
import "./Cart.css";

function Cart() {
  const { cart, cartTotal, cartCount, removeFromCart, updateQuantity } =
    useCart();

  if (cart.length === 0) {
    return (
      <div className="cart cart--empty">
        <div className="cart__empty-box">
          <h2>Your Amazon Clone Cart is empty</h2>
          <p>
            Check your Saved for later items below or{" "}
            <Link to="/">continue shopping</Link>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="cart__items">
        <h2 className="cart__title">Shopping Cart</h2>
        <span className="cart__price-header">Price</span>
        <div className="cart__divider" />

        {cart.map((item) => (
          <div key={item.id} className="cart__item">
            <Link to={`/product/${item.id}`} className="cart__item-image-link">
              <img
                src={item.image}
                alt={item.title}
                className="cart__item-image"
              />
            </Link>
            <div className="cart__item-info">
              <Link to={`/product/${item.id}`} className="cart__item-title">
                {item.title}
              </Link>
              {item.isPrime && (
                <div className="cart__item-prime">
                  <span className="prime-badge">prime</span>
                  <span>FREE delivery</span>
                </div>
              )}
              <p className="cart__item-stock">In Stock</p>
              <div className="cart__item-actions">
                <select
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, Number(e.target.value))
                  }
                  className="cart__item-qty"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                    <option key={n} value={n}>
                      Qty: {n}
                    </option>
                  ))}
                </select>
                <span className="cart__item-separator">|</span>
                <button
                  className="cart__item-delete"
                  onClick={() => removeFromCart(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="cart__item-price">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}

        <div className="cart__divider" />
        <div className="cart__subtotal-bottom">
          Subtotal ({cartCount} {cartCount === 1 ? "item" : "items"}):{" "}
          <strong>${cartTotal.toFixed(2)}</strong>
        </div>
      </div>

      <div className="cart__sidebar">
        <div className="cart__subtotal-box">
          <p className="cart__subtotal">
            Subtotal ({cartCount} {cartCount === 1 ? "item" : "items"}):{" "}
            <strong>${cartTotal.toFixed(2)}</strong>
          </p>
          <label className="cart__gift-label">
            <input type="checkbox" /> This order contains a gift
          </label>
          <Link to="/checkout" className="cart__checkout-btn">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
