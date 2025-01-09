"use client";

export default function HomeButton() {
  return (
    <button
      onClick={() => (window.location.href = "/")}
      className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition"
    >
      Home
    </button>
  );
}
