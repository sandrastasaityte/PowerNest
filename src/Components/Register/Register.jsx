import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

const isEmail = (value = "") =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm: "",
    agree: true,
  });

  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const canSubmit = useMemo(() => {
    const ok =
      form.firstName.trim() &&
      form.lastName.trim() &&
      isEmail(form.email) &&
      form.password.trim().length >= 6 &&
      form.password === form.confirm &&
      form.agree &&
      !loading;
    return Boolean(ok);
  }, [form, loading]);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
    if (error) setError("");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.firstName.trim()) return setError("First name is required.");
    if (!form.lastName.trim()) return setError("Last name is required.");
    if (!isEmail(form.email)) return setError("Please enter a valid email.");
    if (form.password.trim().length < 6)
      return setError("Password must be at least 6 characters.");
    if (form.password !== form.confirm)
      return setError("Passwords do not match.");
    if (!form.agree) return setError("Please accept the terms to continue.");

    setLoading(true);

    try {
      // TODO: connect backend auth
      console.log("REGISTER:", form);
      alert("Registered ✅ (demo)");

      // optional redirect
      navigate("/login", { replace: true });
    } catch (err) {
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <form className="register-box" onSubmit={onSubmit}>
        <div className="register-title">
          <h2>Create account</h2>
          <p>Register to save your cart and track orders (demo).</p>
        </div>

        {error ? <div className="register-error">{error}</div> : null}

        <div className="grid-2">
          <label className="field">
            <span>First name</span>
            <input
              name="firstName"
              value={form.firstName}
              onChange={onChange}
              placeholder="Sandra"
              autoComplete="given-name"
              required
            />
          </label>

          <label className="field">
            <span>Last name</span>
            <input
              name="lastName"
              value={form.lastName}
              onChange={onChange}
              placeholder="Stasaityte"
              autoComplete="family-name"
              required
            />
          </label>
        </div>

        <label className="field">
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            placeholder="you@example.com"
            autoComplete="email"
            required
          />
        </label>

        <label className="field">
          <span>Password</span>
          <div className="pass-row">
            <input
              type={showPass ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={onChange}
              placeholder="Minimum 6 characters"
              autoComplete="new-password"
              required
            />
            <button
              type="button"
              className="pass-toggle"
              onClick={() => setShowPass((s) => !s)}
            >
              {showPass ? "Hide" : "Show"}
            </button>
          </div>
        </label>

        <label className="field">
          <span>Confirm password</span>
          <input
            type={showPass ? "text" : "password"}
            name="confirm"
            value={form.confirm}
            onChange={onChange}
            placeholder="Repeat password"
            autoComplete="new-password"
            required
          />
        </label>

        <label className="agree">
          <input type="checkbox" name="agree" checked={form.agree} onChange={onChange} />
          I agree to the Terms (demo)
        </label>

        <button className="register-btn" type="submit" disabled={!canSubmit}>
          {loading ? "Creating..." : "Create account"}
        </button>

        <p className="hint">
          Already have an account?{" "}
          <Link to="/login" className="link">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
