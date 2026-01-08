import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const isEmail = (value = "") =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const canSubmit = useMemo(() => {
    return isEmail(email) && password.trim().length >= 6 && !loading;
  }, [email, password, loading]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!isEmail(email)) {
      setError("Please enter a valid email.");
      return;
    }
    if (password.trim().length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);

    try {
      // TODO: connect backend auth
      console.log("LOGIN:", { email, password, remember });

      // UI demo
      alert("Login demo ✅ (connect backend next)");
    } catch (err) {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <form className="login-box" onSubmit={onSubmit}>
        <div className="login-title">
          <h2>Welcome back</h2>
          <p>Login to manage your cart and orders.</p>
        </div>

        {error ? <div className="login-error">{error}</div> : null}

        <label className="field">
          <span>Email</span>
          <input
            type="email"
            placeholder="you@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
        </label>

        <label className="field">
          <span>Password</span>
          <div className="pass-row">
            <input
              type={showPass ? "text" : "password"}
              placeholder="Minimum 6 characters"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <button
              type="button"
              className="pass-toggle"
              onClick={() => setShowPass((s) => !s)}
              aria-label={showPass ? "Hide password" : "Show password"}
            >
              {showPass ? "Hide" : "Show"}
            </button>
          </div>
        </label>

        <div className="login-row">
          <label className="remember">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            Remember me
          </label>

          <button
            type="button"
            className="forgot"
            onClick={() => alert("Demo only")}
          >
            Forgot password?
          </button>
        </div>

        <button className="login-btn" type="submit" disabled={!canSubmit}>
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="hint">
          Don’t have an account?{" "}
          <Link to="/register" className="link">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
