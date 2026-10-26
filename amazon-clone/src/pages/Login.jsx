import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/useCart";
import "./Login.css";

function Login() {
  const { user, setUser } = useCart();
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({
      name: formData.name || formData.email.split("@")[0],
      email: formData.email,
    });
    navigate("/");
  };

  const handleSignOut = () => {
    setUser(null);
    navigate("/");
  };

  if (user) {
    return (
      <div className="login">
        <div className="login__box">
          <h1>Welcome, {user.name}!</h1>
          <p className="login__email">{user.email}</p>
          <button className="login__submit-btn" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="login">
      <div className="login__box">
        <h1>{isSignUp ? "Create account" : "Sign in"}</h1>

        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <div className="login__form-group">
              <label>Your name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="login__input"
              />
            </div>
          )}

          <div className="login__form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="login__input"
            />
          </div>

          <div className="login__form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="login__input"
              minLength={6}
            />
          </div>

          <button type="submit" className="login__submit-btn">
            {isSignUp ? "Create your Amazon Clone account" : "Sign in"}
          </button>
        </form>

        <p className="login__terms">
          By continuing, you agree to Amazon Clone&apos;s Conditions of Use and
          Privacy Notice.
        </p>

        <div className="login__divider">
          <span>
            {isSignUp ? "Already have an account?" : "New to Amazon Clone?"}
          </span>
        </div>

        <button
          className="login__switch-btn"
          onClick={() => setIsSignUp(!isSignUp)}
        >
          {isSignUp
            ? "Sign in to your account"
            : "Create your Amazon Clone account"}
        </button>
      </div>
    </div>
  );
}

export default Login;
