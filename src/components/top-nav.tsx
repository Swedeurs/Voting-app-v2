"use client";

import { useState } from "react";
import Link from "next/link";

export default function TopNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold hover:text-gray-300">
          Voting App
        </Link>
        <button
          className="block lg:hidden text-gray-300 hover:text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            )}
          </svg>
        </button>
        <ul className="hidden lg:flex space-x-6">
          <li>
            <Link
              href="/"
              className="px-4 py-2 rounded hover:bg-gray-700 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/elections/1"
              className="px-4 py-2 rounded hover:bg-gray-700 transition"
            >
              View Elections
            </Link>
          </li>
          <li>
            <Link
              href="/representatives"
              className="px-4 py-2 rounded hover:bg-gray-700 transition"
            >
              Manage Representatives
            </Link>
          </li>
          <li>
            <Link
              href="/concluded"
              className="px-4 py-2 rounded hover:bg-gray-700 transition"
            >
              View Concluded Elections
            </Link>
          </li>
        </ul>
      </div>
      {isMenuOpen && (
        <ul className="lg:hidden bg-gray-700 text-gray-200 space-y-2 px-4 py-4">
          <li>
            <Link
              href="/"
              className="block py-2 px-3 rounded hover:bg-gray-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/elections/1"
              className="block py-2 px-3 rounded hover:bg-gray-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              View Elections
            </Link>
          </li>
          <li>
            <Link
              href="/representatives"
              className="block py-2 px-3 rounded hover:bg-gray-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Manage Representatives
            </Link>
          </li>
          <li>
            <Link
              href="/concluded"
              className="block py-2 px-3 rounded hover:bg-gray-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              View Concluded Elections
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
