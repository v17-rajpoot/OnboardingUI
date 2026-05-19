import React, { useState } from "react";

const pageStyle = {
  minHeight: "100vh",
  backgroundColor: "#000000",
  backgroundImage:
    "radial-gradient(circle at 15% 20%, rgba(29, 78, 216, 0.35), transparent 38%), radial-gradient(circle at 85% 70%, rgba(56, 189, 248, 0.2), transparent 40%)",
  color: "#93c5fd",
  padding: "2rem 1rem",
  boxSizing: "border-box",
};

const wrapperStyle = {
  width: "100%",
  maxWidth: "980px",
  margin: "0 auto",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
  gap: "1rem",
  marginTop: "1.2rem",
};

const baseSquareStyle = {
  minHeight: "170px",
  borderRadius: "16px",
  border: "1px solid #1d4ed8",
  background:
    "linear-gradient(145deg, rgba(2,6,23,0.96), rgba(2,6,23,0.82), rgba(30,64,175,0.25))",
  boxShadow: "0 10px 28px rgba(30, 64, 175, 0.35)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  color: "#60a5fa",
  fontSize: "1.05rem",
  fontWeight: 600,
  letterSpacing: "0.2px",
  transition: "all 0.25s ease",
  cursor: "pointer",
  padding: "1rem",
  boxSizing: "border-box",
};

const cards = [
  { id: 1, title: "Candidate Entry Form" },
  { id: 2, title: "Search/Update" },
  { id: 3, title: "Received Back from WFM" },
  { id: 4, title: "Testing" },
];

export default function DashboardPage() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div style={pageStyle}>
      <div style={wrapperStyle}>
        <h1 style={{ margin: 0, color: "#60a5fa" }}>Dashboard</h1>
        <br />
        <br />
        {/* <p style={{ margin: "0.45rem 0 0", color: "#93c5fd" }}>
          Choose a tile to continue. Two tiles are intentionally blank for future fields.
        </p> */}

        <div style={gridStyle}>
          {cards.map((card) => {
            const isHovered = hoveredCard === card.id;

            return (
              <div
                key={card.id}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  ...baseSquareStyle,
                  transform: isHovered ? "translateY(-4px) scale(1.01)" : "translateY(0)",
                  boxShadow: isHovered
                    ? "0 15px 36px rgba(37, 99, 235, 0.52)"
                    : baseSquareStyle.boxShadow,
                  borderColor: isHovered ? "#60a5fa" : "#1d4ed8",
                }}
              >
                {card.title || "\u00a0"}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
