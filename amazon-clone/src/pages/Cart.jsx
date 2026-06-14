import { Link } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";
import { useCart } from "../context/useCart";
import "./Cart.css";

export default function Cart() {
  const { items, removeFromCart, updateQty, cartTotal, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="cart cart--empty">
        <div className="cart__empty-box">
          <h2>Your Amazon Clone Cart is empty</h2>
          <p>
            Check out today&apos;s deals and find something you love!
          </p>
          <Link to="/" className="cart__shop-btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="cart__main">
        <div className="cart__items-section">
          <div className="cart__header">
            <h1>Shopping Cart</h1>
            <button className="cart__deselect" onClick={clearCart}>
              Remove all items
            </button>
          </div>
          <span className="cart__price-label">Price</span>

          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <Link to={`/product/${item.id}`} className="cart-item__img-wrap">
                <img src={item.image} alt={item.title} />
              </Link>

              <div className="cart-item__details">
                <Link to={`/product/${item.id}`} className="cart-item__title">
                  {item.title}
                </Link>
                <span className="cart-item__stock">In Stock</span>
                {item.isPrime && (
                  <span className="cart-item__prime">
                    <span className="prime-badge">prime</span> FREE Delivery
                  </span>
                )}
                <div className="cart-item__actions">
                  <select
                    value={item.qty}
                    onChange={(e) =>
                      updateQty(item.id, Number(e.target.value))
                    }
                    className="cart-item__qty"
                  >
                    {Array.from({ length: 10 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        Qty: {i + 1}
                      </option>
                    ))}
                  </select>
                  <button
                    className="cart-item__delete"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <FiTrash2 size={14} /> Delete
                  </button>
                </div>
              </div>

              <div className="cart-item__price">
                ${(item.price * item.qty).toFixed(2)}
              </div>
            </div>
          ))}

          <div className="cart__subtotal-bottom">
            Subtotal ({items.reduce((s, i) => s + i.qty, 0)} items):{" "}
            <strong>${cartTotal.toFixed(2)}</strong>
          </div>
        </div>

        <div className="cart__sidebar">
          <div className="cart__checkout-box">
            <div className="cart__checkout-free">
              Your order qualifies for <strong>FREE Delivery</strong>
            </div>
            <div className="cart__checkout-subtotal">
              Subtotal ({items.reduce((s, i) => s + i.qty, 0)} items):{" "}
              <strong>${cartTotal.toFixed(2)}</strong>
            </div>
            <button className="cart__checkout-btn">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
