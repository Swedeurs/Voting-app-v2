"use client";

import { useState } from "react";
import { addRepresentativeAction } from "../actions";

export function AddRepresentative() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addRepresentativeAction({
        name, email,
        electionId: 0
      });
      alert("Representative added successfully!");
      setName("");
      setEmail("");
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error adding representative:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition"
      >
        Add Representative
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              ✕
            </button>
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                Add Representative
              </h2>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter representative name"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter representative email"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  required
                />
              </div>
              <button
                type="submit"
                className={`w-full px-4 py-2 text-sm font-medium text-white rounded-md shadow-sm transition duration-150 ${
                  isSubmitting
                    ? "bg-green-400 cursor-not-allowed opacity-50"
                    : "bg-green-500 hover:bg-green-600"
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Adding..." : "Add Representative"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
