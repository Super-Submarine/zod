import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <button className="footer__back-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        Back to top
      </button>

      <div className="footer__links">
        <div className="footer__col">
          <h4>Get to Know Us</h4>
          <a href="#">Careers</a>
          <a href="#">Blog</a>
          <a href="#">About Amazon Clone</a>
          <a href="#">Investor Relations</a>
        </div>
        <div className="footer__col">
          <h4>Make Money with Us</h4>
          <a href="#">Sell products</a>
          <a href="#">Become an Affiliate</a>
          <a href="#">Advertise Your Products</a>
          <a href="#">Self-Publish</a>
        </div>
        <div className="footer__col">
          <h4>Amazon Payment Products</h4>
          <a href="#">Amazon Business Card</a>
          <a href="#">Shop with Points</a>
          <a href="#">Reload Your Balance</a>
          <a href="#">Currency Converter</a>
        </div>
        <div className="footer__col">
          <h4>Let Us Help You</h4>
          <a href="#">Your Account</a>
          <a href="#">Your Orders</a>
          <a href="#">Shipping Rates</a>
          <a href="#">Returns & Replacements</a>
          <a href="#">Help</a>
        </div>
      </div>

      <div className="footer__bottom">
        <span className="footer__brand">amazon<span>.clone</span></span>
        <p>&copy; 2024 Amazon Clone. This is a demo project, not affiliated with Amazon.</p>
      </div>
    </footer>
  );
}
