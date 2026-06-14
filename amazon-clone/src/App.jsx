import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app">
          <Header />
          <SubHeader />
          <main className="app__main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/login" element={<Login />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
          </main>
          <footer className="app__footer">
            <div className="footer__back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              Back to top
            </div>
            <div className="footer__content">
              <p>&copy; 2024 Amazon Clone. This is a demo project.</p>
            </div>
          </footer>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
