"use client";

export default function HomeButton() {
  return (
    <button
      style={{
        backgroundColor: "#007BFF",
        color: "white",
        border: "none",
        borderRadius: "5px",
        padding: "8px 12px",
        fontSize: "0.9rem",
        cursor: "pointer",
        textDecoration: "none",
      }}
      onClick={() => (window.location.href = "/")}
    >
      Home
    </button>
  );
}
