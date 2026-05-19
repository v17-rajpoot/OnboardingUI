import React, { useState } from "react";

const baseStyle = {
  border: "none",
  borderRadius: "8px",
  padding: "0.7rem 1rem",
  fontSize: "0.95rem",
  fontWeight: 600,
  cursor: "pointer",
  transition: "opacity 0.2s ease",
};

export default function Button({
  type = "button",
  children,
  onClick,
  disabled = false,
  fullWidth = false,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        ...baseStyle,
        width: fullWidth ? "100%" : "auto",
        backgroundColor: disabled ? "#334155" : isHovered ? "#60a5fa" : "#3b82f6",
        color: "#020617",
        boxShadow: isHovered
          ? "0 0 20px rgba(96, 165, 250, 0.5)"
          : "0 0 10px rgba(59, 130, 246, 0.35)",
        transform: isHovered && !disabled ? "translateY(-1px)" : "translateY(0)",
        transition: "all 0.22s ease",
      }}
    >
      {children}
    </button>
  );
}
