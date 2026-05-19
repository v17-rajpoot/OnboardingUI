import React, { useState } from "react";

export default function Input({
  id,
  name,
  type = "text",
  label,
  value,
  onChange,
  placeholder,
  error,
  autoComplete,
  canTogglePassword = false,
  isPasswordVisible = false,
  onTogglePassword,
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{ marginBottom: "0.95rem" }}>
      {label ? (
        <label
          htmlFor={id || name}
          style={{
            display: "block",
            marginBottom: "0.4rem",
            color: "#60a5fa",
            fontWeight: 500,
            fontSize: "0.92rem",
          }}
        >
          {label}
        </label>
      ) : null}

      <div style={{ position: "relative" }}>
        <input
          id={id || name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            width: "100%",
            padding: canTogglePassword ? "0.65rem 4.25rem 0.65rem 0.75rem" : "0.65rem 0.75rem",
            border: `1px solid ${error ? "#ef4444" : isFocused || isHovered ? "#60a5fa" : "#2563eb"}`,
            borderRadius: "8px",
            fontSize: "0.95rem",
            outline: "none",
            boxSizing: "border-box",
            backgroundColor: "#020617",
            color: "#93c5fd",
            boxShadow:
              isFocused || isHovered
                ? "0 0 0 3px rgba(59, 130, 246, 0.2)"
                : "0 0 0 1px rgba(37, 99, 235, 0.12)",
            transition: "all 0.2s ease",
          }}
        />

        {canTogglePassword ? (
          <button
            type="button"
            onClick={onTogglePassword}
            aria-label={isPasswordVisible ? "Hide password" : "Show password"}
            title={isPasswordVisible ? "Hide password" : "Show password"}
            style={{
              position: "absolute",
              right: "0.45rem",
              top: "50%",
              transform: "translateY(-50%)",
              border: "1px solid #2563eb",
              borderRadius: "6px",
              backgroundColor: "#0f172a",
              color: "#60a5fa",
              padding: "0.24rem 0.35rem",
              cursor: "pointer",
              display: "grid",
              placeItems: "center",
            }}
          >
            {isPasswordVisible ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
                <circle cx="12" cy="12" r="3" />
                <line x1="3" y1="3" x2="21" y2="21" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>
        ) : null}
      </div>

      {error ? (
        <p style={{ margin: "0.35rem 0 0", color: "#dc2626", fontSize: "0.82rem" }}>
          {error}
        </p>
      ) : null}
    </div>
  );
}
