import React, { useState } from "react";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import { validateLogin } from "../utils/validators";
import { login } from "../services/authService";

const containerStyle = {
  minHeight: "100vh",
  display: "grid",
  placeItems: "center",
  backgroundColor: "#000000",
  backgroundImage:
    "radial-gradient(circle at 20% 20%, rgba(30, 64, 175, 0.35), transparent 40%), radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.25), transparent 40%)",
  padding: "1rem",
};

const cardStyle = {
  width: "100%",
  maxWidth: "420px",
  backgroundColor: "#020617",
  border: "1px solid #1d4ed8",
  borderRadius: "14px",
  boxShadow: "0 12px 35px rgba(30, 64, 175, 0.35)",
  padding: "1.5rem",
  boxSizing: "border-box",
};

export default function LoginPage({ onLoginSuccess }) {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
    setFormError("");
    setSuccessMessage("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = validateLogin(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    try {
      setIsLoading(true);
      setFormError("");
      const response = await login(values);
      setSuccessMessage(`Welcome back, ${response.user.name}!`);
      if (onLoginSuccess) {
        onLoginSuccess(response.user);
      }
    } catch (error) {
      setFormError(error.message || "Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={containerStyle}>
      <div
        style={{
          ...cardStyle,
          transform: isCardHovered ? "translateY(-3px)" : "translateY(0)",
          boxShadow: isCardHovered
            ? "0 16px 45px rgba(37, 99, 235, 0.5)"
            : cardStyle.boxShadow,
          transition: "all 0.25s ease",
        }}
        onMouseEnter={() => setIsCardHovered(true)}
        onMouseLeave={() => setIsCardHovered(false)}
      >
        <h1 style={{ margin: "0 0 0.35rem", color: "#60a5fa" }}>Sign in</h1>
        <p style={{ margin: "0 0 1.2rem", color: "#93c5fd", fontSize: "0.93rem" }}>
          Use your account to access the dashboard.
        </p>

        <form onSubmit={handleSubmit} noValidate>
          <Input
            id="email"
            name="email"
            type="email"
            label="Email"
            value={values.email}
            onChange={handleChange}
            placeholder="name@company.com"
            autoComplete="email"
            error={errors.email}
          />

          <Input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            label="Password"
            value={values.password}
            onChange={handleChange}
            placeholder="Enter password"
            autoComplete="current-password"
            error={errors.password}
            canTogglePassword
            isPasswordVisible={showPassword}
            onTogglePassword={() => setShowPassword((prev) => !prev)}
          />

          {formError ? (
            <p style={{ margin: "0.25rem 0 0.95rem", color: "#f87171", fontSize: "0.86rem" }}>
              {formError}
            </p>
          ) : null}

          {successMessage ? (
            <p style={{ margin: "0.25rem 0 0.95rem", color: "#38bdf8", fontSize: "0.86rem" }}>
              {successMessage}
            </p>
          ) : null}

          <Button type="submit" fullWidth disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign in"}
          </Button>
        </form>

        <p style={{ margin: "1rem 0 0", color: "#60a5fa", fontSize: "0.82rem" }}>
          Demo credentials: admin@example.com / password123
        </p>
      </div>
    </div>
  );
}
