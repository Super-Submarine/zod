import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiShoppingCart, FiSearch, FiMapPin, FiMenu } from "react-icons/fi";
import { useCart } from "../context/useCart";
import "./Navbar.css";

export default function Navbar() {
  const { cartCount } = useCart();
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/?search=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-text">amazon</span>
          <span className="navbar__logo-suffix">.clone</span>
        </Link>

        <div className="navbar__delivery">
          <FiMapPin size={16} />
          <div>
            <span className="navbar__delivery-label">Deliver to</span>
            <span className="navbar__delivery-location">United States</span>
          </div>
        </div>

        <form className="navbar__search" onSubmit={handleSearch}>
          <input
            type="text"
            className="navbar__search-input"
            placeholder="Search Amazon Clone"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="navbar__search-btn">
            <FiSearch size={20} />
          </button>
        </form>

        <div className="navbar__actions">
          <Link to="/" className="navbar__link">
            <span className="navbar__link-label">Hello, sign in</span>
            <span className="navbar__link-value">Account & Lists</span>
          </Link>
          <Link to="/" className="navbar__link">
            <span className="navbar__link-label">Returns</span>
            <span className="navbar__link-value">& Orders</span>
          </Link>
          <Link to="/cart" className="navbar__cart">
            <FiShoppingCart size={26} />
            <span className="navbar__cart-count">{cartCount}</span>
            <span className="navbar__cart-label">Cart</span>
          </Link>
        </div>

        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FiMenu size={24} />
        </button>
      </nav>

      {menuOpen && (
        <div className="navbar__mobile-menu">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/cart" onClick={() => setMenuOpen(false)}>
            Cart ({cartCount})
          </Link>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Account
          </Link>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Orders
          </Link>
        </div>
      )}

      <div className="sub-navbar">
        <button className="sub-navbar__btn" onClick={() => navigate("/")}>
          <FiMenu size={16} /> All
        </button>
        <Link to="/?category=Electronics" className="sub-navbar__link">Electronics</Link>
        <Link to="/?category=Kitchen" className="sub-navbar__link">Kitchen</Link>
        <Link to="/?category=Fashion" className="sub-navbar__link">Fashion</Link>
        <Link to="/?category=Beauty" className="sub-navbar__link">Beauty</Link>
        <Link to="/?category=Books" className="sub-navbar__link">Books</Link>
        <Link to="/?category=Home" className="sub-navbar__link">Home</Link>
        <span className="sub-navbar__link sub-navbar__deal">Today&apos;s Deals</span>
        <span className="sub-navbar__link">Customer Service</span>
      </div>
    </>
  );
}
